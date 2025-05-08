# 🧠 SoftSell – Software License Resale Platform

A modern, responsive single-page website for a fictional software resale startup called **SoftSell**. This project includes an AI-powered chatbot and is built with performance, clarity, and usability in mind.

## 🌐 Live Site

[🔗 View Live](https://softsell-three.vercel.app/)

## 📁 Features Implemented

### ✅ Core Sections

- **Desktop navbar**
  - Navbar with marketplace name, navigation buttons and "sell my licenses" button.
- **Mobile menu**
  - A Mobile hamburger menu with the same navigation buttons as same as the desktop navbar.
- **Hero Section**
  - Headline, subheading, and primary CTA button ("Sell My Licenses")
- **How It Works**
  - Three-step guide with custom icons: Submit → Valuation → Payment
- **Why Choose Us**
  - Four value propositions with icons and short descriptions
- **Customer Testimonials**
  - Two sample reviews with names, roles, and companies
- **Contact Form**

  - Name, email, company, license type (dropdown), and message
  - Frontend validation (required fields)

- **Footer**
  - Footer with marketplace name , navigation button and copyright text.

### Enhancements

- **Responsive Design**
- **Tailwind CSS** for fast and consistent styling
- **Framer Motion** for animations
- **Reusable Components**: Hero, Section containers, Fade-up effects,
- **SEO Meta Tags**: Title, description,favicon and opengraph image

## 🎨 Design Choices

- **Color palette**: Black background with white text for strong contrast and clarity
- **Typography**: IBM Plex Sans for a clean, professional look
- **Icons**: Heroicons for consistency and minimalism
- **Animations**: Framer Motion used for smooth fade and reveal effects
- **Layout**: Mobile-first responsive sections with clean stacking
- **Component Structure**: Reusable components for better maintainability

## 🤖 AI-powered customer chat widget

A lightweight AI-powered chatbot integrated into the SoftSell landing page.

**Tech Used:**

- Next.js API Route
- LangChain JS
- Google genai API

**Features:**

- Loads context from a static JSON file
- Uses LangChain for prompt handling
- Responds only to relevant queries with fallback handling
- No vector DB — minimal, fast setup

## 🔧 Tech Stack

- [Next.js 14 (App Router)](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [LangChain (JavaScript)](https://js.langchain.com/)
- [Google genai](https://aistudio.google.com/)
- [Vercel](https://vercel.com/) for deployment

## ⏱ Time Spent

| Task                      | Time          |
| ------------------------- | ------------- |
| Home page sections        | ~7 hrs        |
| Chatbot (LLM Integration) | ~4 hrs        |
| Animations                | ~0.5 hrs      |
| **Total**                 | **~11.5 hrs** |

## 🧪 Run Locally

#### 1. Clone the repo:

```bash
  git clone https://github.com/jamshed-uddin/softsell.git
```

#### 2. Change directory

```bash
  cd softsell
```

#### 3. Install packages

```bash
npm install
```

#### 4. Run locally

```bash
npm run dev
```

## Dependencies

```json
 "dependencies": {
    "@google/generative-ai": "^0.24.1",
    "@heroicons/react": "^2.2.0",
    "@langchain/core": "^0.3.55",
    "@langchain/google-genai": "^0.2.7",
    "axios": "^1.9.0",
    "langchain": "^0.3.24",
    "motion": "^12.10.4",
    "next": "15.3.2",
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "react-hook-form": "^7.56.2"
  },
  "devDependencies": {
    "@eslint/eslintrc": "^3",
    "@tailwindcss/postcss": "^4",
    "eslint": "^9",
    "eslint-config-next": "15.3.2",
    "tailwindcss": "^4"
  }
```
