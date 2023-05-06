import React, {ReactElement} from 'react';
import { Grid, Box } from '@mui/material';
import FullLayout from '../src/layouts/full/FullLayout';
import PageContainer from "../src/components/container/PageContainer";
import {Cars} from "../src/components/cars";


const car = () => {
    return (
        <PageContainer title="Dashboard" description="this is Dashboard">
            <Box>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Cars />
                    </Grid>
                </Grid>
            </Box>
        </PageContainer>
    )
};

export default car;

car.getLayout = function getLayout(page: ReactElement) {
    return <FullLayout>{page}</FullLayout>;
}