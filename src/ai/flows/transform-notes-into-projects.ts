'use server';

/**
 * @fileOverview Transforms scattered notes into structured projects using AI.
 *
 * - transformNotesIntoProject - A function that transforms notes into a structured project.
 * - TransformNotesIntoProjectInput - The input type for the transformNotesIntoProject function.
 * - TransformNotesIntoProjectOutput - The return type for the transformNotesIntoProject function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const TransformNotesIntoProjectInputSchema = z.object({
  notes: z.string().describe('Scattered notes to be transformed into a structured project.'),
});
export type TransformNotesIntoProjectInput = z.infer<typeof TransformNotesIntoProjectInputSchema>;

const TransformNotesIntoProjectOutputSchema = z.object({
  projectOutline: z.string().describe('A structured project outline generated from the notes.'),
});
export type TransformNotesIntoProjectOutput = z.infer<typeof TransformNotesIntoProjectOutputSchema>;

export async function transformNotesIntoProject(
  input: TransformNotesIntoProjectInput
): Promise<TransformNotesIntoProjectOutput> {
  return transformNotesIntoProjectFlow(input);
}

const prompt = ai.definePrompt({
  name: 'transformNotesIntoProjectPrompt',
  input: {schema: TransformNotesIntoProjectInputSchema},
  output: {schema: TransformNotesIntoProjectOutputSchema},
  prompt: `You are an AI assistant that specializes in organizing scattered notes into structured project outlines for writers.

  Given the following notes, create a detailed and well-organized project outline that the user can use to develop a complete story.

  Notes: {{{notes}}}

  Outline:`,
});

const transformNotesIntoProjectFlow = ai.defineFlow(
  {
    name: 'transformNotesIntoProjectFlow',
    inputSchema: TransformNotesIntoProjectInputSchema,
    outputSchema: TransformNotesIntoProjectOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
