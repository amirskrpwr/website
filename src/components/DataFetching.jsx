import axios from "axios";
import React, { useEffect, useState } from "react";

function DataFetching() {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [show, setShow] = useState(false);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/")
      .then((res) => {
        setPosts(res.data);
        setLoading(false);
      })
      .catch((error) => setPosts("something went wrong."));
  });
  return (
    <div>
      {!show ? (
        <button
          className="btn btn-outline-success mb-3"
          onClick={() => {
            setShow(!show);
          }}
        >
          Show
        </button>
      ) : (
        <div>
          <button
            className="btn btn-outline-success mb-3"
            onClick={() => {
              setShow(!show);
            }}
          >
            hide
          </button>
          <button
            className="btn btn-outline-primary ml-2 mb-3"
            onClick={() => {
              setLoading(true);
            }}
          >
            Reload
          </button>
        </div>
      )}
      {!show ? (
        <span></span>
      ) : (
        <div>
          {loading ? (
            <div>
              <div className="spinner-border text-warning mr-2"></div>Loading...
            </div>
          ) : (
            <ul style={{ listStyleType: "none" }}>
              {posts.map((post) => (
                <li key={post.id}>
                  <h3>
                    {post.id}. {post.title}
                  </h3>
                  <p>{post.body}</p>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
      <br />
      <hr />
    </div>
  );
}

export default DataFetching;
