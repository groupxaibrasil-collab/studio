'use server';

/**
 * @fileOverview Generates book covers with automatic calculation of spine and ISBN using AI.
 *
 * - generateBookCover - A function that handles the book cover generation process.
 * - GenerateBookCoverInput - The input type for the generateBookCover function.
 * - GenerateBookCoverOutput - The return type for the generateBookCover function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateBookCoverInputSchema = z.object({
  title: z.string().describe('The title of the book.'),
  author: z.string().describe('The author of the book.'),
  genre: z.string().describe('The genre of the book.'),
  description: z.string().describe('A brief description of the book.'),
});
export type GenerateBookCoverInput = z.infer<typeof GenerateBookCoverInputSchema>;

const GenerateBookCoverOutputSchema = z.object({
  coverDataUri: z
    .string()
    .describe(
      'The generated book cover as a data URI that must include a MIME type and use Base64 encoding. Expected format: \'data:<mimetype>;base64,<encoded_data>\'.' // data URI
    ),
  spineWidth: z.number().describe('The calculated spine width of the book in mm.'),
  isbn: z.string().describe('The generated ISBN for the book.'),
});
export type GenerateBookCoverOutput = z.infer<typeof GenerateBookCoverOutputSchema>;

export async function generateBookCover(input: GenerateBookCoverInput): Promise<GenerateBookCoverOutput> {
  return generateBookCoverFlow(input);
}

const generateIsbnTool = ai.defineTool({
  name: 'generateIsbn',
  description: 'Generates a valid ISBN-13 for a book.',
  inputSchema: z.object({
    title: z.string().describe('The title of the book.'),
    author: z.string().describe('The author of the book.'),
  }),
  outputSchema: z.string().describe('A valid ISBN-13.'),
}, async (input) => {
  // In a real application, you would call an external service to generate the ISBN.
  // For this example, we'll just return a dummy ISBN.
  return `978-3-16-148410-${Math.floor(Math.random() * 10)}`;
});

const calculateSpineWidthTool = ai.defineTool({
  name: 'calculateSpineWidth',
  description: 'Calculates the spine width of a book in millimeters, based on the page count.',
  inputSchema: z.object({
    pageCount: z.number().describe('The number of pages in the book.'),
  }),
  outputSchema: z.number().describe('The spine width of the book in millimeters.'),
}, async (input) => {
  // In a real application, you would use a formula to calculate the spine width.
  // For this example, we'll just return a dummy value.
  return input.pageCount * 0.06;
});


const prompt = ai.definePrompt({
  name: 'generateBookCoverPrompt',
  input: {schema: GenerateBookCoverInputSchema},
  output: {schema: GenerateBookCoverOutputSchema},
  tools: [generateIsbnTool, calculateSpineWidthTool],
  prompt: `You are a book cover designer. Generate a book cover for a book with the following information:

Title: {{{title}}}
Author: {{{author}}}
Genre: {{{genre}}}
Description: {{{description}}}

Also, generate an ISBN for the book using the generateIsbn tool, and calculate the spine width using the calculateSpineWidth tool (assume the book has 300 pages). Return the cover as a data URI. Return the spine width in mm.

Output:
${GenerateBookCoverOutputSchema.description}`,
});

const generateBookCoverFlow = ai.defineFlow(
  {
    name: 'generateBookCoverFlow',
    inputSchema: GenerateBookCoverInputSchema,
    outputSchema: GenerateBookCoverOutputSchema,
  },
  async input => {
    const isbn = await generateIsbnTool({
      title: input.title,
      author: input.author
    });
    const spineWidth = await calculateSpineWidthTool({
      pageCount: 300
    });

    const { media } = await ai.generate({
      model: 'googleai/imagen-4.0-fast-generate-001',
      prompt: `Generate a book cover for a book titled "${input.title}" by ${input.author}. The genre is ${input.genre}. ${input.description}. Include the title and author on the cover.`
    });

    return {
      coverDataUri: media?.url ?? '',
      spineWidth: spineWidth,
      isbn: isbn,
    };
  }
);
