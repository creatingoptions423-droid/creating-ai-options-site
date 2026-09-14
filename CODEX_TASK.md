You are implementing a production-quality static marketing website for Creating AI Options.



PROJECT GOAL

Create the first complete QA-focused redesign of Creating AI Options.



The company/site should now primarily represent:

1\. Software QA

2\. System validation

3\. Acceptance testing

4\. Exploratory testing

5\. AI-enabled software testing

6\. Evidence-driven verification



The site should also retain a secondary R\&D / product-development identity through an internal "Lab" section that presents selected personal/internal projects such as:

\- CaseForge

\- DAT/Axion

\- Dark8



Do not make those projects the primary sales proposition. They are evidence of technical depth and ongoing R\&D.



IMPORTANT POSITIONING

The homepage should immediately communicate:



"Software QA + System Validation"



Primary hero headline:

"Software testing for systems that need to work."



Supporting copy:

"Structured QA, acceptance testing, exploratory testing, and validation for software and AI-enabled systems."



Secondary supporting concept:

"Building as well as breaking."



Use that concept to transition into the internal R\&D / Lab section.



VISUAL DIRECTION

Preserve the design language of the current Creating AI Options site:



\- deep black background

\- wine / dark burgundy accents

\- muted gold

\- ivory / warm white text

\- premium, restrained, serious visual identity

\- editorial serif typography for major headlines

\- modern sans-serif for body text

\- subtle technical/QA instrumentation elements



Add restrained QA-specific visual language such as:

\- PASS

\- FAIL

\- BLOCKED

\- test case IDs

\- evidence labels

\- expected vs observed

\- subtle grids

\- technical trace lines

\- monospace metadata

\- status indicators



Do NOT turn the design into:

\- a hacker aesthetic

\- neon cyberpunk

\- purple AI gradients

\- a terminal-themed gimmick

\- a generic SaaS template



The design should feel like:

premium engineering + disciplined QA + technical credibility.



STACK / IMPLEMENTATION LANES



Public UI:

\- Static HTML5



Styling:

\- Plain CSS



Client-side interaction:

\- Minimal vanilla JavaScript only where necessary



Content:

\- Static source files



Backend:

\- None



Dependencies:

\- Avoid external JS frameworks

\- Avoid unnecessary package managers

\- Avoid build tooling unless absolutely required

\- Prefer zero runtime dependencies



Security implications:

\- No authentication

\- No file uploads

\- No privileged API calls

\- No remote script dependencies unless necessary

\- No inline third-party tracking

\- No unsafe dynamic HTML injection

\- No eval

\- No external fonts if a good system-font fallback can preserve the design

\- Keep the attack surface minimal



PROJECT STRUCTURE



Create:



/

&#x20; index.html

&#x20; qa/

&#x20;   index.html

&#x20; method/

&#x20;   index.html

&#x20; lab/

&#x20;   index.html

&#x20;   caseforge/

&#x20;     index.html

&#x20;   dat-axion/

&#x20;     index.html

&#x20;   dark8/

&#x20;     index.html

&#x20; about/

&#x20;   index.html

&#x20; contact/

&#x20;   index.html

&#x20; assets/

&#x20;   css/

&#x20;     main.css

&#x20;   js/

&#x20;     main.js

&#x20;   images/

&#x20; robots.txt

&#x20; README.md

&#x20; .gitignore



HOMEPAGE INFORMATION ARCHITECTURE



1\. HEADER

Brand:

Creating AI Options



Navigation:

\- QA \& Testing

\- Method

\- Lab

\- About

\- Contact



Primary CTA:

"Discuss a Testing Project"



Header should be polished, compact, and responsive.



2\. HERO



Eyebrow:

SOFTWARE QA + SYSTEM VALIDATION



Headline:

Software testing for systems that need to work.



Body:

Structured QA, acceptance testing, exploratory testing, and validation for software and AI-enabled systems.



Primary CTA:

Explore QA \& Testing



Secondary CTA:

See Our Method



Below the CTAs, add a restrained trust strip such as:

EVIDENCE

REPRODUCIBILITY

VERIFICATION



Do not invent customer names, client counts, testing statistics, certifications, or years of experience.



3\. TESTING CAPABILITIES



Create a section presenting these capabilities:



\- Functional QA

