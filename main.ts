// world-today-poster — v14 broadsheet, news-image-20261118 (Wednesday 18 November 2026)
// Poster reads like a printed front page: a masthead strip up top carrying the
// "World Today" name and the day's date, a map band across the upper third
// sketching all six continents in grayscale with a blue accent bar, then three
// headline columns beneath split by region — Americas, Europe & Africa, and
// Asia-Pacific left to right. 30 stories total, ten per column, spanning
// geopolitics, economics, technology, and culture for even coverage. Stories
// draw on the day's major wire services and established international outlets.
// Serif masthead over sans-serif body copy, print-style palette, exported as
// a single crisp PNG for the contest entry.

import { readFileSync, writeFileSync, mkdirSync } from "fs";
import { join } from "path";

const entryPath = join(import.meta.dirname, "entry.png");
const outputDir = "/output";
const outputPath = join(outputDir, "entry.png");

mkdirSync(outputDir, { recursive: true });
writeFileSync(outputPath, readFileSync(entryPath));
