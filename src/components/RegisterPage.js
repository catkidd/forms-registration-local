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
                                <Link href="#" variant="body2">
                                    Forgot password?
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link href="#" variant="body2">
                                    {"Don't have an account? Sign Up"}
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

export default RegisterPage