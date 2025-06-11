import PropTypes from 'prop-types';

import Stack from '@mui/material/Stack';
import Pagination, { paginationClasses } from '@mui/material/Pagination';

import MembersOnlyCourseItem from './members-only-course-item';
import MembersOnlyCourseItemSkeleton from './members-only-course-item-skeleton';

// ----------------------------------------------------------------------

export default function MembersOnlyCourseList({ courses, loading }) {
  return (
    <>
      <Stack spacing={4}>
        {(loading ? [...Array(9)] : courses).map((course, index) =>
          course ? (
            <MembersOnlyCourseItem key={course.id} course={course} />
          ) : (
            <MembersOnlyCourseItemSkeleton key={index} />
          )
        )}
      </Stack>

      <Pagination
        count={10}
        color="primary"
        sx={{
          my: 10,
          [`& .${paginationClasses.ul}`]: {
            justifyContent: 'center',
          },
        }}
      />
    </>
  );
}

MembersOnlyCourseList.propTypes = {
  courses: PropTypes.array,
  loading: PropTypes.bool,
};
