import React, { useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardText,
} from "reactstrap";
import { toast } from "react-toastify";
import blogService from "../../Services/createBlog"; // Import the service functions
import { BASE_URL } from "../../Services/helper"; // Make sure BASE_URL is properly set

const AllBlogsPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  // Inline styles
  const styles = {
    container: {
      marginTop: "20px",
    },
    header: {
      textAlign: "center",
      fontWeight: "bold",
      color: "#333",
      marginBottom: "30px",
    },
    blogCard: {
      boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
      borderRadius: "8px",
      overflow: "hidden",
      marginBottom: "20px", // Spacing between cards
    },
    blogImage: {
      width: "100%",
      height: "200px",
      objectFit: "cover",
      borderBottom: "1px solid #ddd",
    },
    cardBody: {
      padding: "15px",
    },
    loading: {
      textAlign: "center",
    },
    noBlogs: {
      textAlign: "center",
      color: "#888",
    },
  };

  // Fetch all blogs
  const fetchAllBlogs = async () => {
    try {
      const response = await blogService.getAllBlogs();
      setBlogs(response); // Assuming `response` contains the array of blogs
    } catch (error) {
      toast.error("Failed to fetch blogs");
      console.error("Error fetching blogs:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAllBlogs();
  }, []);

  return (
    <Container style={styles.container}>
      <h3 style={styles.header}>All Blogs</h3>
      {loading ? (
        <div style={styles.loading}>Loading...</div>
      ) : (
        <Row>
          {blogs.length === 0 ? (
            <div style={styles.noBlogs}>No blogs found</div>
          ) : (
            blogs.map((blog, index) => (
              <Col xs={12} key={blog.blogId || `blog-${index}`}>
                <Card style={styles.blogCard}>
                  <img
                    alt={blog.title}
                    src={
                      blog.imageName
                        ? `${BASE_URL}/api/blog/image/${blog.imageName}`
                        : "default-image.jpg"
                    }
                    style={styles.blogImage}
                  />
                  <CardBody style={styles.cardBody}>
                    <CardTitle tag="h5">{blog.title}</CardTitle>
                    <CardText>{blog.content}</CardText>
                  </CardBody>
                </Card>
              </Col>
            ))
          )}
        </Row>
      )}
    </Container>
  );
};

export default AllBlogsPage;


