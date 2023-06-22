<!-- PROJECT SHIELDS -->
[![JavaScript][JavaScript.com]][JavaScript-url]
[![PHP][Php.net]][Php-url]
[![MySQL][MySQL.com]][MySQL-url]
[![Nodejs][Nodejs.com]][Nodejs-url]
[![JQuery][JQuery.com]][JQuery-url]

<!-- PROJECT LOGO -->
<div align="center">
  <a href="https://github.com/NimaShafie/nodejs-express">
    <img src="public/images/Node.js_logo.svg" alt="Logo" width="124" height="124">
  </a>

  <h3 align="center">Demo Node JS (Express)</h3>

  <p align="center">
    A project that demonstrates the following: Node JS, Express, PHP, MySQL, JQuery<br />
    Better put, an example of a modified MERN stack (MySQL, Express, React, Node.js)
</div>


<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
      <ul>
        <li><a href="#running-via-docker">Running Via Docker</a></li>
        <li><a href="#terminate-via-docker">Terminate Via Docker</a></li>
      </ul>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#development">Development</a></li>
    <!-- <li><a href="#license">License</a></li> -->
    <!-- <li><a href="#contact">Contact</a></li> -->
    <!-- <li><a href="#acknowledgments">Acknowledgments</a></li> -->
  </ol>
</details>
<br />


<!-- ABOUT THE PROJECT -->
## About The Project

