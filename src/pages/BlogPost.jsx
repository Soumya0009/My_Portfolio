import React from "react";
import { useParams } from "react-router-dom";
import "../CSS/BlogPost.css";

const BlogPost = () => {
  const { id } = useParams();

  const blogs = [
    {
      id: 1,
      image:
        "https://w0.peakpx.com/wallpaper/726/670/HD-wallpaper-anime-demon-slayer-kimetsu-no-yaiba-muichiro-tokito.jpg",
      title: "Make Your Point",
      intro: "This is the introduction of the blog.",
      content:
        "The fourth and final season, titled Demon Slayer: Kimetsu no Yaiba – Hashira Training Arc, adapts from the 15th and 16th volumes (chapters 128–139) of the manga. It premiered on May 12, 2024, with a one-hour episode. The season ended with a one-hour special, which aired on June 30 of the same year." +
        " The fourth and final season, titled Demon Slayer: Kimetsu no Yaiba – Hashira Training Arc, adapts from the 15th and 16th volumes (chapters 128–139) of the manga. It premiered on May 12, 2024, with a one-hour episode. The season ended with a one-hour special, which aired on June 30 of the same year." +
        " The fourth and final season, titled Demon Slayer: Kimetsu no Yaiba – Hashira Training Arc, adapts from the 15th and 16th volumes (chapters 128–139) of the manga. It premiered on May 12, 2024, with a one-hour episode. The season ended with a one-hour special, which aired on June 30 of the same year.",
    },
    {
      id: 2,
      image:
        "https://w0.peakpx.com/wallpaper/726/670/HD-wallpaper-anime-demon-slayer-kimetsu-no-yaiba-muichiro-tokito.jpg",
      title: "Make Your Point",
      intro: "This is the introduction of the blog.",
      content:
        "By February 2021, the manga had over 150 million copies in circulation, including digital versions...",
    },
    {
      id: 3,
      image:
        "https://w0.peakpx.com/wallpaper/726/670/HD-wallpaper-anime-demon-slayer-kimetsu-no-yaiba-muichiro-tokito.jpg",
      title: "Make Your Point",
      intro: "This is the introduction of the blog.",
      content:
        "By February 2021, the manga had over 150 million copies in circulation, including digital versions...",
    },
    {
      id: 4,
      image:
        "https://w0.peakpx.com/wallpaper/726/670/HD-wallpaper-anime-demon-slayer-kimetsu-no-yaiba-muichiro-tokito.jpg",
      title: "Make Your Point",
      intro: "This is the introduction of the blog.",
      content:
        "By February 2021, the manga had over 150 million copies in circulation, including digital versions...",
    },
    {
      id: 5,
      image:
        "https://w0.peakpx.com/wallpaper/726/670/HD-wallpaper-anime-demon-slayer-kimetsu-no-yaiba-muichiro-tokito.jpg",
      title: "Make Your Point",
      intro: "This is the introduction of the blog.",
      content:
        "By February 2021, the manga had over 150 million copies in circulation, including digital versions...",
    },
    {
      id: 6,
      image:
        "https://w0.peakpx.com/wallpaper/726/670/HD-wallpaper-anime-demon-slayer-kimetsu-no-yaiba-muichiro-tokito.jpg",
      title: "Make Your Point",
      intro: "This is the introduction of the blog.",
      content:
        "By February 2021, the manga had over 150 million copies in circulation, including digital versions...",
    },
    {
      id: 7,
      image:
        "https://w0.peakpx.com/wallpaper/726/670/HD-wallpaper-anime-demon-slayer-kimetsu-no-yaiba-muichiro-tokito.jpg",
      title: "Make Your Point",
      intro: "This is the introduction of the blog.",
      content:
        "By February 2021, the manga had over 150 million copies in circulation, including digital versions...",
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
        "https://w0.peakpx.com/wallpaper/1004/504/HD-wallpaper-demon-slayer-kimetsu-no-yaiba.jpg",
      title: "HTML CSS Full Course",
      intro: "Learn HTML and CSS in this full course.",
      content: "This is the full content of the HTML CSS course blog.",
    },
    // Add more blogs as needed
  ];

  const blog = blogs.find((blog) => blog.id.toString() === id);

  if (!blog) {
    return <div>Blog post not found</div>;
  }

  return (
    <div className="blog-post">
      <div className="image-container">
        <img src={blog.image} alt={blog.title} />
      </div>
      <div className="content">
        <h1>{blog.title}</h1>
        <p>{blog.content}</p>
      </div>
    </div>
  );
};

export default BlogPost;