\- Acceptance Testing

\- Exploratory Testing

\- Workflow Validation

\- AI System QA

\- Defect Verification



For AI System QA, describe testing around:

\- instruction adherence

\- workflow consistency

\- tool interaction

\- state behavior

\- failure modes

\- boundary violations

\- unexpected behavior



Do not claim specialized certifications or compliance programs unless explicitly provided.



4\. HOW WE TEST



Create a visual process:



Requirement

→ Test Design

→ Controlled Execution

→ Evidence

→ PASS / FAIL / BLOCKED

→ Reproduction

→ Verification



Use four principles:



Evidence Over Assumption

"A behavior is not verified because it appears correct."



Reproducibility

"Failures should include enough context to reproduce them."



Structured Classification

"PASS, FAIL, BLOCKED, N/A, and observations remain distinct."



Human Judgment

"Automation supports evaluation. It does not replace judgment where behavior is ambiguous."



5\. TESTING IN PRACTICE



Create sanitized sample QA findings.



Use examples like:



TC-017

Cross-feature task navigation



EXPECTED

Referenced task identifier opens the corresponding task.



OBSERVED

Task identifier rendered as plain text instead of a navigable link.



RESULT

FAIL



EVIDENCE

Captured and reproduction path documented.



And:



TC-018

Streaming interruption



EXPECTED

User can interrupt generation during a long response.



OBSERVED

No usable streaming state was exposed before completed output appeared.



RESULT

BLOCKED



Important:

These must be presented as sanitized example findings / example QA evidence.

Do not imply they came from a named client unless explicitly stated.

Do not use the name TabulaKit in public-facing copy unless the page is clearly labeled as a private/internal sample. Prefer anonymized presentation.



6\. LAB



Headline concept:

Building as well as breaking.



Body:

"Our internal R\&D explores governed software, secure workflows, deterministic systems, and experimental AI infrastructure."



Create project cards for:



CaseForge

Category:

Governed legal workflow research



Description:

Structured case operations, review gates, auditability, and controlled AI assistance.



DAT/Axion

Category:

Assistive control systems



Description:

Research into bounded, explainable correction for unstable human input.



Dark8

Category:

Experimental governed systems



Description:

Keep this intentionally broad unless the repository contains a precise approved description.

Do not invent technical claims.



Each card should link to its project page.



7\. ABOUT / PHILOSOPHY



Use restrained language.



Include ideas such as:

\- secure by design

\- explainability by default

\- deterministic behavior where required

\- human review in consequential workflows

\- evidence-driven engineering

\- bounded system behavior



Avoid grandiose claims.



8\. CONTACT



Headline:

Need another set of eyes on your software?



Body:

"Creating AI Options works with developers and technical teams that need structured testing, independent validation, prototype evaluation, or detailed defect reporting."



Create three engagement categories:



QA \& Testing

\- Functional testing

\- Acceptance testing

\- Exploratory testing

\- AI behavior testing



Prototype Validation

\- POC verification

\- Workflow validation

\- Integration checks



Technical R\&D

\- Experimental systems

\- Governed AI

\- Secure architecture research



CTA:

Discuss a Testing Project



Do not invent a contact email if one is not already provided in repository context.

If there is no approved contact email, use a clearly marked placeholder:

CONTACT\_EMAIL\_HERE



PAGE-SPECIFIC REQUIREMENTS



/qa/

Create a dedicated QA \& Testing page with:

\- service overview

\- types of testing

\- AI system QA

\- defect reporting approach

\- evidence model

\- what a QA report contains

\- what "PASS / FAIL / BLOCKED" means



/method/

Create a dedicated Method page showing:

\- intake

\- requirements review

\- test design

\- execution

\- evidence capture

\- defect documentation

\- reproduction

\- verification

\- final report



/lab/

Create the R\&D project directory page.



/lab/caseforge/

Create a concise project profile.

Do not invent implementation details beyond the description given above.



/lab/dat-axion/

Create a concise project profile.

Do not invent implementation details beyond the description given above.



/lab/dark8/

Create a concise project profile.

Keep claims conservative.



/about/

Explain Creating AI Options as:

\- a QA and system-validation practice

\- with an internal R\&D lab

\- focused on disciplined, reviewable, secure system behavior



/contact/

Create a clean contact page with:

