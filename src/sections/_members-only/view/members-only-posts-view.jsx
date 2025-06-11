import Grid from "@mui/material/Unstable_Grid2";
import Container from "@mui/material/Container";

import { _tags, _mock, _categories, _coursePosts } from "src/_mock";

import PostSidebar from "../../blog/common/post-sidebar";
import MembersOnlyNewsletter from "../member-only-newsletter";
import MembersOnlyPosts from "../../blog/elearning/members-only-posts";
import PostSearchMobile from "../../blog/common/post-search-mobile";
import MembersOnlyFeaturedPost from "../../blog/elearning/members-only-featured-post";

// ----------------------------------------------------------------------

export default function MembersOnlyPostsView() {
  return (
    <>
      <PostSearchMobile />

      <MembersOnlyFeaturedPost post={_coursePosts[4]} />

      <Container
        sx={{
          pt: 10,
        }}
      >
        <Grid container spacing={{ md: 8 }}>
          <Grid xs={12} md={8}>
            <MembersOnlyPosts posts={_coursePosts} />
          </Grid>

          <Grid xs={12} md={4}>
            <PostSidebar
              popularTags={_tags}
              categories={_categories}
              recentPosts={{ list: _coursePosts.slice(-4) }}
              advertisement={{
                title: "Advertisement",
                description:
                  "Duis leo. Donec orci lectus, aliquam ut, faucibus non",
                imageUrl: _mock.image.course(10),
                path: "",
              }}
            />
          </Grid>
        </Grid>
      </Container>
      <MembersOnlyNewsletter />
    </>
  );
}
