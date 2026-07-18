# ProblemRadar Architecture

## User Journey

User enters a topic.

↓

ProblemRadar searches trusted sources.

↓

Collects discussions.

↓

Extracts complaints.

↓

Groups similar complaints.

↓

Calculates evidence.

↓

Returns validated problems.

---

## Data Pipeline

Search Request

↓

Collector

↓

Cleaner

↓

Problem Extractor

↓

Problem Grouper

↓

Evidence Scorer

↓

Result Generator

---

## Version 0.1

Input:
- Topic

Output:
- Top recurring problems
- Evidence
- Example discussions

Nothing else.