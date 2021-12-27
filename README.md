# FineAquaSystems

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

##GitHub Pages

Deploy the project in GitHub Pages for simple application that dont have a backend. It only host static contents
https://pages.gitbub.com
1. Go to github and create a new repository
2. Push your local project changes 
    git remote add origin https://github.com/georgelezil/fine-aqua-systems.git
    git push origin master
3. Install a node package to deploy our application to Github Pages
    sudo npm install -g angular=cli-ghpages
4. ng build --prod --base-href="https://georgelezil.github.io/fine-aqua-systems/"
    Note : Be sure to add the trailling /
5. Run the command
    angular-cli-ghpages
        or
    sudo ngh

    This can be also done by changing the package.json by adding

    "deploy:gh": "ng build --prod --base-href='https://georgelezil.github.io/fine-aqua-systems/' && sudo ngh"
    npm run deploy:gh

#Deplying to Firebase
1. Provided by Google
2. Used for building backend of web/mobile apps
3. Real-time, fast and scalable database
4. Cloud messaging
5. Hosting

Steps:
1. Go to https://console.firebase.google.com/
2. Create a project
3. Install firebase-tools using npm
    sudo npm i -g firebase-tools
4. Login to your Firebase account in the terminal
    firebase login
5. Initialize Firebase
    firebase init
      1. Select Hosting
      2. WHich Fire base project
    It creates a file firebase.json file in the project
6. ng build --prod
7. firebase deploy
     or
   modify package.json
   "deploy:firebase": "ng build --prod && firebase deploy",
   npm run deploy:firebase
   


