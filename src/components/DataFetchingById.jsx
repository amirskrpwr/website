import axios from "axios";
import React, { useEffect, useState } from "react";

function FetchingData() {
  const [post, setPost] = useState({});
  const [id, setId] = useState(0);
  const [idFromBtnClk, setIdFromBtnClk] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${idFromBtnClk}`)
      .then((res) => {
        console.log(res);
        setPost(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [idFromBtnClk]);

  const handleClick = () => {
    setLoading(true);
    setIdFromBtnClk(id);
  };

  return (
    <div>
      <div className="form-group">
        <input
          type="number"
          className="form-input"
          onChange={(e) => setId(e.target.value)}
          placeholder="Enter your post id"
        />
        <button className="btn bg-secondary ml-2" onClick={handleClick}>
          Go
        </button>
      </div>

      {loading ? (
        <div>
          <div class="spinner-border text-success mr-3"></div>Loading...
        </div>
      ) : (
        <div>
          <h3>{post.title}</h3>
          <div>{post.body}</div>
        </div>
      )}
      <hr />
    </div>
  );
}

export default FetchingData;
