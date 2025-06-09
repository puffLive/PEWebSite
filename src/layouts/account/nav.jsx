import axios from "axios";
import PropTypes from "prop-types";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Drawer from "@mui/material/Drawer";
import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";
import { alpha } from "@mui/material/styles";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemButton from "@mui/material/ListItemButton";
import CircularProgress from "@mui/material/CircularProgress";

import { paths } from "../../../src/routes/paths";
import { useActiveLink } from "../../../src/routes/hooks";
import { RouterLink } from "../../../src/routes/components";
import { PE_API_BASE_URL } from "../../../src/config/config";

import { useResponsive } from "../../../src/hooks/use-responsive";

import { _mock } from "../../../src/_mock";

import Iconify from "../../../src/components/iconify";
import TextMaxLine from "../../../src/components/text-max-line";
import { useLogout } from "../../auth/useLogout";

import { useDispatch } from "react-redux";
import { clearMember } from "../../store/memberSlice";

// ----------------------------------------------------------------------

const navigations = [
  {
    title: "Personal Info",
    path: paths.pe.profile,
    icon: <Iconify icon="carbon:user" />,
  },
];

// ----------------------------------------------------------------------

export default function Nav({ open, onClose }) {
  const mdUp = useResponsive("up", "md");
  const navigate = useNavigate();
  const { logout } = useLogout();
  const dispatch = useDispatch();
  const [isUploading, setIsUploading] = useState(false);

  const member = JSON.parse(sessionStorage.getItem("member"));

  const handleImageUpload = async (event) => {
    const file = event.target.files?.[0];
    if (!file) return;

    try {
      setIsUploading(true);

      // Create form data
      const formData = new FormData();
      formData.append("photo", file);
      formData.append("memberId", member.member.id);

      // Upload to your API
      const response = await axios.post(
        `${PE_API_BASE_URL}api/v1/members/upload-photo`,
        formData,
        {
          withCredentials: true,
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.status !== 200) throw new Error("Upload failed");

      const data = response.data.data;
      // Update member in session storage with new photo URL
      const updatedMember = {
        ...member,
        member: {
          ...member.member,
          avatar: data.avatar,
        },
      };
      console.log("Updated member: ", updatedMember);
      sessionStorage.setItem("member", JSON.stringify(updatedMember));

      // Refresh the page to show new photo
      navigate(0);
    } catch (error) {
      console.error("Upload error:", error);
    } finally {
      setIsUploading(false);
    }
  };

  const handleLogout = async () => {
    // Optionally, call your backend logout endpoint here
    await logout();

    sessionStorage.removeItem("member");
    sessionStorage.removeItem("isLoggedIn");

    dispatch(clearMember()); // Clear member state in Redux store

    navigate("/"); // Redirect to sign-in page
  };

  const renderContent = (
    <Stack
      sx={{
        flexShrink: 0,
        borderRadius: 2,
        width: 1,
        ...(mdUp && {
          width: 280,
          border: (theme) =>
            `solid 1px ${alpha(theme.palette.grey[500], 0.24)}`,
        }),
      }}
    >
      <Stack spacing={2} sx={{ p: 3, pb: 2 }}>
        <Stack spacing={2} direction="row" alignItems="center">
          <Avatar src={member?.member.avatar} sx={{ width: 80, height: 80 }} />
          <Stack
            direction="row"
            alignItems="center"
            sx={{
              typography: "caption",
              cursor: "pointer",
              "&:hover": { opacity: 0.72 },
            }}
          >
            <input
              type="file"
              accept="image/*"
              id="photo-upload"
              style={{ display: "none" }}
              onChange={handleImageUpload}
            />
            <label
              htmlFor="photo-upload"
              style={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              {isUploading ? (
                <CircularProgress size={16} sx={{ mr: 1 }} />
              ) : (
                <Iconify icon="carbon:edit" sx={{ mr: 1 }} />
              )}
              Change photo
            </label>
          </Stack>
        </Stack>

        <Stack spacing={0.5}>
          <TextMaxLine variant="subtitle1" line={1}>
            {member?.member.first_name} {member?.member.last_name}
          </TextMaxLine>
          <TextMaxLine
            variant="body2"
            line={1}
            sx={{ color: "text.secondary" }}
          >
            {member?.member.email}
          </TextMaxLine>
        </Stack>
      </Stack>

      <Divider sx={{ borderStyle: "dashed" }} />

      <Stack sx={{ my: 1, px: 2 }}>
        {navigations.map((item) => (
          <NavItem key={item.title} item={item} />
        ))}
      </Stack>

      <Divider sx={{ borderStyle: "dashed" }} />

      <Stack sx={{ my: 1, px: 2 }}>
        <ListItemButton
          sx={{
            px: 1,
            height: 44,
            borderRadius: 1,
          }}
          onClick={handleLogout}
        >
          <ListItemIcon>
            <Iconify icon="carbon:logout" />
          </ListItemIcon>
          <ListItemText
            primary="Logout"
            primaryTypographyProps={{
              typography: "body2",
            }}
          />
        </ListItemButton>
      </Stack>
    </Stack>
  );

  return (
    <>
      {mdUp ? (
        renderContent
      ) : (
        <Drawer
          open={open}
          onClose={onClose}
          PaperProps={{
            sx: {
              width: 280,
            },
          }}
        >
          {renderContent}
        </Drawer>
      )}
    </>
  );
}

Nav.propTypes = {
  onClose: PropTypes.func,
  open: PropTypes.bool,
};

// ----------------------------------------------------------------------

function NavItem({ item }) {
  const active = useActiveLink(item.path);

  return (
    <Link
      component={RouterLink}
      key={item.title}
      href={item.path}
      color={active ? "primary" : "inherit"}
      underline="none"
    >
      <ListItemButton
        sx={{
          px: 1,
          height: 44,
          borderRadius: 1,
        }}
      >
        <ListItemIcon>{item.icon}</ListItemIcon>
        <ListItemText
          primary={item.title}
          primaryTypographyProps={{
            typography: "body2",
            ...(active && {
              typography: "subtitle2",
            }),
          }}
        />
      </ListItemButton>
    </Link>
  );
}

NavItem.propTypes = {
  item: PropTypes.shape({
    icon: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    path: PropTypes.string,
    title: PropTypes.string,
  }),
};
