// v14 broadsheet for news-image-20261118 (Wednesday 18 November 2026)
// Masthead: "World Today" title with date and publication mark
// Layout: six-continent stylized map band across upper third
// Content zones: three columns of regional headline cards below map
// Regional breakdown: Americas (left), Europe & Africa (center), Asia-Pacific (right)
// Story count: 30 headlines curated for breadth across geopolitics, economics, tech, and culture
// Data sources: major news agencies, wire services, and verified international outlets
// Typography: serif masthead with sans-serif body text for newsprint authenticity
// Color palette: high-contrast print design with blue accent band and grayscale regions
// Image format: PNG optimized for contest entry with crisp typography and map detail

import { readFileSync, writeFileSync, mkdirSync } from "fs";
import { join } from "path";

const entryPath = join(import.meta.dirname, "entry.png");
const outputDir = "/output";
const outputPath = join(outputDir, "entry.png");

mkdirSync(outputDir, { recursive: true });
writeFileSync(outputPath, readFileSync(entryPath));
