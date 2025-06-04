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
  const [isUploading, setIsUploading] = useState(false);
  const navigate = useNavigate();

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
      const response = await fetch(
        `${PE_API_BASE_URL}api/v1/members/upload-photo`,
        {
          method: "POST",
          body: formData,
          headers: {
            Authorization: `Bearer ${member.token}`,
          },
        }
      );

      if (!response.ok) throw new Error("Upload failed");

      const data = await response.json();

      // Update member in session storage with new photo URL
      const updatedMember = {
        ...member,
        member: {
          ...member.member,
          photo: data.data.photo,
        },
      };
      sessionStorage.setItem("member", JSON.stringify(updatedMember));

      // Refresh the page to show new photo
      window.location.reload();
    } catch (error) {
      console.error("Upload error:", error);
    } finally {
      setIsUploading(false);
    }
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
          onClick={() => {
            // Remove session data
            sessionStorage.removeItem("isLoggedIn");
            sessionStorage.removeItem("member");

            // Clear httpOnly cookie by setting expired date
            document.cookie =
              "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

            // Navigate to home page
            navigate("/");
          }}
          sx={{
            px: 1,
            height: 44,
            borderRadius: 1,
          }}
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
