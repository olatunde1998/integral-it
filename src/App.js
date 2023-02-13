import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "pages/Home";
import Contact from "pages/Contact";
import Expertise from "pages/Expertise";
import Services from "pages/Services";
import Company from "pages/Company";
import Careers from "pages/Careers";
import Layout from "components/layoutComponent/Layout";

function App() {
  return (
    <div classnameName="App">
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="expertise" element={<Expertise />} />
          <Route path="services" element={<Services />} />
          <Route path="company" element={<Company />} />
          <Route path="careers" element={<Careers />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
