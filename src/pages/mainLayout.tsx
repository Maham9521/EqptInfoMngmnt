import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { Avatar, ListItemAvatar, Stack, Typography } from '@mui/material';
import { Assets } from '../assets';

const Layout: React.FC = () => {
    const navigate = useNavigate();

    const menuItems = [
        { text: 'Dashboard', image: Assets.HOME, link: "/home" },
        { text: 'Preview Data', image: Assets.VIEW, link: "/preview_data" },
        { text: 'Add Data', image: Assets.ADD_DATA, link: "/add_data" },
        { text: 'Information', image: Assets.INFO, link: "/info" },
    ];

    const LogoutItem = [
        { text: 'Log out', image: Assets.LOGOUT, link: "/" }
    ];

    return (
        <Stack justifyContent={"space-between"} direction={"row"}>
            <Stack
                sx={{
                    backgroundColor: "#d5a20d",
                    width: "15rem",
                    minHeight: "100vh",
                    display: 'flex',
                    flexDirection: 'column',
                }}
            >
                <Box sx={{ width: 250 }} role="presentation">
                    <Stack direction={"row"} alignItems={"center"} mt={"30px"}>
                        <img width={"120px"} height={"100px"} src={Assets.LOGO} />
                        <Typography ml={"20px"} color={'#000053'} fontSize={"18px"} fontWeight={600} fontFamily={"Poppins"}>Equipment Information Management System</Typography>
                    </Stack>

                    <List sx={{ marginTop: '50px' }}>
                        {menuItems.map((item) => (
                            <ListItem key={item.text} disablePadding>
                                <ListItemButton
                                    sx={{
                                        backgroundColor: '#940301',
                                        margin: '10px',
                                        WebkitBorderTopLeftRadius: '15px',
                                        borderBottomRightRadius: '15px',
                                    }}
                                    onClick={() => navigate(item.link)}
                                >
                                    <ListItemAvatar>
                                        <Avatar src={item.image} alt={item.text} />
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary={item.text}
                                        sx={{
                                            '& .MuiListItemText-primary': {
                                                fontFamily: 'Poppins',
                                                fontSize: '16px',
                                                fontWeight: '600',
                                                color: '#fff',
                                            },
                                        }}
                                    />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                    <List sx={{ position: 'absolute', bottom: '0px' }}>
                        {LogoutItem.map((item) => (
                            <ListItem key={item.text} disablePadding>
                                <ListItemButton onClick={() => navigate(item.link)}>
                                    <ListItemAvatar>
                                        <Avatar src={item.image} alt={item.text} />
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary={item.text}
                                        sx={{
                                            '& .MuiListItemText-primary': {
                                                fontFamily: 'Poppins',
                                                fontSize: '16px',
                                                fontWeight: '600',
                                                color: '#940301',
                                            },
                                        }}
                                    />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </Stack>
            <Box sx={{ flexGrow: 1, padding: 3 }}>
                <Outlet />
            </Box>
        </Stack>
    );
}

export default Layout;
