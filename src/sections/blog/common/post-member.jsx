import PropTypes from "prop-types";

import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

import { _socials } from "../../../_mock";

import Iconify from "../../../components/iconify";

// ----------------------------------------------------------------------

export default function PostMember({ member }) {
  const { first_name, last_name, founder, quote, avatar } = member;

  return (
    <Stack
      direction="row"
      spacing={{ xs: 3, md: 4 }}
      sx={{
        py: { xs: 5, md: 10 },
      }}
    >
      <Avatar src={avatar} sx={{ width: 96, height: 96 }} />

      <Stack spacing={2}>
        <Stack
          spacing={2}
          alignItems={{ md: "center" }}
          direction={{ xs: "column", md: "row" }}
          justifyContent={{ md: "space-between" }}
        >
          <Stack spacing={0.5}>
            <Typography variant="h5">
              {first_name} {last_name}
            </Typography>

            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              {founder
                ? "A founder of Principle Evolution"
                : "A member of Principle Evolution"}
            </Typography>
          </Stack>

          {/* <Stack direction="row">
            {_socials.map((social) => (
              <IconButton key={social.value}>
                <Iconify icon={social.icon} sx={{ color: social.color }} />
              </IconButton>
            ))}
          </Stack> */}
        </Stack>

        <Typography variant="caption" sx={{ color: "text.disabled" }}>
          {quote}
        </Typography>
      </Stack>
    </Stack>
  );
}

PostMember.propTypes = {
  author: PropTypes.shape({
    about: PropTypes.string,
    avatarUrl: PropTypes.string,
    name: PropTypes.string,
    quotes: PropTypes.string,
    role: PropTypes.string,
  }),
};