<!-- [![Product Name Screen Shot][product-screenshot]](https://example.com) -->

This project has been created to showcase the Full-Stack features and working integrations of the following programming stacks.

*Links route to the tool basics webpage*

Backend (Server-Side):
* [PHP](https://www.php.net/manual/en/)
* [Node.js](https://nodejs.org/docs/latest-v18.x/api/) (JavaScript Runtime - Backend Server Environment)
* [Express](https://expressjs.com/en/guide/routing.html) (Node.js Web Framework)
* [EJS](https://ejs.co/#docs) (Templating Language)
* [Sass](https://sass-lang.com/guide) (CSS Preprocessors)

Frontend (Client-Side):
* [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
* [JQuery](https://api.jquery.com/) (JS Library)
* [HTML5](https://developer.mozilla.org/en-US/docs/Glossary/HTML5)
* [CSS3](https://developer.mozilla.org/en-US/docs/Web/CSS)

<!-- GETTING STARTED -->
## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites (Windows)
[Node Package Manager](https://nodejs.org/en) (NPM)
<br />
Download the LTS version


* npm
  ```sh
  npm install npm@latest -g
  ```
<br />

### Installation

Follow the steps below in order to install the repo onto your machine locally

1. Clone the repo
   ```sh
   git clone https://github.com/NimaShafie/nodejs-express.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
<br />


<!-- USAGE EXAMPLES -->
## Usage
### 1. Running via Locally
How to locally run the application on your own computer

To run the server
(Uses Node.js and Express)
```
set DEBUG=myapp:* & npm start
```
Head over to your favorite web browser and open the following address
<br />
`http://localhost:3000/`
<br />

### 2. Running via Docker
If you already have Docker Desktop installed and would like to run the application using docker follow below
<br />
Summarized from official Node.js [docs](https://nodejs.org/en/docs/guides/nodejs-docker-webapp)
<br />

Build the docker image using the `docker build` command
<br />
*Replace `<your username>` with your username using all lowercase characters*
```
docker build . -t <your username>/nodejs-express-app
```
Run the docker container by using the command below
```
docker run -p 49160:3000 -d <your username>/nodejs-express-app
```
Head over to your favorite web browser and open the following address
<br />
`http://localhost:49160/`
<br />
<br />

### Terminate via Docker
We must first obtain the container ID in order to terminate the app, we can do that by running the following command
```
docker ps
```
Find and copy the docker ID displayed from the first column which should be a series of chars like the following `30b03e042dfb`

To shut down the docker app, we use the `kill` command and specify the docker ID
<br />
*Note: you can just specify the first 5 characters of the ID as long as you don't have any other apps running with a similiar ID*
<br />
<br />
*Replace <container id> with your container id, which will always be different*
```
docker kill <container id>
```
*`"docker kill 30b03"` will kill my app with the ID posted above*

<br />


<!-- ROADMAP -->
## Development
If you would like to alter/development more for this project, here are some instructions on how to make certain changes
<br />

To generate css from sass

Takes the sass file located in the first location after the keyword sass eg(source/stylesheets/index.scss) and generate the following css code in the next second location parameter eg(build/stylesheets/index.css)
```
sass source/stylesheets/index.scss build/stylesheets/index.css
```

<br />

<!-- ROADMAP -->
## Roadmap

- [x] Add Readme
- [x] Configure Node.js and Express
- [x] Configure Dockerfile
- [ ] Setup MySQL database
- [ ] Setup and configure automated testing
- [ ] Think of more things to add to the roadmap

See the [open issues](https://github.com/NimaShafie/nodejs-express/issues) for a full list of proposed features (and known issues).



<!-- CONTRIBUTING -->
<!-- ## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p> -->

<!-- LICENSE -->
<!-- ## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p> -->



<!-- CONTACT -->
<!-- ## Contact

Your Name - [@your_twitter](https://twitter.com/your_username) - email@example.com

Project Link: [https://github.com/your_username/repo_name](https://github.com/your_username/repo_name)

<p align="right">(<a href="#readme-top">back to top</a>)</p> -->



<!-- ACKNOWLEDGMENTS -->
<!-- ## Acknowledgments

Use this space to list resources you find helpful and would like to give credit to. I've included a few of my favorites to kick things off!

* [Choose an Open Source License](https://choosealicense.com)
* [GitHub Emoji Cheat Sheet](https://www.webpagefx.com/tools/emoji-cheat-sheet)
* [Malven's Flexbox Cheatsheet](https://flexbox.malven.co/)
* [Malven's Grid Cheatsheet](https://grid.malven.co/)
* [Img Shields](https://shields.io)
* [GitHub Pages](https://pages.github.com)
* [Font Awesome](https://fontawesome.com)
* [React Icons](https://react-icons.github.io/react-icons/search)

<p align="right">(<a href="#readme-top">back to top</a>)</p> -->
<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/othneildrew/Best-README-Template.svg?style=for-the-badge
[contributors-url]: https://github.com/othneildrew/Best-README-Template/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/othneildrew/Best-README-Template.svg?style=for-the-badge
[forks-url]: https://github.com/othneildrew/Best-README-Template/network/members
[stars-shield]: https://img.shields.io/github/stars/othneildrew/Best-README-Template.svg?style=for-the-badge
[stars-url]: https://github.com/othneildrew/Best-README-Template/stargazers
[issues-shield]: https://img.shields.io/github/issues/othneildrew/Best-README-Template.svg?style=for-the-badge
[issues-url]: https://github.com/othneildrew/Best-README-Template/issues
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/othneildrew/Best-README-Template/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/othneildrew
[product-screenshot]: images/screenshot.png
<!-- [Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/ -->
<!-- [React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/ -->
<!-- [Laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[Laravel-url]: https://laravel.com -->
<!-- [Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com -->
[JQuery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[JQuery-url]: https://jquery.com 
[Php.net]: https://img.shields.io/badge/php-777BB4?style=for-the-badge&logo=php&logoColor=white
[Php-url]: https://www.php.net/
[MySQL.com]: https://img.shields.io/badge/mysql-4479A1?style=for-the-badge&logo=mysql&logoColor=white
[MySQL-url]: https://www.mysql.com/
[Nodejs.com]: https://img.shields.io/badge/node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white
[Nodejs-url]: https://nodejs.org/en
[JavaScript.com]: https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=white
[JavaScript-url]: https://developer.oracle.com/languages/javascript.html
