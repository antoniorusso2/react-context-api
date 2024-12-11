import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { URI } from '../../config';
import placeholder from '../../assets/placeholder.bmp';

export default function Show() {
  const { id } = useParams();

  const [post, setPost] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${URI}/posts/${id}`)
      .then((res) => {
        setPost(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [id]);

  return (
    <main>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <button onClick={() => navigate(-1)} className="btn go-back">
              Back
            </button>
          </div>
          {post && (
            <>
              <div className="hero">
                <img src={`${URI}${post.image}` || placeholder} alt="" />
              </div>
              <div className="col-12 description">
                <h2>{post.title}</h2>
                <p className="post-description">{post.content}</p>
              </div>
            </>
          )}
        </div>
      </div>
    </main>
  );
}
