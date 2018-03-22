# README

Documentation about a test **spa-reactjs-graphql** app

## What is this repository for?

* Page preview with Online Vacatures


## How do I get set up?

### Configuration
```sh
npx create-react-app spa-reactjs-graphql
cd spa-reactjs-graphql
npm start
```

### Dependencies

##### npm packages
To make developer's life easier some helping libraries
```sh
npm install --save node-sass-chokidar
npm install --save npm-run-all
npm install --save classnames
```

##### DOM bindings for React Router
For the management of the routing of the spa-reactjs-graphql (not requested but interesting package)
```sh
npm install --save react-router-dom
```

##### React Helmet
For document head HTML tags 
```sh
npm install --save react-helmet
```

##### graphQL and apollo
Setup of the graphQL
```sh
npm install --save graphql graphql-tools express-graphql 
```

Setup of apollo
```sh
npm install --save body-parser apollo-server-express 
npm install --save apollo-boost react-apollo graphql-tag graphql

```


## How do I install the project
```sh
git clone https://github.com/silversonicaxel/spa-reactjs-graphql.git
cd spa-reactjs-graphql
npm install
npm run build
serve -s build
```

## Documentation over my choices
In this **spa-reactjs-graphql** assessment I decided to setup the basic project with Create-React-App (https://github.com/facebookincubator/create-react-app) mainly because of his simplicity,
this library is one of the best, clearest and fast boilerplate to install and to be up to speed with a ReactJs project.
Once an empty project was installed my first goals were to setup some well-known and probably most used React libraries.
First is the Router, for managing my page preview for online vacatures and potential not found pages. 
Then I installed Helmet, for the document `<HEAD>` HTML tags.
Natural choice for a small project like this was Redux for state management.

The folder structure was based on component hierarchy, following the principle of single responsibility.
I was not strict on the design, because any specifications were attached to the assessment so I felt free to change it a little bit.
I implemented a responsive layout.
HTML code was implemented with BEM methodology.


## Testing
```sh
npm install --save enzyme enzyme-adapter-react-16 chai sinon redux-mock-store
```
These are some of the dependencies installed, Enzyme the react testing framework and some other side libraries to improve the ability of testing.

```sh
npm test
```
This is the basic testing tooling that reads all Jest test files spread around the folders.

```sh
npm test -- --coverage
```
Create React App offers a coverage tool to check the test coverage on the entire project.


## Possible improvements
One of the most important thing to implement in a project that needs to stay strong in the internet is the Server Side Rendering.
So, social sharing could be a nice follow up.
The Create React App includes already the base for implementing a Progressive Web App.
