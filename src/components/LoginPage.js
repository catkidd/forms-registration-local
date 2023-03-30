import {
    Avatar,
    Box,
    Button,
    Checkbox,
    Container,
    FormControlLabel,
    Grid,
    TextField,
    Typography,
} from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
import LockIcon from "@mui/icons-material/Lock";
import React, { useState } from "react";
import { Copyright } from "./Copyright";
import { Link, useNavigate } from "react-router-dom";
import { toastifyService } from "../services/toastifyService";

const LoginPage = () => {
    const navigate = useNavigate();
    const [input, setInput] = useState({
        email: "",
        password: "",
    });

    const handleSubmitLogin = (e) => {
        e.preventDefault();

        const loggedUser = JSON.parse(localStorage.getItem("user"));
        if (loggedUser && input.email === loggedUser.email && input.password === loggedUser.password) {
            localStorage.setItem("islogged", true);
            navigate("/");
        } else {
            toastifyService.error('Wrong Credentials.')
        }
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
                        Sign In
                    </Typography>

                    <Box component="form" sx={{ mt: 1 }} onSubmit={handleSubmitLogin}>
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
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Remember me"
                        />
                        <Button
                            type="submit"
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                            endIcon={<LoginIcon />}
                            fullWidth>
                            Sign In
                        </Button>
                        <Grid container>
                            <Grid item xs>
                                <Link className="__link" to="/forget-password">
                                    Forgot password?
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link className="__link" to="/register">
                                    <span>Don't have an account? Sign Up</span>
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

export default LoginPage;
