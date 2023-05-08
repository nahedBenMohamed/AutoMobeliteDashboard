import type { ReactElement } from 'react';
import { Typography } from '@mui/material';
import PageContainer from "../src/components/container/PageContainer";
import DashboardCard from "../src/components/shared/DashboardCard";
import FullLayout from "../src/layouts/full/FullLayout";


const Bilan = () => {
    return (
        <PageContainer title="Sample Page" description="this is Sample page">
            <DashboardCard title="Bilan">
                <Typography>This is a sample page</Typography>
            </DashboardCard>
        </PageContainer>
    );
};

export default Bilan;
Bilan.getLayout = function getLayout(page: ReactElement) {
    return <FullLayout>{page}</FullLayout>;
};