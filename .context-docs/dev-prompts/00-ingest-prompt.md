ingest *all* provided materials in full: the complete codebase, README, progress log(s), and any context or architecture docs.

your tasks are:

1. **establish ground truth**

   * analyze the *actual codebase* as the source of truth.
   * compare it against the progress log(s) and documentation.
   * explicitly identify what is implemented, partially implemented, planned, or missing.

2. **progress reconciliation**

   * determine whether the existing progress log accurately reflects the current state of the code.
   * if it is outdated or incomplete, generate a **fully up-to-date progress log** based strictly on the codebase.
   * do not speculate—only log what is clearly present or clearly implied by the code.

3. **development conventions audit (critical)**

   * closely inspect coding conventions, architectural patterns, naming schemes, folder structure, and documentation style.
   * identify:

     * conventions that are being followed consistently
     * conventions that are defined but violated
     * conventions that appear to have emerged implicitly
   * flag any inconsistencies or risks that could cause long-term entropy.

4. **project synthesis**

   * provide a concise but deep summary of the project as a whole, integrating:

     * README intent
     * architectural docs
     * actual code reality
   * explain what this system *is*, what problem it solves, and how the pieces fit together.

constraints:

* be precise and technical, not vague or motivational.
* do not restate documentation unless adding interpretation or correction.
* prioritize accuracy over optimism.
* assume this project is actively evolving and your output will be used to guide next architectural decisions.
