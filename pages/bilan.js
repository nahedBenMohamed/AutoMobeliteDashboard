import React from "react";
import { Container, Grid, Paper, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(3),
    },
    charges: {
        backgroundColor: theme.palette.error.main,
    },
    gains: {
        backgroundColor: theme.palette.success.main,
    },
    bilan: {
        backgroundColor: theme.palette.info.main,
    },
}));

const Bilan = () => {
    const classes = useStyles();

    return (
        <Container maxWidth="lg">
            <Grid container spacing={3}>
                <Grid item xs={12} md={6} lg={4}>
                    <Paper className={`${classes.paper} ${classes.charges}`}>
                        <Typography variant="h6" align="center">
                            Charges
                        </Typography>
                        <Grid container>
                            <Grid item xs={6}>
                                <Typography>Cout d'achat des véhicules :</Typography>
                                <Typography>Entretien et réparations :</Typography>
                                <Typography>Assurance :</Typography>
                                <Typography>Frais d'essence :</Typography>
                                <Typography>Salaires du personnel :</Typography>
                                <Typography>Marketing et publicité :</Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <Typography>200 000 €</Typography>
                                <Typography>10 000 €</Typography>
                                <Typography>5 000 €</Typography>
                                <Typography>15 000 €</Typography>
                                <Typography>20 000 €</Typography>
                                <Typography>8 000 €</Typography>
                            </Grid>
                        </Grid>
                        <Typography align="right">Total des charges : 258 000 €</Typography>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={6} lg={4}>
                    <Paper className={`${classes.paper} ${classes.gains}`}>
                        <Typography variant="h6" align="center">
                            Gains
                        </Typography>
                        <Grid container>
                            <Grid item xs={6}>
                                <Typography>Revenus de location :</Typography>
                                <Typography>Assurance :</Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <Typography>320 000 €</Typography>
                                <Typography>6 000 €</Typography>
                            </Grid>
                        </Grid>
                        <Typography align="right">Total des gains : 326 000 €</Typography>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={6} lg={4}>
                    <Paper className={`${classes.paper} ${classes.bilan}`}>
                        <Typography variant="h6" align="center">
                            Bilan
                        </Typography>
                        <Typography>Bilan net : 68 000 €</Typography>
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Bilan;
