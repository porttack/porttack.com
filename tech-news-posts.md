# Writing "Tech News" blog posts

Notes for an agent (or future me) tasked with proposing and drafting posts in
the `tech-news` category. This documents the workflow and conventions
established when creating the first two posts in this category:
[_posts/2026-05-27-teachers-union-ai-pushback.md](_posts/2026-05-27-teachers-union-ai-pushback.md)
and [_posts/2026-06-05-teachers-ai-impact-poll.md](_posts/2026-06-05-teachers-ai-impact-poll.md).

## What this category is for

Short linkblog-style posts pointing students at current events that affect
schools, their future careers, or things they should generally be aware of.
Posts tagged `categories: tech-news` show up at `/blog/news/` and `/blog/all/`
but are excluded from the main `/blog/` page (see `only_category` /
`exclude_category` front matter and the filtering logic in
[_layouts/home.html](_layouts/home.html)).

## Step 1: propose story options

Search for stories from roughly the past two months that would make good
discussion material: things affecting K-12 schools, ed-tech, AI in education,
careers/the job market, or other current events a teacher might want to put in
front of students. Summarize 3-5 candidates (headline, one-line summary,
source link, why it's relevant to students) and let the user pick before
writing anything. Don't draft posts speculatively.

## Step 2: file naming and front matter

Name the file after the **story's publish date**, not the date you're writing
it: `_posts/YYYY-MM-DD-slug.md`, where `YYYY-MM-DD` matches the `date:` field.
Front matter template:

```yaml
---
layout: post
title:  "..."
date:   YYYY-MM-DD
excerpt_separator: <!--more-->
categories: tech-news
---
```

`excerpt_separator: <!--more-->` gives explicit control over what appears in
the `/blog/` listing excerpts (the site has `show_excerpts: true`), rather than
relying on Jekyll's default "first paragraph" cutoff.

## Step 3: writing style ("Daring Fireball" linkblog style)

Keep it brief: a short framing sentence that links out to the real story (the
link lives inline in the sentence, not as a bare URL), a blockquote excerpt
pulled from the article, and a couple sentences of personal
commentary/reaction. The point is to get students to click through and read
the original, not to summarize it for them.

**No em-dashes (—) anywhere.** Use commas, periods, or parentheses instead.
This was an explicit, repeated user requirement.

A title can be a normal headline, or pulled directly from a striking
quote/statistic in the story when that's more compelling (e.g. "More Than Half
of Teachers Say AI Is Making Critical Thinking Harder to Teach", drawn from a
54% statistic in the source article).

## Step 4: adding the story's photo/illustration

Hotlink directly to the image on the original publisher's CDN. Don't download
images and host them locally. Constrain the height so it doesn't dominate the
post, and credit the photographer/illustrator and publication in small text:

```markdown
<img src="https://example-cdn.com/path/to/image.jpg" alt="Description of the image" style="max-height: 200px; width: auto; display: block;">
<small>Photo: Photographer Name/Publication, from the story</small>

Lead sentence with [an inline link to the story](https://...):

<!--more-->

> Blockquote excerpt from the article.

A couple sentences of commentary.
```

Notes on this structure (learned by trial and error with kramdown):

- Leave a **blank line** between the `<small>` attribution and the next
  paragraph, and blank lines around `<!--more-->`. Without them kramdown can
  merge or mis-parse the blocks.
- `<img>` and `<small>` are inline-level HTML, so they render fine mixed with
  markdown links inside a paragraph. Block-level HTML (e.g. `<table>`,
  `<figure>`, `<div>` wrapping markdown) is a different story and tends to
  break kramdown's parsing, sometimes badly. Stick to inline tags here.
- If you don't have a real credit line for an image, it's fine to write
  something generic like "Illustration from the story. (via Publication)"
  rather than guessing at a name.

## Step 5: verify before calling it done

Build to an isolated temp directory and check the rendered output, then clean
up:

```bash
rm -rf /tmp/tn_test && bundle exec jekyll build --destination /tmp/tn_test
```

Confirm:

- The new post's URL appears in `/blog/news/index.html` and
  `/blog/all/index.html`, but **not** in `/blog/index.html`.
- The rendered post HTML contains no em-dash characters (`—`, U+2014).
- The `<img>` tag renders with `max-height: 200px` and the attribution text is
  present.

Then `rm -rf /tmp/tn_test` to clean up. Don't leave test build directories
lying around in the repo.
