import React, {ReactElement} from 'react';
import { Grid, Box } from '@mui/material';
import FullLayout from '../src/layouts/full/FullLayout';
import PageContainer from "../src/components/container/PageContainer";
import Myprofile from "../src/components/MyProfile";


const profile = () => {
    return (
        <PageContainer title="My Profile">
            <Box>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Myprofile />{/* user={}*/}
                    </Grid>
                </Grid>
            </Box>
        </PageContainer>
    )
};

export default profile;

profile.getLayout = function getLayout(page: ReactElement) {
    return <FullLayout>{page}</FullLayout>;
}