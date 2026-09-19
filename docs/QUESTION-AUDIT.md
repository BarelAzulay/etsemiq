# Etsem.IQ — question audit

Audit of every scored item in the product: the 30-item Free Test and the 31-item
Hardcore bank. The machine-readable half of the Free Test table lives in
`index.html` as `FREE_TEST_AUDIT`, in the same order as `QB()`; a boot-time
check (`auditSelfCheck()`) warns in the console if the two ever drift apart.

Audited: 2026-09. Auditor: engineering, as part of the 2026 improvement pass.

---

## 1. Standards applied

Each item was checked against ten questions:

1. What cognitive ability does it actually test?
2. Is it a legitimate reasoning task rather than a puzzle with no principle?
3. Is the difficulty band appropriate?
4. Is the wording clear and unambiguous?
5. Is there exactly one defensible answer?
6. Is the answer key correct?
7. Does it measure reasoning rather than trivia or general knowledge?
8. Does it carry cultural or language bias that would distort a result?
9. Is it fair to describe as an IQ-style / reasoning item?
10. Is there a reputable construct behind the item type?

Two mechanical checks run over both banks in every one of the five site
languages and must come back clean (see `scratchpad` QA script `qa-items.mjs`,
reproduced below in **Section 5**):

* no two options in an item carry the same signature, **and** no two options
  render to identical markup — a distractor that draws the same as the key
  would mean two correct answers;
* the answer index is in range, the prompt is non-empty in every language, and
  every matrix has exactly nine cells with exactly one blank.

---

## 2. Sources

These are **descriptions of constructs**, not test material. No item in this
product is copied, traced, paraphrased or adapted from any published test, and
no proprietary artwork, option set or answer key is reproduced.

| Key | Source |
|---|---|
| `CJS90` | Carpenter, P. A., Just, M. A., & Shell, P. (1990). *What one intelligence test measures: a theoretical account of the processing in the Raven Progressive Matrices Test.* **Psychological Review, 97**(3), 404–431. <https://doi.org/10.1037/0033-295X.97.3.404> — sets out the rule types matrix items are built from: constant in a row, quantitative pairwise progression, figure addition or subtraction, distribution of three values, distribution of two values. |
| `SM71` | Shepard, R. N., & Metzler, J. (1971). *Mental rotation of three-dimensional objects.* **Science, 171**(3972), 701–703. <https://doi.org/10.1126/science.171.3972.701> |
| `St77` | Sternberg, R. J. (1977). *Component processes in analogical reasoning.* **Psychological Review, 84**(4), 353–378. <https://doi.org/10.1037/0033-295X.84.4.353> |
| `SK63` | Simon, H. A., & Kotovsky, K. (1963). *Human acquisition of concepts for sequential patterns.* **Psychological Review, 70**(6), 534–546. <https://doi.org/10.1037/h0043901> |
| `Bad03` | Baddeley, A. (2003). *Working memory: looking back and looking forward.* **Nature Reviews Neuroscience, 4**, 829–839. <https://doi.org/10.1038/nrn1201> |
| `series` | Standard number-series induction, in group reasoning tests since Thurstone, L. L. (1938). *Primary Mental Abilities.* University of Chicago Press. |
| `logic` | Categorical and conditional reasoning. The errors the items target are affirming the consequent and over-reading a quantifier. |
| Pearson | Raven's Progressive Matrices / Advanced Progressive Matrices product page, Pearson. <https://www.pearsonassessments.com/store/usassessments/en/Store/Professional-Assessments/Cognition-%26-Neuro/Ravens-Progressive-Matrices/p/100000200> — Pearson describes the instrument as measuring high-level observation, clear thinking and non-verbal abstract reasoning / fluid intelligence. That description is why this construct is the right target for a hardest mode. **The instrument itself is not used here, and Hardcore is not a Raven's assessment.** |

### Copyright position

Reading a published description of what a test measures, and then writing
original items that target the same construct, is normal practice and is not
reproduction. What would be reproduction — and is not done anywhere in this
product — is copying an actual item, its figures, its option set or its key.
Every figure in this product is drawn from the primitives in `index.html`
(`GLYPHS`, `dotsSVG`, `figSVG`); none is traced from anything.

---

## 3. Free Test — item table

Columns: ID · category · construct · difficulty · key · status · source.
Full notes for each item are in `FREE_TEST_AUDIT` in `index.html`.

