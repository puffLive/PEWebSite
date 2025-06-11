import { useEffect } from "react";

import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

import { useBoolean } from "src/hooks/use-boolean";

import { _courses } from "src/_mock";

import Iconify from "src/components/iconify";

import MembersOnlyNewsletter from "../member-only-newsletter";
import MembersOnlyFilters from "../filters/members-only-filters";
import MembersOnlyCourseList from "../list/members-only-course-list";

// ----------------------------------------------------------------------

export default function MembersOnlyCoursesView() {
  const mobileOpen = useBoolean();

  const loading = useBoolean(true);

  useEffect(() => {
    const fakeLoading = async () => {
      await new Promise((resolve) => setTimeout(resolve, 500));
      loading.onFalse();
    };
    fakeLoading();
  }, [loading]);

  return (
    <>
      <Container>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          sx={{
            py: 5,
          }}
        >
          <Typography variant="h2">Courses</Typography>

          <Button
            color="inherit"
            variant="contained"
            startIcon={<Iconify icon="carbon:filter" width={18} />}
            onClick={mobileOpen.onTrue}
            sx={{
              display: { md: "none" },
            }}
          >
            Filters
          </Button>
        </Stack>

        <Stack direction={{ xs: "column", md: "row" }}>
          <MembersOnlyFilters
            open={mobileOpen.value}
            onClose={mobileOpen.onFalse}
          />

          <Box
            sx={{
              flexGrow: 1,
              pl: { md: 8 },
              width: { md: `calc(100% - ${280}px)` },
            }}
          >
            <MembersOnlyCourseList courses={_courses} loading={loading.value} />
          </Box>
        </Stack>
      </Container>

      <MembersOnlyNewsletter />
    </>
  );
}
