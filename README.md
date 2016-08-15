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

## Difference between let and var
* More details can be found under http://stackoverflow.com/questions/762011/let-keyword-vs-var-keyword

# 2. How to start?
This sections shows how can you start this demo-app after you have cloned this repo.

## A Quick Start
* Installing all node_modules with <code>npm install</code>
* Installing TypeScript description files according to typings.json with <code>npm run typings install</code> ,after this the tsc can recognize Angular2 js lib

# 3. Angular2 RC5 
## Binding a component property to Angular Template
* More details about two-way binding can be found under https://angular.io/docs/ts/latest/guide/template-syntax.html
* Examples of using model bindings in form can be found under https://angular.io/docs/ts/latest/guide/forms.html
* **Note:** For two-way binding above Angular2 RC5, <code>import {FormsModule} from '@angular/forms';</code> is needed in your AngularModule.

## Asterisk (*) appearing before directive names
* The * is a bit of syntactic sugar that makes it easier to read and write directives that modify HTML layout with the help of templates. NgFor, NgIf, and NgSwitch all add and remove element subtrees that are wrapped in <template> tags.
* More about this can be found unter https://angular.io/docs/ts/latest/guide/template-syntax.html#!#star-template

## Directives
<p>One of the defining features of a single page application is its manipulation of the DOM tree.
 Instead of serving a whole new page every time a user navigates,
 whole sections of the DOM appear and disappear according to the application state.
</p>

There are three kinds of Angular directives:
1. Components or Component Directives
2. Attribute directives 
3. Structural directives

### Components or Component Directives
<p>The Component is really a directive with a template. 
It's the most common of the three directives 
and we write lots of them as we build our application.</p>

### Attribute Directive
<p> An attribute directive only changes the behavior 
or appearance of an element. An attribute element modifies an existing element.</p>

For example: <pre><code>&lt;div [ngStyle]="{'background-color': element.color}"&gt;&lt;/div&gt;</code></pre>

### Structural Directive
<p>A structural directive shows or hides an element. 
A structural directive changes the Document Object Model (DOM) by adding 
or removing an element entirely.</p>

For example: <pre><code>&lt;div *ngIf="isAvailabe"&gt;{{element.title}} is available!&lt;/div&gt;</code></pre>

### Reactive extensions library (rxjs / RxJS)
A reactive Extension allows us to get data from a security source.
* Added in package.json
* Imported in systemjs.config.js
* More infos about RxJS can be found under https://angular.io/docs/ts/latest/guide/server-communication.html

For example:<pre><code>var data;
{"price": 20,"meta": "from-the-server","data": [] }
var source = getDataFromUrlOrOtherAsyncSource();
source
.filter(item => item.price > 50.60) // filter the item
    .map(item => item.data) // map item to item.data
    .subscribe( items => this.data = items // save the item.data list to data 
    );</code></pre>
    
### Testing HTTP Request
* http://httpbin.org/ provides some free API, which allows you to test HTTP Request and Response.