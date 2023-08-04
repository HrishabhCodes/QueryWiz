# QueryWiz - SQL Editor

**Web App’s Link: https://querywiz.vercel.app/**

## Overview

QueryWiz is a web-based SQL editor that allows users to input SQL queries and view the results of those queries. The application includes a space to enter SQL commands and displays a table with dummy data in response to the queries. It provides a user-friendly interface for data analysts to work efficiently. The SQL editor is built using **React with Vite** as it is fast, lightweight and easy to use. The project includes some additional packages for enhanced functionality.

## Packages

- [Material UI](https://mui.com/)
- [react-ace](https://www.npmjs.com/package/react-ace)
- [openai](https://www.npmjs.com/package/openai)
- [axios](https://www.npmjs.com/package/axios)
- [react-router-dom](https://www.npmjs.com/package/react-router-dom)
- [uuid](https://www.npmjs.com/package/uuid)

## Features

- **AI Chatbot:** QueryWiz comes equipped with an intelligent chatbot that enhances the user experience by providing real-time assistance with SQL queries. This chatbot leverages the application's dummy data to analyze and understand user queries, offering immediate responses and helpful suggestions.
- **Multiple workspaces:** QueryWiz allows users to create and manage multiple workspaces, providing a seamless way to organize their analysis. Users can segregate different projects, datasets, or SQL queries into separate workspaces, making it easier to switch between tasks without losing context. This feature enhances the possibility of collaboration, which can be added in the project later, as users can collaborate within specific workspaces, streamlining team efforts. Whether you're a solo data analyst or part of a larger team, the ability to work in isolated environments ensures a more structured and efficient SQL editing experience in QueryWiz.
- **Multiple Tabs:** QueryWiz has a powerful multi-tab SQL editor within each workspace, empowering users to run multiple queries concurrently. With the ability to open and manage multiple tabs, data analysts can work on various SQL scripts simultaneously, avoiding the need to switch between different queries. This feature enhances productivity and flexibility, enabling users to analyze and compare different datasets or scenarios within the same workspace effortlessly.
- **Cheatsheet:** The addition of a comprehensive SQL cheatsheet within QueryWiz streamlines the query-writing process for users. This cheatsheet offers a vast collection of pre-written SQL queries covering various scenarios

## Load Time

Page Load Time has been measured using the Lighthouse Tool, a robust performance analysis tool that evaluates web pages' loading speed and provides actionable insights for optimization. This data ensures that QueryWiz delivers a seamless user experience, with efficient loading times for enhanced productivity and satisfaction.

## Optimizations

- **Vite's Built-in Tree Shaking:** Vite automatically performs tree shaking during the build process, eliminating unused code and dependencies from the final bundle. This optimization ensures that only the necessary parts of the code are included in the production build, leading to smaller bundle sizes and faster load times for QueryWiz.
- **Utilizing useCallback and useMemo Hooks:** In QueryWiz, the useCallback and useMemo hooks are employed to enhance performance and prevent unnecessary re-renders. useCallback optimizes event handler functions, ensuring they are not recreated on every render, while useMemo efficiently memoizes expensive computations, avoiding redundant calculations and improving the overall responsiveness of the application. These hooks play a vital role in maintaining a smooth and efficient user experience, especially when dealing with complex queries and data manipulation.
- **Implementation of Lazy Loading:** QueryWiz incorporates lazy loading techniques to defer the loading of certain components and resources until they are needed. By employing lazy loading, the application reduces the initial bundle size, resulting in faster page load times and improved performance. To avoid any impact on page load time caused by importing the react-ace editor, I've opted for lazy loading by employing lazy import.
