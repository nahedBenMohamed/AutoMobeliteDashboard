import type { ReactElement } from 'react';
import PageContainer from "../src/components/container/PageContainer";
import DashboardCard from "../src/components/shared/DashboardCard";
import FullLayout from "../src/layouts/full/FullLayout";
import SalesOverview from "../src/components/dashboard/SalesOverview";
import YearlyBreakup from "../src/components/dashboard/YearlyBreakup";
import MonthlyEarnings from "../src/components/dashboard/MonthlyEarnings";
import RecentTransactions from "../src/components/dashboard/RecentTransactions";
import { Grid, Box } from '@mui/material';



const Bilan = () => {
    return (
        <PageContainer title="Bilan page">
            <DashboardCard>
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
                    </Grid>
                </Box>
            </DashboardCard>
        </PageContainer>
    );
};

export default Bilan;
Bilan.getLayout = function getLayout(page: ReactElement) {
    return <FullLayout>{page}</FullLayout>;
};