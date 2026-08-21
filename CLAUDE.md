# CLAUDE.md

Instructions for working on this repo. porttack.com is Eric Brown's personal
site — everything here publishes under his name, so write like you're
ghostwriting for him, not narrating on his behalf.

## Who this is for

Eric is a computer science and robotics teacher for middle and high school
students (San Lorenzo Valley), and before that spent roughly four decades in
tech as a software engineer. He's also president of SLV Rotary (slvrotary.org /
rotary.porttack.com). The blog covers education, teaching practice, and
tech/AI commentary and opinion. Favor ideas and features with pedagogical
value — this site doubles as teaching material for his students.

See [README.md](README.md) for the full site/file map (Jekyll structure,
standalone classroom tools, etc.).

## Voice — fixing the AI-slop posts

Posts from before ~2024-05-20 are the ones most likely to read as raw
ChatGPT output. Posts from that date forward are much closer to Eric's
actual voice (he still used AI as an assist sometimes, just far less
aggressively) — read a few of those as the calibration target before
rewriting an older post, rather than relying on any single example. Commit
`1f62ad0` (TDR + teaching-principles rewrites) is one worked example of the
transformation, not the only reference.

**Never rewrite posts tagged `categories: public-comment`.** These are
records of remarks Eric actually delivered out loud (school board, city
council, etc.) — the text is what he said, not a draft. Fix only
uncontroversial mechanical issues if asked (typos, broken links, front
matter) and leave the substance and phrasing untouched.

**Strip these tells:**
- Decorative emoji used as bullet punctuation (🎯 📚 🌱 🎉), and listicle
  cadence generally.
- Rule-of-three inflation ("not just X, it's Y!"), hype adverbs, exclamation
  points doing work a plain sentence should do.
- Empty engagement filler ("everyone's voice matters!", "let's dive in").
- Vague uplift standing in for a real claim ("a step forward in our journey
  of shaping the future!").
- **The italic closing kicker.** The single most common tell on this site,
  and it survived into posts that otherwise read as his: a one-line
  italicized aphorism at the end, usually "*Sometimes the most important
  lesson/classroom/teaching is...*" or "*Just like in industry, it isn't X,
  it's Y.*" Ten were removed in one pass. Delete them; never write one. The
  post should end on the last real thing he has to say.

Italics that are NOT this and must stay: "*Delivered 5/1/2024*" stamps on
public comment posts, "*All opinions are my own. -- Eric Brown*" sign-offs,
"*Read the full [Annual Report](...)*" link lines, bio lines, photo
captions, draft-status markers, and seminar facilitator notes.

**Reconstruct like this:**
- First person, grounded in something that actually happened — a specific
  class, decision, kid, or team. Not a generic "students."
- His engineering background is the warrant — use it instead of appeals to
  authority or generic claims.
- Short, declarative sentences. Cut hedges that don't add information.
- Opinions can run sharper than corporate-safe — more controversial than
  polite — but aim criticism at systems and ideas, never at named
  individuals, his administration, or his district.
- Use em dashes sparingly — occasional is fine, a tic is not. Often a comma,
  period, or parenthetical reads just as well.
- Keep it concise. A rewrite that's now twice as long as the original missed
  the point even if the voice is right.

**Two failure modes to avoid:**
- **Don't sharpen his hedges.** If the original says "it was *as if* I had
  unwittingly created a fight club," keep that uncertainty. Tightening it to
  "I had accidentally started a fight club" is a punchier sentence and a
  claim he didn't make. Vivid is fine; overstated is not.
- **Titles stay plain and factual.** Vivid framing belongs in the body. A
  headline is what gets quoted out of context, and Eric is a public school
  teacher, so keep the right half of a colon-title concrete rather than
  colorful. Related: when rewriting pre-2023 posts about volunteer work with
  kids, don't amplify anecdotes about supervising minors. Those posts predate
  his credential and read differently now that he holds one.

## Front matter to add during a rewrite

- **Excerpt.** Every rewritten post should get one, since `show_excerpts:
  true` means the `/blog/` listing shows it. Either `excerpt_separator:
  <!--more-->` with the marker placed after the opening paragraph (the
  majority convention, ~34 posts) or an explicit `excerpt:` field when the
  body opens with markup you don't want in the listing. Aim the excerpt at
  the hook and don't spoil the payoff.
- **`label:`** when one fits. It renders as a badge beside the date
  (`date · label`). Existing vocabulary: Tech News, Curriculum Review,
  Lesson Plan, Unit Plan, Rotary, Scouts, Scholarship / Lions, Public
  Comment / *. Reuse an existing value rather than coining a near-duplicate
  (the repo already has both "Lesson" and "Lesson Plan"). Leave it off
  rather than forcing a fit, and flag any genuinely new value for Eric.

## Editorial calls — confirm with Eric, don't decide solo

- Publish dates, post ordering, and whether a `drafts`-category post is
  ready to go live.
- Any factual or legal claim beyond what's already sourced in the post —
  his standard is primary sources, not secondhand reporting.
- Adding anything that isn't his own words (e.g. a hotline, a citation, a
  disclaimer) — flag it as an addition rather than slipping it in.
- New interactive widgets: build and actually view them locally before
  calling them done. Let Eric look at a UI change himself before running
  automated browser tests on it.

## Jekyll gotchas (paid for the hard way)

- Liquid parses tags inside comment blocks, even in `_includes/` doc
  comments — omit the tag braces there or the build breaks.
- Root-level markdown files render through Liquid with no delimiters at
  all, not even inside code fences.
- `future: false` is Jekyll's default — future-dated posts vanish with no
  warning.
- Include tags must be on one line; include parameter values must not
  contain a pipe character.
- Run `bundle exec jekyll build` after touching includes/layouts. Reasoning
  about Jekyll instead of running it has broken the build more than once.
