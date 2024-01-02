
![App Logo](<URL_TO_YOUR_LOGO_IMAGE>)

# Live News App with MediaStack API and Next.js

## Overview

Live News App with Next.js and MediaStack API. This app allows users to explore live news, search for articles, navigate various categories, and switch to dark mode for a comfortable reading experience. The implementation includes Next.js, TypeScript, dynamic routing, static data, Tailwind CSS, dark mode, React-timago, and HeroIcons.

## Table of Contents
- [About the Project](#about-the-project)
  - [Features](#features)
  - [Screenshots](#screenshots)
  - [Demo](#demo)
  - [Live Demo](#live-demo)
  - [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
      - [Next js ](#nextjs-installation)
       - [MediaStack API and Configuration ](#mediastack-api-and-configuration)
       - [Tailwind ](#tailwind-installation)
     - [Clone Project](#clone-project)
- [Contact](#contact)

# About the Project

## Screenshots

![Screenshot (343)](https://github.com/Riddhi-chavan/The-Live-News/assets/130183432/6e9fa2a3-10db-402d-a1ed-c18bdb0cba66)

## Demo 

https://github.com/Riddhi-chavan/The-Live-News/assets/130183432/2357921f-2575-4d85-ba74-53c0ec2c410d

## [Live Demo](https://the-live-news.vercel.app/)

## Features

- Live news updates
- Search articles by keywords and categories
- Dark mode for enhanced reading
- Responsive design for a seamless experience
- Dynamic routing for efficient navigation
- Read full articles with a "Read More" option


## Tech Stack

- Next.js
- TypeScript
- MediaStack API
- Tailwind CSS
- React-timago
- HeroIcons

# Getting Started

### Prerequisites

- Sign up for a MediaStack API account [here](https://mediastack.com/)
- Install Nodjs  [here](https://nodejs.org/en)
- Sign up for a heroIcons [here](https://heroicons.com)

## Installation

## Nextjs Installation 
To create a new Next.js project, you can use the following commands:

  - Open your terminal.
  - Run the following command:
      - With npm
      ```bash
      Install my-project with npm 
      ```
  - Start the development server: 
    ```bash
    npm run dev
    ```

### MediaStack API and Configuration

- Sign up for a MediaStack API account here.
- Obtain your API key and add it to your .env file:
```bash
MEDIASTACK_API_KEY=your-api-key 
```
### Tailwind Installation 

To install Tailwind CSS in your project, you can follow these steps:

- Navigate to your project directory in the terminal.

 - Run the following commands:
  
    ```bash 
    npm install -D tailwindcss postcss autoprefixer
    ```
    ```bash
    npm install -D tailwindcss postcss autoprefixer
    ```

  Configure your template paths

  ```bash
  module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

Add the Tailwind directives to your CSS. Open your global CSS file and add the following Tailwind directives:

```bash
@import 'tailwindcss/base';
@import 'tailwindcss/components';
@import 'tailwindcss/utilities';
```

OR 

if you used the with-tailwindcss template during Next.js project creation:

```bash
npx create-next-app -e with-tailwindcss news-app
```

### Clone Project
  - git clone  -   https://github.com/Riddhi-chavan/The-Live-News.git
  - npm install
  - npm run dev

Visit http://localhost:3000 in your browser to see the app.


# Contact

Email:riddhic164@gmail.com

Project Link: https://github.com/Riddhi-chavan/The-Live-News


Thank you
for checking out my project! If you have any suggestions or find issues, feel free to open an [issue](https://github.com/Riddhi-chavan/The-Live-News/issues) or submit a [pull request](https://github.com/Riddhi-chavan/The-Live-News/pulls). Your feedback is highly appreciated!

