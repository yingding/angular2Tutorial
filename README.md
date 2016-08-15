# 1. Introduction
The following section shows how to use the tool chain relating to developing web-app with Angular2.
## Description
Tutorial for learning Angular2 with TypeScript

## Update NPM
* Using <code>npm install -g npm</code> to update node package manager (npm) globally.
* Using <code>npm --verison</code> or <code>npm -v</code> to display the current npm version.


## Reference to Markdown Syntax
* http://daringfireball.net/projects/markdown/syntax
* http://markdown.de/

## About package.json file 
* Using <code>npm init</code> to create an package.json file 
* While using <code>npm install xxx --save</code> or <code>npm install xxx --save-dev</code> with <code>save</code> or <code>save-dev</code> options, the lib dependency are automatically updated in package.json file.
* Dependencies are libs necessary for the application to run, dev dependencies are libs necessary to programm the application, but not necessary for running the application.
* Using <code>npm install</code> to install all packages defined in package.json 

## Initializing package.json
* <code>npm init --force</code>
* <code>npm install typings --save-dev</code>
* <code>npm install angular --save</code>

## Run script in package.json
* <code>npm run script_name</code>

## Init a tsconfig.json file
* <code>tsc --init</code>
* Using <code>tsc -w</code> to start tsc build with watch flag

## TypeScript compiler and native JavaScript libs
* TypeScript compiler needs description files x.d.ts to recognize native JavaScript files.
* For the tsc to recognize '@angular/core', a typings.json file is needed to define d.ts files for angular2 js libs.

# 2. How to start?
This sections shows how can you start this demo-app after you have cloned this repo.

## A Quick Start
* Installing all node_modules with <code>npm install</code>
* Installing TypeScript description files according to typings.json with <code>npm run typings install</code> ,after this the tsc can recognize Angular2 js lib

# 3. Binding a component property to Angular Template
* More details about two-way binding can be found under https://angular.io/docs/ts/latest/guide/template-syntax.html
* Examples of using model bindings in form can be found under https://angular.io/docs/ts/latest/guide/forms.html
* **Note:** For two-way binding above Angular2 RC5, <code>import {FormsModule} from '@angular/forms';</code> is needed in your AngularModule.