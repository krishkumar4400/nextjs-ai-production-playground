/*
 Context API:
    - Context API: Global state without prop drilling.
    - Custom Hooks: Reusable login (use theme).
    - Component composition: Themed components work together.
    - Conditional Styling: Classes change based on Theme.

  This global transfer of information is known as context API.

  --- foundation of state management libraries

  State management libraries: redux-toolkit, zustand, react bydefault: context API.

  context api is simplest form of state management.
  it gives us a whole global context and whenever there is a state changed we can pass the state to global context and anybody wants to see what the state is you get the state value from here. 
  
  context keeps the application aware.

  it saves us from prop drilling as well as make the application seemless as we grow more in the component. 

  Context API:
    first we will create theme context (it can be another context as well like - createAuthContext, createCardContext)
    second we will create theme provider component (it might be create authProviderComponent, createCardComponent).


        export
    (provider == wrapper -> children)


 */

import { createContext, useState } from "react";

// create theme context
const ThemeContext = createContext();   // this is the container - there could be anything in this container.
const AuthContext = createContext(); // we can create as many as we like contexts

// theme provider component
export function ThemeProvider({ children }) {

  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  const value = {
    theme,
    toggleTheme,
    isDark: theme === "dark",
  };
  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

const ThemeToggler = () => {
  return <div></div>;
};

export default ThemeToggler;
