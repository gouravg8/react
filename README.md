# Learning React with (chaiAurCode)

As an aspirational Full-Stack developer this(React) is one of the thing that will help me to make Web Apps to solve real-life problems.

## Day1

Setup the project

```bash
npm create vite@latest
```

> Name [project-name]  
> Choose [React]  
> Choose [language(Javascript or Typescript)]

```bash
cd project-name     # to enter on project folder/directory
npm install         # install all needed dependencies
npm run dev         # run development server for react
```

## Day2

### SPA

Web apps that are created using react are known as SPA meaning single page applications, because it only contains one and only single index.html file

And rest DOM is created using React in Jsx format

### Structure

```text
├── node_modules
├── src
│ ├── components
│ │ ├── Header.js
│ │ └── Footer.js
│ ├── App.js
│ └── index.js
├── public
│ ├── style.css
│ └── favicon.ico
├── package.json
└── index.html
```

### Fragment

- it is an empty tag to wrap up the multiple elements inside it
- empty tag/fragment does not create a new node on the DOM

### Components

- it is a piece of code that returns the jsx/js
- it is nothing but a function of javascript

  **Best practices**

  - component name must be start with CapitalLetter

    ```text
    App.jsx
    ```

  - it is preferred that the component containing jsx code must be initialized named with **.jsx** extension
  - **function name**, **file name** must start with CapitalLetter

## Day3

- **Transpiler/Bundler** convert the JSX code into **.js** readable format and to create the DOM from it
- We can also write component as a function

```text
<App /> also App()
```

### JSX (JavaScript eXtension)

- We can write **JS** inside the HTML
- It is **evaluated expression(final output)**
- We can't use `if-else` in JSX directly
- We can show JS variables in jsx using {curly braces}

  ```javascript
  function App() {
    let name = "Gourav soni";
    return <h1>My name is {name}</h1>;
  }
  ```

## Day4

### Hook

Hooks are the special type of JS function of React, that let us use many features of React directly from the `<Component>`

### useState()

`useState()` hook helps us to change the state(current value) of the variable, wherever it(variable) is used throughout the `<Component>`

#### syntax

```javascript
let [var, setVar] = useState(initialValue)
```

var: variable
setVar: method to change the value of that variable
initialValue: default/starting value of the variable

## Day5

### Virtual DOM

- React creates the tree like structure for keeping the track for changes in the UI
- It is done by the comparing both Real DOM and React's own DOM and if differences found it(React) changes and reflects on the DOM

### Fibre

- Keeping the **Track** and **updation** is done by **Fibre Algorithm**
- Key features: Pause, Abort, or reuse work as new update come in

```text
_Hydration:_ Inserting Js in HTML & CSS to make it interative and functional
```

### Reconciliation

- React algorithm Chooses what to update, When to update in the UI
- By **difference algorithm** between two **Real DOM** and **Virtual Dom**

### Why to use **Keys** in list

- **Increase Performance** by differentiating each list item to another by key
- Key should be **Stable**, **Predictable**, & **Unique**
