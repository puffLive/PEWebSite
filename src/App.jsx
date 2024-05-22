import "../src/global.css";

// ----------------------------------------------------------------------

import Router from "../src/routes/sections";
import { useScrollToTop } from "../src/hooks/use-scroll-to-top";

import ThemeProvider from "../src/theme";
// import { LocalizationProvider } from "../src/locales";

import ProgressBar from "../src/components/progress-bar";
import { MotionLazy } from "../src/components/animate/motion-lazy";
import { SettingsDrawer, SettingsProvider } from "../src/components/settings";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";
import NotFoundPage from "./pages/404";
import EventsPage from "./pages/pe/events";
import EventPage from "./pages/pe/event";
import MainLayout from "../src/layouts/main";
import LandingPage from "./pages/pe/landing";

import { Suspense, lazy } from "react";
import { SplashScreen } from "./components/loading-screen";
import PostsView from "./sections/_pe/view/posts-view";
import PostView from "./sections/_pe/view/post-view";

// ----------------------------------------------------------------------

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // staleTime: 60 * 1000,
      staleTime: 0,
    },
  },
});

const IndexPage = lazy(() => import("../src/pages/home"));

export default function App() {
  // useScrollToTop();

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initalIsOpen={false} />
      <SettingsProvider
        defaultSettings={{
          themeMode: "light", // 'light' | 'dark'
          themeDirection: "ltr", //  'rtl' | 'ltr'
          themeColorPresets: "default", // 'default' | 'preset01' | 'preset02' | 'preset03' | 'preset04' | 'preset05'
        }}
      >
        <ThemeProvider>
          <BrowserRouter>
            <MotionLazy>
              {/* <ProgressBar /> */}
              {/* <Router /> OLD PATH ROUTER */}
              <Routes>
                <Route path="/" element={<MainLayout />}>
                  <Route index element={<LandingPage />} />
                  <Route path="events" element={<EventsPage />} />
                  <Route path="events/:eventId" element={<EventPage />} />
                  <Route path="blog" element={<PostsView />} />
                  <Route path="blog/:blogId" element={<PostView />} />
                  <Route
                    path="ClevelandTour"
                    element={<Navigate replace to={`/events/${1}`} />}
                  />
                </Route>
                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            </MotionLazy>
          </BrowserRouter>
        </ThemeProvider>
      </SettingsProvider>
    </QueryClientProvider>
  );
}
