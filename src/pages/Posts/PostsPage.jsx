import { Link } from 'react-router-dom';
import PostList from '../../components/PostsList/PostsList';

export default function PostsMain() {
  return (
    <main>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <Link to={'create'}>
              <button className="btn add-new">Aggiungi un post</button>
            </Link>
          </div>
          <PostList />
        </div>
      </div>
    </main>
  );
}
