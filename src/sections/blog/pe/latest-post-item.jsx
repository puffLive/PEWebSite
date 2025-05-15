import { m } from "framer-motion";
import PropTypes from "prop-types";

import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import { alpha, useTheme } from "@mui/material/styles";

import { paths } from "../../../routes/paths";
import { RouterLink } from "../../../routes/components";

import { fDate } from "../../../utils/format-time";

import Image from "../../../components/image";
import { varHover, varTranHover } from "../../../components/animate";

import PostTimeBlock from "../common/post-time-block";

// ----------------------------------------------------------------------

export default function LatestPostItem({ post }) {
  const theme = useTheme();

  return (
    <Stack
      component={m.div}
      whileHover="hover"
      sx={{
        borderRadius: 2,
        overflow: "hidden",
        position: "relative",
        boxShadow: theme.customShadows.z12,
      }}
    >
      <m.div variants={varHover(1.25)} transition={varTranHover()}>
        <Image
          src={post.imageCover}
          alt={post.title}
          ratio="3/4"
          overlay={`linear-gradient(to top, ${alpha(
            theme.palette.common.black,
            0
          )} 0%, ${theme.palette.common.black} 75%)`}
        />
      </m.div>

      <Stack
        justifyContent="space-between"
        sx={{
          p: 5,
          width: 1,
          height: 1,
          zIndex: 9,
          position: "absolute",
          color: "common.white",
        }}
      >
        <Stack spacing={2}>
          <PostTimeBlock
            createdAt={fDate(post.createdAt)}
            duration={post.duration}
            sx={{ color: "inherit", opacity: 0.72 }}
          />

          <Link
            component={RouterLink}
            to={`/blog/${post.slug}`}
            variant="h4"
            color="inherit"
            underline="none"
          >
            {post.title}
          </Link>
        </Stack>

        <Stack direction="row" alignItems="center" sx={{ typography: "body2" }}>
          {post.member ? (
            <>
              <Avatar src={post.member.avatar} sx={{ mr: 1 }} />
              {post.member.first_name}
            </>
          ) : null}
        </Stack>
      </Stack>
    </Stack>
  );
}

LatestPostItem.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string,
    coverUrl: PropTypes.string,
    duration: PropTypes.string,
    createdAt: PropTypes.string,
    author: PropTypes.shape({
      avatarUrl: PropTypes.string,
      name: PropTypes.string,
    }),
  }),
};
