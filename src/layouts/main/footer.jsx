import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { alpha, styled } from "@mui/material/styles";
import Button, { buttonClasses } from "@mui/material/Button";

import { _socials } from "../../../src/_mock";

import Logo from "../../../src/components/logo";

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
