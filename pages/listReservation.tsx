import type { ReactElement } from 'react';
import { Grid, Box } from '@mui/material';
import PageContainer from '../src/components/container/PageContainer';

// components
import RecentTransactions from '../src/components/dashboard/RecentTransactions';
import FullLayout from '../src/layouts/full/FullLayout';
import React from "react";
import RecentReservation from "../src/components/listeReservation";

export default function Home() {
    return (
        <PageContainer title="Dashboard" description="this is Dashboard">
            <Box>
                <Grid container spacing={10}>
                    <Grid item xs={12}>
                        <RecentReservation/>
                    </Grid>
                </Grid>
            </Box>
        </PageContainer>
    );
}

Home.getLayout = function getLayout(page: ReactElement) {
    return <FullLayout>{page}</FullLayout>;
};