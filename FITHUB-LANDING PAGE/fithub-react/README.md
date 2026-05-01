# ZoneFlex - Gym Landing Page (React)

A modern, responsive landing page for ZoneFlex Gym, converted from a static HTML/Tailwind site to a dynamic React application using Vite.

## Features
- **Modern Stack**: Built with React 18, Vite, and TailwindCSS 3.
- **Responsive Design**: Fully responsive layout for Mobile, Tablet, and Desktop.
- **Interactive UI**: Working mobile menu and hover effects.
- **Component Based**: Clean component structure for easy maintenance.

## Getting Started

### Prerequisites
- Node.js (version 16 or higher) installed on your machine.
- npm (Node Package Manager) which comes with Node.js.

### Installation

1.  **Navigate to the project directory:**
    ```bash
    cd fithub-react
    ```

2.  **Install Dependencies:**
    ```bash
    npm install
    ```

3.  **Setup Assets:**
    *Note: The project uses images located in `public/assets`. If you are cloning this fresh, ensure the images from the original `Components/Public` folder are copied into `public/assets`.*

### Running Development Server
To start the local development server with Hot Module Replacement (HMR):

```bash
npm run dev
```
Open your browser and visit `http://localhost:5173`.

### Building for Production
To create an optimized production build:

```bash
npm run build
```
The output will be generated in the `dist` directory. You can preview it using:
```bash
npm run preview
```

---

## Deployment to Vercel

Vercel is the recommended hosting platform for Vite/React apps. You can deploy using the Dashboard (Git Integration) or the Vercel CLI.

### Option 1: Vercel Dashboard (Recommended)

1.  **Push to GitHub/GitLab/Bitbucket**:
    - Initialize a git repository and push your code to your preferred provider.
    ```bash
    git init
    git add .
    git commit -m "Initial commit"
    # Add your remote origin and push
    ```

2.  **Import to Vercel**:
    - Log in to your [Vercel Dashboard](https://vercel.com/dashboard).
    - Click **"Add New..."** -> **"Project"**.
    - Select your Git repository from the list.

3.  **Configure Project**:
    - Vercel should automatically detect that this is a **Vite** project.
    - **Framework Preset**: `Vite`
    - **Build Command**: `npm run build` (default)
    - **Output Directory**: `dist` (default)
    - **Root Directory**: If your React app is in the `fithub-react` subfolder, make sure to edit the "Root Directory" setting to `fithub-react`.

4.  **Deploy**:
    - Click **"Deploy"**. Vercel will build your site and provide a live URL.

### Option 2: Vercel CLI (Command Line)

1.  **Install Vercel CLI**:
    ```bash
    npm i -g vercel
    ```

2.  **Login**:
    ```bash
    vercel login
    ```

3.  **Deploy**:
    Run the following command from within the `fithub-react` directory:
    ```bash
    vercel
    ```
    - Follow the prompts (Keep defaults by pressing Enter).
    - Vercel will upload your files and build the project.

4.  **Production Deployment**:
    When you are ready for the final public release:
    ```bash
    vercel --prod
    ```

## Project Structure

```
fithub-react/
├── public/
│   └── assets/        # Static images
├── src/
│   ├── App.jsx        # Main component with landing page content
│   ├── main.jsx       # Entry point
│   ├── index.css      # Tailwind directives
│   └── favicon.svg
├── index.html         # HTML entry point
├── package.json       # Dependencies and scripts
├── tailwind.config.js # Tailwind configuration
└── vite.config.js     # Vite configuration
```
