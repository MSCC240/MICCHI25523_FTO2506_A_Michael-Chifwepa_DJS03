🎧 DJS03: React Podcast Landing Page
📘 Overview

This project is a React-based landing page for a podcast discovery app. It dynamically fetches podcast data from an external API and displays it in a responsive grid layout. The goal is to demonstrate data fetching, modular React component structure, rendering logic, and responsive design principles.

🚀 Features

Live Data Fetching: Retrieves podcast data from https://podcast-api.netlify.app/
 on initial page load.

Dynamic Rendering: Displays podcast previews in a responsive grid using reusable React components.

Interactive UI States:

Loading indicator while data is being fetched

Error message for failed requests

Empty state message for no results

Reusable Podcast Card Component: Shows each podcast’s image, title, season count, genre tags, and last updated date (formatted in human-readable form).

Fully Responsive: Adapts layout across desktop, tablet, and mobile screen sizes using CSS Grid or Flexbox.

🧠 Core Objectives

Fetch Podcast Data using the Fetch API inside a useEffect() hook.

Store Data in state using useState().

Render Podcast Cards dynamically using .map().

Display Loading, Error, and Empty States clearly.

Format Dates using date-fns or a custom function (e.g., “2 days ago”).

Ensure Responsiveness across major breakpoints:

Desktop (≥1200px)

Tablet (~768px)

Mobile (~375px)

⚙️ Technical Requirements

Framework: React (Functional Components only)

Hooks Used: useState, useEffect

API: https://podcast-api.netlify.app/

Styling: CSS Grid or Flexbox

Optional Frameworks: Tailwind CSS or similar

Date Formatting: date-fns (recommended)

Documentation: JSDoc comments for key components and functions


🧱 Components
PodcastCard.jsx

Displays individual podcast details:

Image

Title

Number of Seasons

Genre Tags

Last Updated (formatted date)

LoadingIndicator.jsx

Simple spinner or message shown during data fetch.

ErrorMessage.jsx

Shown if API fetch fails or network errors occur.

EmptyState.jsx

Displayed when no podcasts are returned from the API.

💅 Responsiveness

Implemented using CSS Grid or Flexbox with media queries:

Mobile: Single-column layout

Tablet: Two-column grid

Desktop: Four-column grid

🧰 Installation & Setup

Clone this repository

git clone https://github.com/your-username/react-podcast-landing.git
cd react-podcast-landing


Install dependencies

-npm install


Run the app

-npm start


Build for production

npm run build

📄 Deliverables Checklist

✅ Functional React app that fetches and displays podcast data
✅ Reusable PodcastCard component
✅ Loading, error, and empty states implemented
✅ Responsive grid layout for all screen sizes
✅ Clean, modular, and documented code
