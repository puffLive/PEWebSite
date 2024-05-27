import PropTypes from "prop-types";

import Box from "@mui/material/Box";
import { Analytics } from "@vercel/analytics/react";

import Header from "./header";
import Footer from "./footer";
import { HEADER } from "../config-layout";
import { Outlet } from "react-router-dom";
import { useScrollToTop } from "../../hooks/use-scroll-to-top";

// ----------------------------------------------------------------------

export default function MainLayout({
  children,
  headerOnDark = false,
  disabledSpacing = false,
  sx,
  ...other
}) {
  useScrollToTop();

  return (
    <>
      <Analytics />
      <Box
        sx={{
          height: 1,
          display: "flex",
          flexDirection: "column",
          ...sx,
        }}
        {...other}
      >
        <Header headerOnDark={headerOnDark} />

        <Box component="main" sx={{ flexGrow: 1 }}>
          {!(disabledSpacing || headerOnDark) && (
            <Box
              sx={{
                height: { xs: HEADER.H_MOBILE, md: HEADER.H_DESKTOP },
              }}
            />
          )}
          <Outlet />
        </Box>

        <Footer />
      </Box>
    </>
  );
}

MainLayout.propTypes = {
  children: PropTypes.node,
  headerOnDark: PropTypes.bool,
  disabledSpacing: PropTypes.bool,
  sx: PropTypes.object,
};
