---
description: "Role-aware weekly review — pipeline hygiene, milestone health, governance prep, and handoff readiness. Run on Monday or before governance meetings."
---

# Weekly Review

Run my weekly review based on my MCAPS role. This is my governance-prep and pipeline-cleanup session.

## Steps

1. **Identify role** — use `crm_whoami` to determine my role. If you've already identified me this session, skip this.
2. **Run role-specific review** (execute the appropriate chain below):

### Specialist weekly
Chain: **pipeline-hygiene-triage** → **handoff-readiness-validation** → **risk-surfacing**
- Pipeline cleanup: stale opps, missing fields, close-date slippage, forecast exceptions.
- Handoff check: any Stage 3 deals with customer agreement that should transfer to CSU?
- Risk radar: silent stakeholders, relationship decay, looming threats across active opps.

### Solution Engineer weekly
Chain: **task-hygiene-flow** → **execution-monitoring** → **unified-constraint-check**
- Task sweep: all task records checked for owner, status, due date, blocker notes.
- Execution audit: committed architecture decisions vs. live dependency state.
- Unified logistics: dispatch readiness, accreditation, catalog alignment for Unified items.

### Cloud Solution Architect weekly
Chain: **execution-monitoring** → **milestone-health-review** → **architecture-feasibility-check**
- Execution sweep: constraint breaches, unresolved blockers, owner-motion mismatches.
- Milestone health: date drift, overdue completions, stalled items across committed milestones.
- Feasibility pulse: any proofs concluding this week that need architecture sign-off?

### CSAM weekly
Chain: **milestone-health-review** → **risk-surfacing** → **commit-gate-enforcement**
- Milestone health: customer-safe status bullets + internal remediation queue.
- Risk review: flag relationship decay, silent stakeholders, looming threats.
- Commit gates: any milestones the team wants to flip to Committed? Check readiness.

3. **Present results** in two sections:

**For governance** (shareable with customer/leadership):
- Status bullets per opportunity or milestone — on track / at risk / blocked.
- Key wins this week.

**For me** (internal action list):
- Numbered actions, highest priority first.
- Each action includes the prompt to run if I want to drill deeper.
- Flag anything that needs a teammate's input (tag the role).

4. **Suggest next steps**:
   - If vault is available, offer to save the review via `/weekly-digest`.
   - If any deal needs deeper triage: *"Want me to run a full deal triage on [opp name]?"*
