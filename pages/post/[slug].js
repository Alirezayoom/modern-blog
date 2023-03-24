import { getPosts, getPostDetails } from "../../services";

import {
  PostDetail,
  Categories,
  PostWidget,
  Author,
  Comments,
  CommentsForm,
} from "../../components";

export default function Post() {
  return (
    <div>
      <PostDetail />
      <Author />
      <CommentsForm />
      <Comments />
    </div>
  );
}
