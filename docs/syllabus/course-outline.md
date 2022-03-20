---
sidebar_position: 6
title: Course Outline (subject to change)
sidebar_label: Course Outline
---

I'm currently in the process of updating the course, adding more modern and relevant topics. The following may not reflect the changes implemented in the class yet.

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

## Course Modules
### 1. Source Version Control (git)
   * Development Environment Setup
   * Source Version Control Using Git/Github
   * **Assignment:** Basics of Python
   * **Quiz 1:** Syllabus
   * **Quiz 2:** Source Version Control

### 2. 

### 3.

### 4.

### 5.

### 6.

### 7.

### 8.

### 9.

### 10.

### 11.

### 12.

### 13.
