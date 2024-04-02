import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header/header";
import Home from "./pages/Home/home"
import Erreur from "./pages/Erreur/erreur";
import Contact from "./pages/Contact/contact";
import Mentions from "./pages/Mentions/mentions";
import Footer from "./components/Footer/footer";

function App() {
  return (
   <div>
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Erreur />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Mentions" element={<Mentions />} />
        </Routes>
        <Footer/>
      </Router>
   </div>
  );
}
export default App;
