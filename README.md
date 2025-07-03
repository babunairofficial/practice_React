# 🛠️ practice_React

Welcome to **practice_React** — a fresh start to reinforce and sharpen my understanding of ReactJS through hands-on coding and structured practice.

## 📌 About This Repository

This repository serves as a personal ReactJS sandbox, where I revisit core concepts, implement real-world patterns, and reinforce fundamentals.  

Over time, it will evolve into a well-organized collection of my ReactJS exercises, experiments, and deep dives — covering everything from fundamentals to advanced concepts.

I plan to build this repository gradually by:
- Revisiting core topics like components, props, and hooks
- Practicing design patterns and architecture in React
- Exploring best practices and performance optimization

This initiative is part of my decision to go back to the basics — not because I’m starting over, but because **mastery lies in refinement**.

Stay tuned — this is just the beginning.

---

##  Step 1: Cleaning Up the Boilerplate

As a first step in this journey, I focused on revisiting the **essential practice of cleaning up the default React boilerplate code** — a foundational task that sets the stage for clean, scalable development.

I explored two common ways to initialize a React project:

1. **Using Create React App (CRA)**
   ```bash
   npx create-react-app 01basics

2. **Using Vite (Modern and Lightweight)**
   ```bash
   npm create vite@latest

In both cases, I carefully removed unnecessary files, default styles, and placeholder content to get a clean starting point. This helps reduce clutter, confusion, and distractions before diving into real development.

Food for thought : "To learn something, you must unlearn what is no longer useful."

This cleanup ritual is not just technical—it's philosophical. It represents a mindset of clarity, intentionality, and respect for the codebase. Every great project begins with a clean slate.

---

##  Step 2: Understanding React Flow & Project Conventions

After cleaning up the default setup, I dedicated time to understanding and aligning with the **right development conventions**, the **React component flow**, and the differences between using `.js` and `.jsx` files — especially in **Create React App (CRA)** and **Vite** environments.

###  Focus Areas:

-  **Folder and file structure** best practices
-  **How React "flows"** — from entry point to rendering components
-  **`.js` vs `.jsx` usage** in CRA and Vite
-  **Import/export conventions**, extension awareness, and naming clarity

---

###  React Flow 

Every React project follows a general flow:

1. **Entry Point** — `index.js` or `main.jsx`
2. **Root Rendering** — ReactDOM renders the root `<App />` component
3. **Component Tree** — `<App />` acts as the central controller and renders other components


src/
├── index.js / main.jsx     # Entry point
├── App.js / App.jsx        # Root component

While both CRA and VIte support JSX in .js files, using .jsx makes your intent clear — especially in component files. Vite, by default, encourages .jsx usage for JSX-heavy files.

---