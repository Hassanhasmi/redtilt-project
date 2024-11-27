
# React Website Project

This is a React-based website project that includes several key sections such as services, blogs, and contact forms, built using React and styled with Bootstrap. The goal of this project is to provide a responsive, user-friendly interface with clear sections for services, blog posts, and a contact form for user interaction.

## Features

- **Services Section**: A dynamic section displaying the services provided with icons and descriptive lists.
- **Blogs Section**: Displays a preview of a blog post with an option to read more.
- **Contact Us Section**: Includes a form for users to submit their details and queries. It also allows reserving a call for project discussions.
- **Responsive Design**: The layout is fully responsive, making it suitable for different screen sizes, from mobile to desktop.
  
## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **Material UI**: Provides pre-built components and icons for faster UI development.
- **Bootstrap**: A framework for building responsive and mobile-first websites.
  
## Setup Instructions

To set up the project locally, follow these steps:

### 2. Install dependencies

This project uses `npm` for dependency management. Run the following command to install the necessary dependencies:

```
npm install
```

### 3. Start the development server

To run the project in development mode, execute:

```
npm start
```

This will start a local development server. Open your browser and go to `http://localhost:3000` to view the application.

## File Structure

```plaintext
/react-website
│
├── /src
│   ├── /components
│   │   ├── Blogs.js            # Blog section displaying a preview
│   │   ├── ContactUs.js        # Contact form and call reservation section
│   │   ├── Services.js         # Services section with descriptions
│   ├── /assets
│   │   ├── images
│   │   │   └── bloging.jpeg    # Image used in the Blogs section
│   ├── App.js                  # Root component that includes all sections
│   ├── index.js                # Entry point for the React application
│
├── /public
│   ├── index.html              # HTML template for React app
│
├── package.json                # Project dependencies and configurations
└── README.md                   # This README file
```

## Components Overview

### `Blogs.js`

This component displays a list of blog posts with an image and description. It is designed to be responsive and shows a preview of a blog post along with a "Read More" button.

### `ContactUs.js`

The contact form allows users to send their queries or request a call. It includes fields for the user's full name, email, company size, and a message.

### `Services.js`

This component lists the services offered with icons and detailed information. It uses the Material UI icons to represent different service categories such as Development (Dev), Managed Services Provider (MSP), Cloud, and Cybersecurity.

## Styling

- **Bootstrap**: The app uses Bootstrap for layout and responsive design. Bootstrap classes like `container-fluid`, `row`, `col`, etc., are used throughout the app to create a grid layout.
- **Material UI**: Material UI components and icons are used to add interactivity and aesthetics to the UI, such as the `CheckCircleIcon` and icons in the services section.


## Contact

If you have any questions or suggestions, feel free to reach out to the project owner at: 

- Email: hassanhashmih5965@gmail.com
