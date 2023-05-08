import DashboardCard from "../shared/DashboardCard";
import React, { useState, useRef, useEffect } from "react";
import { IconButton } from "@mui/material";
import { Add } from "@mui/icons-material";
import { object } from "prop-types";

const DetailsCar = ({ carId }) => {
    const [car, setCar] = useState({});
    const [image, setImage] = useState("");
    const inputRef = useRef(null);

    useEffect(() => {
        // Remplacez l'URL par l'adresse de votre API qui récupère les informations d'une voiture à partir de son ID
        fetch(`/api/cars/${carId}`)
            .then((response) => response.json())
            .then((data) => setCar(data))
            .catch((error) => console.error(error));
    }, [carId]);

    const handleImageUpload = async (e) => {
        const selectedImage = e.target.files[0];
        const imageURL = URL.createObjectURL(selectedImage);
        setImage(imageURL);

        // Envoi de l'image vers le serveur pour enregistrement
        const formData = new FormData();
        formData.append("image", selectedImage);
        formData.append("carId", carId);

        try {
            const response = await fetch("/api/cars/image", {
                method: "POST",
                body: formData,
            });

            if (response.ok) {
                console.log("Image enregistrée avec succès");
            } else {
                console.log("Une erreur s'est produite lors de l'enregistrement de l'image");
            }
        } catch (error) {
            console.error("Une erreur s'est produite lors de l'envoi de la requête", error);
        }
    };

    const handleClick = () => {
        inputRef.current.click();
    };


    return (
        <DashboardCard>
            <div style={{ display: "flex", alignItems: "center" }}>
                <h2 style={{ margin: 0, marginRight: "auto" }}>Add a image</h2>
                <button onClick={handleClick} style={{ border: "none", background: "none" }}>
                    <IconButton style={{ color: "red" }}>
                        <Add />
                    </IconButton>
                </button>
                <input
                    type="file"
                    ref={inputRef}
                    style={{ display: "none" }}
                    onChange={handleImageUpload}
                />
            </div>
            <div>
                <div style={{ marginLeft: "20px" }}>
                    <p><strong>Make:</strong> {car.make}</p>
                    <p><strong>Model:</strong> {car.model}</p>
                    <p><strong>Year:</strong> {car.year}</p>
                    <p><strong>Color:</strong> {car.color}</p>
                    <p><strong>Price:</strong> {car.price}</p>
                </div>
            </div>
        </DashboardCard>
    );
};

export default DetailsCar;
