import { Avatar, Box, Button, Container, Grid, TextField, Typography } from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
import LockIcon from "@mui/icons-material/Lock";
import React, { useState } from "react";
import { Copyright } from "./Copyright";
import { Link, useNavigate } from "react-router-dom";

const RegisterPage = () => {
    const navigate = useNavigate();
    const [input, setInput] = useState({
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const [data, setData] = useState([]);

    const handleSubmitRegister = (e) => {
        e.preventDefault();

        localStorage.setItem("user", JSON.stringify([...data, input]));
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
                        <LockIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Create an account
                    </Typography>

                    <Box component="form" sx={{ mt: 1 }} onSubmit={handleSubmitRegister}>
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "flex-start",
                                columnGap: "1rem",
                            }}>
                            <TextField
                                fullWidth
                                margin="normal"
                                id="firstname"
                                name="firstname"
                                value={input.firstname}
                                onChange={(e) =>
                                    setInput({ ...input, [e.target.name]: e.target.value })
                                }
                                type="firstname"
                                label="Firstname"
                                required
                                helperText="Please enter your firstname"
                            />
                            <TextField
                                fullWidth
                                margin="normal"
                                id="lastname"
                                name="lastname"
                                value={input.lastname}
                                onChange={(e) =>
                                    setInput({ ...input, [e.target.name]: e.target.value })
                                }
                                type="lastname"
                                label="Lastname"
                                required
                                helperText="Please enter your lastname"
                            />
                        </Box>
                        <TextField
                            margin="normal"
                            id="email"
                            name="email"
                            value={input.email}
                            onChange={(e) =>
                                setInput({ ...input, [e.target.name]: e.target.value })
                            }
                            type="email"
                            label="Email Address"
                            required
                            fullWidth
                            helperText="Please enter your email"
                        />
                        <TextField
                            margin="normal"
                            type="password"
                            label="Password"
                            id="password"
                            name="password"
                            value={input.password}
                            onChange={(e) =>
                                setInput({ ...input, [e.target.name]: e.target.value })
                            }
                            required
                            fullWidth
                            helperText="Please enter your password"
                        />
                        <TextField
                            margin="normal"
                            type="password"
                            label="Confirm Password"
                            id="confirmPassword"
                            name="confirmPassword"
                            value={input.confirmPassword}
                            onChange={(e) =>
                                setInput({ ...input, [e.target.name]: e.target.value })
                            }
                            required
                            fullWidth
                            helperText="Re-enter your password"
                        />
                        <Button
                            type="submit"
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                            endIcon={<LoginIcon />}
                            fullWidth>
                            Sign Up
                        </Button>
                        <Grid container justifyContent="flex-end">
                            <Grid item>
                                <Link className="__link" to="/login">
                                    <span>Already have an account? Sign In</span>
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
                <Copyright sx={{ mt: 8, mb: 4 }} />
            </Container>
        </>
    );
};

export default RegisterPage;
