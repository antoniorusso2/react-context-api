import { useEffect, useState } from 'react';
import axios from 'axios';
import Card from '../../components/Card/Card';
import { URI } from '../../config';
import { Link } from 'react-router-dom';

export default function PostsMain() {
  const [posts, setPosts] = useState([]);

  function fetchData() {
    axios
      .get(URI + '/posts')
      .then((res) => {
        setPosts(res.data);
      })
      .catch((err) => console.error(err));
  }

  useEffect(fetchData, []);

  return (
    <>
      <main>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <Link to={'create'}>
                <button className="btn add-new">Aggiungi un post</button>
              </Link>
            </div>
            {posts.map((post) => {
              return (
                <div key={post.id} className="col-6">
                  <Card post={post} />
                </div>
              );
            })}
          </div>
        </div>
      </main>
    </>
  );
}
