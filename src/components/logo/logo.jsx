import { memo } from "react";
import PropTypes from "prop-types";

import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import { useTheme } from "@mui/material/styles";

import { RouterLink } from "../../../src/routes/components";

// ----------------------------------------------------------------------

function Logo({ single = false, sx }) {
  const theme = useTheme();

  // ***** const PRIMARY_MAIN = theme.palette.primary.main;

  // NOTE: need to create and add another logo that will show at loading

  return (
    <Link
      component={RouterLink}
      href="/"
      color="inherit"
      aria-label="go to homepage"
      sx={{ lineHeight: 0 }}
    >
      <Box
        sx={{
          width: single ? 64 : 75,
          lineHeight: 0,
          cursor: "pointer",
          display: "inline-flex",
          ...sx,
        }}
      >
        <img
          src="/assets/logo/PE/PE-LOGO-64.png"
          alt="Principle Evolution logo"
        />
      </Box>
    </Link>
  );
}

Logo.propTypes = {
  single: PropTypes.bool,
  sx: PropTypes.object,
};

export default memo(Logo);
