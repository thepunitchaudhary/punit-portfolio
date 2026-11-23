# Punit Kumar | Developer Portfolio

Personal portfolio of Punit Kumar, an MCA graduate and fresher focused on Generative AI, AI/ML, Data Science and Python development.

**Live site:** _add your Vercel link here after deploying_

## What's inside

- Hero, About, Skills, Experience, Projects, Certifications, Education and Contact sections
- Dark, responsive design that works on desktop, tablet and mobile
- Project cards with links to each GitHub repository
- Certification cards with credential links
- Contact form that sends email through Web3Forms
- SEO basics: meta description, share-preview tags, structured data and `robots.txt`
- Accessibility basics: skip link, keyboard focus styles and reduced-motion support

## Tech

Plain HTML, CSS and JavaScript. No framework and no build step, so it loads fast and is easy to host anywhere.

## Project structure

```
punit-portfolio/
├── index.html      # the whole site
├── resume/         # resume PDFs used by the download buttons
├── robots.txt
├── vercel.json     # security headers for Vercel
└── README.md
```

## Run locally

1. Clone the repository.
2. Open `index.html` in a browser, or run `npx serve` in the folder.

## Update content

Open `index.html` and find the block marked `EDIT HERE` inside the script. It holds simple lists for skills, experience, projects and certifications. Add or change an entry, then update the matching card in the HTML if you want it visible without JavaScript.

To add a project:

```js
{n:"Project name", s:"Tech, Tech, Tech", d:"One-line description.", f:["Feature one","Feature two"], g:"https://github.com/your-username/repo"}
```

## Contact form setup

1. Get a free access key at [web3forms.com](https://web3forms.com).
2. Paste it into `FORM_ID` near the top of the script in `index.html`.

Until a key is added, the form opens the visitor's email app instead.

## Deploy on Vercel

1. Push this repository to GitHub.
2. Sign in to [vercel.com](https://vercel.com) with GitHub and choose **Add New, then Project**.
3. Import `punit-portfolio`, keep the defaults and click **Deploy**.

Every push to the main branch redeploys the site automatically.

## Contact

- Email: punit1503ayo@gmail.com
- LinkedIn: https://linkedin.com/in/thepunitchaudhary
- GitHub: https://github.com/thepunitchaudhary