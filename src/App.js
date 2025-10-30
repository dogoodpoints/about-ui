import "./App.css";
import { Routes, Route } from "react-router-dom";
import Contact from "./components/Contact/Contact";
import Description from "./components/Description/Description";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Partner from "./components/Partners/Partner";
import RegistrationForm from "./components/RegForm/RegistrationForm";
import Suncountry from "./components/Suncountry/Suncountry";
import Impact from "./components/impact/Impact";
import Faq from "./components/FAQ/faq";
import Values from "./components/Values/Values";

function App() {
  const Home = () => (
    <>
      <Header />
      <Description />
      <Partner />
      <Impact />
      <Values />
      <RegistrationForm />
      <Footer />
    </>
  );

  const ContactPage = () => (
    <>
      <Header />
      <Contact />
      <Footer />
    </>
  );

  return (
    <div className="App">
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
