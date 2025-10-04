// @ts-nocheck
'use server';
/**
 * @fileOverview A flow that identifies plot inconsistencies in a given text.
 *
 * - identifyPlotInconsistencies - A function that identifies plot inconsistencies in a given text.
 * - IdentifyPlotInconsistenciesInput - The input type for the identifyPlotInconsistencies function.
 * - IdentifyPlotInconsistenciesOutput - The return type for the identifyPlotInconsistencies function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const IdentifyPlotInconsistenciesInputSchema = z.object({
  text: z.string().describe('The text to analyze for plot inconsistencies.'),
});
export type IdentifyPlotInconsistenciesInput = z.infer<typeof IdentifyPlotInconsistenciesInputSchema>;

const IdentifyPlotInconsistenciesOutputSchema = z.object({
  inconsistencies: z
    .array(z.string())
    .describe('A list of plot inconsistencies identified in the text.'),
});
export type IdentifyPlotInconsistenciesOutput = z.infer<typeof IdentifyPlotInconsistenciesOutputSchema>;

export async function identifyPlotInconsistencies(
  input: IdentifyPlotInconsistenciesInput
): Promise<IdentifyPlotInconsistenciesOutput> {
  return identifyPlotInconsistenciesFlow(input);
}

const prompt = ai.definePrompt({
  name: 'identifyPlotInconsistenciesPrompt',
  input: {schema: IdentifyPlotInconsistenciesInputSchema},
  output: {schema: IdentifyPlotInconsistenciesOutputSchema},
  prompt: `You are a professional editor. Your task is to identify plot holes and inconsistencies in the provided text.\n\nText: {{{text}}}\n\nList any inconsistencies you find. If there are no inconsistencies, return an empty list.`,
});

const identifyPlotInconsistenciesFlow = ai.defineFlow(
  {
    name: 'identifyPlotInconsistenciesFlow',
    inputSchema: IdentifyPlotInconsistenciesInputSchema,
    outputSchema: IdentifyPlotInconsistenciesOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
