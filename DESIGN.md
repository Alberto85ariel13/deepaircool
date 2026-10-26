---
name: Deep Air Cool Solutions
description: A clear, image-led digital presence for Miami cooling services.
colors:
  navy: "#071d31"
  navy-deep: "#041320"
  blue: "#087ac5"
  cyan: "#47c4e5"
  ice: "#174356"
  paper: "#0b2639"
  ink: "#eaf5fa"
  muted: "#bdd2df"
  line: "#365367"
typography:
  display:
    fontFamily: "Manrope, sans-serif"
    fontSize: "clamp(3.25rem, 7.2vw, 6rem)"
    fontWeight: 750
    lineHeight: 1.07
    letterSpacing: "-0.035em"
  body:
    fontFamily: "Manrope, sans-serif"
    fontSize: "16px"
    lineHeight: 1.7
rounded:
  control: "3px"
  surface: "14px"
spacing:
  section: "clamp(88px, 11vw, 160px)"
components:
  button-primary:
    backgroundColor: "{colors.cyan}"
    textColor: "{colors.navy-deep}"
    rounded: "{rounded.control}"
    padding: "18px 24px"
---

# Design System: Deep Air Cool Solutions

## Overview

**Creative North Star: "Field work in focus"**

The site uses supplied brand artwork and real field photography, with authentic technical photographs providing visual proof of the company's work. Spacious editorial typography and layered deep blue surfaces give the images room, while the cyan call action stays immediately recognizable. Spanish and English share the same composition.

**Key Characteristics:** Real project imagery; large direct headlines; layered dark blue section rhythm; visible phone calls.

## Colors

Deep navy grounds the hero and closing sections. Medium blue and teal surfaces distinguish the editorial sections without white bands. The existing blue brand family supplies a brighter cyan action color; body copy uses soft ice blue.

## Typography

Manrope carries display, navigation, and body copy. Display type uses restrained negative tracking and responsive `clamp()` sizing. Small uppercase labels are reserved for wayfinding and action text.

## Layout

The content container is at most 1360px wide. Desktop sections use asymmetric editorial grids; under 900px they become single-column layouts. The mobile call action stays fixed at the bottom without covering content.

The homepage hero is a local exception to that section breakpoint: above 1000px, left-aligned copy, the primary phone action, and the WhatsApp form trigger sit over the darker left side of `/public/images/commercial-hero.webp`, preserving the brand artwork on the right. At 1000px and below, the complete artwork appears above the left-aligned text and form. This composition applies to the homepage hero, not the global section layout.

## Elevation & Depth

Depth comes mainly from photographs, overlays, and tonal changes among dark blue surfaces. The scrolled navigation and mobile call bar use subtle shadows to separate from content.

## Shapes

Controls have crisp 3px corners. Images are rectangular and fill their frames; the photos themselves supply visual texture.

## Components

The primary button is cyan with dark text and a directional arrow. Service rows are separated by fine rules and change color on focus or hover. The navigation becomes an opaque, blurred dark surface on scroll.

The homepage hero uses a native `details` disclosure for the secondary WhatsApp request form, with no modal. Its dark bordered panel and inputs reuse the existing navy/cyan palette and Manrope. Name, phone, and service are required; location and message are optional. Submission opens WhatsApp at `wa.me/13054812522` with a request ready for the visitor to review and send, without automatically sending it. Spanish is the default and English has equivalent labels, validation, and behavior. The image has desktop parallax; mobile and reduced-motion preferences disable that movement, and reduced motion also disables the form reveal animation. A decorative SVG follows the three ceiling vents in the artwork, moving soft cyan streaks along the painted airflow. It shares the image's coordinate system and parallax, pauses offscreen or in a hidden tab, and is omitted for reduced motion while the original static airflow remains visible.

## Do's and Don'ts

The WhatsApp disclosure opens upward in an absolutely positioned panel over the hero text, keeping the trigger and hero height stable. The panel has its own scroll area, a sticky close control, Escape and outside-pointer dismissal, and restores focus to its trigger when closed from inside. Its height follows available viewport space below navigation and above the mobile call bar, including the visual viewport when a keyboard opens.

- Do use the supplied commercial HVAC artwork in the homepage hero and retain authentic technical photographs elsewhere, including the existing van asset and business/social imagery.
- Do keep a direct call action visible on every page.
- Do preserve bilingual page parity and local content facts.
- Don't add invented statistics, testimonials, or geographic landing pages.
