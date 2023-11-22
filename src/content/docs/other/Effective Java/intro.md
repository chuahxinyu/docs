---
title: Introduction
---

## Fundamental Principles

- **clarity** and **simplicity**
- the user of a component should never be surprised by its behaviour
- components should be **as small as possible** but no smaller
- code **reuse** > code copying
- minimal dependencies between components
- errors detected ASAP
  - ideally at compile time

:::note[Components]
_Component_ refers to any reusable software element

- anything from individual method $\rightarrow$ complex framwork consisting of multiple packages
  :::

- principles can be violated occasionally within good reason
- clear, correct, usable, robust, flexible, maintainable code > performance

## Terminology

- Types
  - 4 Types
    1. Interfaces (includes annotations)
    2. Classes (includes enums)
    3. Arrays
    4. Primitives
  - Interfaces, classes and arrays are known as _reference types_
    - primitives are known as _value types_
  - _objects_ are class instances and arrays
  - A class' _members_
    - fields
    - methods
    - member classes
    - member interfaces
  - A method's _signature_ - name - types of formal parameters - does NOT include the method's return type
    :::danger
    Book uses _inheritance_ as a synonym for _subclassing_.
    :::
- A class _implements_ an interface.
- An interface _extends_ another.
- _package access_ $\rightarrow$ _package-private_
- _(exported) API_ refers to classes, interfaces, constructors, members and serialized forms (API _elements_) by which a programmer accesses a class, interface or package
  - API = Applicable Programming Interface
  - A class whose implementation uses an API is a _client_ of the API
  - exported = accessible outside of the package that defines the API
