import { Helmet } from "react-helmet-async";

import PostView from "../../sections/_marketing/view/post-view";

// ----------------------------------------------------------------------

export default function PostPage() {
  return (
    <>
      <Helmet>
        <title>Blog Post</title>
      </Helmet>

      <PostView />
    </>
  );
}
