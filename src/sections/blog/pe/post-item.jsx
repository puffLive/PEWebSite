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
import TextMaxLine from "../../../components/text-max-line";
import { varHover, varTranHover } from "../../../components/animate";

import PostTimeBlock from "../common/post-time-block";
import { useLocation } from "react-router";

// ----------------------------------------------------------------------

export default function PostItem({ post }) {
  const theme = useTheme();

  const { pathname } = useLocation();

  return (
    <Stack
      component={m.div}
      whileHover="hover"
      variants={varHover(1)}
      transition={varTranHover()}
      sx={{ borderRadius: 2, overflow: "hidden", position: "relative" }}
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
          height: 1,
          zIndex: 9,
          position: "absolute",
          color: "common.white",
        }}
      >
        <Stack spacing={2}>
          <PostTimeBlock
            duration={post.duration}
            createdAt={fDate(post.createdAt)}
            sx={{ color: "inherit", opacity: 0.72 }}
          />

          <Link
            component={RouterLink}
            // to={`blog/${post.id}`}
            to={pathname === "/blog" ? `${post.slug}` : `blog/${post.slug}`}
            sx={{ color: "common.white" }}
          >
            <TextMaxLine variant="h4">{post.title}</TextMaxLine>
          </Link>
        </Stack>

        <Stack direction="row" alignItems="center" sx={{ typography: "body2" }}>
          {post.member ? (
            <>
              <Avatar src={post.member.avatar} sx={{ mr: 1 }} />
              {post.member.first_name} {post.member.last_name}
            </>
          ) : null}
        </Stack>
      </Stack>
    </Stack>
  );
}

PostItem.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string,
    imageCover: PropTypes.string,
    duration: PropTypes.string,
    createdAt: PropTypes.string,
    author: PropTypes.shape({
      avatar: PropTypes.string,
      first_name: PropTypes.string,
      last_name: PropTypes.string,
    }),
  }),
};
