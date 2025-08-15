import { memo } from "react";
import { m } from "framer-motion";
import PropTypes from "prop-types";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { alpha, useTheme } from "@mui/material/styles";

import Image from "../../../components/image";

import Icon from "../illustrations/pattern/icon";
import Label from "../illustrations/pattern/label";
import Shape from "../illustrations/pattern/shape";
import Pattern01 from "../illustrations/pattern/pattern-01";
import Pattern02 from "../illustrations/pattern/pattern-02";

// ----------------------------------------------------------------------

const varUp = {
  animate: { y: [-8, 8, -8], x: [-4, 4, -4] },
  transition: { duration: 8, repeat: Infinity },
};

const varDown = {
  animate: { y: [8, -8, 8], x: [4, -4, 4] },
  transition: { duration: 8, repeat: Infinity },
};

const varLeft = {
  animate: { x: [8, -8, 8], y: [4, -4, 4] },
  transition: { duration: 7, repeat: Infinity },
};

const varRight = {
  animate: { x: [8, -8, 8], y: [4, -4, 4] },
  transition: { duration: 7, repeat: Infinity },
};

// ----------------------------------------------------------------------

function MembersOnlyHeroIllustration({ sx, ...other }) {
  const theme = useTheme();

  const GREEN = theme.palette.success.main;

  const YELLOW = theme.palette.warning.main;

  const BLUE = "#355EC9";

  const PURPLE = "#9B3AB1";

  const styleIconContent = {
    fontSize: 22,
    color: "common.black",
    fontWeight: "fontWeightBold",
  };

  return (
    <Box
      sx={{
        width: 670,
        height: 670,
        display: "flex",
        alignItems: "center",
        position: "relative",
        justifyContent: "center",
        ...sx,
      }}
      {...other}
    >
      <Box sx={{ position: "absolute", right: 18, bottom: 28, zIndex: 8 }}>
        <Image
          visibleByDefault
          disabledEffect
          alt="Principle Evolution Founders"
          // src="/assets/images/course/course_teacher_hero.png"
          // src="https://principleevolution.s3.us-east-2.amazonaws.com/founders/RichPuffKels.png"
          src="/assets/images/PE/RichPuffKels.png"
          sx={{ width: 546, height: 700 }}
        />
      </Box>

      <Box
        {...varDown}
        component={m.div}
        sx={{ position: "absolute", left: 115, bottom: 115, zIndex: 8 }}
      >
        <Image
          visibleByDefault
          disabledEffect
          alt="book icon"
          src="/assets/icons/ic_book.png"
          sx={{ width: 52, height: 62 }}
        />
      </Box>

      <Box
        {...varRight}
        component={m.div}
        sx={{ position: "absolute", left: 18, top: 220, zIndex: 8 }}
      >
        <Image
          visibleByDefault
          disabledEffect
          alt="pencil icon"
          src="/assets/icons/ic_pencil.png"
          sx={{
            width: 60,
            height: 77,
            transform: "translate(80px, 0px)",
          }}
        />
      </Box>

      <Box
        {...varUp}
        component={m.div}
        sx={{ zIndex: 9, left: 120, bottom: 168, position: "absolute" }}
      >
        <Image
          visibleByDefault
          disabledEffect
          alt="laptop icon"
          src="/assets/icons/ecommerce/ic_laptop.svg"
          sx={{
            width: 80,
            height: 80,
            transform: "translate(380px, 0px) rotate(15deg)",
          }}
        />
      </Box>

      {/* Icon */}

      <Box
        {...varLeft}
        component={m.div}
        sx={{ top: 88, right: 72, zIndex: 8, position: "absolute" }}
      >
        <Image
          visibleByDefault
          disabledEffect
          alt="heart icon"
          src="/assets/icons/ecommerce/ic_health.svg"
          sx={{
            width: 60,
            height: 60,
            transform: "translate(0px, 100px) rotate(15deg)",
          }}
        />
      </Box>

      <Box
        {...varRight}
        component={m.div}
        sx={{ zIndex: 8, bottom: 160, position: "absolute" }}
      >
        <Image
          visibleByDefault
          disabledEffect
          alt="positive return icon"
          src="/assets/icons/travel/ic_travel_site_visitors.svg"
          sx={{
            width: 60,
            height: 60,
            transform: "scale(1.2) translate(20px, 20px) rotate(15deg)",
          }}
        />
      </Box>

      <Box
        {...varUp}
        component={m.div}
        sx={{ zIndex: 8, right: 90, position: "absolute" }}
      >
        <Image
          visibleByDefault
          disabledEffect
          alt="house icon"
          src="/assets/icons/PE/house.png"
          sx={{
            width: 60,
            height: 60,
            transform: "scale(1.2) translate(-70px, 15px) rotate(-15deg)",
          }}
        />
      </Box>

      <Box
        {...varDown}
        component={m.div}
        sx={{ zIndex: 8, position: "absolute" }}
      >
        <Image
          visibleByDefault
          disabledEffect
          alt="pencil icon"
          src="/assets/icons/ic_agreement.svg"
          sx={{
            width: 60,
            height: 60,
            transform: "scale(1.2) translate(-150px, 75px) rotate(15deg)",
          }}
        />
      </Box>

      <Pattern01 sx={{ left: 0, top: 0 }} />
      <Pattern02
        sx={{ top: 0, left: 0, opacity: 0.24, transform: "scale(1.2)" }}
      />
      <Shape sx={{ position: "absolute", right: 32, bottom: 32 }} />
    </Box>
  );
}

MembersOnlyHeroIllustration.propTypes = {
  sx: PropTypes.object,
};

export default memo(MembersOnlyHeroIllustration);
