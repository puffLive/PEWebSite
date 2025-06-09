// ----------------------------------------------------------------------

import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export const useNavConfig = () => {
  const member = useSelector((state) => state.member.member);
  const [isLoggedIn, setIsLoggedIn] = useState(
    Boolean(sessionStorage.getItem("isLoggedIn"))
  );

  useEffect(() => {
    setIsLoggedIn(Boolean(member));
  }, [member]);

  useEffect(() => {
    const checkLoginStatus = () => {
      setIsLoggedIn(Boolean(sessionStorage.getItem("isLoggedIn")));
    };

    // Check login status initially and add event listener
    checkLoginStatus();
    window.addEventListener("storage", checkLoginStatus);

    // Cleanup
    return () => {
      window.removeEventListener("storage", checkLoginStatus);
    };
  }, []);

  const navConfig = isLoggedIn
    ? [
        { title: "Home", path: "/" },
        { title: "Events", path: "/events" },
        { title: "Blog", path: "/blog" },
        { title: "Connect", path: "/#connect" },
        { title: "Team", path: "/#team" },
        { title: "PE Exclusive", path: "/members-only" },
      ]
    : [
        { title: "Home", path: "/" },
        { title: "Events", path: "/events" },
        { title: "Blog", path: "/blog" },
        { title: "Connect", path: "/#connect" },
        { title: "Team", path: "/#team" },
      ];

  return navConfig;
};
