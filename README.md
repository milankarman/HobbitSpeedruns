<br />
<p align="center">
  <img src="public/favicon/favicon-96x96.png" alt="Logo" width="60" height="60">

  <h2 align="center">HobbitSpeedruns</h2>

  <p align="center">
    <i>Community website for the speedrunners of the 2003 game "The Hobbit" developed by Sierra Entertainment</i>
    <br />
    <a href="https://www.hobbitspeedruns.com">Visit Website</a>
    -
    <a href="../../issues">Report Issue</a>
    -
    <a href="../../issues">Request Feature</a>
  </p>
</p>

## Table of Contents

- [About](#about)
- [Setup](#setup)
  - [Setup and Startup](#setup-and-startup)
  - [Adding Guides](#adding-guides)
  - [Adding Resources](#adding-resources)

## About

This is a community website made for the speedrunning community of the 2003 game "The Hobbit" released on PC, GameCube, XBox and Playstation 2. This website is home to various guides and resources to help speedrunners. It is also made as a personalized access point for those curious about speedrunning, without the complexities of the [speedrun.com](https://www.speedrun.com/hobbit) leaderboard. This website is by no means made to replace that leaderboard, but rather to accompany it.

## Setup

This project is made with Next.js, meaning you will need to have [Node](https://nodejs.org/en/) set up. The project also uses [Yarn](https://yarnpkg.com/getting-started/install) for managing its packages, so make sure you have that.

### Setup and Startup

Clone the project using `git clone` command like so:

```sh
git clone https://github.com/milankarman/hobbitspeedruns.git
```

Navigate into the repository folder and install the project's dependecies using this command:

```sh
yarn install
```

When the dependencies are done installing run the development server with the following command:

```sh
yarn dev
```

The project is now up and running on port 3000.

### Adding Guides

All guides are written in [Markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet#code) format and they are kept in the `/data/guides` directory.

To add a new guide start by adding a new directory in `/data/guides` with a descriptive name broken up by hyphens.

Now add a new file named `index.json` in the directory you have just created. This file will include metadata on your guide and should look something like so:

```json
{
  "title": "The title of your guide in the guide list",
  "browserTitle": "The title for the browser tab, keep it short and consise",
  "description": "The description for your guide in the guide list",
  "icon": "img/guide-icon.png",
  "entry": "entry.md",
  "lastUpdated": "January 1, 2020",
  "order": 0
}
```

`icon:` should be a relative path to the icon you wish to use for the guide, starting from `/public`.  
`entry:` should be the name of the first markdown file the user sees when they open your guide.  
`order:` should be the position that your guide is displayed in the guide list.

Now you can add your markdown files into your guide directory and fill them with content. Every markdown file should be prefixed like so:

```
---
header: Text to display in header
order: 0
---
```

`header:` should be the text you would want to appear on the website header when this page is opened.
`order:` should be the position of the guide as it appears in the left sidebar.

With the dev server running you will need to refresh your guides page to see your changes.

### Adding Resources

Open `/data/resources.json` and add a new json object into the object array. An example of a resource might look like:

```json
{
  "name": "Name of the resource",
  "description": "Description of the resource.",
  "url": "https://link.to/the-resource"
}
```

If done correctly your resource should show up on the resources page after you refresh it.

If you would like to host a resource download on the website directly you can add it to the `/public/resources` directory. Please only use this for small files. Consider linking to external hosting options for larger files.
