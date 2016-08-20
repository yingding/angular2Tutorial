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
* Installing TypeScript Compile with <code> npm install -g typescript</code>
* Installing all node_modules with <code>npm install</code>
* Installing TypeScript description files according to typings.json with <code>npm run typings install</code> ,after this the tsc can recognize Angular2 js lib

# 3. Angular2 RC5

## Binding a component property to Angular Template

* More details about two-way binding can be found under https://angular.io/docs/ts/latest/guide/template-syntax.html
* Examples of using model bindings in form can be found under https://angular.io/docs/ts/latest/guide/forms.html
* **Note:** For two-way binding above Angular2 RC5, <code>import {FormsModule} from '@angular/forms';</code> is needed in your AngularModule.

## Asterisk appearing before directive names

* The asterisk is a bit of syntactic sugar that makes it easier to read and write directives that modify HTML layout with the help of templates. NgFor, NgIf, and NgSwitch all add and remove element subtrees that are wrapped in <template> tags.
* More about this can be found unter https://angular.io/docs/ts/latest/guide/template-syntax.html

## Directives

One of the defining features of a single page application is its manipulation of the DOM tree. Instead of serving a whole new page every time a user navigates, whole sections of the DOM appear and disappear according to the application state.

There are three kinds of Angular directives:
1. Components or Component Directives
2. Attribute directives 
3. Structural directives

### Components or Component Directives

The Component is really a directive with a template. 
It's the most common of the three directives ****
and we write lots of them as we build our application.

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


For example:<pre><code>var data;
{"price": 20,"meta": "from-the-server","data": [] }
var source = getDataFromUrlOrOtherAsyncSource();
source
.filter(item => item.price > 50.60) // filter the item
    .map(item => item.data) // map item to item.data
    .subscribe( items => this.data = items // save the item.data list to data 
    );</code></pre>


### Cold Observable

After the http.get is called, the request is not sent out instantaneously. This means, http.get does not send the request automatically. The observable is cold which means the request won't go out until the observable is subscribed by another component.
    
### Testing HTTP Request
* http://httpbin.org/ provides some free API, which allows you to test HTTP Request and Response.

### Working with ngIf or ngSwitch
Both the ngSwitch and ngIf directives add elements to the DOM subtree only if there conditions are met. If the coditions are false, the element is not rendered in HTML at all.

# 4. Angular2 Lifecycle

  1. OnChanges:           Event hook called when a data-bound input property value changes
  2. OnInit:              Event hook called when the data-bound property are initialized
  3. DoCheck:             Event hook for manual checks
  4. AfterContentInit:    Event hook after content is initialized
  5. AfterContentChecked: Event hook after content is checked
  6. AfterViewInit:       Event hook after view is initialized
  7. AfterViewChecked:    Event hook after view is checked
  8. OnDestroy:           Event hook after component is disposed.

In the lifecycle of a component, the OnChanges is called first time to get the initial value of all the properties of the component class. Once the properties are set to their initial values, Oninit is called. DoCheck is than called, allowing doing a manually check of any further things...

