# 0. About
this tutorial follows the approach proposed by https://angular.io/docs/ts/latest/tutorial/

* more about Angular2 Quickstart can be found unter https://github.com/angular/quickstart/blob/master/README.md
* Todo: buiding tests and e2e-test

# 1. Introduction
The following section shows how to use the tool chain relating to developing web-app with Angular2. Current Angular release is 2.0.0
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
* Updating your npm wiht <code>npm install -g npm</code>
* Installing TypeScript Compile with <code> npm install -g typescript</code>
* Installing all node_modules with <code>npm install</code>
* Installing TypeScript description files according to typings.json with <code>npm run typings install</code> ,after this the tsc can recognize Angular2 js lib
* Installing the devDependency, sometime the devDependency Libs are not installed, to install the devDependency Libs with <code>npm install --only=dev</code>
* Using <code>npm uninstall tsc</code>, then <code>npm install typescript</code> to remove tsc v1.5.x and install tsc 1.8.x.

# 3. Angular2

## Binding a component property to Angular Template
* More details about two-way binding can be found under https://angular.io/docs/ts/latest/guide/template-syntax.html
* Examples of using model bindings in form can be found under https://angular.io/docs/ts/latest/guide/forms.html
* **Note:** For two-way binding above Angular2 RC5, <code>import {FormsModule} from '@angular/forms';</code> is needed in your AngularModule.

## Asterisk (*) appearing before directive names
* The * is a bit of syntactic sugar that makes it easier to read and write directives that modify HTML layout with the help of templates. NgFor, NgIf, and NgSwitch all add and remove element subtrees that are wrapped in `<template>` tags.
* More about this can be found unter https://angular.io/docs/ts/latest/guide/template-syntax.html#!#star-template

## Directives
One of the defining features of a single page application is its manipulation of the DOM tree. Instead of serving a whole new page every time a user navigates, whole sections of the DOM appear and disappear according to the application state.

There are three kinds of Angular directives:
1. Components or Component Directives
2. Attribute directives 
3. Structural directives

### Components or Component Directives
The Component is really a directive with a template. It's the most common of the three directives and we write lots of them as we build our application.

### Attribute Directive
An attribute directive only changes the behavior or appearance of an element. An attribute element modifies an existing element.

For example: <pre><code>&lt;div [ngStyle]="{'background-color': element.color}"&gt;&lt;/div&gt;</code></pre>

### Structural Directive
A structural directive shows or hides an element. A structural directive changes the Document Object Model (DOM) by adding or removing an element entirely.

For example: <pre><code>&lt;div *ngIf="isAvailabe"&gt;{{element.title}} is available!&lt;/div&gt;</code></pre>

### Reactive extensions library (rxjs / RxJS)
A reactive Extension allows us to get data from a security source.

* Added in package.json
* Imported in systemjs.config.js
* More infos about RxJS can be found under https://angular.io/docs/ts/latest/guide/server-communication.html
* **Note**: Using either the .toPromise() or .map() methods from RxJS to asynchronously parse the result of the HTTP request.

For example:
```javascript
var data;
{"price": 20,"meta": "from-the-server","data": [] }
var source = getDataFromUrlOrOtherAsyncSource();
source
.filter(item => item.price > 50.60) // filter the item
    .map(item => item.data) // map item to item.data
    .subscribe( items => this.data = items // save the item.data list to data 
    );
```
* An Observable is a stream of events that we can process with array-like operators. With `toPromise()`, an Observable can be converted to a promise. A single result in the form of a promise is easy for the calling component to consume. But requests aren't always "one and done". We may start one request, then cancel it, and make a different request before the server has responded to the first request. Such a request-cancel-new-request sequence is difficult to implement with Promise. It is easy with Observalbes.  


### Cold Observable

After the http.get is called, the request is not sent out instantaneously. This means, http.get does not send the request automatically. The observable is cold which means the request won't go out until the observable is subscribed by another component.
    
### Testing HTTP Request
* http://httpbin.org/ provides some free API, which allows you to test HTTP Request and Response.

### Working with ngIf or ngSwitch
Both the ngSwitch and ngIf directives add elements to the DOM subtree only if there conditions are met. If the coditions are false, the element is not rendered in HTML at all.

