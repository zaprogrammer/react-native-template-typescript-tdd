# react-native typescript TDD template
This template is a react-native boilerplate project template to start with for new projects.


## Features

*  [✅]  **Typescript ready:** This template based on the typescript template [here](https://github.com/react-native-community/react-native-template-typescript)

*  [✅]  **React Navigation ready:** Includes [react navigation](https://reactnavigation.org/) with basic working functionality out-of-the-box to work with.

*  [✅]  **TDD ready:** Includes setup for [Jest](https://jestjs.io/), [Enzyme](https://enzymejs.github.io/enzyme/), [Detox](https://github.com/wix/Detox) for component and e2e testing.

*  [✅]  **Lint ready:** ESlint.


## Installation
In the desired folder where you want to create the project, open command line and type:


>`npx react-native init {PROJECT_NAME} --template react-native-template-typescript-tdd`

or if you want to install it from Github directly, type:

>`react-native init {PROJECT_NAME} --template https://github.com/zaprogrammer/react-native-template-typescript-tdd.git`


## How to use
This template uses functional components and [React Hooks](https://reactjs.org/docs/hooks-intro.html), but feel free to use class components, or use your preferred state-management library.


### Structure
The template structure is as follows:


#### src

The `src` folder is where all our development files/folders reside.

-  **App.tsx** 
App entry point and starting screen, where your App function is defined.

-  **Navigation.tsx**
Contains basic navigation stack for main -> details screens.

-  **screens**
Folder to contains app screens (pages). I structured it to contain each screen in its separate folder, like **main, detail** folders where the screen.tsx and screenStyle.ts files exist.

-  **model**
Contains data objects so to map data retrieved from server or DB to those objects.

-  **services**
Contains API or server calling related classes, and includes an API.ts file as an abstract class to retrieve data from server.

-  **helper**
Other helper classes or functions like abstract DB layer.

-  **commons**
To contain any shared components or app generic functionality like app common styles.

#### TDD

There are very good tutorials ([here](https://learntdd.in/react-native/)) covering how to use TDD with react-native so you can apply on this template.


Official documentation for creating custom project templates can be found [here](https://github.com/react-native-community/cli/blob/master/docs/init.md#creating-custom-template).