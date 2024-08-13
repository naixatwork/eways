# Developer additional notes

### todos

- [x] architecture guideline
- [ ] responsiveness
- [ ] tests
- [ ] welcome page
    - [ ] three.js scene
- [ ] router guard
  - [ ] hold auth state with zustand

### Architecture and Philosophy

on average human brain cannot process more than 5 tasks at the same time, that's why there are 5 folders or `layers`
inside `src` directory.

the `layers` are:

- `app`
- `business`
- `core`
- `shared`
- `node-modules (hidden)`

each `layer` has its own rules, and it's corresponding rules when it comes to other `layers` they generally help us
determine which high level or low level code belongs where.

#### Relationship rules

- `import` has to always happen from top (`app`) to bottom (`node-modules`) this rule prevents any **circular
  dependency,** and it gives a clear way to determine if code is meant to be **low-level** or **high-level** .
- each `layer` or `sub_layer` should **provide** not **contain** code for example a `layer` with name `component`
  or `utils` just contains/categorize code it doesn't give any idea or context.

#### Single rules

- `app` represents the starting point of the software and holds `application.tsx` almost every configuration can happen
  at this
  level such as `routing` or `layout`.
    - `app` is high-level.
    - normally frontend applications will be tested all the time by **product** and **QA team**  we can trust high-level
      code will be tested **manually**.
- `business` will provide business logic for example various features that software provides and makes money of.
    - `business` is high-level.
    - `integration testing` and `e2e` testing would be more suited for this layer.
- `core` many entities in the software have **relations**. our `service` logics will be defined here.
    - `core` is low-level but **business oriented**.
    - `integration testing` would be more suited and also `unit testing`
- `shared` should provide units of code so **abstract** and **generic** enough that we can use it for another project.
    - shared is low-level.
    - `unit testing` would be more suited.
    - there should be no `logging` done in `shared`.

### File and Folder Structures:

- follows the `LIFT` style guide from https://angular.io/guide/styleguide#lift
    - Locate
    - Identify
    - Flat
    - T-DRY (Try to be DRY)
    - sibling tests

### Paradigms

- `functional programming`
    - Stratified design
    - Straightforward implementation
    - Abstraction barrier
    - Minimal interface
    - Comfortable layers
    - `reactive programming` using `rxjs` and `svelte`
- `procedural programming`
- `OOP` and design patterns related to OOP will `NOT` be used
    - https://www.youtube.com/watch?v=QM1iUe6IofM

### Clean Code Guidelines

- immutability
    - copy-on-write
- favor `explicit argument` over `implicit argument`
- `pure functions` first approach
- naming conventions from uncle Bob's book
- number of words based on the function or value's context
- upto `3 parameters` only
- using the same level of `abstraction` in a unit of code
- `unit tests` for low level code

### Git

- commit messages follow the conventional commit guideline https://www.conventionalcommits.org/en/v1.0.0/
