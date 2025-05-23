import { lazy, Suspense } from "react";
import { Outlet, Navigate, useRoutes } from "react-router-dom";

import MainLayout from "../../../src/layouts/main";

import { SplashScreen } from "../../../src/components/loading-screen";

import { Routes } from "./pe";
import NotFoundPage from "../../pages/404";

// ----------------------------------------------------------------------

const IndexPage = lazy(() => import("../../../src/pages/home"));

// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    {
      element: (
        <Suspense fallback={<SplashScreen />}>
          <Outlet />
        </Suspense>
      ),
      children: [
        {
          element: (
            <MainLayout disabledSpacing>
              <IndexPage />
            </MainLayout>
          ),
          index: true,
        },
        ...Routes,

        {
          path: "404",
          element: <NotFoundPage />,
        },
        { path: "*", element: <Navigate to="/404" replace /> },
      ],
    },
  ]);
}
