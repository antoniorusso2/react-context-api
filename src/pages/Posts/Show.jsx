import { useNavigate, useParams } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { URI } from '../../config';
import placeholder from '../../assets/placeholder.bmp';
import PostsContext from '../../contexts';

export default function Show() {
  const { id } = useParams();
  const nextId = parseInt(id) + 1;
  const prevId = parseInt(id) - 1;

  const { posts, currentPost, setCurrentPost } = useContext(PostsContext);

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${URI}/posts/${id}`)
      .then((res) => {
        setCurrentPost(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [id]);

  return (
    <main>
      <div className="container">
        <div className="row">
          <div className="go-back col-12">
            <button onClick={() => navigate(-1)} className="btn go-back">
              Back
            </button>
          </div>
          <div className="col-12 next-prev">
            {prevId > 0 && (
              <button onClick={() => navigate(`/blog/${prevId}`)} className="btn prev">
                Post precedente
              </button>
            )}
            {nextId < posts.length && (
              <button onClick={() => navigate(`/blog/${nextId}`)} className={`next btn`}>
                Post successivo
              </button>
            )}
          </div>
          {currentPost && (
            <>
              <div className="hero">
                <img src={`${URI}${currentPost.image}` || placeholder} alt="" />
              </div>
              <div className="col-12 description">
                <h2>{currentPost.title}</h2>
                <p className="post-description">{currentPost.content}</p>
              </div>
            </>
          )}
        </div>
      </div>
    </main>
  );
}
