---
sidebar_position: 1
title: Instructor Section
id: instructor
---
## Syllabus
- Quizzes after videos
- Create a learning log:
  - what kind of questions can data help you answer. Pick a project early on in the semester, throughout the semester you'll be answering new questions based on the topic you selected for yourself. 
  - a single GitHub Repo for that, with multiple entries
	- 1 college credit represents approximately 1 hour spent in a classroom and 2 hours spent on homework each week. As such, you're expected to put in around 9 hours in this class between reviewing the videos, readings, and working on assignments.
	- release the first 3 modules
	



http://www.socr.umich.edu/people/dinov/2017/Spring/DSPA_HS650/DSPA_Topics.html

## Notes:
- Learn how to record a nice course intro video like this one.
  - https://www.coursera.org/learn/data-preparation/lecture/bMOPU/introduction-to-data-exploration
- As a data analyst, you need to be an expert at structuring, extracting, and making sure the data you are working with is reliable.
- You will soon discover that when data is extracted, it isn’t perfect. It might be biased instead of credible, or dirty instead of clean.
- Preparing data for exploration
- Data analysis process steps: Ask, Prepare, Process, Analyze, Share and Act.
- When cleaning data Analyze Data for Bias and Credibility
- What does it mean to have clean data
- "Data Data Data, can't make bricks without clay" - Sherlock Holmes

```mermaid
flowchart TD
   %% STYLES %%

   %% NODES %%
   A[Start]
   env(Setting up the Environment)
   svc(Source Version Control - git)
   in-python(Installing Python)
   python(Basics of Python)
   data-sources[(Working with Data Sources)]
      style data-sources fill: #f95
   F(Files)
   G(Relational Databases)
   H(non-Relational Databases)
   I(REST API)
   correlate{{Correlating Data}}
   K(Apply Basics of Statistics)
   viz(Visualizing Data)
      style viz fill:#f9f,stroke:#333,stroke-width:4px
   graphtypes[Graph Types]
   N[Pie]
   O[Bar]
   P[Chart 3]
   story(Telling the Story of Data)

   %% SUB GRAPHS %%
   subgraph ENV [Environment Setup]
     direction LR
     svc --> in-python --> python
   end

   subgraph DATA-SOURCES [Data Sources]
     direction LR
     F --> G --> H --> I
   end

   subgraph CHARTS [Chart Types]
     direction LR
     N --> O --> P
   end

   %% DIAGRAM %%
   A --> env
   env --> ENV
   ENV --> data-sources
   data-sources --> DATA-SOURCES 
   DATA-SOURCES --> correlate
   correlate --> K
   K --> viz
   viz --> graphtypes
   graphtypes --> CHARTS
   CHARTS --> story

```

```mermaid
flowchart TB
  START --> A[1. Capture] --> B[2. Process] --> C[3. Store] --> D[4. Analyze] --> E[5. Use] --> END
      style START fill: #f95
      style END fill: #f95

  A --> CAPTURE
  subgraph CAPTURE [Data Ingestion]
    direction TB
    A1[Cloud pub/sub]
    A2[Data Transfer Service]
    A3[Storage Transfer Service]
    A1 --> A2 --> A3
  end
  B --> PROCESS
  subgraph PROCESS[Streaming and Data Pipelines]
    direction TB
    B1[Cloud Data flow - Stream and Batch Processing]
    B2[Cloud Data Proc - Hadoop + Spark]
    B3[Data Prep]
    B1 --> B2 --> B3
  end
  C --> STORE
  subgraph STORE [Data Lake and Data warehousing]
    direction TB
    C1[Cloud Storage]
    C2[Big Query Storage]
    C1 --> C2
  end
  D --> ANALYZE
  subgraph ANALYZE [Data Warehousing]
    direction TB
    D1[Big Query]
    D2[Data Visualization]
    D1 --> D2
  end
  E --> USE
  subgraph USE [Advanced Analytics]
    direction TB
    E1[TensorFlow]
  end

```
