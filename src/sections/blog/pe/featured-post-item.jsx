import PropTypes from "prop-types";

import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";

import { paths } from "../../../routes/paths";
import { RouterLink } from "../../../routes/components";

import { fDate } from "../../../utils/format-time";

import Image from "../../../components/image";
import TextMaxLine from "../../../components/text-max-line";

import PostTimeBlock from "../common/post-time-block";

// ----------------------------------------------------------------------

export default function FeaturedPostItem({ post }) {
  return (
    <Stack
      direction={{
        xs: "column",
        md: "row",
      }}
      sx={{ bgcolor: "background.default", borderRadius: 2 }}
    >
      <Image
        src={post.coverUrl}
        alt={post.title}
        sx={{ flexGrow: 1, height: { md: 560 } }}
      />

      <Stack
        justifyContent="space-between"
        sx={{
          mx: "auto",
          p: { xs: 3, md: 5 },
          maxWidth: { md: 396 },
        }}
      >
        <Stack spacing={1}>
          <PostTimeBlock
            createdAt={fDate(post.createdAt)}
            duration={post.duration}
          />

          <Link
            component={RouterLink}
            to={`${post.id}`}
            color="inherit"
            variant="h3"
          >
            {post.title}
          </Link>

          <TextMaxLine
            line={3}
            variant="body2"
            sx={{ color: "text.secondary" }}
          >
            {post.description}
          </TextMaxLine>
        </Stack>

        <Stack
          direction="row"
          alignItems="center"
          sx={{ pt: 2, typography: "body2" }}
        >
          <Avatar src={post.author.avatarUrl} sx={{ mr: 1 }} />
          {post.author.name}
        </Stack>
      </Stack>
    </Stack>
  );
}

FeaturedPostItem.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string,
    coverUrl: PropTypes.string,
    duration: PropTypes.string,
    description: PropTypes.string,
    createdAt: PropTypes.string,
    author: PropTypes.shape({
      avatarUrl: PropTypes.string,
      name: PropTypes.string,
    }),
  }),
};
