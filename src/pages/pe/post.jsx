import { Helmet } from "react-helmet-async";

import PostView from "../../sections/_pe/view/post-view";

// ----------------------------------------------------------------------

export default function PostPage() {
  return (
    <>
      <Helmet>
        <title>Principle Eoluiton: Blog Post</title>
      </Helmet>

      <PostView />
    </>
  );
}
