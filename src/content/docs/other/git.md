---
title: Git
---

- `git init` Initialise git repository
- `git add <file>` Add file to staging area
  - `git add .` Add all files to staging area
- `git commit` Commit current changes
  - `git commit -m "<message>"` Commit with message
- `git push` Push changes to remote repository
- `git pull` Pull changes from remote repository
- `git status` Check status of repository

:::note[Merging vs Rebasing]
||Merging|Rebasing|
|--|--|--|
|Integration Method|Combines the histories of two branches into one|Moves/"rebases" a branch onto the tip of another branch|
|Commit History|Keeps the original branch history and adds a new merge commit|Rewrites the commit history to create a linear sequence of commits|
|Conflict Resolution|Resolved once during the merge, potentially leading to a merge commit|Resolved for each commit that's being rebased, which can be repetitive|
|Use Case|Ideal for integrating completed features or fixes into the main branch|Used to clean up and simplify commit history before merging|
|History Visibility|Preserves the full history and chronological order of commits|Provides a cleaner, linear history but alters the chronological order|
|Risk Level|Lower risk of disrupting the repository history|Higher risk of complicating the history, especially if used on public branches|

![](/src/assets/git/merge-vs-rebase.png)

:::
