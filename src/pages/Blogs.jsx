import React from "react";
import "./CSS/Blog.css";
import BlogCard from "../component/BlogCard";

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
    // Add more blogs as needed
  ];

  return (
    <>
      <div className="app">
        {blogs.map((blog) => (
          <BlogCard
            key={blog.id}
            id={blog.id}
            image={blog.image}
            title={blog.title}
            intro={blog.intro}
          />
        ))}
      </div>
    </>
  );
}

export default Blogs;
