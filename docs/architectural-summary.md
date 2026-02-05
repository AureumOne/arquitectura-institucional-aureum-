# Architectural Summary

## Functional Separation

Aureum One is deliberately narrow in scope.

| Layer      | What It Does        | What It Cannot Do  |
| ---------- | ------------------- | ------------------ |
| Custody    | Holds physical gold | Register ownership |
| Execution  | Executes trades     | Govern or validate |
| Governance | Authorizes actions  | Validate facts     |
| Evidence   | Records events      | Assert conclusions |

No layer can override another.
No layer can retroactively alter history.

---

## Non-Custodial by Design

Aureum One:

* has no omnibus accounts
* has no signing authority
* has no discretionary control
* has no asset possession

Custody records and contractual arrangements remain the **sole source of legal ownership**.

The system consumes confirmations; it does not generate settlement.
