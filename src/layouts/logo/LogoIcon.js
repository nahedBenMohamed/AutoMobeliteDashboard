import React from "react";
import { Link } from "@mui/material";
import Image from "next/image";
import LogoDark from "../../../assets/images/logos/AutoMobelite1-removebg-preview (1).png";

const LogoIcon = () => {
  return (
    <Link href="/">
      <Image src={LogoDark} alt={LogoDark} />
    </Link>
  );
};

export default LogoIcon;
