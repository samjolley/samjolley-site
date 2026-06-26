---
title: Why "just summarize the files" fails for IT operations reports
description: Handing ticket and uptime exports to a language model produces a fluent IT operations report that is often wrong. Here is the failure mode, and the method that fixes it.
pubDate: 2026-06-26
draft: true
keywords:
  - it operations report
  - automated it reporting
  - ai report writing
---

You have the data. The ticketing system has every ticket. The monitoring tool has every minute of uptime. Someone still spends an afternoon every week turning that into a report a manager will read. So you try the obvious shortcut: paste the exports into a language model and ask it to summarize.

What comes back reads beautifully. It is also, often, wrong in ways that matter.

## The obvious shortcut, and the specific way it breaks

Hand a model a ticket export and an uptime export and the output is a confident, well-organized IT operations report. Then you check it against the source files, and the problems show up in the same places every time.

The totals do not reconcile. The report says 26 tickets when the file has 24. An open, unresolved risk is summarized as handled, because the surrounding text sounded conclusive. A root cause appears that no ticket actually states, invented to make the narrative feel complete. None of these are loud failures. They are quiet, plausible, and exactly the kind a busy reviewer signs off on.

For a status update nobody acts on, that is survivable. For a leadership report, where someone makes a staffing or budget or escalation decision from the numbers, wrong is the expensive kind.

## Why this happens

This is not a bug you can prompt your way out of. It is what the tool is built to do.

A language model optimizes for text that reads well. It is not counting the rows in your export, and it is not checking a stated cause against the evidence. It produces the most fluent continuation, and fluent and accurate are not the same property. Confidence in the writing tells you nothing about fidelity to the source.

So the more polished the output looks, the more dangerous it is, because polish is the thing we use as a proxy for correctness. The model is good at exactly the signal that misleads us here.

## The pattern that works: separate the two jobs

A report has two jobs inside it, and they have opposite reliability profiles. Calculating the numbers is deterministic and must be exact. Writing the narrative is judgment and benefits from fluency. The mistake is asking one tool to do both. The fix is to split them.

1. **Validate first.** Confirm the files, the required fields, the reporting period, and the metric definitions before anything else runs. A report built on the wrong date range is wrong no matter how good the prose is.
2. **Calculate deterministically.** Compute every total and rate from the structured fields with plain code, not the model. Tickets opened, tickets closed, median time to resolve, availability per service. These numbers come from arithmetic, not from a paragraph.
3. **Draft against a rubric.** Let the model write the narrative, but constrain it. It may only describe numbers it was given. It may not introduce a cause that is not in the source. Recommendations must be labeled as recommendations.
4. **Reconcile every material number.** Check each figure in the narrative against the calculated source. This is the step that catches the 24-that-became-26. If a number in the prose does not trace to the data, it does not ship.
5. **Label what is missing.** A gap stays visible. "No change records for this period" is a finding, not something to smooth over.
6. **A human approves.** A named person signs off on the wording before it leaves.

The model still does the part it is genuinely good at: turning a correct set of facts into clear, readable prose. It is just no longer trusted with the arithmetic or the fidelity check.

## A small example you can check by hand

Numbers make this concrete, so here is a deliberately tiny case: 24 service tickets and availability records for seven services. Small enough that you can verify it by hand, which is the point. The quality controls should be visible, not buried inside a system too large to inspect.

The single most useful check is also the simplest. Opened tickets plus the carryover should equal closed plus still-open. If the report's narrative says the numbers differently than the arithmetic does, the arithmetic wins and the sentence gets rewritten. One reconciliation like that, applied to every material figure, is most of the distance between a report you can trust and one you only hope is right.

I built a small interactive version of exactly this. You can edit the sample exports and watch every number in the report recount itself from the rows, with a panel that turns red the moment a total stops adding up.

[See the worked example in the live demo.](https://demo.zerobeatlabs.org/reconcile)

## What stays human

Separating calculation from drafting does not remove the person. It relocates them to where they add the most value.

The arithmetic is handled. The drafting is assisted. What is left for a human is the judgment: the context a number does not carry, the wording a stakeholder will read correctly, and the final approval. Accountability has to land on a person, by name. That is not a limitation of the method. It is the method.

A fluent paragraph can still report numbers that do not add up. The work is making sure it does not, and being able to show how.
