# FitnessTrackerWeb

## Create a basic workspace

Initially generating a workspace.
No APP oder LIBRARY will be generated.

```bash
ng new fitness-tracker-web --no-create-application
```

## Create application

To generate an application use the following command:

```bash
ng g application fitness-tracker-app --routing true --style scss
```

## Generate components, services, ...

### Components

```bash
ng g component --project fitness-tracker-app view-components/exercise-list
ng g component --project fitness-tracker-app view-components/exercise-detail
```

### Services

```bash
ng g service --project fitness-tracker-app logic-services/exercise-logic
ng g service --project fitness-tracker-app provider-services/exercise-provider
```

## Architecture

If you decide to following the "application" and "library" approach this should fit to the following principle:

![alt text](docs/assets/image.png)


## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
