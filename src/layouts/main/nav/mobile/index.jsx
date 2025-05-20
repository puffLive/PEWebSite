import { useEffect } from "react";
import PropTypes from "prop-types";

import { HashLink } from "react-router-hash-link";

import List from "@mui/material/List";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import { Avatar } from "@mui/material";

import { paths } from "../../../../../src/routes/paths";
import { usePathname } from "../../../../../src/routes/hooks";

import { useBoolean } from "../../../../../src/hooks/use-boolean";

import Logo from "../../../../../src/components/logo";
import Iconify from "../../../../../src/components/iconify";
import Scrollbar from "../../../../../src/components/scrollbar";

import NavList from "./nav-list";
import { NAV } from "../../../config-layout";
import { RouterLink } from "../../../../../src/routes/components";
import { varHover } from "../../../../components/animate";
import Label from "../../../../components/label";
import Link from "@mui/material/Link";

// ----------------------------------------------------------------------

export default function NavMobile({ data }) {
  const pathname = usePathname();

  const mobileOpen = useBoolean();

  useEffect(() => {
    if (mobileOpen.value) {
      mobileOpen.onFalse();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const isLoggedIn = Boolean(sessionStorage.getItem("isLoggedIn"));
  const member = JSON.parse(sessionStorage.getItem("member"));

  console.log("Pathname", pathname);
  console.log("IsLoggedIn", isLoggedIn);
  console.log("Member", member);

  const signInOrAvatar = (
    <Stack
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ my: 2 }}
    >
      {isLoggedIn ? (
        <>
          <Link
            component={RouterLink}
            href={paths.pe.profile}
            rel="noopener"
            sx={{
              // display: { md: "inline-flex" },
              // flexDirection: "column",
              // alignItems: "center",
              textDecoration: "none",
              color: "text.primary",
            }}
          >
            <Avatar
              alt={member?.member.first_name}
              src={member?.member.avatar}
              sx={{
                width: 60,
                height: 60,
                mb: 1,
              }}
            />
          </Link>
          <Label
            variant="soft"
            color="primary"
            sx={{
              height: 20,
            }}
          >
            {member?.member.first_name}
          </Label>
        </>
      ) : (
        <Button
          component={RouterLink}
          variant="contained"
          color="inherit"
          href={paths.pe.signIn}
          rel="noopener"
          variants={varHover(1.25)}
          sx={{
            display: { md: "inline-flex" },
          }}
        >
          Sign In
        </Button>
      )}
    </Stack>
  );

  return (
    <>
      <IconButton onClick={mobileOpen.onTrue} sx={{ ml: 1, color: "inherit" }}>
        <Iconify icon="carbon:menu" />
      </IconButton>

      <Drawer
        open={mobileOpen.value}
        onClose={mobileOpen.onFalse}
        PaperProps={{
          sx: {
            pb: 5,
            width: NAV.W_VERTICAL,
          },
        }}
      >
        <Logo sx={{ mx: 2.5, my: 3 }} />

        <List component="nav" disablePadding>
          {data.map((list) => (
            <NavList
              key={list.title}
              data={list}
              onClick={mobileOpen.onFalse}
            />
          ))}
        </List>
        {signInOrAvatar}
      </Drawer>
    </>
  );
}

NavMobile.propTypes = {
  data: PropTypes.array,
};
