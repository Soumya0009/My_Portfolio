import React, { useState } from "react";
import "../CSS/Blog.css";
import BlogCard from "../component/BlogCard";
import { Pagination } from "@mui/material"; // Import Material-UI Pagination component

function Blogs() {
  const blogs = [
    {
      id: 1,
      image:
        "https://w0.peakpx.com/wallpaper/726/670/HD-wallpaper-anime-demon-slayer-kimetsu-no-yaiba-muichiro-tokito.jpg",
      title: "Make Your Point",
      intro: "This is the introduction of the blog.",
      content:
        "By February 2021, the manga had over 150 million copies in circulation, including digital versions...",
    },
    {
      id: 2,
      image:
        "https://w0.peakpx.com/wallpaper/1004/504/HD-wallpaper-demon-slayer-kimetsu-no-yaiba.jpg",
      title: "HTML CSS Full Course",
      intro: "Learn HTML and CSS in this full course.",
      content: "This is the full content of the HTML CSS course blog.",
    },
    {
      id: 3,
      image:
        "https://w0.peakpx.com/wallpaper/1004/504/HD-wallpaper-demon-slayer-kimetsu-no-yaiba.jpg",
      title: "HTML CSS Full Course",
      intro: "Learn HTML and CSS in this full course.",
      content: "This is the full content of the HTML CSS course blog.",
    },
    {
      id: 4,
      image:
        "https://w0.peakpx.com/wallpaper/1004/504/HD-wallpaper-demon-slayer-kimetsu-no-yaiba.jpg",
      title: "HTML CSS Full Course",
      intro: "Learn HTML and CSS in this full course.",
      content: "This is the full content of the HTML CSS course blog.",
    },
    {
      id: 5,
      image:
        "https://w0.peakpx.com/wallpaper/1004/504/HD-wallpaper-demon-slayer-kimetsu-no-yaiba.jpg",
      title: "HTML CSS Full Course",
      intro: "Learn HTML and CSS in this full course.",
      content: "This is the full content of the HTML CSS course blog.",
    },
    {
      id: 6,
      image:
        "https://w0.peakpx.com/wallpaper/1004/504/HD-wallpaper-demon-slayer-kimetsu-no-yaiba.jpg",
      title: "HTML CSS Full Course",
      intro: "Learn HTML and CSS in this full course.",
      content: "This is the full content of the HTML CSS course blog.",
    },
    {
      id: 7,
      image:
        "https://w0.peakpx.com/wallpaper/1004/504/HD-wallpaper-demon-slayer-kimetsu-no-yaiba.jpg",
      title: "HTML CSS Full Course",
      intro: "Learn HTML and CSS in this full course.",
      content: "This is the full content of the HTML CSS course blog.",
    },
    {
      id: 8,
      image:
        "https://w0.peakpx.com/wallpaper/726/670/HD-wallpaper-anime-demon-slayer-kimetsu-no-yaiba-muichiro-tokito.jpg",
      title: "Make Your Point",
      intro: "This is the introduction of the blog.",
      content:
        "By February 2021, the manga had over 150 million copies in circulation, including digital versions...",
    },
    {
      id: 9,
      image:
        "https://w0.peakpx.com/wallpaper/726/670/HD-wallpaper-anime-demon-slayer-kimetsu-no-yaiba-muichiro-tokito.jpg",
      title: "Make Your Point",
      intro: "This is the introduction of the blog.",
      content:
        "By February 2021, the manga had over 150 million copies in circulation, including digital versions...",
    },
    {
      id: 10,
      image:
        "https://w0.peakpx.com/wallpaper/726/670/HD-wallpaper-anime-demon-slayer-kimetsu-no-yaiba-muichiro-tokito.jpg",
      title: "Make Your Point",
      intro: "This is the introduction of the blog.",
      content:
        "By February 2021, the manga had over 150 million copies in circulation, including digital versions...",
    },
  ];

  // States for current page and number of blogs per page
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 9; // Adjust to display 9 blogs per page

  // Calculate total pages
  const totalPages = Math.ceil(blogs.length / blogsPerPage);

  // Get current blogs to display on the current page
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);

  // Function to handle page navigation
  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  return (
    <>
      <div className="app">
        {currentBlogs.map((blog) => (
          <BlogCard
            key={blog.id}
            id={blog.id}
            image={blog.image}
            title={blog.title}
            intro={blog.intro}
          />
        ))}
      </div>

      {/* Material-UI Pagination Component */}
      <div
        style={{ display: "flex", justifyContent: "center", marginBottom: "50px" }}
      >
        <Pagination
          count={totalPages} // Total number of pages
          page={currentPage} // Current active page
          onChange={handlePageChange} // Handle page change
          variant="outlined" // Optional styling variant
          shape="rounded" // Optional shape for pagination buttons
          color="primary" // Optional color
        />
      </div>
    </>
  );
}

export default Blogs;
