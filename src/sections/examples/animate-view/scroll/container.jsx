import { useRef } from "react";
import { m } from "framer-motion";
import PropTypes from "prop-types";

import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

import Scrollbar from "../../../../../src/components/scrollbar";
import {
  varContainer,
  MotionViewport,
} from "../../../../../src/components/animate";

import getVariant from "../get-variant";

// ----------------------------------------------------------------------

export default function ContainerView({ selectVariant, ...other }) {
  const scrollRef = useRef(null);

  return (
    <Paper
      ref={scrollRef}
      component={m.div}
      variants={varContainer()}
      sx={{
        height: 480,
        bgcolor: "background.neutral",
      }}
      {...other}
    >
      <Scrollbar>
        {[...Array(40)].map((_, index) => (
          <Box
            key={index}
            component={MotionViewport}
            variants={getVariant(selectVariant)}
            viewport={{ root: scrollRef, once: true, amount: 0.1 }}
            sx={{
              my: 2,
              mx: "auto",
              height: 72,
              maxWidth: 480,
              display: "flex",
              borderRadius: 1,
              alignItems: "center",
              justifyContent: "center",
              bgcolor: "background.paper",
              boxShadow: (theme) => theme.customShadows.z8,
            }}
          >
            <Typography variant="body2">Item {index + 1}</Typography>
          </Box>
        ))}
      </Scrollbar>
    </Paper>
  );
}

ContainerView.propTypes = {
  selectVariant: PropTypes.string,
};
