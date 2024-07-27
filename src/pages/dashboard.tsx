import React from 'react';
import { Avatar, Stack, Typography } from '@mui/material';
import { Assets } from '../assets';

const Dashboard: React.FC = () => {
    return (
        <Stack sx={{
            backgroundColor: "#940301",
            width: "25rem",
            height: "80vh",
            display: 'flex',
            flexDirection: 'column',
            borderRadius: "15px",
            marginRight: "30px",
            marginTop: "80px",
            padding: "20px"
        }}>
            <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"} borderBottom={"1px solid #fff"} paddingBottom={"10px"}>
                <Stack direction={"row"} alignItems={"center"}>
                    <Avatar src={Assets.NOTIFICATION} sx={{
                        height: "18px",
                        width: "23px",
                        '&:hover': {
                            cursor: "pointer"
                        },
                    }} />
                    <Typography fontSize={"18px"} color={"#fff"} fontWeight={"600"} fontFamily={"Poppins"} ml={"10px"}>Notification Center</Typography>
                </Stack>
                <Stack>
                    <Avatar src={Assets.REFRESH} sx={{
                        height: "18px",
                        width: "23px",
                        '&:hover': {
                            cursor: "pointer"
                        },
                    }} />
                </Stack>
            </Stack>
        </Stack>
    );
}

export default Dashboard;
