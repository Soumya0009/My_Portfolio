import Navbar from "./component/Navbar";
import Project from "./pages/Project";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Blogs from "./pages/Blogs";
import BlogPost from "./pages/BlogPost";
import PrivateRouter from "./pages/Router/PrivateRouter";
import AdminHome from "./pages/Admin/AdminHome";
import AdminBlog from "./pages/Admin/AdminBlog";
import AdminProjects from "./pages/Admin/AdminProjects";
import ResumePage from "./pages/ResumePage";
import AdminLogin from "./pages/Admin/AdminLogin";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AdminHomeAdd from "./pages/Admin/AdminHomeAdd";
import AdminUploadResume from "./pages/Admin/AdminUploadResume";
import ImageUploadPage from "./pages/Admin/ImageUploadPage";  
import AllBlogsPage from "./pages/Admin/AllBlogsPage";

function App() {
  return (
    <>
      <ToastContainer position="bottom-center" />
      <Router>
        <Navbar title="SOUMYA RANJAN MOHANTY" />
        <div>
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/project" element={<Project />} />
            <Route path="/resume" element={<ResumePage />} />
            <Route path="/blog" element={<Blogs />} />
            <Route path="/blog/:id" element={<BlogPost />} />

            {/* Admin Login Route */}
            <Route path="/admin/login" element={<AdminLogin />} />

            {/* Admin Routes Protected by PrivateRouter */}
            <Route path="/admin" element={<PrivateRouter />}>
              <Route path="" element={<AdminHome />} />
              <Route path="add" element={<AdminHomeAdd />} />
              <Route path="add/blog" element={<AdminHomeAdd />} />
              <Route path="add/project" element={<AdminHomeAdd />} />
              <Route path="blog" element={<AdminBlog />} />
              <Route path="project" element={<AdminProjects />} />
              <Route path="resume" element={<AdminUploadResume />} />
              <Route path="upload-image" element={<ImageUploadPage />} />
              <Route path="get" element={<AllBlogsPage />} />
            </Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
