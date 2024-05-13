import { lazy } from "react";
import { Navigate, Outlet } from "react-router-dom";

import MainLayout from "../../layouts/main";
import NotFoundPage from "../../pages/404";

// // ----------------------------------------------------------------------

const LandingPage = lazy(() => import("../../pages/pe/landing"));
const CaseStudyPage = lazy(() => import("../../pages/pe/case-study"));

// ----------------------------------------------------------------------

export const Routes = [
  {
    path: "/",
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
