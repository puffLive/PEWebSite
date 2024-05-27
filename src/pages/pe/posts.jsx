import { Helmet } from "react-helmet-async";

import PostsView from "../../sections/_pe/view/posts-view";

// ----------------------------------------------------------------------

export default function PostsPage() {
  return (
    <>
      <Helmet>
        <title>Principle Evolution: Blog</title>
      </Helmet>

      <PostsView />
    </>
  );
}
