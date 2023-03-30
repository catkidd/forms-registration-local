import React from "react";
import { Copyright } from "../components/Copyright";
import { Avatar, Box, Button, Container, Typography } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useNavigate } from "react-router";

export const Homepage = () => {
    const navigate = useNavigate();
    const userName = JSON.parse(localStorage.getItem("user"));

    const handleLogout = (e) => {
        e.preventDefault();

        localStorage.removeItem("islogged");
        navigate("/login");
    };
    return (
        <>
            <Container component="main" maxWidth="sm">
                <Box
                    sx={{
                        marginTop: 2,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}>
                    <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                        <AccountCircleIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5" sx={{ m: 2 }}>
                        Welcome to Mahango Deal
                    </Typography>
                    <Typography variant="body1" sx={{ m: 2 }}>
                        Welcome - {userName.firstname + " " + userName.lastname}
                    </Typography>
                    <Button
                        variant="contained"
                        color="secondary"
                        sx={{ m: 2 }}
                        onClick={handleLogout}>
                        Logout
                    </Button>
                </Box>
                <Copyright sx={{ mt: 8, mb: 4 }} />
            </Container>
        </>
    );
};
