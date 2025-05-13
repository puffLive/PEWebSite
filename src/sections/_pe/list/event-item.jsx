import PropTypes from "prop-types";

import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import { paths } from "../../../routes/paths";
import { RouterLink } from "../../../routes/components";

import Image from "../../../components/image";
import TextMaxLine from "../../../components/text-max-line";

// ----------------------------------------------------------------------

export default function CaseStudyItem({ event }) {
  const { title, imageCover, category } = event;

  return (
    <div>
      <Image
        src={imageCover}
        alt={title}
        ratio="1/1"
        sx={{ borderRadius: 2 }}
      />

      <Stack spacing={1} sx={{ pt: 2.5, px: 2.5 }}>
        <Typography variant="overline" sx={{ color: "text.disabled" }}>
          {category}
        </Typography>

        <Link component={RouterLink} to={`/events/${event.id}`} color="inherit">
          <TextMaxLine variant="h5" line={1}>
            {title}
          </TextMaxLine>
        </Link>
      </Stack>
    </div>
  );
}

CaseStudyItem.propTypes = {
  event: PropTypes.shape({
    category: PropTypes.string,
    imageCover: PropTypes.string,
    title: PropTypes.string,
  }),
};
