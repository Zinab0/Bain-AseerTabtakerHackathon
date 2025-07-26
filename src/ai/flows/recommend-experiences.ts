
'use server';

/**
 * @fileOverview An AI agent that recommends cultural experiences to tourists.
 *
 * - recommendExperiences - A function that recommends cultural experiences based on user interests and travel dates.
 * - RecommendExperiencesInput - The input type for the recommendExperiences function.
 * - RecommendExperiencesOutput - The return type for the recommendExperiences function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';
import { experiences } from '@/lib/data';

const RecommendExperiencesInputSchema = z.object({
  interests: z
    .string()
    .describe('A comma-separated list of the tourist\'s interests.'),
  travelDates: z
    .string()
    .describe(
      'The travel dates of the tourist, in ISO format (YYYY-MM-DD), may be a range.'
    ),
});
export type RecommendExperiencesInput = z.infer<typeof RecommendExperiencesInputSchema>;

const RecommendExperiencesOutputSchema = z.object({
  recommendations: z.array(
    z.object({
      experienceName: z.string().describe('The name of the experience.'),
      hostName: z.string().describe('The name of the host.'),
      description: z.string().describe('A short description of the experience.'),
      availability: z.string().describe('The availability of the experience.'),
    })
  ).describe('A list of recommended cultural experiences.'),
});
export type RecommendExperiencesOutput = z.infer<typeof RecommendExperiencesOutputSchema>;

export async function recommendExperiences(
  input: RecommendExperiencesInput
): Promise<RecommendExperiencesOutput> {
  return recommendExperiencesFlow(input);
}

const prompt = ai.definePrompt({
  name: 'recommendExperiencesPrompt',
  input: {schema: RecommendExperiencesInputSchema},
  output: {schema: RecommendExperiencesOutputSchema},
  prompt: `You are a travel expert specializing in Asir cultural experiences.

  Based on the tourist's interests and travel dates, recommend a list of cultural experiences from the list provided below.

  Interests: {{{interests}}}
  Travel Dates: {{{travelDates}}}

  Available Experiences:
  {{#each experiences}}
  - Name: {{this.name}}
    - Host: {{this.host.name}}
    - Description: {{this.description}}
    - Availability: {{this.availability}}
    - Category: {{this.category}}
  {{/each}}


  Format your response as a JSON object with a "recommendations" field containing an array of objects, where each object has the following fields:
  - experienceName: The name of the experience.
  - hostName: The name of the host.
  - description: A short description of the experience.
  - availability: The availability of the experience, which should fit within the provided travel dates.
  `,
});

const recommendExperiencesFlow = ai.defineFlow(
  {
    name: 'recommendExperiencesFlow',
    inputSchema: RecommendExperiencesInputSchema,
    outputSchema: RecommendExperiencesOutputSchema,
  },
  async input => {
    // For testing: always return the Al-Qatt Al-Asiri Art Workshop
    const artWorkshop = experiences.find(exp => exp.id === 'exp-6');
    if (artWorkshop) {
        return {
            recommendations: [
                {
                    experienceName: artWorkshop.name,
                    hostName: artWorkshop.host.name,
                    description: artWorkshop.description,
                    availability: artWorkshop.availability,
                }
            ]
        }
    }

    // Fallback to the original implementation if the workshop is not found
    const {output} = await prompt({...input, experiences});
    return output!;
  }
);
