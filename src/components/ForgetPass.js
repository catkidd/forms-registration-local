import { Avatar, Box, Button, Container, TextField, Typography } from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
import LockIcon from "@mui/icons-material/Lock";
import React, { useState } from "react";
import { Copyright } from "./Copyright";
import { useNavigate } from "react-router-dom";

const ForgetPass = () => {
    const navigate = useNavigate();
    const [input, setInput] = useState({
        email: "",
        oldPassword: "",
        newPassword: "",
        confirmNewPassword: ""
    });

    const handleSubmitLogin = (e) => {
        e.preventDefault();

        const loggedUser = JSON.parse(localStorage.getItem("user"));
        if (input.email === loggedUser.email && input.oldPassword === loggedUser.password) {
            loggedUser.password = input.newPassword
            loggedUser.confirmPassword = input.confirmNewPassword
            localStorage.setItem('user', JSON.stringify(loggedUser))
            navigate("/login");
        } else {
            alert("Wrong email or Password");
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
                        Forget Password
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
                            label="Old Password"
                            id="oldPassword"
                            name="oldPassword"
                            value={input.oldPassword}
                            onChange={(e) =>
                                setInput({ ...input, [e.target.name]: e.target.value })
                            }
                            required
                            fullWidth
                            helperText="Please enter your old password"
                        />
                        <TextField
                            margin="normal"
                            type="password"
                            label="New Password"
                            id="newPassword"
                            name="newPassword"
                            value={input.newPassword}
                            onChange={(e) =>
                                setInput({ ...input, [e.target.name]: e.target.value })
                            }
                            required
                            fullWidth
                            helperText="Please enter your new password"
                        />
                        <TextField
                            margin="normal"
                            type="password"
                            label="Confirm New Password"
                            id="confirmNewPassword"
                            name="confirmNewPassword"
                            value={input.confirmNewPassword}
                            onChange={(e) =>
                                setInput({ ...input, [e.target.name]: e.target.value })
                            }
                            required
                            fullWidth
                            helperText="Please confirm your new password"
                        />
                        <Button
                            type="submit"
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                            endIcon={<LoginIcon />}
                            fullWidth>
                            Change Password
                        </Button>
                    </Box>
                </Box>
                <Copyright sx={{ mt: 8, mb: 4 }} />
            </Container>
        </>
    );
};

export default ForgetPass;
