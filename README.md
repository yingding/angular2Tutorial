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

## Allow TypeScript compiler recognize JavaScript files with d.ts files
* For angular2/core a typings.json file is needed to define d.ts files for angular2 js libs.