# 4. Angular2 Component Lifecycle

  1. OnChanges:           Event hook called when a data-bound input property value changes
  2. OnInit:              Event hook called when the data-bound property are initialized
  3. DoCheck:             Event hook for manual checks
  4. AfterContentInit:    Event hook after content is initialized
  5. AfterContentChecked: Event hook after content is checked
  6. AfterViewInit:       Event hook after view is initialized
  7. AfterViewChecked:    Event hook after view is checked
  8. OnDestroy:           Event hook after component is disposed.

In the lifecycle of a component, the OnChanges is called first time to get the initial value of all the properties of the component class. Once the properties are set to their initial values, Oninit is called. DoCheck is than called, allowing doing a manually check of any further things...

## Component Lifecycle Hooks

Hook | Purpose | Components | Directives
--- | --- | --- | --- 
ngOnInit | Initialize the directive/component after Angular initializes the data-bound input properties. | yes | yes 
ngOnChanges | Respond after Angular sets a data-bound input property. The method receives a changes object of current and previous values. | yes | yes
ngDoCheck | Detect and act upon changes that Angular can or won't detect on its own. Called every change detection run. | yes | yes
ngOnDestroy | Cleanup just before Angular destroys the directive/component. Unsubscribe observables and detach event handlers to avoid memory leaks.| yes | yes
ngAfterContentInit | After Angular projects external content into its view.	| yes | no
ngAfterContentChecked | After Angular checks the bindings of the external content that it projected into its view. | yes | no
ngAfterViewInit	| After Angular creates the component's view(s). | yes | no
ngAfterViewChecked | After Angular checks the bindings of the component's view(s). | yes | no

## Bindings 
### Property Binding
* Component Property Binding with square brackets []

### Event Binding
* Template Event Binding with parenthesis ()

### Input Decoration
* Input property with Input Decoration `@Input()`
* More about Input property can be found unter https://angular.io/docs/ts/latest/cookbook/component-communication.html#!#parent-to-child-on-changes

# 5. Angular2 Dependency Injection
In software engineering, dependency injection is a software design pattern that implements inversion of control for resolving dependencies. A dependency is an object that can be used (a service). An injection is the passing of a dependency to a dependent object (a client) that would use it.

## 5.1 Type of Dependency Injection
* Add providers to the "root module" so that the same instance of a service is available everywhere.
* Register provider at a component level in the `providers` property of the `@Component` metadata.

## 5.2 Injector
* An injector maintains a container of service instances that it created.
* An injector can create a new service instance from a provider.
* Register provider with injectors.

Note: Registering at a component level means you get a new instance of the service with each new instance of that component.

# 6. Angular2 Modules
Modules are executed within their own scope, not in the global scope; this means that variables, functions, classes, etc. declared in a module are not visible outside the module unless they are explicitly exported using one of the export forms. Conversely, to consume a variable, function, class, interface, etc. exported from a different module, it has to be imported using one of the import forms.

Modules are declarative; the relationships between modules are specified in terms of imports and exports at the file level.

Modules import one another using a module loader. At runtime the module loader is responsible for locating and executing all dependencies of a module before executing it. Well-known modules loaders used in JavaScript are the CommonJS module loader for Node.js and require.js for Web applications.

## Import Module
* Import all members from a file as a specific variable name `import * as YourModuleIdentifier from 'path/module'`, the ModuleIdentifier can be different as the module name.
 
# 7. TypeScript Definition Files
* Use --declaration option of TypeScript compiler to generate a d.ts file for the compiled javascript file.
 
## Using typings tool
* Install typings `npm install -g typings`
 <pre><code>
 typings search jasmine
 typings install jasmine --save
 </code></pre>
 
* show typings package info `typings info dt~node-4 --versions` 
* install from dt source, ` typings install dt~node-4 --global --save`, https://www.npmjs.com/package/typings
 
# 8. TypeScript accessor
By default, if your member does not have an accessor it can be inferred to be public.
 
# 9. UnitTesting with Jasmine
* More about UnitTest with Jasmine and Angular2 please see https://medium.com/google-developer-experts/angular-2-unit-testing-with-jasmine-defe20421584#.jn20d2gcp


# About Markdown
more about markdown syntax can be found under Markdown Cheatsheet: https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet