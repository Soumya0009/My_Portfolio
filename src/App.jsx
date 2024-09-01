import Navbar from "./component/Navbar";
import Project from "./pages/Project";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Blogs from "./pages/Blogs";
import BlogPost from "./pages/BlogPost";
import PrivateRouter from "./pages/Router/PrivateRouter";
import AdminHome from "./pages/Admin/AdminHome";
import AdminBlog from "./pages/Admin/AdminBlog";
import AdminProjects from "./pages/Admin/AdminProjects";

function App() {
  return (
    <>
      <Router>
        <Navbar title="SOUMYA RANJAN MOHANTY" />
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/project" element={<Project />} />
            <Route path="/blog" element={<Blogs />} />
            <Route path="/blog/:id" element={<BlogPost />} />
            
            <Route path="/admin" element={<PrivateRouter />}>
              <Route path="" element={<AdminHome />} />
              <Route path="blog" element={<AdminBlog />} />
              <Route path="project" element={<AdminProjects/>}/>
            </Route>

          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
