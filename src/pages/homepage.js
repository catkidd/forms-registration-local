import React from "react";
import { Copyright } from "../components/Copyright";
import { Avatar, Box, Button, Container, Typography } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useNavigate } from "react-router";
import DeleteIcon from '@mui/icons-material/Delete';
import LogoutIcon from '@mui/icons-material/Logout';

export const Homepage = () => {
    const navigate = useNavigate();
    const userName = JSON.parse(localStorage.getItem("user"));

    const handleLogout = (e) => {
        e.preventDefault();

        localStorage.removeItem("islogged");
        navigate("/login");
    };

    const handleDelete = (e) => {
        e.preventDefault();

        localStorage.clear()
        window.location.reload()
        navigate("/login");
    }
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
                        <AccountCircleIcon sx={{ fontSize: 40 }} />
                    </Avatar>
                    <Typography component="h1" variant="h5" sx={{ m: 2 }}>
                        Welcome to Mahango Deal
                    </Typography>
                    <Typography variant="body1" sx={{ m: 2 }}>
                        Welcome - {userName[0].firstname + " " + userName[0].lastname}
                    </Typography>
                    <Box sx={{
                        display: "flex",
                        flexDirection: "row",
                    }}>
                        <Button
                            variant="contained"
                            color="secondary"
                            sx={{ m: 2 }}
                            endIcon={<LogoutIcon />}
                            onClick={handleLogout}>
                            Logout
                        </Button>
                        <Button
                            variant="contained"
                            color="error"
                            sx={{ m: 2 }}
                            startIcon={<DeleteIcon />}
                            onClick={handleDelete}>
                            Delete
                        </Button>
                    </Box>
                </Box>
                <Copyright sx={{ mt: 8, mb: 4 }} />
            </Container>
        </>
    );
};
