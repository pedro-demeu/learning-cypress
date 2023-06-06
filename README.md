# Learning Cypress Project

### Installation

Before you begin, ensure that the following systems are installed on your computer.

- [git](https://git-scm.com/) (I'm using version `2.34.1` as I write this project)
- [Node.js](https://nodejs.org/en/) (I'm using version `v16.20.0` while writing this project)
- npm (I'm using version `8.19.4` as I write this project)
- yarn (`npm -i --global yarn`, version `1.22.19`)
- Browser of your choice
- [Visual Studio Code](https://code.visualstudio.com/) (I'm using version `1.64.0` while writing this project) or any other IDE of your choice

> **Note:** I recommend using the same or more recent versions of the systems listed above.
>
> **Ob. 2:** When installing Node.js npm is installed together. 🎉
>
> **Ob. 3:** To check the versions of git, Node.js and npm installed on your computer, run the command `git --version && node --version && npm --version && yarn--version` in your command line terminal.
>
> **Ob. 4:** I've left links to the installers in the list of requirements above if you haven't already installed them.
### How to execute cypress tests

#### `*` Legend
*  GUI -> Graphic User Interface
  
``yarn test`` - Execute cypress test without GUI. (headless mode)

``yarn test:mobile`` - Execute cypress with mobile view port. (headless mode)

``yarn cy:open`` - Execute cypress with GUI.

``yarn cy:open:mobile`` - Execute cypress with GUI and with mobile view port.