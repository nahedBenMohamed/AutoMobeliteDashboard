import React, {useState} from "react";
import {
    Button,
    ButtonGroup,
    IconButton,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    TextField, Typography
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import BaseCard from "../src/components/baseCard/BaseCard";
import FeatherIcon from "feather-icons-react";


export default function GererVehicule() {
    const [products, setProducts] = useState([
        {
            id: "1",
            name: "Sunil Joshi",
            prenom: "Elite Admin",
            priority: "Low",
            quantite: "3",

        }
    ]);
  
    const [selectedRow, setSelectedRow] = useState(-1);

    const handleIncrement = () => {
        const newProducts = [
            ...products,
            {
                id: "",
                name: "",
                prenom: "",
                priority: "",
                quantite: "",
            },
        ];
        setProducts(newProducts);
    };

    const handleDecrement = (index) => {
        const newProducts = [...products];
        newProducts.splice(index, 1);
        setProducts(newProducts);
    };

    const handleColorChange = (index, color) => {
        const newProducts = [...products];
        newProducts[index].color = color;
        setProducts(newProducts);
    };

    const handleEditRow = (index) => {
        setSelectedRow(index);
    };

    const handleSaveRow = () => {
        setSelectedRow(-1);
    };

    return (
        <BaseCard title="GERER VEHICULE">
            <Table
                aria-label="simple table"
                sx={{
                    mt: 3,
                    whiteSpace: "nowrap",
                }}
            >
        <TableHead>
            <TableRow>
                <TableCell>MARQUE</TableCell>
                <TableCell>MODELE</TableCell>
                <TableCell>ANNEE</TableCell>
                <TableCell>ETAT</TableCell>
                <TableCell>KILOMETRAGE</TableCell>
                <TableCell>PRIX</TableCell>
                        <TableCell></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {products.map((product, index) => (
                        <TableRow key={product.id}>
                            <TableCell>
                                <TextField
                                    value={product.id}
                                    onChange={(event) => {
                                        const newProducts = [...products];
                                        newProducts[index].id = event.target.value;
                                        setProducts(newProducts);
                                    }}
                                    variant="standard"
                                    size="small"
                                    sx={{ "& input": { border: "none", borderRadius: "4px" } }}
                                />
                            </TableCell>
                            <TableCell>
                                <TextField
                                    value={product.name}
                                    onChange={(event) => {
                                        const newProducts = [...products];
                                        newProducts[index].name = event.target.value;
                                        setProducts(newProducts);
                                    }}
                                    variant="standard"
                                    size="small"
                                    sx={{ "& input": { border: "none", borderRadius: "4px" } }}
                                />
                            </TableCell>
                            <TableCell>
                                <TextField
                                    value={product.prenom}
                                    onChange={(event) => {
                                        const newProducts = [...products];
                                        newProducts[index].prenom = event.target.value;
                                        setProducts(newProducts);
                                    }}
                                    variant="standard"
                                    size="small"
                                    sx={{ "& input": { border: "none", borderRadius: "4px" } }}
                                />
                            </TableCell>
                            <TableCell>
                                <ButtonGroup variant="outlined" aria-label="primary button group underlined">
                                    <Button
                                        style={{
                                            backgroundColor: product.color === "vert" ? "#4caf50" : "",
                                            borderColor: "#fff",
                                            color: "#000",
                                            borderRadius: "16px"
                                        }}
                                        onClick={() => handleColorChange(index, "vert")}
                                    >
                                        OK
                                    </Button>
                                    <Button
                                        style={{
                                            backgroundColor: product.color === "rouge" ? "#f44336" : "",
                                            borderColor: "#fff",
                                            color: "#000",
                                            borderRadius: "16px"
                                        }}
                                        onClick={() => handleColorChange(index, "rouge")}
                                    >
                                        Mauvais
                                    </Button>
                                    {/*<Button
                                        style={{
                                            backgroundColor: product.color === "jaune" ? "#ffeb3b" : "",
                                            borderColor: "#fff",
                                            color: "#000",
                                            borderRadius: "16px"
                                        }}
                                        onClick={() => handleColorChange(index, "jaune")}
                                    >
                                        Jaune
                                    </Button>*/}
                                </ButtonGroup>
                            </TableCell>
                            <TableCell align="right">
                                <TextField
                                    value={product.quantite}
                                    onChange={(event) => {
                                        const newProducts = [...products];
                                        newProducts[index].quantite = event.target.value;
                                        setProducts(newProducts);
                                    }}
                                    variant="standard"
                                    size="small"
                                    sx={{ "& input": { border: "none", borderRadius: "8px" } }}
                                />
                            </TableCell>
                            <TableCell align="right">
                                <IconButton size="small" color="primary" onClick={handleIncrement}>
                                    <AddIcon />
                                </IconButton>
                            </TableCell>
                            <TableCell align="right">
                                {selectedRow === index ? (
                                    <Button
                                        variant="contained"
                                        size="small"
                                        onClick={handleSaveRow}
                                    >
                                        Enregistrer
                                    </Button>
                                ) : (
                                    <IconButton size="small" onClick={() => handleEditRow(index)}>
                                        <FeatherIcon icon="edit-2" size={16} />
                                    </IconButton>
                                )}
                            </TableCell>
                            <TableCell align="right">
                                <IconButton
                                    size="small"
                                    color="secondary"
                                    onClick={() => handleDecrement(index)}
                                    disabled={products.length === 1}
                                >
                                    <FeatherIcon icon="trash" width="20" height="20" />
                                </IconButton>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>

            </Table >
        </BaseCard>
    );
};