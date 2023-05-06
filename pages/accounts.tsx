import React, {ReactElement} from 'react';
import {Accounts} from "../src/components/accounts";
import { Grid, Box } from '@mui/material';
import FullLayout from '../src/layouts/full/FullLayout';
import PageContainer from "../src/components/container/PageContainer";


const accounts = () => {
   return (
       <PageContainer title="Dashboard" description="this is Dashboard">
          <Box>
             <Grid container spacing={3}>
                <Grid item xs={12}>
                   <Accounts />
                </Grid>
             </Grid>
          </Box>
      </PageContainer>
)
};

export default accounts;

accounts.getLayout = function getLayout(page: ReactElement) {
   return <FullLayout>{page}</FullLayout>;
};