#Angular 2 App Testing

> This repo contains a simple Angular App with tests configured. We are using Jasmine, Karma and Istanbul for setting up our tests.

## About the Project

> This is a "Angular Restaurant" website, a virtual restaurant displaying a list of menu items. User
will be able to choose items online, add it to their cart and then place an online order with different payment methods.

> **(Status: IN PROGRESS)**

## Before you run the application

Clone this application on your local machine and cd into it. Then do the following:

```javascript

npm install
npm run build

```

## How to run the application?


```javascript

npm start

```

#### Other recommended ways

> On the terminal, do 

```javascript

npm start

```

>Open another terminal tab and then do 

```javascript

npm run build-and-watch

```

If you use build-and-watch, you do not have to use build. This will build your project for the first time
and will watch for any changes in /src/ folder. Once a change is detected, it will re-transpile your
TypeScript to JavaScript and push your new stuff to /dist/. You do not have to re start the project, just
refresh the page.

 ** TODO: ** Add browser sync so we do not have even have to reload the page. 

## How to run tests?

This will run the test using Karma/Jasmine. Shows the result on terminal. 

```javascript

npm test

```

## How to run test coverage report?

This brings test results and coverage status on a nice HTML test report page using Istanbul.

```javascript

npm run coverage

```

## Frameworks/Libraries Used

1. [Angular JS 2](https://angular.io/)
2. [Jasmine JS](http://jasmine.github.io/)
3. [Karma](https://karma-runner.github.io/0.13/index.html)
4. [TyepScript](http://www.typescriptlang.org/)
5. [Lodash](https://lodash.com/docs)


## Want to help?

Want to file a bug or contribute some code ? Go ahead and issue a PR(Pull Request). The only requirement is you make 
sure to run all test successfully before creating a PR.