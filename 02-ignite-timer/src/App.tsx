// import React from "react";
// import { ThemeProvider } from "styled-components";
// import { BrowserRouter } from "react-router-dom";
// import { Router } from "./Router";

// import { GlobalStyle } from "./styles/global";
// import { defaultTheme } from "./styles/themes/default";
import { Home } from "./Home";

export function App() {
  return <Home />;
  // return (
  //   <ThemeProvider theme={defaultTheme}>
  //     <BrowserRouter>
  //       <Router />
  //       <GlobalStyle />
  //     </BrowserRouter>
  //   </ThemeProvider>
  // );
}
