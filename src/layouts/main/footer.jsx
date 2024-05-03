import PropTypes from "prop-types";

import Link from "@mui/material/Link";
import Masonry from "@mui/lab/Masonry";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import Collapse from "@mui/material/Collapse";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Unstable_Grid2";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { alpha, styled } from "@mui/material/styles";
import InputAdornment from "@mui/material/InputAdornment";
import Button, { buttonClasses } from "@mui/material/Button";

import { usePathname } from "../../../src/routes/hooks";
import { RouterLink } from "../../../src/routes/components";

import { useBoolean } from "../../../src/hooks/use-boolean";
import { useResponsive } from "../../../src/hooks/use-responsive";

import { _socials } from "../../../src/_mock";

import Logo from "../../../src/components/logo";
import Iconify from "../../../src/components/iconify";

import { navConfig } from "./config-navigation";

// ----------------------------------------------------------------------

const StyledAppStoreButton = styled(Button)(({ theme }) => ({
  flexShrink: 0,
  padding: "5px 12px",
  color: theme.palette.common.white,
  border: `solid 1px ${alpha(theme.palette.common.black, 0.24)}`,
  background: `linear-gradient(180deg, ${theme.palette.grey[900]} 0%, ${theme.palette.common.black} 100%)`,
  [`& .${buttonClasses.startIcon}`]: {
    marginLeft: 0,
  },
}));

// ----------------------------------------------------------------------

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const simpleFooter = (
    <Container sx={{ py: 8, textAlign: "center" }}>
      <Logo single />

      <Typography
        variant="caption"
        component="div"
        sx={{ color: "text.secondary" }}
      >
        © {currentYear}. All rights reserved
      </Typography>
    </Container>
  );

  return <footer>{simpleFooter}</footer>;
}

// ----------------------------------------------------------------------
