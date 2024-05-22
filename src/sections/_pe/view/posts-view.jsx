import Container from "@mui/material/Container";
import Grid from "@mui/material/Unstable_Grid2";

import { _tags, _mock, _categories, _marketingPosts } from "../../../_mock";

import PostSidebar from "../../blog/common/post-sidebar";
import Newsletter from "../newsletter";
import PostSearchMobile from "../../blog/common/post-search-mobile";
import BlogPosts from "../../blog/pe/posts";
import LandingFreeSEO from "../landing/landing-free-seo";
import BlogFeaturedPosts from "../../blog/pe/featured-posts";
import { useBlogPosts } from "../../../Blog/useBlogPosts";
import { SplashScreen } from "../../../components/loading-screen";

// ----------------------------------------------------------------------

export default function PostsView() {
  const { isLoading: isBlogsLoading, blogPosts } = useBlogPosts();

  if (isBlogsLoading) return <SplashScreen />;

  return (
    <>
      {/* <PostSearchMobile /> */}

      {/* <BlogFeaturedPosts posts={_marketingPosts.slice(0, 5)} /> */}

      <BlogFeaturedPosts posts={blogPosts} />

      <Container
        sx={{
          mt: 10,
        }}
      >
        <Grid container columnSpacing={{ xs: 0, md: 8 }}>
          <Grid xs={12} md={8}>
            <BlogPosts posts={blogPosts} />
          </Grid>

          <Grid xs={12} md={4}>
            <PostSidebar
              popularTags={_tags}
              categories={_categories}
              recentPosts={{ list: blogPosts }}
              advertisement={{
                title: "Advertisement",
                description:
                  "Duis leo. Donec orci lectus, aliquam ut, faucibus non",
                imageUrl: _mock.image.marketing(9),
                path: "",
              }}
            />
          </Grid>
        </Grid>
      </Container>
      <LandingFreeSEO />
    </>
  );
}
