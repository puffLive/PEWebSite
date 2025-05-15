import "../src/global.css";

// ----------------------------------------------------------------------

import ThemeProvider from "../src/theme";

import { MotionLazy } from "../src/components/animate/motion-lazy";
import { SettingsProvider } from "../src/components/settings";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import NotFoundPage from "./pages/404";
import EventsPage from "./pages/pe/events";
import EventPage from "./pages/pe/event";
import MainLayout from "../src/layouts/main";
import LandingPage from "./pages/pe/landing";

import { lazy } from "react";
import PostsPage from "./pages/pe/posts";
import PostPage from "./pages/pe/post";

// ----------------------------------------------------------------------

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
      // staleTime: 0,
    },
  },
});

const IndexPage = lazy(() => import("../src/pages/home"));

export default function App() {
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
              <Routes>
                <Route path="/" element={<MainLayout />}>
                  <Route index element={<LandingPage />} />
                  <Route path="events" element={<EventsPage />} />
                  <Route path="events/:eventId" element={<EventPage />} />
                  <Route path="blog" element={<PostsPage />} />
                  <Route path="blog/:slug" element={<PostPage />} />
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
