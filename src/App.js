import React, { useEffect } from "react";
import "./App.css";
import Main from "./containers/Main";
import { ThemeProvider } from "styled-components";
import { chosenTheme } from "./theme";
import { GlobalStyles } from "./global";

function App() {
  // GitHub Pages SPA redirect handling
  useEffect(() => {
    const { search, pathname } = window.location;

    // Check if there's a redirect path in the URL (from 404.html)
    if (search.includes("?/")) {
      const cleanPath = search.replace("?/", "").replace(/~and~/g, "&");
      const newUrl = pathname + cleanPath + window.location.hash;
      window.history.replaceState(null, null, newUrl);
    }
  }, []);

  return (
    <ThemeProvider theme={chosenTheme}>
      <>
        <GlobalStyles />
        <div>
          <Main theme={chosenTheme} />
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;
