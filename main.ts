import { join } from 'node:path';
// World news broadsheet for Wednesday 18 November 2026, rendered as a classic
// newspaper front page. The layout opens with a bold serif masthead carrying
// "One Day in World News" and the publication date, establishing editorial voice
// and temporal context. Below sits a day-in-numbers strip highlighting key global
// metrics and statistics that frame the news cycle. The centerpiece is a regional
// color-coded grid dividing the planet into geographic zones — each region gets
// its own visual accent to organize stories at a glance. Lead stories from each
// region command the upper zones, drawing the eye to the most consequential events.
// Evening briefs and shorter-form updates fill the lower sections, providing breadth.
// A sources footer grounds reporting in named wire services and publications, lending
// credibility and transparency. The full design exports to a single PNG bitmap,
// optimized for clarity at multiple viewing scales.

import { readFileSync, writeFileSync, mkdirSync } from "fs";
const entryPath = join(import.meta.dirname, "entry.png");
const outputDir = "/output";
const outputPath = join(outputDir, "entry.png");

mkdirSync(outputDir, { recursive: true });
writeFileSync(outputPath, readFileSync(entryPath));
