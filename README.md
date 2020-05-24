# ReactProgs

## Table of contents
* [Setup](#setup)
* [Short notes on Components props and state](#short-notes-on-components-props-and-state)

## Setup

* pre requisites : install node.js and npm
* any ide (visual studio code, ...)
* step 1 : cd ../ReactProgs or cd ../[AppName]
* step 2 : npm install
* step 3 : npm start


## Short notes on Components props and state

* props are read only
* react is strict in case of impure functions
* props are objects which are passed from one component to other. (Parent to child)

* Components are of two types
* class components
* function components

* Naming conventions: Always component name should start with capital letter.
* React considers components starts with lower case as DOM tags.
* you should export any component before you import it in other component.

* Every time render will be called whenever there is a change in state
* child component would n't know whether it recieved the props from parent's state, parent's prop or was typed by hand
* this.state is always assigned inside a constructor