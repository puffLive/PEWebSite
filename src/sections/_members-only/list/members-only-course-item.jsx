import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

import { paths } from '../../../routes/paths';
import { RouterLink } from '../../../routes/components';

import { fCurrency, fShortenNumber } from '../../../utils/format-number';

import Image from '../../../components/image';
import Label from '../../../components/label';
import Iconify from '../../../components/iconify';
import TextMaxLine from '../../../components/text-max-line';

// ----------------------------------------------------------------------

export default function MembersOnlyCourseItem({ course, vertical }) {
  const {
    title,
    slug,
    level,
    price,
    teachers,
    coverUrl,
    category,
    priceSale,
    bestSeller,
    totalHours,
    description,
    ratingNumber,
    totalReviews,
    totalStudents,
  } = course;

  return (
    <Card
      sx={{
        display: { sm: 'flex' },
        '&:hover': {
          boxShadow: (theme) => theme.customShadows.z24,
        },
        ...(vertical && {
          flexDirection: 'column',
        }),
      }}
    >
      <Box sx={{ flexShrink: { sm: 0 } }}>
        <Image
          alt={slug}
          src={coverUrl}
          ratio={vertical ? '16/9' : undefined}
          sx={{
            height: 1,
            objectFit: 'cover',
            width: { sm: 240 },
            ...(vertical && {
              width: { sm: 1 },
            }),
          }}
        />
      </Box>

      {bestSeller && (
        <Label
          color="warning"
          variant="filled"
          sx={{
            top: 12,
            left: 12,
            position: 'absolute',
            textTransform: 'uppercase',
          }}
        >
          Best Seller
        </Label>
      )}

      <Stack spacing={3} sx={{ p: 3 }}>
        <Stack
          spacing={{
            xs: 3,
            sm: vertical ? 3 : 1,
          }}
        >
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <Typography variant="overline" sx={{ color: 'primary.main' }}>
              {category}
            </Typography>

            <Typography variant="h4">
              {priceSale > 0 && (
                <Box
                  component="span"
                  sx={{
                    mr: 0.5,
                    color: 'text.disabled',
                    textDecoration: 'line-through',
                  }}
                >
                  {fCurrency(priceSale)}
                </Box>
              )}
              {fCurrency(price)}
            </Typography>
          </Stack>

          <Stack spacing={1}>
            <Link
              component={RouterLink}
              href={paths.membersOnly.course}
              color="inherit"
            >
              <TextMaxLine variant="h6" line={1}>
                {title}
              </TextMaxLine>
            </Link>

            <TextMaxLine
              variant="body2"
              color="text.secondary"
              sx={{
                ...(vertical && {
                  display: { sm: 'none' },
                }),
              }}
            >
              {description}
            </TextMaxLine>
          </Stack>
        </Stack>

        <Divider
          sx={{
            borderStyle: 'line',
            display: { sm: 'none' },
            ...(vertical && {
              display: 'block',
            }),
          }}
        />

        <Stack
          direction="row"
          flexWrap="wrap"
          alignItems="center"
          sx={{ color: 'text.disabled', '& > *:not(:last-child)': { mr: 2.5 } }}
        >
          <Stack
            direction="row"
            alignItems="center"
            sx={{ typography: 'body2' }}
          >
            <Iconify icon="carbon:time" sx={{ mr: 1 }} />{' '}
            {`${totalHours} hours`}
          </Stack>

          <Stack
            direction="row"
            alignItems="center"
            sx={{ typography: 'body2' }}
          >
            <Iconify
              icon={
                (level === 'Beginner' && 'carbon:skill-level-basic') ||
                (level === 'Intermediate' &&
                  'carbon:skill-level-intermediate') ||
                'carbon:skill-level-advanced'
              }
              sx={{ mr: 1 }}
            />
            {level}
          </Stack>
        </Stack>
      </Stack>
    </Card>
  );
}

MembersOnlyCourseItem.propTypes = {
  course: PropTypes.shape({
    slug: PropTypes.string,
    level: PropTypes.string,
    price: PropTypes.number,
    teachers: PropTypes.array,
    bestSeller: PropTypes.bool,
    category: PropTypes.string,
    coverUrl: PropTypes.string,
    priceSale: PropTypes.number,
    totalHours: PropTypes.number,
    description: PropTypes.string,
    ratingNumber: PropTypes.number,
    totalReviews: PropTypes.number,
    totalStudents: PropTypes.number,
  }),
  vertical: PropTypes.bool,
};
