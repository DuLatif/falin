import Calendar from "@/components/Calendar";
import { Card, Grid, Typography } from "@mui/material";
import React from "react";

const SmallCalendarGuide: React.FC = () => {
  return (
    <Card sx={{ mb: 4 }}>
      <Typography variant="subtitle1">Small Calendar</Typography>
      <Grid container spacing={2}>
        <Grid item md={6}>
          <Calendar
            events={[
              { date: "10-04-2023", color: "primary" },
              { date: "12-04-2023", color: "info" },
              { date: "16-04-2023", color: "warning" },
              { date: "21-04-2023", color: "danger" },
              { date: "26-04-2023", color: "success" },
            ]}
          />
        </Grid>
      </Grid>
    </Card>
  );
};

export default SmallCalendarGuide;
