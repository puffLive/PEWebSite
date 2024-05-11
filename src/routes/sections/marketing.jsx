import { lazy } from "react";
import { Navigate, Outlet } from "react-router-dom";

import MainLayout from "../../../src/layouts/main";
import NotFoundPage from "../../pages/404";

// // ----------------------------------------------------------------------

const LandingPage = lazy(() => import("../../../src/pages/marketing/landing"));
const CaseStudyPage = lazy(() =>
  import("../../../src/pages/marketing/case-study")
);

// ----------------------------------------------------------------------

export const marketingRoutes = [
  {
    path: "marketing",
    children: [
      {
        element: (
          <MainLayout disabledSpacing>
            <LandingPage />
          </MainLayout>
        ),
        index: true,
      },
      {
        element: (
          <MainLayout>
            <Outlet />
          </MainLayout>
        ),
        children: [
          { path: "case-study", element: <CaseStudyPage /> },
          {
            path: "404",
            element: <NotFoundPage />,
          },
          { path: "*", element: <Navigate to="/404" replace /> },
        ],
      },
    ],
  },
];
