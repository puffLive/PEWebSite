import { m } from "framer-motion";
import PropTypes from "prop-types";

import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { alpha, styled } from "@mui/material/styles";

import { _socials } from "../../../_mock";
import { bgGradient } from "../../../theme/css";

import Image from "../../../components/image";
import Iconify from "../../../components/iconify";
import { varHover, varTranHover } from "../../../components/animate";

// ----------------------------------------------------------------------

const StyledOverlay = styled("div")(({ theme }) => ({
  ...bgGradient({
    startColor: `${alpha(theme.palette.common.black, 0)} 0%`,
    endColor: `${theme.palette.common.black} 75%`,
  }),
  top: 0,
  left: 0,
  zIndex: 8,
  opacity: 0,
  width: "100%",
  height: "100%",
  position: "absolute",
  transition: theme.transitions.create("opacity", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.short,
  }),
  "&:hover": { opacity: 1 },
}));

// ----------------------------------------------------------------------

export default function MarketingTeamItem({ member, ...other }) {
  const {
    first_name,
    last_name,
    founder,
    photo,
    facebook,
    instagram,
    linkedin,
  } = member;

  const name = first_name + ` ` + last_name;

  const role = founder ? "Founder" : "Member";

  return (
    <Stack {...other}>
      <Box
        component={m.div}
        whileHover="hover"
        variants={varHover(0.95)}
        transition={varTranHover()}
        sx={{ position: "relative", borderRadius: 2, overflow: "hidden" }}
      >
        <StyledOverlay>
          <Stack
            direction="row"
            justifyContent="center"
            sx={{ width: 1, zIndex: 9, bottom: 24, position: "absolute" }}
          >
            {facebook && (
              <IconButton
                key="facebook"
                color="primary"
                target="_blank"
                href={facebook}
              >
                <Iconify icon="carbon:logo-facebook" />
              </IconButton>
            )}
            {instagram && (
              <IconButton
                key="instagram"
                color="primary"
                target="_blank"
                href={instagram}
              >
                <Iconify icon="carbon:logo-instagram" />
              </IconButton>
            )}
            {linkedin && (
              <IconButton
                key="linkedin"
                color="primary"
                target="_blank"
                href={linkedin}
              >
                <Iconify icon="carbon:logo-linkedin" />
              </IconButton>
            )}
          </Stack>
        </StyledOverlay>

        <m.div variants={varHover(1.15)} transition={varTranHover()}>
          <Image src={photo} alt={name} ratio="3/4" />
        </m.div>
      </Box>

      <Stack spacing={0.5} sx={{ mt: 2.5, textAlign: "center" }}>
        <Typography variant="h6">{name}</Typography>

        <Typography variant="body2" sx={{ color: "text.disabled" }}>
          {role}
        </Typography>
      </Stack>
    </Stack>
  );
}

MarketingTeamItem.propTypes = {
  member: PropTypes.shape({
    first_name: PropTypes.string,
    last_name: PropTypes.string,
    photo: PropTypes.string,
    role: PropTypes.string,
  }),
};
