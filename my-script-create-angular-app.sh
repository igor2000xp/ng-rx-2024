#!/bin/bash
ng version
ng new ng-rx-2024 --directory ./

npm install @angular/material @angular/cdk


ng add @angular-eslint/schematics

npm install eslint-plugin-jasmine --save-dev

npm install eslint-config-airbnb-typescript eslint-plugin-import @ngrx/eslint-plugin --save-dev
npm i prettier eslint-config-prettier eslint-plugin-prettier --save-dev


npx -p @angular/cli ng g environments

# npx eslint --init