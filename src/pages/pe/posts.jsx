import { Helmet } from "react-helmet-async";

import PostsView from "../../sections/_marketing/view/posts-view";

// ----------------------------------------------------------------------

export default function PostsPage() {
  return (
    <>
      <Helmet>
        <title>Blog</title>
      </Helmet>

      <PostsView />
    </>
  );
}
