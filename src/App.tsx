import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Homepage from "./pages/Homepage";
import { baseTheme } from "./styles/theme";

import GlobalStyles from "./styles/global";
import Header from "./components/Header";
import AboutUs from "./pages/AboutUs";
import Registration from "./pages/Registration";
import Team from "./pages/Team";
import Footer from "./components/Footer";
import Contacts from "./pages/Contacts";

function App() {
  const location = useLocation();

  return (
    <ThemeProvider theme={baseTheme}>
      {location.pathname !== "/" && <Header />}
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/team" element={<Team />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
      {location.pathname !== "/" && <Footer />}
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default App;
