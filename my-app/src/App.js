import Navebar from "./component/Navebar";
import Home from "./component/Home";
import Courses from "./component/Courses";
import Services from "./component/Services";
import Whyhikoo from "./component/Whyhikoo";
import Internship from "./component/Internship";
import InternshipApplication from "./component/InternshipApplication";

import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { Contact } from "lucide-react";
import Career from "./component/Career";
import Contact from "./component/Contact";
import Footer from "./component/Footer";
import Collageinternship from "./component/Collageinternship";
function App() {
  return (
    <BrowserRouter>

      <div>

        <Navebar />

        <Routes>

          {/* Home Page */}
          <Route
            path="/"
            element={
              <>
                <Home />
                <Courses />
                <Services />
                <Whyhikoo />
                {/* <Internship /> */}
                {/* <Career /> */}
                {/* <Contact /> */}
                {/* <Footer /> */}
              </>
            }
          />

          {/* Internship Page */}
          {/* <Route
            path="/internship"
            element={<InternshipApplication />}
          /> */}
          <Route
          path="/Collageinternship"
          element={<Collageinternship />}
          />
           <Route path="/career" element={<Career />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/intern" element={<Internship />} />


         

        </Routes>
  
      </div>
       <Footer />
    

    </BrowserRouter>
  );
}

export default App;