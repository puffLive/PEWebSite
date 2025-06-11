import { useEffect } from 'react';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import { alpha } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import { useBoolean } from 'src/hooks/use-boolean';
import { useResponsive } from 'src/hooks/use-responsive';

import { _mock, _socials, _courses } from 'src/_mock';

import Iconify from 'src/components/iconify';
import { SplashScreen } from 'src/components/loading-screen';

import Advertisement from '../../advertisement';
import MembersOnlyNewsletter from '../members-only-newsletter';
import ReviewMembersOnly from '../../review/elearning/review-elearning';
import MembersOnlyCourseListSimilar from '../list/members-only-course-list-similar';
import MembersOnlyCourseDetailsHero from '../details/members-only-course-details-hero';
import MembersOnlyCourseDetailsInfo from '../details/members-only-course-details-info';
import MembersOnlyCourseDetailsSummary from '../details/members-only-course-details-summary';
import MembersOnlyCourseDetailsTeachersInfo from '../details/members-only-course-details-teachers-info';

// ----------------------------------------------------------------------

const _mockCourse = _courses[0];

export default function MembersOnlyCourseView() {
  const mdUp = useResponsive('up', 'md');

  const loading = useBoolean(true);

  const courseSimilar = _courses.slice(-3);

  useEffect(() => {
    const fakeLoading = async () => {
      await new Promise((resolve) => setTimeout(resolve, 500));
      loading.onFalse();
    };
    fakeLoading();
  }, [loading]);

  if (loading.value) {
    return <SplashScreen />;
  }

  return (
    <>
      <MembersOnlyCourseDetailsHero course={_mockCourse} />

      <Container
        sx={{
          overflow: 'hidden',
          pt: { xs: 5, md: 10 },
          pb: { xs: 15, md: 10 },
        }}
      >
        <Grid container spacing={{ xs: 5, md: 8 }}>
          {!mdUp && (
            <Grid xs={12}>
              <MembersOnlyCourseDetailsInfo course={_mockCourse} />
            </Grid>
          )}

          <Grid xs={12} md={7} lg={8}>
            <MembersOnlyCourseDetailsSummary course={_mockCourse} />

            <Stack direction="row" flexWrap="wrap" sx={{ mt: 5 }}>
              <Typography variant="subtitle2" sx={{ mt: 0.75, mr: 1.5 }}>
                Share:
              </Typography>

              <Stack direction="row" alignItems="center" flexWrap="wrap">
                {_socials.map((social) => (
                  <Button
                    key={social.value}
                    size="small"
                    variant="outlined"
                    startIcon={<Iconify icon={social.icon} />}
                    sx={{
                      m: 0.5,
                      flexShrink: 0,
                      color: social.color,
                      borderColor: social.color,
                      '&:hover': {
                        borderColor: social.color,
                        bgcolor: alpha(social.color, 0.08),
                      },
                    }}
                  >
                    {social.label}
                  </Button>
                ))}
              </Stack>
            </Stack>

            <Divider sx={{ my: 5 }} />

            <MembersOnlyCourseDetailsTeachersInfo teachers={_mockCourse.teachers} />
          </Grid>

          <Grid xs={12} md={5} lg={4}>
            <Stack spacing={5}>
              {mdUp && <MembersOnlyCourseDetailsInfo course={_mockCourse} />}

              <Advertisement
                advertisement={{
                  title: 'Advertisement',
                  description: 'Duis leo. Donec orci lectus, aliquam ut, faucibus non',
                  imageUrl: _mock.image.course(7),
                  path: '',
                }}
              />
            </Stack>
          </Grid>
        </Grid>
      </Container>

      {mdUp && <Divider />}

      <ReviewMembersOnly />

      <MembersOnlyCourseListSimilar courses={courseSimilar} />

      <MembersOnlyNewsletter />
    </>
  );
}
