import { GetServerSideProps } from 'next';

import {Grid} from "@mui/material";


interface ProfileProps {
    user: {
        name: string;
        email: string;
        phone: string;
        profileImageUrl: string;
    }
}

const Myprofile: React.FC<ProfileProps> = ({ user }) => {
    return (
        <Grid>
            <h1>My Profile</h1>
            <div>
                <img />
                <p>Name: {}</p>
                <p>Email: {}</p>
                <p>Phone: {}</p>
            </div>
        </Grid>
    )
}

export const getServerSideProps: GetServerSideProps = async () => {
    // Fetch user data from an API or database
    const userData = await fetch('https://example.com/api/user')
        .then(response => response.json());
    return {
        props: {
            user: userData,
        }
    }
}

export default Myprofile;
