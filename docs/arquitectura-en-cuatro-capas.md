---
id: arquitectura-en-cuatro-capas
title: Arquitectura en cuatro capas
sidebar_position: 4
---

## Separación estructural de funciones

### Capa 1 — Custodia física

* Ejecutada exclusivamente por custodios independientes
* Separación legal y operativa
* Sin cuentas ómnibus
* Sin agregación interna

**No valida** propiedad, decisiones ni estados.

---

### Capa 2 — Ejecución operativa

* Coordina instrucciones y flujos
* Opera bajo procesos definidos
* Sin discrecionalidad fiduciaria

**No custodia**, no valida ni gobierna.

---

### Capa 3 — Gobernanza y autorización

* Autoriza acciones sensibles
* Registra decisiones y excepciones
* Aplica controles multinivel

**No certifica** existencia ni respaldo de activos.

---

### Capa 4 — Evidencia y verificabilidad

* Registra eventos y estados como evidencia inmutable
* Permite reconstrucción determinística
* Soporta reconciliación continua

**No interpreta** ni concluye.

---

**Ninguna capa sustituye a otra.
Ninguna capa valida a otra.
Ninguna capa concentra autoridad.**
