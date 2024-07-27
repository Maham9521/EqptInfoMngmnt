import React, { useState } from 'react';
import { Button, Stack, TextField, Typography, Divider } from '@mui/material';
import { Assets } from '../assets/index';
import { useNavigate } from 'react-router-dom';
import { findUserByUsername } from '../pouchdbService';


const Login: React.FC = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleButtonClick = async () => {
        console.log("these are the creds", username, password);
        try {
            const userDoc = await findUserByUsername(username);
            console.log(userDoc);
            if (userDoc && userDoc.password === password) {
                localStorage.setItem('signedIn', 'true');
                navigate('/dasboard'); // Navigate to the /data route
            } else {
                setError('Invalid username or password');
            }
        } catch (err) {
            console.error('Error during login:', err);
            setError('An error occurred during login');
        }
    };

    return (
        <Stack>
            <Stack direction={"row"} alignItems={"center"} p={"25px 40px 0px"}>
                <img height={"180px"} width={"140px"} src={Assets.LOGO} />
                <Typography color={"#000053"} fontSize={"55px"} fontWeight={"600"} ml={"25px"} fontFamily={"Poppins"}>Equipment Information Management System</Typography>
            </Stack>
            <Stack width={"auto"} margin={"auto"}>
                <label style={{ fontSize: "25px", fontWeight: "500", color: "#000053", margin: "15px 0px", fontFamily: "poppins" }}>Username:</label>
                <TextField
                    required
                    sx={{
                        width: '430px',
                        height: '55px',
                        borderRadius: '12px',
                        marginBottom: '20px',
                        fontFamily: "poppins",
                        '& .MuiInputBase-root': {
                            height: '55px',
                            borderRadius: '12px',
                            '&.Mui-focused fieldset': {
                                borderColor: '#000053',
                                borderWidth: '2px',
                            },
                        },
                        '& .MuiInputBase-input': {
                            height: '100%',
                            padding: '0 14px',
                            color: '#000053',
                            fontFamily: "poppins",
                        },
                    }}
                    placeholder="Enter Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <label style={{ fontSize: "25px", fontWeight: "500", color: "#000053", margin: "15px 0px", fontFamily: "poppins" }}>Password:</label>
                <TextField
                    required
                    type='password'
                    sx={{
                        width: '430px',
                        height: '55px',
                        borderRadius: '12px',
                        fontFamily: "poppins",
                        '& .MuiInputBase-root': {
                            height: '55px',
                            borderRadius: '12px',
                            '&.Mui-focused fieldset': {
                                borderColor: '#000053',
                                borderWidth: '2px',
                            },
                        },
                        '& .MuiInputBase-input': {
                            height: '100%',
                            padding: '0 14px',
                            color: '#000053',
                            fontFamily: "poppins"
                        },
                    }}
                    placeholder='Enter Password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Button
                    sx={{
                        color: '#fff',
                        backgroundColor: '#940301',
                        marginTop: '30px',
                        fontWeight: 500,
                        fontSize: '18px',
                        fontFamily: "poppins",
                        '&:hover': {
                            backgroundColor: '#d5a20d',
                            color: '#000053'
                        },
                    }}
                    size="large"
                    variant="contained"
                    onClick={handleButtonClick}
                >
                    Log In
                </Button>
                {error && <Typography color="red">{error}</Typography>}
            </Stack>
            <Stack position={"absolute"} bottom={"0"} textAlign={"center"} width={"100%"}>
                <Divider />
                <Typography color={"#000053"} fontFamily={"Poppins"} fontSize={"14px"} fontWeight={"500"}>© 2024. 41 EME - All rights reserved</Typography>
                <Typography color={"#000053"} fontFamily={"Poppins"} fontSize={"14px"} fontWeight={"500"}>Developed & Maintained by Capt. Muhammad Ahmed, 41 EME</Typography>
            </Stack>
        </Stack>
    );
};

export default Login;
