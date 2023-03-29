import {
    Avatar,
    Box,
    Button,
    Checkbox,
    Container,
    FormControlLabel,
    Grid,
    Link,
    TextField,
    Typography,
} from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
import LockIcon from "@mui/icons-material/Lock";
import React from "react";
import { Copyright } from "./Copyright";

const RegisterPage = () => {
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

                    <Box component="form" sx={{ mt: 1 }}>
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
                            required
                            fullWidth
                            helperText="Please enter your password"
                        />
                        <TextField
                            margin="normal"
                            type="password"
                            label="Confirm Password"
                            id="cpassword"
                            name="cpassword"
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
                                <Link href="#" variant="body2">
                                    {"Already have an account? Sign In"}
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
