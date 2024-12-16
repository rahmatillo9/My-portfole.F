import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import  { Navbar } from "./components/navbar";
import Home from "./pages/Home";
import Footer from "./components/footer";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contacts from "./pages/Contacts";
import CreateMaqola from "./pages/createmaqola";
import CreateProject from "./pages/CreateProject";
import EditArticle from "./components/Article/ArticleEdite";
import EditProject from "./components/Project/ProjectEdite";

export default function MyPage() {
  return (
       
      <div className="min-h-screen flex flex-col">
        <Navbar /> 
        <div className="flex-grow"> 
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/Cmaqola" element={<CreateMaqola/>}/>
            <Route path="Cproject" element={<CreateProject/>}/>
             <Route path="/EditeArticle/:id" element={<EditArticle/>}/>
             <Route path="/EditeProject/:id" element={<EditProject/>}/>
          </Routes>
        </div>
        <Footer/>  
      </div>

  );
}
