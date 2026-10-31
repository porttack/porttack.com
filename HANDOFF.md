# HANDOFF: STUDENTS FIRST Act series

Context for a Claude Code session picking this up. Written by the Claude session that
drafted it, for the one that has to finish it. Eric is the author; this is his blog,
porttack.com, Jekyll 3.9.2 + Minima, and everything here publishes under his name.

---

## 1. What this is

Three posts about the STUDENTS FIRST Act, a national K-12 AI policy written by 98 high
school students at the Edward M. Kennedy Institute in Boston, July 17-19 2026. It is not
law, but AASA is circulating it to ~10,000 superintendents who are writing their own AI
policies right now.

Primary source (read it, it is 9 pages):
https://www.aasa.org/docs/default-source/resources/reports/17_s-2026-the-students-first-act-final-bill-passed-84-14-july-19-2026.pdf

NPR's reporting: https://www.npr.org/2026/07/30/nx-s1-5853571/students-set-ai-policy

The three posts, all currently `categories: drafts` so they surface only at /blog/drafts:

| File | What it is | Audience |
|---|---|---|
| `_posts/2026-08-06-98-teenagers-wrote-the-rules.md` | Socratic seminar, one class period | Teachers |
| `_posts/2026-08-07-the-kids-wrote-a-discipline-policy.md` | Main essay | General / education |
| `_posts/2026-08-08-what-happens-when-the-chatbot-tells-the-principal.md` | FERPA follow-up | Wonkier, opt-in |

Dates are backdated because Jekyll's `future` defaults to false and silently drops
future-dated posts. Each post's front matter has commented lines with the intended
publish date and categories.

---

## 2. The argument, so you can protect it while editing

Essay 2 is the anchor. Its spine:

1. The students independently reinvented Eric's two-policy framework. Sec. 2 prov. 4 says
   never AI for the act of writing, editing and brainstorming allowed after 8th grade, and
   editing must be *taught and assessed first*. That is "protect the struggle, then allow
   the multiplier," derived by teenagers in a weekend. This is the good-news section.
2. Then count the other 48 provisions. It is overwhelmingly an enforcement apparatus.
3. **This is not the students' failure.** They reproduced the only model of "policy" they
   have ever been shown: the student handbook and the consequence ladder. The bill is a
   portrait of what school taught them school is for.
4. Eric's 25 years in software is the warrant for the technical section on why AI
   detectors are structurally, not incidentally, broken.
5. Close on Sec. 3 prov. 10 (the crisis chatbot), because it is the same detect / refuse /
   report algorithm aimed at a frightened kid. Hand off to essay 3.

Do not let edits turn this into a dunk on teenagers. The students come off well and that
is deliberate. The target is the system.

---

## 3. Roll-call widget: resolved (removed)

Eric found the roll-call widget confusing, so it was deleted (commit f73ffb2). The essay
never had it; only the seminar did. The seminar now has `_includes/provision-list.html`,
a printable list of all 49 provisions grouped by section, with a toggle between all and
arguable-only. Arguable items are bold with a diamond marker so they survive printing.
Data is in `_data/students_first_provisions.yml`; edit the `arguable: true` flags there.

The ten arguable provisions are Claude's picks, not Eric's: 2.1, 2.4, 2.12, 2.15, 3.2,
3.5, 4.4, 5.1, 5.2, 5.6. Eric plans to tweak them before running the seminar. The list
shows no control/rights/capability labels, so students sort cold. There is no
facilitator answer key yet.

The essay states the 20/17/12 ratio in a callout and has no visual for it. Not needed.

---

## 4. The other two widgets

**`_includes/detector-math.html`** — the strongest one. Four sliders (cohort size, real
cheating rate, detector sensitivity, false positive rate) over a grid where each square is
a student. The payoff line is "N of every 100 accusations is a mistake." At the defaults
it lands near 30%; drop the base rate to something realistic and it crosses 50%. It is
also a genuinely good conditional-probability lesson for a CS class. Keep this.

**`_includes/disclosure-routing.html`** — for essay 3. Toggles between the bill's five
recipients of a crisis disclosure and a narrower rule; click a recipient for the legal
question it raises. The move that does the work is listing "the student, before they
type" as a recipient the bill omits.

---

## 5. Known unknowns — nothing here has been verified

The session that wrote this had **no Ruby and no browser**. Everything below is unverified:

- **The remaining widgets have not been reviewed in a browser by Eric.** They are syntax-checked JavaScript, not tested UI.
  Build them, look at them, fix them.
- **Mobile is untested**, including the provision list's section layout and toggle.
- **Dark mode is untested.** There is a `prefers-color-scheme` block in
  `assets/css/porttack-callouts.css` with guessed hex values.
- **Accessibility is untested.** There is `aria-live`, `aria-pressed`, `role=list`, and
  keyboard focus styling, but none of it has been exercised with a screen reader.

Three separate build breaks shipped from that session, all because it reasoned about
Jekyll instead of running it. Run the build after every change.

### Jekyll gotchas already paid for

1. Liquid parses tags **inside comment blocks** even though it never renders them. An
   example `include` tag in a doc comment fails the build. Every doc comment in
   `_includes/` deliberately omits the tag braces. Keep it that way.
2. This repo **renders root markdown files**, so `README-students-first-act.md` contains
   no Liquid delimiters at all, not even inside code fences. A bare `post_url` with no
   argument in a code span killed the build.
3. Include tags must be on **one line**.
4. Include parameter values must not contain a **pipe character**.
5. `future: false` is Jekyll's default. Future-dated posts vanish with no warning.

---

## 6. Fact-checking still owed

Eric's standard is primary sources, and these are unresolved:

- **Vote count conflict.** NPR and AASA's page say 82-16. AASA's own PDF filename says
  84-14. Footnoted in essay 2 as unresolved. Worth an email to AASA.
- **Statutory citations in essay 3 are unverified.** California Education Code 49602
  (counselor confidentiality) is load-bearing for the central argument. Also cited: FERPA
  34 CFR 99.31(a)(1), 99.36, 99.32; Cal. Ed. Code 22584 (SOPIPA); Cal. Penal Code 11164
  et seq. Check every one against current text. Neither Eric nor Claude is a lawyer and
  the post says so.
- **My classification of all 49 provisions is a judgment call** publishing under Eric's
  name. The arguable ones are flagged in `_data/students_first_provisions.yml`. He should
  read them and decide before publishing. The "How I sorted these" methodology text went
  away with the roll-call widget; restore it somewhere if the essay needs to disclose it.
- **OG images referenced but never created:** `students-first-act-og.png`,
  `chatbot-routing-og.png`, `seminar-og.png`.
- The seminar links to `/teaching` as a placeholder for Eric's earlier Anthropic seminar
  post. Needs the real URL.

---

## 7. House style

- Short declarative sentences.
- **No em-dashes.** Eric treats them as an AI tell. Use double hyphens or spaced en dashes.
- No partisan framing.
- Careful framing around his own administration and district. Aim criticism at systems and
  ideas, never at individuals.
- He prefers his own industry experience as warrant over appeals to authority.
- "More controversial than polite," but the controversy is aimed at systems.
- Concise output. He flags responses that run long.

---

## 8. Editorial calls Eric should confirm, not you

- The 988 crisis line at the end of essay 3 was Claude's addition, not his voice.
- Publication order and dates.
- Which provisions count as arguable (section 3).