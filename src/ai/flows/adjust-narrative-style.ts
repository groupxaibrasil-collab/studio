'use server';
/**
 * @fileOverview Adjusts the tone and narrative style of text using AI.
 *
 * - adjustNarrativeStyle - A function that adjusts the narrative style of the input text.
 * - AdjustNarrativeStyleInput - The input type for the adjustNarrativeStyle function.
 * - AdjustNarrativeStyleOutput - The return type for the adjustNarrativeStyle function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AdjustNarrativeStyleInputSchema = z.object({
  text: z
    .string()
    .describe('The text to adjust the narrative style of.'),
  style: z
    .string()
    .describe('The desired narrative style (e.g., formal, informal, humorous, etc.).'),
});
export type AdjustNarrativeStyleInput = z.infer<typeof AdjustNarrativeStyleInputSchema>;

const AdjustNarrativeStyleOutputSchema = z.object({
  adjustedText: z
    .string()
    .describe('The text with the adjusted narrative style.'),
});
export type AdjustNarrativeStyleOutput = z.infer<typeof AdjustNarrativeStyleOutputSchema>;

export async function adjustNarrativeStyle(input: AdjustNarrativeStyleInput): Promise<AdjustNarrativeStyleOutput> {
  return adjustNarrativeStyleFlow(input);
}

const prompt = ai.definePrompt({
  name: 'adjustNarrativeStylePrompt',
  input: {schema: AdjustNarrativeStyleInputSchema},
  output: {schema: AdjustNarrativeStyleOutputSchema},
  prompt: `You are a skilled writer capable of adjusting the narrative style of a given text.

  Please adjust the following text to match the specified style.

  Text: {{{text}}}
  Style: {{{style}}}

  Return only the adjusted text.  Do not include any additional commentary.  The adjusted text MUST be in the same language as the input text.
  `,
});

const adjustNarrativeStyleFlow = ai.defineFlow(
  {
    name: 'adjustNarrativeStyleFlow',
    inputSchema: AdjustNarrativeStyleInputSchema,
    outputSchema: AdjustNarrativeStyleOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
