import { Divider } from "@mui/material";
import AccountPasswordView from "./password-view";
import AccountProfile from "./profile";

export default function AccountPersonalView() {
  return (
    <>
      <AccountProfile />

      <Divider />

      <AccountPasswordView />
    </>
  );
}
