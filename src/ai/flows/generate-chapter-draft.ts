'use server';

/**
 * @fileOverview Generates a complete draft of a chapter, maintaining the author's writing style.
 *
 * - generateChapterDraft - A function that handles the chapter draft generation process.
 * - GenerateChapterDraftInput - The input type for the generateChapterDraft function.
 * - GenerateChapterDraftOutput - The return type for the generateChapterDraft function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateChapterDraftInputSchema = z.object({
  authorStyle: z
    .string()
    .describe('The writing style of the author that the chapter should adhere to.'),
  chapterOutline: z
    .string()
    .describe('The outline of the chapter to be generated.'),
  previousChapters: z
    .string()
    .optional()
    .describe('The previous chapters of the book, to maintain consistency.'),
});
export type GenerateChapterDraftInput = z.infer<typeof GenerateChapterDraftInputSchema>;

const GenerateChapterDraftOutputSchema = z.object({
  chapterDraft: z.string().describe('The generated chapter draft.'),
});
export type GenerateChapterDraftOutput = z.infer<typeof GenerateChapterDraftOutputSchema>;

export async function generateChapterDraft(
  input: GenerateChapterDraftInput
): Promise<GenerateChapterDraftOutput> {
  return generateChapterDraftFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateChapterDraftPrompt',
  input: {schema: GenerateChapterDraftInputSchema},
  output: {schema: GenerateChapterDraftOutputSchema},
  prompt: `You are an AI assistant helping authors to write their books.

You will generate a chapter draft based on the provided chapter outline, while maintaining the author's writing style.

Author's Writing Style: {{{authorStyle}}}
Chapter Outline: {{{chapterOutline}}}
Previous Chapters: {{{previousChapters}}}

Chapter Draft:`,
});

const generateChapterDraftFlow = ai.defineFlow(
  {
    name: 'generateChapterDraftFlow',
    inputSchema: GenerateChapterDraftInputSchema,
    outputSchema: GenerateChapterDraftOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
