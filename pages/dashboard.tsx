import type { ReactElement } from 'react';
import { Grid, Box } from '@mui/material';
import PageContainer from '../src/components/container/PageContainer';

// components
import SalesOverview from '../src/components/dashboard/SalesOverview';
import YearlyBreakup from '../src/components/dashboard/YearlyBreakup';
import RecentTransactions from '../src/components/dashboard/RecentTransactions';
import MonthlyEarnings from '../src/components/dashboard/MonthlyEarnings';
import FullLayout from '../src/layouts/full/FullLayout';
import {Accounts} from "../src/components/accounts";
import React from "react";

export default function Home() {
    return (
        <PageContainer title="Dashboard" description="this is Dashboard">
            <Box>
                <Grid container spacing={3}>
                    <Grid item xs={12} lg={8}>
                        <SalesOverview />
                    </Grid>
                    <Grid item xs={12} lg={4}>
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                <YearlyBreakup />
                            </Grid>
                            <Grid item xs={12}>
                                <MonthlyEarnings />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <RecentTransactions />
                    </Grid>
                    <Grid item xs={12}>
                        <Accounts />
                    </Grid>
                </Grid>
            </Box>
        </PageContainer>
    );
}

Home.getLayout = function getLayout(page: ReactElement) {
    return <FullLayout>{page}</FullLayout>;
};