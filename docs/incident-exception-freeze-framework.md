# Incident, Exception & Freeze Framework

## Purpose

This document explains **what happens when something goes wrong**.

It does not promise prevention.
It defines **containment**.

---

## Definitions

* **Error**: incorrect input or process deviation
* **Exception**: divergence between expected and observed state
* **Incident**: material inconsistency requiring escalation

---

## System Response

* Errors and exceptions generate immutable events
* Incidents trigger visibility escalation
* Certain conditions trigger **flow freezes**

No correction is performed through adjustment.
Resolution occurs only through **new compensating events**.

---

## Freeze Logic

Freezes are:

* mechanical
* rule-based
* non-discretionary

They prevent propagation of inconsistency, not liability transfer.
