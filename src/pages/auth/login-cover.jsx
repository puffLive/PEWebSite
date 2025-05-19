import { Helmet } from "react-helmet-async";

// import LoginCoverView from "../../../src/sections/auth/login-cover-view";
import LoginBackgroundView from "../../sections/auth/login-background-view";
import LoginCoverView from "../../sections/auth/login-cover-view";
import AuthCoverLayout from "../../layouts/auth/cover";

// ----------------------------------------------------------------------

export default function LoginCoverPage() {
  return (
    <>
      <Helmet>
        <title>PE: Login</title>
      </Helmet>
      <LoginBackgroundView />
    </>
  );
}
