/**
 * Merges discontinuous time ranges within a given threshold.
 * 
 * @param {Array<[number, number]>} ranges - Array of [start, end) ranges (unsorted, may overlap)
 * @param {number} threshold - Max gap (in ms) allowed between ranges to still be merged
 * @returns {Array<[number, number]>} - Sorted, non-overlapping merged ranges
 */


// Here is the solution for the the given problem statement

export const mergeTimeRanges = (ranges, threshold) => {

  if(!ranges || ranges.length === 0)    return [];

  ranges.sort((a, b) => a[0] - b[0]);  // first sort the start time and end time

  const merged = []; 
  let [currentStart, currentEnd] = ranges[0];

  for(let i=1; i<ranges.length; i++){

    const [nextStart, nextEnd] = ranges[i];
    
    // If overlapping happens within the threshold value
    if(nextStart <= currentEnd + threshold){
        currentEnd = Math.max(currentEnd, nextEnd);
    } 
    // If overlapping does not happens
    else{
        merged.push([currentStart, currentEnd]);
        [currentStart, currentEnd] = [nextStart, nextEnd];
    }
  }

  merged.push([currentStart, currentEnd]);

  return merged;
};
