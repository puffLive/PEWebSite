import PropTypes from "prop-types";

import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

import { fDate } from "../../../utils/format-time";

import { _socials } from "../../../_mock";

import Iconify from "../../../components/iconify";

// ----------------------------------------------------------------------

export default function CaseStudyDetailsSummary({ event }) {
  const { title, description, category, website, eventDate } = event;

  return (
    <Stack
      spacing={3}
      sx={{ p: 5, borderRadius: 2, bgcolor: "background.neutral" }}
    >
      <Stack spacing={2}>
        <Typography variant="overline" sx={{ color: "text.disabled" }}>
          summary
        </Typography>

        <Typography variant="h6">{title}</Typography>

        <Typography variant="body2">{description}</Typography>
      </Stack>

      <Divider sx={{ borderStyle: "dashed" }} />

      <Stack spacing={1}>
        <Typography variant="overline" sx={{ color: "text.disabled" }}>
          Register
        </Typography>

        <Link variant="body2" color="inherit" href={website} target="_blank">
          Link
        </Link>

        <Typography variant="overline" sx={{ color: "text.disabled", pt: 1 }}>
          Category
        </Typography>

        <Typography variant="body2" sx={{ pb: 1 }}>
          {category}
        </Typography>

        <Typography variant="overline" sx={{ color: "text.disabled" }}>
          Date
        </Typography>

        <Typography variant="body2">{fDate(eventDate)}</Typography>
      </Stack>

      <Divider sx={{ borderStyle: "dashed" }} />

      {/* <Stack direction="row" alignItems="center" spacing={0.5}>
        <Typography variant="subtitle2">Share:</Typography>

        <Stack direction="row">
          {_socials.map((social) => (
            <IconButton key={social.value} href={social.url} target="_blank">
              <Iconify icon={social.icon} sx={{ color: social.color }} />
            </IconButton>
          ))}
        </Stack>
      </Stack> */}
    </Stack>
  );
}

CaseStudyDetailsSummary.propTypes = {
  caseStudy: PropTypes.shape({
    title: PropTypes.string,
    website: PropTypes.string,
    category: PropTypes.string,
    description: PropTypes.string,
    createdAt: PropTypes.instanceOf(Date),
  }),
};