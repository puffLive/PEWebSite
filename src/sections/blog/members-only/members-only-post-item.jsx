import PropTypes from "prop-types";

import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";

import { paths } from "../../../routes/paths";
import { RouterLink } from "../../../routes/components";

import { fDate } from "../../../utils/format-time";

import Image from "../../../components/image";
import TextMaxLine from "../../../components/text-max-line";

// ----------------------------------------------------------------------

export default function MembersOnlyPostItem({ post }) {
  return (
    <Paper variant="outlined" sx={{ borderRadius: 2, overflow: "hidden" }}>
      <Image src={post.coverUrl} alt={post.title} ratio="1/1" />

      <Stack direction="row" spacing={3} sx={{ p: 3 }}>
        <Stack sx={{ textAlign: "center" }}>
          <Typography variant="subtitle2">
            {post.createdAt ? fDate(post.createdAt, "MMM") : ""}
          </Typography>

          <Divider sx={{ mt: 1, mb: 0.5 }} />

          <Typography variant="h3">{fDate(post.createdAt, "dd")}</Typography>
        </Stack>

        <Stack spacing={1}>
          <Link
            component={RouterLink}
            href={paths.membersOnly.post}
            color="inherit"
          >
            <TextMaxLine variant="h6" persistent>
              {post.title}
            </TextMaxLine>
          </Link>

          <TextMaxLine variant="body2" persistent color="text.secondary">
            {post.description}
          </TextMaxLine>

          <Stack
            spacing={1.5}
            direction="row"
            alignItems="center"
            sx={{ pt: 1.5 }}
          >
            <Avatar
              src={post.author.avatarUrl}
              sx={{ width: 40, height: 40 }}
            />
            <Stack>
              <Typography variant="body2">{post.author.name}</Typography>
              <Typography variant="caption" sx={{ color: "text.disabled" }}>
                {post.duration}
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Paper>
  );
}

MembersOnlyPostItem.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string,
    coverUrl: PropTypes.string,
    duration: PropTypes.string,
    description: PropTypes.string,
    // createdAt: PropTypes.instanceOf(Date),
    author: PropTypes.shape({
      avatarUrl: PropTypes.string,
      name: PropTypes.string,
    }),
  }),
};
