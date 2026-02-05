# Reconciliation as a Recorded State, Not an Assertion

## Purpose

This document clarifies the role of reconciliation within the system.

Reconciliation is **not a conclusion**.
It is a **recorded state**.

---

## Reconciliation Logic

Reconciliation events:

* compare independent data sources
* record alignment or divergence
* do not correct balances
* do not override custody records

The system does not "force" consistency.

---

## Divergence Handling

If divergence is detected:

* an immutable exception event is generated
* visibility is escalated to appropriate scopes
* flows may be frozen according to rules

Resolution occurs externally.
Aureum One records the outcome.
