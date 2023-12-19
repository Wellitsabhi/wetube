import { Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { logo } from "../utils/constant";
import SearchBar from "./SearchBar";

const Navbar = () => (
  <Stack
    direction="row"
    alignItems="center"
    p={2}
    sx={{
      position: "sticky",
      background: "#000",
      top: 0,
      justifyContent: "space-between",
    }}
  >
    <Link to="/" style={{ display: "flex", alignItems: "center" }}>
      <img src={logo} alt="logo" height={45} />
    </Link>
    <Typography
      variant="h3"
      fontWeight="bold"
      color="#FFF"
      sx={{
        position: "sticky",
        background: "#000",
        top: 0,
        justifyContent: "space-between",
        color: "#fff",
        display: "flex",
        alignItems: "center",
        transition: "color 0.5s",
        "&:hover": {
          color: "#ff0000",
        },
      }}
    >
      WeTube
      <Typography
    variant="h6"
    sx={{
      color: "#ffffff",
      fontSize: "2.8rem",
      cursor: "pointer",
      ml: '10px',
      mr: '10px'
     
    }}
  >
        x
      </Typography>
      Abhishek
    </Typography>
    <SearchBar />
  </Stack>
);

export default Navbar;
