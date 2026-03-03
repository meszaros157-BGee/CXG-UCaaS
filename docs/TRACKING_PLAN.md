# Tracking Plan

## Google Analytics
- **Status:** Placeholder
- **Implementation:** Add GA4 measurement ID via `next/script` or `@next/third-parties`
- **Measurement ID:** TBD

## Event Tracking
- **Status:** Placeholder
- Events to track:
  - Page views (automatic with GA4)
  - Section scroll depth
  - CTA button clicks
  - Accordion/tab interactions
  - Time on page

## Form Submission Tracking
- **Status:** Placeholder
- Track form submissions as GA4 events or via webhook
- Capture: submission timestamp, source page, form type

## Vercel Analytics
- **Option:** Enable Vercel Web Analytics and/or Speed Insights
- **Implementation:** `pnpm add @vercel/analytics @vercel/speed-insights`
- **Status:** Not yet installed

## Conversion Goals
- **Status:** Placeholder
- Goals to define:
  - Primary: Stakeholder reaches CTA / next steps
  - Secondary: Time spent on key sections
  - Tertiary: Return visits
