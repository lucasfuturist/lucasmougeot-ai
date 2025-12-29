based on your prior analysis of the full codebase, documentation, and conventions, perform the following *without introducing new paradigms*.

1. **convention-preserving recommendations only**

   * propose next steps, refactors, or additions that:

     * strictly adhere to existing architectural patterns
     * follow established naming, folder structure, and layering conventions
     * do *not* introduce new abstractions unless an equivalent already exists
   * if a change would require a new pattern, explicitly reject it instead of proposing it.

2. **surgical refactors**

   * identify refactors that are:

     * low risk
     * high clarity
     * convention-aligned
   * explain *why* each refactor improves maintainability or correctness *without* expanding scope.

3. **entropy control**

   * point out areas where convention drift is beginning or likely.
   * recommend guardrails (lint rules, tests, doc updates, structure tweaks) that reinforce existing norms.
   * avoid suggesting new tooling unless it integrates cleanly into what already exists.

4. **next implementation targets**

   * list the next concrete implementation steps that:

     * naturally extend what is already built
     * unblock downstream work
     * require minimal re-architecture
   * order them by dependency and impact.

constraints:

* do not redesign the system.
* do not rename concepts unless inconsistencies already exist.
* do not optimize prematurely.
* do not invent roadmap items not implied by the code or docs.
* favor boring, correct, and inevitable steps.

tone:

* write as a senior engineer handing notes to the system’s original architect.
* concise, exact, and unsentimental.
