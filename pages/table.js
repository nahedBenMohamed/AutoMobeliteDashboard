import { Grid } from "@mui/material";
import ListReservation from "../src/components/dashboard/ListReservation";

const Tables = () => {
  return (
    <Grid container spacing={0}>
      <Grid item xs={12} lg={12}>
        <ListReservation />
      </Grid>
    </Grid>
  );
};

export default Tables;
