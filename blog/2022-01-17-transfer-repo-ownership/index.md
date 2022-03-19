---
slug: transfer-repo-ownership
title: GitHub as your Coding Portfolio (DRAFT)
draft: true
authors: [ygilany]
tags: [career, git]
---

As you start applying for jobs and Co-ops in software development, you are likely to be asked during a job search to show and share your GitHub. Being that this is a recent trend in the evaluation of developers, you may wonder what employers would be looking for and what makes up a good GitHub account.

- A healthy assortment of projects that are readily accessible to recruiters and hiring managers can potentially compensate for any perceived deficiencies in the other areas.

## Good Projects to have
- a personal website
- Stereotypical programming exercises
- Mobile apps
- Open Source project contribution
- Scripts, utilities, and helpers


## Good Marks of a good GitHub Account.
- Variety
- Completeness
- Functionality
- Performance
- Readability
- Documentation/information
- Best Practices: Testing,

## Things that I look for when looking at git repos:

Is there a readme page that explains the purpose of the repo. This should also include documentation on how to run the code.

Are there unit tests (or any tests) as part of the repo.

How many commits are made on the repo? Github exposes all the git commit history. It's nice to be look at a project and see how it has grown over time. Rather than a single commit with "here's the code".

I look at commit messages. Are they useful? Do they provide value and express the reason for the change or is something like "changed shit" (which is a horrible commit message btw).

Groupings . A repo should represent a single project, and sometimes I see a single repo with just hundreds of random code files that are in no way related.

Most importantly I pick a few random files and look at the code, is it following common standards. Does it follow conventions and styles? How easy is it to read? Are there comments? Are there too many comments? Basically looking for items from the book code complete (which is a great book btw).

When it comes to code, some things to keep in mind:

Don't have long blocks of commented out code. This is just a waste of space and adds visual bloat. If you're worried about losing that code, it won't be lost if you use git correctly and have several commits. you can always go back in git.

Variable names. Are the names meaningful and express intent or is it something like "int something1; int something2" which provides me no context.

Duplication. Is there a lot of duplication in the code? Could it be rewritten in a way to follow the DRY principle(don't repeat yourself.)

Comments that state the obvious. for example

//returns the count int getCount(){ return _counter; }

That comment is useless because it's redundant.

I hope this was helpful. Good luck!

WIth GitHub Pages, you'll make your Portfolio even more appealing to present.

https://towardsdatascience.com/how-to-create-a-compelling-github-portfolio-a229e7472a92

## How to Transfer Assignment's Repository's ownership to your account.
[Transferring a Repository - GitHub Docs](https://docs.github.com/en/repositories/creating-and-managing-repositories/transferring-a-repository)