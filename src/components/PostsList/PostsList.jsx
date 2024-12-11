/* eslint-disable react/prop-types */
import Card from '../Card/Card';

export default function PostList({ post }) {
  return (
    <div key={post.id} className="col-6">
      <Card post={post} />
    </div>
  );
}