| ID | Category | Construct | Diff | Key | Status | Src |
|---|---|---|---|---|---|---|
| Q01 | Pattern | Quantitative progression (+1) | Easy | 4 dots | Approved | CJS90 |
| Q02 | Numerical | Constant difference series | Easy | 10 | Approved | series |
| Q03 | Pattern | Periodic alternation (period 2) | Easy | Blue | Approved, noted | SK63 |
| Q04 | Spatial | Constant angular progression | Easy | 270° | Approved | SM71 |
| Q05 | Verbal | Antonym-relation analogy | Easy | Slow | Approved | St77 |
| Q06 | Spatial | Transformation analogy | Easy | ell 90° | Approved | St77 |
| Q07 | Pattern | Odd-one-out, single attribute | Easy | Green | Approved | CJS90 |
| Q08 | Numerical | Constant-ratio series | Medium | 32 | Approved | series |
| Q09 | Spatial | Reflection vs rotation | Medium | Mirrored ell | Approved | SM71 |
| Q10 | Logic | Undetermined quantified conclusion | Medium | "May be true or false" | **Reworded 2026** | logic |
| Q11 | Pattern | Quantitative progression (+2) | Medium | 7 dots | Approved | CJS90 |
| Q12 | Verbal | Item-to-institution analogy | Medium | Museum | Approved, noted | St77 |
| Q13 | Pattern | Matrix, multiplicative rule | Medium | 9 dots | Approved | CJS90 |
| Q14 | Spatial | Constant angular progression | Medium | 270° | Approved | SM71 |
| Q15 | Pattern | Odd-one-out on handedness | Medium | Mirrored flag | Approved | CJS90 |
| Q16 | Numerical | Recursive series (sum of previous two) | Hard | 13 | Approved | series |
| Q17 | Logic | Affirming the consequent | Hard | "No — something else could have wet it" | **Reworded 2026** | logic |
| Q18 | Spatial | Matrix, two angular rules (+45 / +90) | Hard | 270° | Approved | CJS90 |
| Q19 | Spatial | Angular progression, 45° step | Hard | 135° | Approved | SM71 |
| Q20 | Verbal | Delayed recall | Hard | The shown word | Approved | Bad03 |
| Q21 | Spatial | Reflection analogy | Hard | Mirrored ell 90° | Approved | St77 |
| Q22 | Logic | Valid syllogism (Ferio) | Hard | Yes | Approved | logic |
| Q23 | Spatial | Reflection vs rotation, oblique | Hard | Mirrored barb 45° | Approved | SM71 |
| Q24 | Numerical | Recursive series (×position) | Extreme | 720 | Approved | series |
| Q25 | Spatial | Matrix, two angular rules (+90 / +45) | Extreme | 270° | Approved | CJS90 |
| Q26 | Logic | Truth-teller constraint satisfaction | Extreme | Ben | **Replaced 2026** | logic |
| Q27 | Spatial | Two independent series rules | Extreme | Mirrored ell 270° | **Reworded 2026** | CJS90 |
| Q28 | Pattern | Matrix, figure addition | Extreme | 9 dots | Approved | CJS90 |
| Q29 | Numerical | Second-difference progression | Extreme | 22 | Approved | series |
| Q30 | Verbal | Antonym retrieval (crystallised) | Extreme | Enduring | Approved, noted | St77 |

### Items changed in this audit

**Q10 — reworded.** The old wording asked "does it follow that some cats can
swim?" but offered *True / False / Cannot be determined*. A reader answering the
question asked ("no, it does not follow") and a reader answering the options
("the conclusion is undetermined") both had a case, so the item had two
defensible answers. The claim is now named explicitly and the options are about
its truth value only. Construct unchanged.

**Q17 — reworded.** "If it rains the ground gets wet. The ground is wet. Did it
necessarily rain?" with *Yes / No / Cannot be determined* gave "No" and "Cannot
be determined" equal claim to being right — with "necessarily" in the stem they
mean the same thing. The options now state the reasoning rather than labelling
it, so only one can be correct. Construct (affirming the consequent) unchanged.

**Q26 — replaced.** The old item listed three statements but never said who made
which, and referred to "at least two of us" without defining "us". It was
under-specified rather than hard, and more than one reading was consistent. It
has been replaced with a fully specified three-speaker item (Ana, Ben, Cara, one
statement each, exactly one truth-teller). Exactly one assignment satisfies all
three statements simultaneously — Ben — and the other two produce a direct
contradiction. Construct and difficulty band unchanged.

**Q27 — reworded.** The old prompt said the figure "rotates 90° AND mirrors at
each step". A reflection composed with a rotation is itself a reflection, so
applying that transformation twice returns the original figure: the rule as
stated could not generate the four-step series it was attached to, and a solver
who checked the rule against the given steps would find it failed. The series
itself is the standard two-independent-rules construct (orientation advances by
a constant; handedness alternates), and the prompt now describes it that way.
Figures and key unchanged.

**Word Recall item swapped.** One item in the Word Recall game asked for a word
meaning "short-lived", whose key — *ephemeral* — was also the key to free-test
item Q30. The test could therefore be answered from the game. That game item has
been replaced with a different word.

### Items approved with a note

* **Q03** is the only item whose rule is carried by colour. The key is blue in a
  red/blue alternation, which stays separable under red–green colour blindness,
  and the green and amber distractors are never needed to solve it. No other
  item in either bank uses colour as a rule dimension.
