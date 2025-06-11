import PropTypes from 'prop-types';
import { useState, useCallback } from 'react';

import Typography from '@mui/material/Typography';

import { useBoolean } from 'src/hooks/use-boolean';

import MembersOnlyCourseDetailsLessonItem from './members-only-course-details-lesson-item';
import MembersOnlyCourseDetailsLessonsDialog from './members-only-course-details-lessons-dialog';

// ----------------------------------------------------------------------

export default function MembersOnlyCourseDetailsLessonList({ lessons }) {
  const videoPlay = useBoolean();

  const [expanded, setExpanded] = useState(false);

  const [selectedLesson, setSelectedLesson] = useState(null);

  const handleReady = useCallback(() => {
    setTimeout(() => videoPlay.onTrue(), 500);
  }, [videoPlay]);

  const handleSelectedLesson = useCallback((lesson) => {
    if (lesson.unLocked) {
      setSelectedLesson(lesson);
    }
  }, []);

  const handleClose = useCallback(() => {
    setSelectedLesson(null);
    videoPlay.onFalse();
  }, [videoPlay]);

  const handleExpandedLesson = useCallback(
    (panel) => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
    },
    []
  );

  return (
    <div>
      <Typography variant="h4" sx={{ mb: 3 }}>
        Lessons
      </Typography>

      {lessons.map((lesson) => (
        <MembersOnlyCourseDetailsLessonItem
          key={lesson.id}
          lesson={lesson}
          expanded={expanded === lesson.id}
          onExpanded={handleExpandedLesson(lesson.id)}
          selected={selectedLesson?.id === lesson.id}
          onSelected={() => {
            handleSelectedLesson(lesson);
          }}
        />
      ))}

      <MembersOnlyCourseDetailsLessonsDialog
        lessons={lessons}
        selectedLesson={selectedLesson}
        onSelectedLesson={(lesson) => setSelectedLesson(lesson)}
        open={!!selectedLesson?.unLocked}
        onClose={handleClose}
        playing={videoPlay.value}
        onReady={handleReady}
        onEnded={videoPlay.onFalse}
        onPlay={videoPlay.onTrue}
        onPause={videoPlay.onFalse}
      />
    </div>
  );
}

MembersOnlyCourseDetailsLessonList.propTypes = {
  lessons: PropTypes.array,
};