\- engagement categories

\- what information to include when reaching out

\- a mailto CTA only if an approved email exists



ACCESSIBILITY



Implement:

\- semantic HTML

\- proper heading hierarchy

\- keyboard navigability

\- visible focus states

\- sufficient contrast

\- alt text where needed

\- prefers-reduced-motion support

\- no motion that interferes with reading

\- mobile-friendly layout

\- responsive navigation



RESPONSIVENESS



Verify at minimum:

\- 360px

\- 768px

\- 1024px

\- 1440px



No horizontal scrolling.

Cards must stack cleanly.

Navigation must remain usable on small screens.



SEO / METADATA



Each page should include:

\- descriptive <title>

\- meta description

\- canonical path placeholder if necessary

\- Open Graph metadata using the Creating AI Options name



Do not invent social handles.



ROBOTS



Create a safe default robots.txt allowing normal indexing.



CONTENT RULES



STRICTLY DO NOT:

\- invent clients

\- invent testimonials

\- invent partnerships

\- invent certifications

\- invent audit results

\- invent QA metrics

\- invent revenue

\- invent usage statistics

\- invent dates

\- invent team size

\- invent customer names

\- invent compliance claims

\- imply projects are production-ready if not stated

\- imply external customer deployment without evidence



Use grounded, conservative wording.



DESIGN DETAILS



Use CSS custom properties for:

\- background

\- surface

\- wine

\- gold

\- ivory

\- muted text

\- borders

\- success

\- fail

\- blocked



Use clear reusable classes.



Suggested design system concepts:

\- .container

\- .section

\- .card

\- .eyebrow

\- .hero

\- .btn

\- .btn-primary

\- .btn-secondary

\- .status

\- .status-pass

\- .status-fail

\- .status-blocked

\- .qa-record

\- .mono

\- .project-card



Do not hardcode styles repeatedly inline.



JAVASCRIPT



Only add JavaScript where necessary, such as:

\- responsive mobile nav

\- current year in footer

\- small progressive enhancements



The site must remain functional if JavaScript is disabled.



README



Create a README.md containing:

\- project purpose

\- architecture

\- file structure

\- how to preview locally

\- deployment notes for Cloudflare Pages

\- security posture

\- accessibility notes

\- content-editing guidance



Include a section:

"Production Safety"



State clearly that this project should be previewed and QA-verified before replacing the current Creating AI Options production deployment.



GIT SAFETY



Before editing:

1\. Inspect the working directory.

2\. Confirm this is the intended repository.

3\. Do not modify any other project.

4\. Do not deploy anything.

5\. Do not change Cloudflare.

6\. Do not change DNS.

7\. Do not connect external services.



IMPLEMENTATION PROCESS



Follow this sequence:



1\. Inspect repository.

2\. Create the complete directory structure.

3\. Implement shared CSS.

4\. Implement homepage.

5\. Implement QA page.

6\. Implement Method page.

7\. Implement Lab pages.

8\. Implement About page.

9\. Implement Contact page.

10\. Implement minimal JS.

11\. Create robots.txt.

12\. Create README.md.

13\. Run local validation.

14\. Check all internal links.

15\. Check responsive behavior.

16\. Check semantic/accessibility basics.

17\. Check for placeholder/fabricated claims.

18\. Produce a completion report.



ACCEPTANCE CRITERIA



PASS only if:



\- all required pages exist

\- all navigation links work

\- all project links work

\- there are no broken internal links

\- there are no invented claims

\- there are no external framework dependencies

\- design matches black / wine / gold / ivory direction

\- QA is clearly the primary company focus

\- R\&D Lab is clearly secondary

\- site works without JS

\- site is mobile responsive

\- basic accessibility requirements are met

\- no backend was introduced

\- no Cloudflare or DNS changes were made

\- README exists

\- production remains untouched



COMPLETION REPORT



At the end, provide:



1\. Files created

2\. Files modified

3\. Architecture summary

4\. Visual design summary

5\. Accessibility checks performed

6\. Responsive checks performed

7\. Internal link validation results

8\. Security/dependency review

9\. Known limitations

10\. Exact local preview instructions

11\. Confirmation that no deployment or DNS changes were made



Do not stop after scaffolding.

Implement the complete first-pass site and verify it locally.

