import { useContext, useEffect } from 'react';
import PostsContext from '../../contexts';
import Card from '../Card/Card';
import style from './PostsList.module.css';

export default function PostList() {
  const { posts, fetchData } = useContext(PostsContext);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(fetchData, []);

  return (
    <ul className={style.list}>
      <h3 className="col-12">Elenco Posts</h3>
      {posts &&
        posts.map((post) => {
          return (
            <li className={`col-4 ${style.post}`} key={post.id}>
              <Card post={post} />
            </li>
          );
        })}
    </ul>
  );
}
