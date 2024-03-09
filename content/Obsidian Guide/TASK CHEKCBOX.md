---
Tags: sandbox, obsidian-group 
---

Syntax	Description
- [ ]	to-do
- [/]	incomplete
- [x]	done
- [-]	canceled
- [>]	forwarded
- [<]	scheduling
- [?]	question
- [!]	important
- [*]	star
- ["]	quote
- [l]	location
- [b]	bookmark
- [i]	information
- [S]	savings
- [I]	idea
- [p]	pros
- [c]	cons
- [f]	fire
- [k]	key
- [w]	win
- [u]	up
- [d]	down

- [ ] `- [ ]` to-do
- [/] `- [/]` incomplete
- [x] `- [x]` done
- [-] `- [-]` canceled
- [>] `- [>]` forwarded
- [<] `- [<]` scheduling
- [?] `- [?]` question
- [!] `- [!]` important
- [*] `- [*]` star
- ["] `- ["]` quote
- [l] `- [l]` location
- [b] `- [b]` bookmark
- [i] `- [i]` information
- [s] `- [s]` savings
- [I] `- [I]` idea
- [p] `- [p]` pros
- [c] `- [c]` cons
- [f] `- [f]` fire
- [k] `- [k]` key
- [w] `- [w]` win
- [u] `- [u]` up
- [d] `- [d]` down





Some sample tasks of the various types:
- [x] completed task
- [/] incomplete task
- [ ] not started
- [>] Migrated
- [<] Scheduled 
- [-] cancelled task
- [u] It's going up
- [d] ... or down

Here are my various attempts at getting
 a list of those tasks.

## All tasks
```dataview
task from #sandbox 
```

## Uncompleted tasks?
```dataview
task from #sandbox 
where !completed
```

Includes all the extra tasks, as well.

##  text contains "k"?

```dataview
task from #sandbox 
where !completed
  and contains(text, "k")
```
No go, as it only checked the actual text of the task

## Using status
```dataview
task from #sandbox 
where status = " " or status = "/"
```

By looking into the _All info_ shown below,
I found that the actual text between the brackets 
was stored in the `status` field, and then I can 
combine whichever set of these that I wanted. 
