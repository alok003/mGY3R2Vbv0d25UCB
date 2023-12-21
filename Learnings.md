# Learnings on Deploying React App on GitHub Pages and Routing Mechanisms

## Deploying React App on GitHub Pages

### Steps to Deploy:

1. **Install GitHub Pages Package:**
   - Run `npm install gh-pages` to install the GitHub Pages package.

2. **Configure `package.json`:**
   - Add the following scripts to your `package.json` file:
     ```json
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d build",
       // ... other scripts
     }
     ```

3. **Deploy to GitHub Pages:**
   - Run `npm run deploy` to deploy your app to GitHub Pages.


## Understanding Routing Mechanisms in React

### React Router Basics:

1. **Basic Usage:**
   - Wrap your app in a `BrowserRouter` in your main component.
   - Use the `Route` component to define routes.

