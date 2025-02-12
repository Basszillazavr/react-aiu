# React + TypeScript + Ant Design Setup Guide

## Prerequisites
Make sure you have the following installed on your system:
- [Node.js](https://nodejs.org/) (LTS version recommended)
- [Yarn](https://yarnpkg.com/) or [npm](https://www.npmjs.com/)

## Step 1: Create a React App with TypeScript
Run the following command to create a new React project with TypeScript:

```sh
npx create-react-app my-app --template typescript
# or using yarn
# yarn create react-app my-app --template typescript
```

## Step 2: Navigate to the Project Directory
```sh
cd my-app
```

## Step 3: Install Ant Design
Run the following command to install Ant Design and required dependencies:

```sh
npm install antd
# or using yarn
# yarn add antd
```

## Step 4: Install Additional Dependencies (Optional)
To support icons and less customization:
```sh
npm install @ant-design/icons
# or using yarn
# yarn add @ant-design/icons
```

## Step 5: Use Ant Design Components
Edit `src/App.tsx` and add the following code:

```tsx
import React from 'react';
import { Button } from 'antd';
import 'antd/dist/reset.css';

const App: React.FC = () => {
  return (
    <div style={{ padding: 20 }}>
      <h1>Welcome to React + TypeScript + Ant Design</h1>
      <Button type="primary">Click Me</Button>
    </div>
  );
};

export default App;
```

## Step 6: Start the Development Server
Run the following command to start the project:

```sh
npm start
# or using yarn
# yarn start
```

Your application should now be running at `http://localhost:3000/`.

## Additional Customization
### Customize Theme (Optional)
To customize the Ant Design theme, install `less` and `less-loader`:
```sh
npm install react-router-dom
# or using yarn
# yarn add react-router-dom
```
Then modify the Webpack configuration or use `craco` to override default styles.

## Conclusion
You have successfully set up a React application with TypeScript and Ant Design! 🎉

