import React from "react";
import { useParams, Link, useHistory } from "react-router-dom";
import { useContext } from "react";
import api from "./api/posts";
import DataContext from "./context/DataContext";

const PostPage = () => {
  const { id } = useParams();
  const { posts, setPost } = useContext(DataContext);
  const history = useHistory();
  const post = posts.find((post) => post.id.toString() === id);

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this post?")) return;

    try {
      // await api.delete(`/posts/${Number(id)}`); 
      setPost(posts.filter((p) => p.id !== Number(id)));
      history.push("/"); // go back to homepage
    } catch (err) {
      console.log(`Error: ${err.message}`);
    }
  };

  return (
    <main className="PostPage">
      <article className="post">
        {post && (
          <>
            <h2>{post.title}</h2>
            <p className="postDate">{post.datetime}</p>
            <p className="postBody">{post.body}</p>
            <Link to={`/edit/${post.id}`}>
              <button className="editButton">Edit Post</button>
            </Link>
            <button
              className="deleteButton"
              onClick={() => handleDelete(post.id)}
            >
              Delete Post
            </button>
          </>
        )}
        {!post && (
          <>
            <h2>Post Not Found</h2>
            <p>Well, that's disappointing.</p>
            <p>
              <Link to="/">Visit Our Homepage</Link>
            </p>
          </>
        )}
      </article>
    </main>
  );
};

export default PostPage;
