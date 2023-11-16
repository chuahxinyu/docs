---
title: Introduction
---
- Fundamental Principles
  - **clarity** and **simplicity**
  - the user of a component should never be surprised by its behaviour
  - components should be **as small as possible** but no smaller
  - code **reuse** > code copying
  - minimal dependencies between components
  - errors detected ASAP
    - ideally at compile time

:::note[components]
*Component* refers to any reusable software element
- anything from individual method $\rarrow$ complex framwork consisting of multiple packages
:::

- principles can be violated occasionally within good reason
- clear, correct, usable, robust, flexible, maintainable code > performance

- Terminology
  - Types
    - 4 Types
      1. Interfaces (includes annotations)
      2. Classes (includes enums)
      3. Arrays
      4. Primitives
    - Interfaces, classes and arrays are known as *reference types*
      - primitives are known as *value types*
    - *objects* are class instances and arrays
    - A class' *members*
      - fields
      - methods
      - member classes
      - member interfaces
    - A method's *signature*
      - name
      - types of formal parameters
      - does NOT include the method's return type
  :::danger
  Book uses *inheritance* as a synonym for *subclassing*. 
  :::
  - A class *implements* an interface. 
  - An interface *extends* another. 
  - *package access* --> "package-private"
  - *(exported) API* refers to classes, interfaces, constructors, members and serialized forms (API *elements*) by which a programmer accesses a class, interface or package
    - API = Applicable Programming Interface
    - A class whose implementation uses an API is a *client* of the API
    - exported = accessible outside of the package that defines the API