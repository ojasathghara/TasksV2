<div id="top"></div>

<!-- PROJECT LOGO -->
<br />
<div align="center">
<h3 align="center">Tasks</h3>

<p align="center">
    An app to manage and keep a track of your daily tasks
  </a>
<br />
</p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
        <li><a href="#overview-of-directory-structure"> Overview of files</a></li>
      </ul>
    </li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

This application is made by Ojaswi Athghara using React JS as primary front-end framework, Express JS for the REST apis and a back-end server and Bootstrap for faster development. 3rd party components have also been used to make the development process faster and easier.

<p align="right">(<a href="#top">back to top</a>)</p>

### Built With

-   [React.js](https://reactjs.org/)
-   [Bootstrap](https://getbootstrap.com)
-   [JQuery](https://jquery.com)
-   [React Bootstrap](https://react-bootstrap.github.io/)
-   [React Router v6](https://reactrouter.com/docs/en/v6/getting-started/overview)
-   [Express.js](https://expressjs.com/)
-   [Body Parser](https://www.npmjs.com/package/body-parser)
-   [CORS](https://www.npmjs.com/package/cors)
-   [Multer](https://www.npmjs.com/package/multer)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

To get a local copy up and running follow these simple example steps.

### Prerequisites

-   A good computer with Node JS 18.0 or higher and npm 8.8 or higher installed.
-   A web browser.
-   A Terminal app to execute commands.
-   A code editor if you want to edit the source code.

### Installation

1. Clone the repo
    ```sh
    git clone https://github.com/ojaswi825/TasksV2.git
    ```
2. Install NPM packages
    ```sh
    npm install
    ```
3. You need to build the package to avoid express.js errors on browser

    ```sh
    cd Tasks
    npm run build
    ```

4. Run on localhost, this will start the server with react production build

    ```sh
    node server/server.js
    ```

5. You may want to run a react development server also, keep ther server running (Step) 4 and run below snippet to run a react development build
    ```sh
    npm run start
    ```

### Overview of Directory structure

#### The server/server.js is the entry point of our app that includes routes from routes folder.

> server: <br/>
> ├── models - <em>A directory to store our models</em> <br/>
> │ └── TodoItem.js - <em>A todo model</em> <br/>
> ├── routes - <em>A directory that contains routes</em> <br/>
> │ ├── crud.js - <em>API routes are handled by this file</em> <br/>
> │ ├── static.js - <em>Static file index.html is served by this file</em> <br/>
> │ └── test.html - <em>Obsolete file</em> <br/>
> ├── server.js - <em>Entry point of our app</em> <br/>
> └── services - <em>The actual logic of the routes are implemented here</em> <br/> &emsp; └── crud.js - <em>This file handles the CRUD logic</em> <br/>

> The public and build folders is same as react.

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

Ojaswi Athghara - [LinkedIn](https://linkedin.com/in/ojaswi825) | [Email](ojaswi.athghara98@gmail.com)

Project Link: [Tasks Repo](https://github.com/ojaswi825/Tasks)

<p align="right">(<a href="#top">back to top</a>)</p>
