import "../src/global.css";

// ----------------------------------------------------------------------

import Router from "../src/routes/sections";
import { useScrollToTop } from "../src/hooks/use-scroll-to-top";

import ThemeProvider from "../src/theme";
import { LocalizationProvider } from "../src/locales";

import ProgressBar from "../src/components/progress-bar";
import { MotionLazy } from "../src/components/animate/motion-lazy";
import { SettingsDrawer, SettingsProvider } from "../src/components/settings";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// ----------------------------------------------------------------------

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
      // staleTime: 0,
    },
  },
});

export default function App() {
  useScrollToTop();

  return (
    <QueryClientProvider client={queryClient}>
      <LocalizationProvider>
        <SettingsProvider
          defaultSettings={{
            themeMode: "light", // 'light' | 'dark'
            themeDirection: "ltr", //  'rtl' | 'ltr'
            themeColorPresets: "default", // 'default' | 'preset01' | 'preset02' | 'preset03' | 'preset04' | 'preset05'
          }}
        >
          <ThemeProvider>
            <MotionLazy>
              <ProgressBar />
              <Router />
            </MotionLazy>
          </ThemeProvider>
        </SettingsProvider>
      </LocalizationProvider>
    </QueryClientProvider>
  );
}