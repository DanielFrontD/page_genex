# AdminCli

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.9.

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

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


- Para generar el webcomponent como una aplicacion
      `ng generate application <nombre-aplicacion> --style=scss --skipTests=true --prefix gnx`

- Agregar la aplicacion dentro del angular.json
      `ng add ngx-build-plus --project <nombre-aplicacion>`

- Registrar la aplicacion y que sea reconocida como web component
      `ng add document-register-element --project <nombre-aplicacion>`

      NOTA: en caso de que el paso anterior falle, manualmente coloque el siguiente objeto en el angular.json, especificamente <nombre-aplicacion>.architect.options.scripts:

      `{ "input": "node_modules/document-register-element/build/document-register-element.js" }`

- Como recomendacion, dentro del componente hacer los siguientes ajustes:
   -  Eliminar el folder <nombre-aplicacion>-e2e, al igual que su referencia en el angular.json
   -  En el archivo main.ts, retirar la condicion del enableProdMode(), junto con la importancion de las          dependencias

- Una vez que se este satisfecho con el componente, correr el siguiente comando para generar la compilacion del webcomponent:

      `ng build --project <nombre-aplicacion> --prod --extraWebpackConfig ../../../webpack.externals.js --output-hashing none --single-bundle true`

   Se recomienda especificar un comando npm para que se genere la compilacion de dicho componente y a parte se copie al directorio correspondiente, se puede tomar el 'build:hello-world' del package.json como referencia

   IMPORTANTE: Para que compilacion se logre es necesario que exista el archivo webpack.externals.js, el cual permite que las depencias sean leidas desde el proyecto raiz
