import { Typography, Box, Table, TableBody, TableCell, TableHead, TableRow, Chip } from "@mui/material";
import BaseCard from "../src/components/baseCard/BaseCard";

const listUsers = [
    {
        id: "1",
        nom: "Sunil Joshi",
        prenom: "Web Designer",
        email: "Elite Admin",
        priority: "Low",
        pbg: "primary.main",
    }
];

const ListClients = () => {
    return (
        <BaseCard title="Liste des Clients">
            <Table
                aria-label="simple table"
                sx={{
                    mt: 3,
                    whiteSpace: "nowrap",
                }}
            >
                <TableHead>
                    <TableRow>
                        <TableCell>
                            <Typography color="textSecondary" variant="h6">
                                Id
                            </Typography>
                        </TableCell>
                        <TableCell>
                            <Typography color="textSecondary" variant="h6">
                                Nom
                            </Typography>
                        </TableCell>
                        <TableCell>
                            <Typography color="textSecondary" variant="h6">
                                Prenom
                            </Typography>
                        </TableCell>
                        <TableCell>
                            <Typography color="textSecondary" variant="h6">
                                Email
                            </Typography>
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {listUsers.map((user) => (
                        <TableRow key={user.id}>
                            <TableCell>
                                <Typography
                                    sx={{
                                        fontSize: "15px",
                                        fontWeight: "500",
                                    }}
                                >
                                    {user.id}
                                </Typography>
                            </TableCell>
                            <TableCell>
                                <Box
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                    }}
                                >
                                    <Box>
                                        <Typography
                                            variant="h6"
                                            sx={{
                                                fontWeight: "600",
                                            }}
                                        >
                                            {user.nom}
                                            {user.prenom}
                                        </Typography>
                                        <Typography
                                            color="textSecondary"
                                            sx={{
                                                fontSize: "13px",
                                            }}
                                        >
                                            {user.email}
                                        </Typography>
                                    </Box>
                                </Box>
                            </TableCell>
                            <TableCell>
                                <Typography color="textSecondary" variant="h6">
                                    {user.prenom} {user.nom}
                                </Typography>
                            </TableCell>
                            <TableCell>
                                <Chip
                                    sx={{
                                        pl: "5px",
                                        pr: "4px",
                                        backgroundColor: user.pbg,
                                        color: "#fff",
                                    }}
                                    size="small"
                                    label={user.priority}
                                ></Chip>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </BaseCard>
    );
};

export default ListClients;
