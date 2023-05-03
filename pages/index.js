import { Grid } from "@mui/material";
import SalesOverview from "../src/components/dashboard/SalesOverview";
import Bilan from "../pages/Analysedonnees";
import ListClients from "../pages/Gestionclients";
import ListReservation from "../src/components/dashboard/ListReservation";

export default function Index() {
  return (
    <Grid container spacing={0}>
      <Grid item xs={12} lg={12}>
        <SalesOverview />
      </Grid>
      {/* ------------------------- row 1 ------------------------- */}
      <Grid item xs={12} lg={12}>
          <Bilan />
      </Grid>
      <Grid item xs={12} lg={12}>
        <ListReservation />
      </Grid>
      <Grid item xs={12} lg={12}>
          <ListClients />
      </Grid>
    </Grid>
  );
}
