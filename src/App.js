import "./App.css";
import Description from "./components/Description/Description";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Partner from "./components/Partners/Partner";
import RegistrationForm from "./components/RegForm/RegistrationForm";
import ScrollJacker from "./components/Scroll-jacker/ScrollJacker";
import Suncountry from "./components/Suncountry/Suncountry";

function App() {
  return (
    <div className="App">
      <div className="app-container">
        <Header />
        <Description />
        <ScrollJacker />
        <Partner />
        <Suncountry />
        <RegistrationForm />
        <Footer />
      </div>
    </div>
  );
}

export default App;
