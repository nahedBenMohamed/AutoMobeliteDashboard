import React, {ReactElement} from 'react';
import { Grid, Box } from '@mui/material';
import FullLayout from '../src/layouts/full/FullLayout';
import PageContainer from "../src/components/container/PageContainer";
import DetailsCar from "../src/components/details";


const details = () => {
    return (
        <PageContainer title="Dashboard" description="this is Dashboard">
            <Box>
                <Grid container spacing={3}>
                    <Grid item xs={8}>
                        <DetailsCar />
                    </Grid>
                </Grid>
            </Box>
        </PageContainer>
    )
};

export default details;

details.getLayout = function getLayout(page: ReactElement) {
    return <FullLayout>{page}</FullLayout>;
};