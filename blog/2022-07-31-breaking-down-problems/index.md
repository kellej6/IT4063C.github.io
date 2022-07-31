---
slug: break-down-problems
title: Breaking Down Problems into steps
draft: true
authors: [ygilany]
tags: [Problem Solving]
---
Before even touching the keyboard, grab a pen an paper and plan out the program you're working on and the steps you need to reach the desired outcome. (Fine! ..  you can use the keyboard, but a pen a paper will allow you to doodle freely).

When starting to code, you can start with typing out comments of the steps that your program needs to follow. Make sure you know what you need to know for each of those steps. If you don't. That's the part you need to lookup. While your steps may change (sometimes completely) they will make sure to keep you on track.

## Example
You have an assignment that requires you to query data from a MS SQL Database, and visualize the results in a couple of charts.

Rather, then Googling "How to query data from SQL and Visualize it using python", you can break down the assignment requirements into something that looks like this: (at any step you get stuck, you can search for)

A potential break down for this assignment might look something like this:
1. Clone down the starting files of this project to my computer
   1. Most assignments in this class would require you to ["clone"](course-notes/dev-env/git#2-cloning-a-repository-from-github) down a GitHub repository that contains some support files and configurations.
2. Do I have all the project requirements and dependencies installed?
   1. The assignment instructions and the `README.md` files would contain mention any required setup steps.
3. Do I have a database running? Local Database, Hosted Database
   1. Can I connect to this database? 
   2. Do I need an extra application?
   3. Do I need to be connected to VPN?
4. Connect to the database from python script?
   1. Do I have the correct libraries installed
   2. How to connect?
5. Run a sample query
   1. Do I get the expected results
6. How to store the query results in an appropriate data structure?
   1. Do I need a regular python array? Pandas DataFrame?
   2. How do I do any of that?
7. How to Visualize the data
   1. What type of visualization would communicate the information more clearly
   2. What library do I want to use

You get an error, you look at the error stack first, try to understand what it's trying to tell you. Still can't figure it out, then google that error message.