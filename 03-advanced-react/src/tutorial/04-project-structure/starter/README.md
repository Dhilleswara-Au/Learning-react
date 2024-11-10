In this section, we will create all files and folders from scratch.

---------------------------------------------------

APP.jsx

import Example from "./tutorial/04-project-structure/starter/Example";
import { Home, About } from "./tutorial/04-project-structure/starter/Pages";
import Navbar from "./tutorial/04-project-structure/starter/Navbar/Navbar";
import Navbar from "./tutorial/04-project-structure/starter/Navbar";

function App() {
  return(
    <div className="container">
      {/* <Starter /> */}
      {/* <Final /> */}
      {/* <Navbar /> */}
      {/* <Home />
      <About /> */}
      <Example />
    </div>
  )
}

export default App;


-----------------------------------------------------------
#### Project Structure - Extra Extensions

- code spell checker - works well with code and documents.
- glean - easy extract JSX into a new component

#### Project Structure - Default Export

/tutorial/04-project-structure/starter

There are more options

Normally somewhere in the src

/components/componentName.jsx
/screens/componentName.jsx

- create navbar folder

  - setup Navbar.jsx (component)
  - Navbar.css (styles)

- import in App.jsx

import Final from 'pathToFolder/Navbar/Navbar'

- first solution rename to index.jsx(entry point)

Works but eventually too many index tabs :):):)

- rename back to Navbar.jsx
- create index.jsx

```js
export { default } from './Navbar';
```

#### Project Structure - Named Exports

/tutorial/04-project-structure/starter

- only makes sense if you have quite a few files

- create Pages directory
- setup two components Home.jsx and About.jsx

- import both in the App.jxs

import Home from 'pathToFolder/Pages/Home';
import About from 'pathToFolder/Pages/About';

A lot of work/lines of code

- create index.jsx

```js
import Home from './Home';
import About from './About';

export { Home, About };
```

in App.jsx

import {Home, About} from 'pathToFolder/Pages

#### Project Structure - Export Group

/tutorial/04-project-structure/starter

- create Example directory
- setup two components (setup simple returns) and index.jsx file
- in index.jsx setup return and render both components (import)
- import/render index.jsx in App.jsx