---
title: "Teaching Binary With Coins"
date: 2026-08-31
categories: teaching lesson-plans
label: Lesson Plan
excerpt_separator: <!--more-->
---

There is a version of the binary lesson where you put `128 64 32 16 8 4 2 1` on the board, explain that each place doubles, work three examples, and assign twenty conversions. It takes eleven minutes and roughly half the room writes down the algorithm without ever believing it.

[Douglas Kiang has a better version](https://www.youtube.com/watch?v=AzhjGfxL574). It is a store, and it does not make change.
<!--more-->

## The setup

Every student gets four coins: an 8, a 4, a 2, and a 1. Kiang uses cut index cards and poker chips work fine, but I print mine. Having a bin of 3D printed coins on the shelf means the activity costs me zero prep every year, and there is something about a physical token with a number stamped into it that index cards do not quite manage.

I run a store. Nothing in it is free. I do not give change, so you have to pay exactly.

Then three questions, in order:

1. What is the cheapest thing you can buy?
2. What is the most expensive thing you can buy?
3. Which prices in between can you *not* pay?

Question 2 is where the first useful mistake shows up. Somebody says eight. You ask what happens if the price is nine. They look at the coins, find the 8 and the 1, and correct themselves. Nobody had to be told anything. Now the real answer, 15, arrives with a reason attached rather than as a fact you handed over.

## The deliberately wrong example

Question 3 is the move I would keep if I had to throw everything else out.

You say: "Take 13. You can't pay 13, because you don't have exact change for it."

Someone will interrupt you before you finish the sentence. Eight, four, and one. You say, "Oh, bad example. I meant 11." And then someone else gets 11 with eight and two and one.

A wrong answer you generated yourself, and then corrected, sticks harder than a right answer you were handed. Confidently wrong is apparently the best case: the bigger the surprise when the correction lands, the better the retention.

Kiang's move exploits this from the front of the room instead of waiting for it to happen by accident. Being publicly wrong twice, on purpose, converts the room from *answering me* to *checking me*. By the third fake claim they have stopped waiting for permission and started scanning the whole range on their own, which is what you wanted them doing in the first place.

## Two agreements before moving on

Do not skip these. Get explicit, whole-class agreement on both:

**One.** You can pay every whole amount from 1 through 15. Not most. Every one.

**Two.** There is exactly one way to make each amount.

The second one is the one students slide past, and it is the one that makes binary a *number system* rather than a coin trick. Uniqueness is the reason a row of ones and zeros is a number instead of a suggestion. When a student later asks why `0101` and `00101` are the same value but `1010` and `0101` are not, the answer traces back to this agreement.

Then ask what the next coin should be. They say 16, and they can say why. This is the point where I get up and walk the room handing out 16s, and then 32s, and then 64s, one denomination at a time. It is worth the two minutes. Each new coin is a small event, the maximum jumps to 31 and then 63 and then 127, and every time you ask whether both agreements still hold, they check and find that they do. They have generalized the system without you ever announcing a generalization.

## The cash register

Kiang's board looks like this: vertical lines making columns, one heavy horizontal line across the middle, coins laid out largest on the left.

Coins you are **not** using stay above the line. Coins you **are** using go below.

To make 27: 16 goes down, 8 goes down (24), 4 is too much (28), so 4 stays up, 2 goes down (26), 1 goes down (27).

Then relabel. Above the line means no. Below means yes. In computer science, no is 0 and yes is 1.

`11011`

That is the whole lesson in one gesture. Nothing new was introduced. The students built the number and you renamed the columns.

The greedy walk they just performed left to right is also the standard decimal-to-binary conversion algorithm, and it is worth saying out loud that they did not learn a procedure, they *derived* one. Ask each place, largest first: does it fit? If yes, write 1 and subtract. If no, write 0.

## Extending to a byte

By the time the 64 coin is out, the eighth column is inevitable. Add 128. Eight places, eight bits.

Eight bits is a byte. The largest value is 255, worth writing on the board as `11111111`. The smallest is 0, which trips people up because they were thinking in prices and a price of zero was not on the menu. Say it directly: as a *number*, one byte holds 0 through 255, which is 256 different values.

If someone with a math brain wants place values as powers, give it to them: these are 2⁰ through 2⁷, exactly the way decimal places are 10⁰ through 10². Kiang makes a nice point that for a lot of students the powers-of-ten framing never landed in the first place, so leading with it here would be building on sand. Coins first, exponents as the formalization.

## Color, which is the payoff

Open any color picker. Red, green, blue, each 0 to 255, each one byte.

Slide everything to full. You get white. This is worth a beat of silence, because it contradicts every paint set they have ever used. Additive light is not subtractive pigment. Full red plus full green is yellow, which nobody predicts.

So a screen color is three bytes. 24 bits. About 16.7 million combinations, and if you want to feel that number, 2²⁴ is just the doubling they did with coins, carried out further.

This is the moment the lesson stops being arithmetic. They just watched an abstract encoding produce something they can see.

## Where I put hexadecimal, and how little of it

Hex is not in the AP CSP Course and Exam Description. I teach it anyway, briefly, because my students go on to robotics and they will meet `0x` prefixes in register maps, and I would rather it be a familiar shape than a fresh mystery.

But I do not motivate it the way most sources do. The usual entry point is memory addresses and pointers, which requires machinery my students do not have yet. Instead I jump to [my hex slides](https://docs.google.com/presentation/d/11_Jk-uo5r7tasBkRFtKpgR9WTcAd68xVD7TSsAbU79Q/edit#slide=id.g286921a3f8c_8_13) and frame it this way:

> Writing `11011011` gets old. One hex digit holds exactly four bits. Four bits only reach 15, so we borrow letters for 10 through 15. Split a byte down the middle, convert each half, and you get two characters instead of eight. `FF` is 255. That is the whole reason `#FFFFFF` is white.

Two digits, one byte, `FF` is the ceiling. That framing connects directly to the color picker already on the screen. The `0x` prefix gets one sentence as a "you'll see this again in robotics" deposit and nothing more. It is not the point today.

I am explicit with students that hex is enrichment. They will not be asked to convert hex on the AP exam. Binary to decimal and back, they will.

## AP CSP alignment

This is Big Idea 2, Data. The vocabulary I make sure gets said out loud and written down: **bit**, **byte**, **binary**, **base 2**, **base 10**, **decimal**, **hexadecimal**, **base 16**, **RGB**. The CED skill being practiced is representing the same value in multiple ways and explaining why a representation was chosen, which the color picker demonstration does almost for free.

The two agreements also set up **overflow** later. When you eventually ask what happens if you need 256 and only own eight coins, the answer is already in their hands.

## Things to watch for

**Reading right to left.** The 1s place is on the right, and a surprising number of students lay their coins out backwards. Catch it during the coin phase, before any 0s and 1s exist. It is much cheaper to correct there.

**Leading zeros.** `11011` and `00011011` are the same number. Connect it back to the coins: you owned the 128, you just did not spend it.

**"Binary is how computers store numbers."** Half-true and worth pushing on. Binary is how computers store *everything*. Numbers are just the easiest case to see first, and the color picker is the counterexample that makes the point without a speech.

**Zero.** Prices started at 1. Numbers start at 0. Name the shift explicitly or a few students will insist a byte holds 1 through 255.

## Additional resources

I built a two-sided graphic organizer to go with this, mostly for students who want the writing-it-down version. Manipulatives evaporate; paper does not.

Side 1 is the store, the cash register grid, place value, and decimal-to-binary practice. Side 2 is binary-to-decimal, a hex nibble table with almost every digit left blank, splitting a byte into two hex digits, and an RGB table where they fill in white and full green and work out what `#FFFF00` looks like.

The nibble table is deliberately empty. Filling in `2` through `9` is boring and takes eleven seconds, and those eleven seconds are what make `A` through `F` feel like an obvious continuation rather than an arbitrary rule.

[Binary and Hexadecimal graphic organizer](https://docs.google.com/document/d/1_A4mEu1DL6oSWnysKWZi3O9H_U9x4NgThMZAOd3oZY4/edit?usp=sharing)

For extra decimal-to-binary practice after the lesson, [my binary learning game](/bingame2.html) drills the same conversions on a screen. And once students can read a byte, [my 2048 game](/2048.html) is a place to notice powers of two doubling in the wild, outside of any binary framing at all.

David Malan teaches this same material differently, starting from switches and gates rather than a store. [His binary walkthrough in Harvard's CS50](https://www.youtube.com/watch?v=3LPJfIKxwWc&t=6659s) is worth watching alongside Kiang's if you want a second entry point into the same idea.

## Credit

The store, the no-change rule, the wrong-on-purpose examples, and the cash register are Douglas Kiang's, from [his walkthrough video](https://www.youtube.com/watch?v=AzhjGfxL574). I have added the organizer, the hex framing, and the coin-by-coin extension, but the design of the activity is his and it is better than what I would have written.

The lineage goes back further, to the [CS Unplugged binary card activities](https://www.csunplugged.org/en/topics/binary-numbers/) out of Canterbury, which many of us met first. Kiang's contribution is the store frame and the deliberate wrong answer, and both are the parts that make it work in a room full of students who have not decided yet whether they like this class.