import { Grid } from "@mui/material";
import ListReservation from "../src/components/dashboard/ListReservation";

export default function Index() {
    return (
        <Grid container spacing={0}>
            {/* ------------------------- row 1 ------------------------- */}
            <Grid item xs={12} lg={12}>
                <ListReservation />
            </Grid>
        </Grid>
    );
}