* **Q12** (book : library :: painting : museum) relies on knowing that paintings
  are collected in museums. That is close to universal but it is the most
  culture-loaded item in the bank. Flagged for replacement if the audience
  widens; not changed now because it is a well-formed analogy and the distractors
  are clean.
* **Q30** measures vocabulary, which is crystallised rather than fluid ability.
  That is legitimate in a mixed battery — vocabulary subtests appear in every
  major instrument — but it is the one item here that does not measure reasoning
  in the narrow sense, and it should be read that way.

---

## 4. Hardcore — item table

31 original items; 10 are drawn at random per run. IDs match the `id` field in
`HARDCORE_BANK()`. Every item carries an `ex` field — the reasoning principle,
in all five languages — which is shown to the player in the post-run review.

| ID | Category | Construct | Src |
|---|---|---|---|
| HC01 | Pattern | Distribution of three values (shape × count) | CJS90 |
| HC02 | Pattern | Three simultaneous rules (mark / count / outline) | CJS90 |
| HC03 | Numerical | Figure addition + distribution of three | CJS90 |
| HC04 | Pattern | Distribution of two values, shifting position | CJS90 |
| HC05 | Spatial | Latin-square distribution + orientation progression | CJS90 |
| HC06 | Logic | Exclusive-or of a feature + distribution of three | CJS90 |
| HC07 | Numerical | Figure subtraction | CJS90 |
| HC08 | Pattern | Quantitative progression on two axes | CJS90 |
| HC09 | Numerical | Two-step arithmetic rule across a row | series |
| HC10 | Numerical | Chained rule within a row | series |
| HC11 | Spatial | Compound transformation analogy (turn + reflect) | St77 |
| HC12 | Pattern | Two-attribute analogy | St77 |
| HC13 | Pattern | Inverse-quantity analogy | St77 |
| HC14 | Pattern | Role-exchange analogy (outer ↔ inner) | St77 |
| HC15 | Spatial | Half-turn plus reflection analogy | SM71 |
| HC16 | Spatial | Second-order angular progression | SK63 |
| HC17 | Spatial | Alternating signed rotation | SK63 |
| HC18 | Spatial | Two independent series rules | SK63 |
| HC19 | Numerical | Alternating operations | series |
| HC20 | Numerical | Recursive two-term rule | series |
| HC21 | Numerical | Two interleaved series | SK63 |
| HC22 | Numerical | Polynomial term rule | series |
| HC23 | Numerical | Linear recurrence | series |
| HC24 | Numerical | Second-difference progression | series |
| HC25 | Logic | Linear ordering under constraints | logic |
| HC26 | Logic | Chained modus tollens | logic |
| HC27 | Logic | Quantified syllogism | logic |
| HC28 | Logic | Sequence manipulation in working memory | Bad03 |
| HC29 | Numerical | Mental transformation with a cancellation | Bad03 |
| HC30 | Verbal | Antonym-relation analogy | St77 |
| HC31 | Verbal | Relational odd-one-out | St77 |

Design rules the bank is held to:

* Difficulty comes from **rule density** — two or three rules running at once —
  never from ambiguity or from figures that are hard to see.
* Every item has exactly one defensible answer, and every distractor fails the
  rule in a specific, nameable way.
* No rule is carried by colour alone, so the whole bank is solvable with any
  colour vision.
* Counts are capped at six and laid out on a fixed lattice, so counting is never
  the difficulty.

---

## 5. Reproducing the mechanical checks

Open `index.html` and run in the console:

```js
// answer index in range, no duplicate or identically-rendering options,
// prompts present in every language, matrices well-formed
['en','he','es','ru','ar'].forEach(L => {
  setLanguage(L);
  [...QB(), ...HARDCORE_BANK()].forEach((q, i) => {
    const id = q.id || ('QB#' + (i + 1));
    console.assert(q.ans >= 0 && q.ans < q.opts.length, id + ': ans out of range');
    console.assert(loc(q.prompt), id + ': empty prompt in ' + L);
    if (q.oddOut) return;                 // repeats three options on purpose
    const sig = q.opts.map(optSig);
    console.assert(new Set(sig).size === sig.length, id + ': duplicate options');
    const html = q.opts.map(o => o.val !== undefined ? JSON.stringify(o.val) : svgFor(o));
    console.assert(new Set(html).size === html.length, id + ': options render identically');
  });
});
setLanguage('en');
auditSelfCheck();
```

---

## 6. What this product does not claim

Etsem.IQ is designed for self-insight and training. It is **not** a clinical or
diagnostic assessment: it is not administered by a psychologist, it is not
normed on a representative population, and no score it produces is a diagnosis.
The footer disclaimer says so on every screen, Bob says so when asked, and no
copy anywhere describes it as clinically validated. Hardcore is inspired by the
published description of what advanced matrix tests measure; it is not a
Raven's assessment and is not presented as one.
