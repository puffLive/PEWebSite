import PropTypes from "prop-types";
import { useState, useCallback } from "react";

import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Pagination, { paginationClasses } from "@mui/material/Pagination";

import EventItem from "./event-item";

// ----------------------------------------------------------------------

export default function EventsList({ events }) {
  // const [tab, setTab] = useState("All");

  // const getCategories = events.map((project) => project.category);

  // const categories = ["All", ...Array.from(new Set(getCategories))];

  // const filtered = applyFilter(events, tab);

  // const handleChangeTab = useCallback((event, newValue) => {
  //   setTab(newValue);
  // }, []);

  return (
    <>
      {/* <Tabs
        value={tab}
        scrollButtons="auto"
        variant="scrollable"
        allowScrollButtonsMobile
        onChange={handleChangeTab}
      >
        {categories.map((category) => (
          <Tab key={category} value={category} label={category} />
        ))}
      </Tabs> */}

      <Box
        sx={{
          pt: 5,
          pb: 10,
          gap: 4,
          display: "grid",
          gridTemplateColumns: {
            xs: "repeat(1, 1fr)",
            sm: "repeat(2, 1fr)",
            md: "repeat(3, 1fr)",
          },
        }}
      >
        {/* {filtered.map((event) => (
          <EventItem key={event.id} event={event} />
        ))} */}
        {events.map((event) => (
          <EventItem key={event.id} event={event} />
        ))}
      </Box>

      {/* <Pagination
        count={10}
        color="primary"
        sx={{
          pb: 10,
          [`& .${paginationClasses.ul}`]: {
            justifyContent: "center",
          },
        }}
      /> */}
    </>
  );
}

EventsList.propTypes = {
  events: PropTypes.array,
};

// ----------------------------------------------------------------------

function applyFilter(arr, category) {
  if (category !== "All") {
    arr = arr.filter((project) => project.category === category);
  }
  return arr;
}
