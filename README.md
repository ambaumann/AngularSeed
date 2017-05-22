# AngularSeed

The purpose of this project is to provide a well layed out seed project for rapid Angular development.

## Architecture Points

* Broken out modules into maintainable chunks.
* Core module for critical application imports and services.
   * Model objects
   * Data access layer
      * (TODO) Return Object Improvements
   * Authentication (TODO)
* Shared module for pre bundled imports. Trade off between granular imports and ease of imports across modules.
* Seperation between Container Components and Display Components
  * Pages are usually high level container components that additional sub container components or other container components.
* State management and mutation using a Redux architecture with an ngrx iplementation.
  * Unidirectional data flow
  * Immutable Objects
  * Observable streams of state change
  * Easy to debug and has great tooling
    * See Instrumentaion Section
  * Performant Rendering
    * See "ChangeDetectionStrategy.OnPush"


## Key Libraries Used

* [ngrx](https://github.com/ngrx)
* [Angular Flex Layout](https://github.com/angular/flex-layout)
* [Material](https://github.com/angular/material2)

# @Angular/CLI

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

# Instrumentation

### VSCode Plugins

* [Angular  Productivity Pack](https://marketplace.visualstudio.com/items?itemName=devboosts.angular-productivity-pack) is a great place to start.

### Instrumentation with the Chrome / Firefox Extension (Preferred)

Download the [Redux Devtools Extension](http://zalmoxisus.github.io/redux-devtools-extension/)


