# Digital Spaniel Agency - Homepage Clone

This project is a responsive homepage implementation for **Digital Spaniel Agency**, built with modern frontend tooling.  
It demonstrates a sticky/floating header, responsive navigation, mock data loading via Redux Toolkit, and a scalable component structure.

---

## ✨ Features

- **Floating Header**  
  - Sticks to the top of the page.  
  - Hides on scroll down and reappears on scroll up.  
  - Transparent background on desktop, white background on mobile.  

- **Responsive Navigation**  
  - On desktop: inline navigation links with hover underline animation.  
  - On mobile/tablet: collapses into a hamburger menu that slides in/out.  
  - Closes when tapping outside or toggling the close button.  

- **Hero Section**  
  - Side-by-side text and background image on desktop.  
  - Stacked layout on smaller screens.  

- **Data Layer**  
  - **Redux Toolkit** for global state management.  
  - Data is loaded asynchronously from:  
    - **Faker mock generator** (imitating API calls).  
    - **Local JSON files** (e.g., testimonials).  

- **Testimonial Slider**  
  - Desktop: shows active testimonial in the center with previous/next slides on the sides.  
  - Mobile: shows only the active testimonial with navigation dots below.  
  - Animated with **Framer Motion**.  

---

## 🛠️ Tech Stack

- [React](https://react.dev/) (with [Vite](https://vitejs.dev/)) – frontend setup.
- [Tailwind CSS](https://tailwindcss.com/) – CSS framework.
- [Redux Toolkit](https://redux-toolkit.js.org/) – state management & async thunks.
- [Faker.js](https://fakerjs.dev/) – mock data generation.
- [Framer Motion](https://www.framer.com/motion/) – animations.

---

## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/bhowmik94/digital-spaniel-homepage.git
cd digital-spaniel-homepage
```
### 2. Install dependencies
```bash
npm install
```
### 3. Run the development server
```bash
npm run dev
```
## 👨‍💻 Developer
Developed by Sourav Bhowmik.
Built with ❤️ using React + Vite + Tailwind + Redux Toolkit.
