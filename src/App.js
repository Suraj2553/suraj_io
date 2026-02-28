import React, { useEffect } from "react";
import "./App.css";
import Main from "./containers/Main";
import { ThemeProvider } from "styled-components";
import { chosenTheme } from "./theme";
import { GlobalStyles } from "./global";

function App() {
  useEffect(() => {
    // Handle redirect from 404.html
    const redirect = sessionStorage.redirect;
    if (redirect) {
      delete sessionStorage.redirect;
      // Extract the path after /suraj_io/
      const path = redirect.split("/suraj_io/")[1];
      if (path && path !== "") {
        window.history.replaceState(null, null, "/suraj_io/" + path);
      }
    }
  }, []);

  return (
    <ThemeProvider theme={chosenTheme}>
      <>
        <GlobalStyles />
        <Main theme={chosenTheme} />
      </>
    </ThemeProvider>
  );
}

export default App;
