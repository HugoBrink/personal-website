# Hugo Brink's Portfolio

This project is a personal portfolio website built with Astro, React, and TailwindCSS. It showcases Hugo Brink's skills, experience, and projects as a Fullstack Developer.

## Features

-   Responsive design
-   Project showcase
-   Work experience timeline
-   Skills and technologies used
-   Contact information

## Technologies Used

-   Astro
-   React
-   TailwindCSS
-   JavaScript/TypeScript

## Project Structure

The main components of this project include:

### Last Projects

Located in `src/content/last_projects.js`, this file contains an array of projects, each with details such as:

-   Organization name
-   Project type
-   Description
-   Technologies used
-   Links (if available)

### Experience Timeline

The `ExperienceItem` component, found in `src/components/experience/ExperienceItem.jsx`, renders a timeline of work experiences. It includes:

-   Date ranges
-   Job titles and companies
-   Job descriptions
-   Technologies used in each role

## Setup and Installation

1. Clone the repository
2. Install dependencies with `npm install`
3. Run the development server with `npm run dev`

## Deployment

This project is configured to be deployed on Vercel. You can deploy your own instance by connecting your GitHub repository to Vercel.

## Customization

To customize this portfolio for your own use:

1. Update the project details in `src/content/last_projects.js`
2. Modify the experience information in the `experience` array within `ExperienceItem.jsx`
3. Adjust the personal information and skills in relevant components

## License

This project is open source and available under the [MIT License](LICENSE).
