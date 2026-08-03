---
layout: post
title:  "Kilo & Milli: Borrowing the Meter Stick to Teach Electrical Units"
date:   2026-05-04
categories: teaching lesson-plans
label: Lesson Plan
excerpt_separator: <!--more-->
excerpt: "A short lesson for Physical Computing / Robotics that turns a skill students already have (mm, cm, m, km) into a skill they need (mV, mA, kΩ).<br><a href='/docs/assets/slides/Kilo_Milli_v3.pdf'><img src='/docs/assets/images/kilo-milli-ladder.png' alt='The SI Prefix Ladder: kilo, hecto, deca, base, deci, centi, milli' style='max-height: 150px; width: auto; display: block; margin: 0.6em auto 0; box-shadow: -4px 4px 10px rgba(0,0,0,0.3), 2px 4px 8px rgba(0,0,0,0.15); border: 1px solid rgba(0,0,0,0.08);'></a>"
---

<a href="/docs/assets/slides/Kilo_Milli_v3.pdf"><img src="/docs/assets/images/kilo-milli-ladder.png" alt="The SI Prefix Ladder: kilo, hecto, deca, base, deci, centi, milli" style="max-width: 500px; width: 100%; display: block; margin: 0 auto 1em; box-shadow: -4px 4px 10px rgba(0,0,0,0.3), 2px 4px 8px rgba(0,0,0,0.15); border: 1px solid rgba(0,0,0,0.08);"></a>

<p style="text-align: center; font-size: 0.9em; margin: 0 0 1.5em;">Classroom materials: <a href="/docs/assets/slides/Kilo_Milli_v3.pdf">Slides (PDF)</a> &middot; <a href="https://docs.google.com/presentation/d/1SwArrt0lFytWQIRPR__mHDiYjcmV0bdlC4s3dk0fPKw/edit?usp=sharing">Google Slides</a> &middot; <a href="/docs/assets/quizes/Kilo_Milli_Quiz.pdf">Quiz (PDF)</a></p>

A student's multimeter reads `0.019`. The LED's datasheet says it wants `20 mA`. Those are almost the same number, and the student cannot see it yet.

<!--more-->

## Borrow a skill they already have

The lesson doesn't open with volts or amps. It opens with a meter stick, because every student already has the underlying skill and doesn't know it: milli means ÷1000, kilo means ×1000, same rule every time, whether the unit is meters or amps. The deck runs that one rule across mm/m/km first, then volts, then amps, then ohms, so the only thing that's new each time is the unit, never the math.

Before any of that I just ask them things. How many millimeters tall am I? Guesses are always funny and always wrong by an order of magnitude, which is the point -- it surfaces that nobody has an intuition for milli at human scale. How many decameters wide is the room? Nobody's ever heard the word, which is useful too: it shows them the ladder has rungs nobody uses. Then a few metric-imperial conversions just for fun before we get to volts and amps.

## The quiz

The [16-question quiz](/docs/assets/quizes/Kilo_Milli_Quiz.pdf) starts with pure length as a warm-up, then runs the identical question shapes against volts, amps, and ohms, with a couple of hints tied to real hardware (`3300 mV` &rarr; "a Microbit!"). The reference table on the last slide stays projected during the quiz on purpose -- it's an open-book test of the conversion procedure, not a memorization check, which matches how they'll actually use this (a cheat sheet on the workbench, not from memory). I checked the arithmetic on every slide and quiz item; all of it is correct.

## Appendix: standards alignment

This lesson sits mostly outside California's 9-12 computer science core -- that framework doesn't cover electrical measurement, and I'd rather say so than force a fit. The clean match is in the CTE **Information & Communication Technologies** anchor standards, the ones every ICT pathway course (including Physical Computing / Robotics) is built on:

- **Anchor 10 (Technical Knowledge & Skills), 10.7**: *"Understand the SI (metric) prefixes commonly used in computing including, at least, kilo, mega, giga, and tera."* Written with data sizes in mind (kilobytes, gigabytes), but the competency it names -- fluency with SI prefixes as a scale factor, not a memorized table -- is exactly what this lesson teaches, applied to a different unit domain (volts, amps, ohms) than the standard's own examples. Worth naming that extension rather than glossing over it.
- **Anchor 10** more broadly: *"Apply essential technical knowledge and skills common to all pathways in the ICT sector, following procedures when carrying out experiments or performing technical tasks."* Reading a multimeter and decoding a resistor's printed value are exactly this kind of procedural technical skill.
- **Anchor 5 (Problem Solving & Critical Thinking), 5.7**: *"Work out problems iteratively and recursively."* The chaining exercise (converting across two steps by repeating the same rule) is a small, concrete instance of that habit.

Source: [CTE Model Curriculum Standards, ICT sector edition (2013)](https://www.cde.ca.gov/ci/ct/sf/documents/infocomtech.pdf).

## Suggestions and TODOs

- **Add micro.** The deck stops at milli, but the next thing students meet is a capacitor labeled in µF. One extension slide (µ = ÷1,000,000) closes that before it opens.
- **Hands-on resistor reading.** Real multimeters and a strip of color-banded resistors, not just printed labels -- reading four color bands and deriving 4.7 kΩ is a different skill than converting a number already given to you. [Porttack's own resistor color code chart](https://learn.porttack.com/pico/03-physical-computing/) is a ready-made reference:

  <img src="https://learn.porttack.com/assets/img/pico/fig-3-3.png" alt="Resistor color code chart" style="max-width: 500px; width: 100%; display: block; margin: 0.5em auto;">

- **Test the direction, not just the answer.** Add one "which way, and how do you know?" item per part so students can't pattern-match past the reasoning.
- **Digital, self-grading version** (Forms/Quizizz) for a low-stakes check between the slides and the breadboard lab.

---

*All opinions are my own. -- Eric Brown*
