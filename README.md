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

Web apps that are created using react are known as SPA meaning single page applications, beacause it only contains one and only single index.html file

And rest DOM is created using React in Jsx format

### Strucure

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

- it is an empty tag to wrap up the multiple elements insede it
- empty tag/fragment does not create a new node on the DOM

### Components

- it is a piece of code that returns the jsx/js
- it is nothing but a function of javascript

  **Best practices**

  - component name must be start with CapitalLetter

    ```text
    App.jsx
    ```

  - it is preffered that the component containing jsx code must be initialized named with **.jsx** extension
  - **function name**, **file name** must start with CapitalLetter
  