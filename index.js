import { mergeTimeRanges } from './MergeDiscontinuousTimeRanges.js';

// Example test case
// for custom test case checking
const ranges = [
  [0, 10],
  [12, 15],
  [17, 25],
  [27, 35]
];
const threshold = 3;

console.log('Merged ranges:', mergeTimeRanges(ranges, threshold));
