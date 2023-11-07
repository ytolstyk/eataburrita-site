import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./Home";
import { Navbar } from "./Navbar";
import { Privacy } from "./Privacy";
import { Eula } from "./Eula";
import { Page } from "./styles";

export function App() {
  return (
    <BrowserRouter>
      <Page>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/eula" element={<Eula />} />
        </Routes>
      </Page>
    </BrowserRouter>
  );
}
