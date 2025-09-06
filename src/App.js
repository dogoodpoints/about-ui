import "./App.css";
import { Routes, Route } from "react-router-dom";
import Contact from "./components/Contact/Contact";
import Description from "./components/Description/Description";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Partner from "./components/Partners/Partner";
import RegistrationForm from "./components/RegForm/RegistrationForm";
import ScrollJacker from "./components/Scroll-jacker/ScrollJacker";
import Suncountry from "./components/Suncountry/Suncountry";

function App() {
  const Home = () => (
    <>
      <Header />
      <Description />
      <ScrollJacker />
      <Partner />
      <Suncountry />
      <RegistrationForm />
      <Footer />
    </>
  );

  const ContactPage = () => (
    <>
      <Header />
      <Contact />
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
