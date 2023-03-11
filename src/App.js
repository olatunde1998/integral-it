import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Home from "pages/Home";
import Contact from "pages/Contact";
import Expertise from "pages/Expertise";
import Services from "pages/Services";
import Company from "pages/Company";
import Careers from "pages/Careers";
import Layout from "components/layoutComponent/Layout";
import { AnimatePresence } from "framer-motion";
import NotFound from "pages/NotFound";






function App() {
  const location = useLocation();
  return (
    // <div classnameName="App">
      <Layout>
        <AnimatePresence existBeforeEnter>
        <Routes location={location} key={location.key}>
          <Route path="/" element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="expertise" element={<Expertise />} />
          <Route path="services" element={<Services />} />
          <Route path="company" element={<Company />} />
          <Route path="careers" element={<Careers />} />
          <Route path='*' element={<NotFound/>}/>
        </Routes>
        </AnimatePresence>
      </Layout>
    // </div>
  );
}

export default App;
