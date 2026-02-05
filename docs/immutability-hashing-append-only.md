# Immutability, Hashing & Append-Only Rules

## Purpose

This document defines **how evidence integrity is preserved**.

It does not rely on trust, review or permission.
It relies on **structural irreversibility**.

---

## Immutability Model

All evidence records are:

* append-only
* cryptographically hashed
* timestamped at creation
* linked to their originating event

No update, overwrite or deletion mechanism exists.

---

## Correction Model

Errors are not "fixed".

When incorrect data is introduced:

* the original record remains intact
* a **new compensating event** is generated
* the historical trail is preserved

Truth is cumulative, not revised.

---

## Implication

Audit does not ask *"what is correct?"*
Audit asks *"what happened, in which order, and under whose authority?"*
