import { config } from 'dotenv';
config();

import '@/ai/flows/generate-book-cover.ts';
import '@/ai/flows/generate-chapter-draft.ts';
import '@/ai/flows/adjust-narrative-style.ts';
import '@/ai/flows/transform-notes-into-projects.ts';
import '@/ai/flows/identify-plot-inconsistencies.ts';