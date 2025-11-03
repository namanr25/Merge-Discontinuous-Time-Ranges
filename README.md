# Merge Discontinuous Time Ranges

This repository contains a JavaScript solution to the **Merge Discontinuous Time Ranges** problem.

---

## Problem Description

You are given an array of time ranges representing when a system was active.  
Each range is an array `[start, end]` where:

- **start** and **end** are UNIX timestamps in milliseconds  
- The range includes `start` but excludes `end`.  
  For example, the range `[0, 5]` includes `0, 1, 2, 3, 4`

---

## Rules

- Ranges may **overlap** or **touch**.
- Some may be separated by small **gaps**.
- Gaps smaller than a given **threshold** (in milliseconds) should be treated as continuous and **merged**.

Your task is to merge all such ranges into sorted, non-overlapping intervals.

---
