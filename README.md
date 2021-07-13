<p align="center">
  <a href="" rel="noopener">
 <img width=200px height=200px src="img/logo/Horoscope.jpg" alt="Bot logo"></a>
</p>

<h3 align="center">Horoscope Channel</h3>

<div align="center">

[![Status](https://img.shields.io/badge/status-active-success.svg)]()
[![Platform](https://img.shields.io/badge/platform-reddit-orange.svg)](https://www.reddit.com/user/Wordbook_Bot)
[![GitHub Issues](https://img.shields.io/github/issues/kylelobo/The-Documentation-Compendium.svg)](https://github.com/kylelobo/The-Documentation-Compendium/issues)
[![GitHub Pull Requests](https://img.shields.io/github/issues-pr/kylelobo/The-Documentation-Compendium.svg)](https://github.com/kylelobo/The-Documentation-Compendium/pulls)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](/LICENSE)

</div>

---

<p align="center"> Tools of Creation
    <br> 
</p>

## 📝 Lists of Resources

- [About](#about)
- [Demo / Working](#demo)
- [How it works](#working)
- [Usage](#usage)
- [Getting Started](#getting_started)
- [Deploying your own bot](#deployment)
- [Built Using](#built_using)
- [TODO](../TODO.md)
- [Contributing](../CONTRIBUTING.md)
- [Authors](#authors)
- [Acknowledgments](#acknowledgement)

## 🧐 About <a name = "about"></a>

Hello everybody! <b>'Astrology Channel'</b> or <b>'Horoscope Channel'</b>, is a Horoscope project using React. Users will be able to sign up for their daily horoscope news and more. Astrology news is used for Social Fun Events that  is user oriented.

## 🎥 Demo / Working <a name = "demo"></a>

![Working](https://media2.giphy.com/media/WmtnVfTNbDigG32A8u/giphy.gif?cid=ecf05e47ha3jz1pgrbcmyo8wow90kg9l1ydhh3i517orf0br&rid=giphy.gif&ct=g)

## 💭 How it works <a name = "working"></a>

The bot first extracts user data from the retrieved data and then fetches user's astrology sign, send, example and source from the Astrology API.

If somehow there is missing data in the Horoscope Channel, then returns a 404 response upon which the bot then tries to fetch results form the Astrology API.

The entire bot is written in Python 3.8.2

## 🎈 Usage <a name = "usage"></a>

To use this bot, enter in your DOB:

```
01/01/2000
```

The first part, i.e. "!dict" **is not** case sensitive.

The bot will then give you the Oxford Dictionary (or Urban Dictionary; if the word does not exist in the Oxford Dictionary) definition of the word as a comment reply.


## 🏁 Getting Started <a name = "getting_started"></a>

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See [deployment](#deployment) for notes on how to deploy the project on a live system.

### Prerequisites

What things you need to install the software and how to install them.

```
1. npm init
2. npm install bootstrap --save
3. npx create-react-app
```

## 🚀 Deploying your own bot <a name = "deployment"></a>

To see an example project on how to deploy your bot, please see my own configuration:

- **Heroku**: [To Be Announced]

## ⛏️ Built Using <a name = "built_using"></a>

- [PRAW](https://praw.readthedocs.io/en/latest/) - Python Reddit API Wrapper
- [Heroku](https://www.heroku.com/) - SaaS hosting platform

## ✍️ Authors <a name = "authors"></a>

- [@kylelobo](https://github.com/kylelobo) - Idea & Initial work

See also the list of [contributors](https://github.com/kylelobo/The-Documentation-Compendium/contributors) who participated in this project.

## 🎉 Acknowledgements <a name = "acknowledgement"></a>

- Hat tip to anyone whose code was used
- Inspiration
- References
