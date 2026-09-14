# Creating AI Options

A static, QA-focused marketing website for Creating AI Options. Software QA,
system validation, acceptance testing, exploratory testing, and evidence-driven
verification are the primary focus. The internal Lab is a secondary R&D directory.

## Architecture

Nine complete HTML5 pages share one plain CSS file and one small vanilla JavaScript
file. There is no build step, package manager requirement, runtime dependency,
backend, authentication, form submission, or API integration. All page content and
navigation are present in source HTML. JavaScript only enhances the mobile menu.

```text
/
  index.html
  qa/index.html
  method/index.html
  lab/index.html
  lab/caseforge/index.html
  lab/dat-axion/index.html
  lab/dark8/index.html
  about/index.html
  contact/index.html
  assets/css/main.css
  assets/js/main.js
  assets/images/favicon.svg
  robots.txt
  README.md
  COMPLETION_REPORT.md
  .gitignore
  CODEX_TASK.md                 Original implementation brief
```

## Local preview

Python 3 is needed only to serve the files locally, not to build or run the deployed
website. In Windows PowerShell:

```powershell
cd C:\Dev\creating-ai-options-site
py -3 -m http.server 8000 --bind 127.0.0.1
```

Or in WSL:

```bash
cd /mnt/c/Dev/creating-ai-options-site
python3 -m http.server 8000 --bind 127.0.0.1
```

Open http://127.0.0.1:8000/ in a browser. Stop the server with Ctrl+C.
Use an HTTP server; root-relative navigation and assets are not intended for
opening individual files through `file://`. The site assumes hosting at `/`.

## Visual system

`assets/css/main.css` defines the black, wine, muted gold, ivory, status, border,
surface, and muted-text color tokens. Georgia headlines, system sans-serif body
text, and system monospace metadata avoid font downloads. The verification
diagram is an inline, accessible SVG. No stock imagery or remote assets are needed.
Result labels use text and color together; illustrative records are labeled as
sanitized examples and do not assert client work or published evidence artifacts.

## Accessibility

Pages use semantic landmarks, a skip link, a single H1, ordered headings, named
navigation, visible focus indicators, and native links and buttons. The small-screen
menu supports Enter/Space and Escape; its expanded state is exposed with ARIA.
Without JavaScript, navigation remains visible. Cards stack at smaller widths.
Reduced-motion preferences are supported, and no animation is required to read
content. The diagram has an accessible title; decorative marks are hidden from
assistive technology. See `COMPLETION_REPORT.md` for checks actually performed.

## Security posture

No remote scripts, external fonts, analytics, cookies, storage, uploads, network
APIs, credentials, or dynamic HTML injection are used. The script does not use
`eval` or `innerHTML`. All resources are local. The contact placeholder is plain
text: there is no fabricated address, nonfunctional form, or mailto target.
The local Python preview server is bound to loopback and is not a production server.

## Content editing

- Edit text directly in the corresponding `index.html`; there is no generator or
  template runtime. Keep shared headers and footers synchronized across all pages.
- Keep QA primary and the Lab secondary. Do not add client names, testimonials,
  certifications, performance numbers, production-readiness claims, or project
  implementation details without approved source material.
- Keep the sample QA findings explicitly illustrative. Their evidence notes are
  sample content, not assertions that downloadable evidence is available.
- Replace `CONTACT_EMAIL_HERE` on `/contact/` only when an approved email exists.
  Then replace the pending-contact block with a working, labeled `mailto:` link.
- Canonical links and `og:url` currently contain path-only placeholders. Prepend
  the approved production origin on every page before publication. No domain or
  social handle has been invented. An Open Graph image is not supplied.
- Update each page's title and description alongside substantive content edits.
- Check navigation, heading order, focus visibility, no-JS behavior, and layouts
  at 360, 768, 1024, and 1440 CSS pixels after changes.

## Cloudflare Pages deployment notes

Documentation only: no deployment or Cloudflare configuration is performed by
this project. For a future authorized release, this is a plain static site with
no framework preset or build command. Publish the HTML pages, `assets/`, and
`robots.txt`, preserving directory paths. Do not publish `.git/`, local tools,
task documents, or QA reports. A staged static output directory is preferable to
uploading the whole working tree. No Pages Functions, workers, service bindings,
environment secrets, or DNS changes are required by the implementation.

`robots.txt` allows normal indexing as requested. It is not an access-control
mechanism; keep unfinished previews local or use approved preview access controls
if a hosted preview is authorized later.

## Production Safety

This project must be previewed and QA-verified before replacing the current
Creating AI Options production deployment. Review the content, supply the approved
contact email and production canonical origin, and confirm all routes on the
intended static host. The first-pass implementation does not authorize publication.
No production deployment, Cloudflare, DNS, or external-service changes have been made.
