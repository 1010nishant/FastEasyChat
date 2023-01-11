import React, { useState } from "react";

import { useTheme } from "@mui/material/styles";
import { Box, Divider, IconButton, Stack } from "@mui/material";
import logo from '../../assets/Images/logo.ico'
import { Nav_Buttons } from "../../data";
import { Gear } from "phosphor-react";
import AntSwitch from "../../components/AntSwitch";


import useSettings from "../../hooks/useSettings";
import ProfileMenu from "./ProfileMenu";

const SideNav = () => {
    const { onToggleMode } = useSettings()
    const theme = useTheme()
    const [selected, setSelected] = useState(0);// initializing with 0 means IconButton with index 0 will be selected button by default when this page is first rendered onto the screen
    return (
        <>
            <Box
                p={2}//(2 = 2*8 => 16px)
                sx={{
                    backgroundColor: theme.palette.background.paper,
                    boxShadow: '0px 0px 2px rgba(0,0,0,0.25)',
                    height: '100vh',
                    width: 100,// 100px
                }}>
                <Stack
                    direction='column'
                    spacing={3}
                    alignItems="center"
                    justifyContent='space-between'
                    sx={{ height: '100%' }}>
                    <Stack alignItems='center' spacing={4}>
                        <Box sx={{
                            backgroundColor: theme.palette.primary.main,
                            height: 64,
                            width: 64,
                            borderRadius: 1.5,//(1.5 * 8 = 12px) [8px is default in mui]
                        }}>
                            <img src={logo} alt={'chat app logo'} />
                        </Box>
                        <Stack
                            spacing={3}
                            direction='column'
                            alignItems='center'
                            sx={{ width: 'max-content' }}
                        >
                            {Nav_Buttons.map((el) => (
                                el.index === selected ?
                                    <Box
                                        p={1}
                                        sx={{
                                            backgroundColor: theme.palette.primary.main,
                                            borderRadius: 1.5
                                        }}
                                    >
                                        <IconButton sx={{ width: 'max-content', color: '#fff' }}
                                            key={el.index}
                                        >{el.icon}</IconButton>
                                    </Box>
                                    :
                                    <IconButton
                                        sx={{ width: 'max-content', color: theme.palette.mode === 'light' ? '#000' : theme.palette.text.primary }}
                                        key={el.index}
                                        onClick={() => {
                                            setSelected(el.index)
                                        }}
                                    >{el.icon}</IconButton>
                            ))}
                            <Divider sx={{ width: '48px' }} />
                            {selected === 3 ? (<Box p={1}
                                sx={{
                                    backgroundColor: theme.palette.primary.main,
                                    borderRadius: 1.5
                                }}
                            >
                                <IconButton sx={{ width: 'max-content', color: '#fff' }}><Gear /></IconButton>
                            </Box>)
                                : (
                                    <IconButton
                                        onClick={() => {
                                            setSelected(3)
                                        }}
                                        sx={{
                                            width: 'max-content',
                                            color: theme.palette.mode === 'light' ? '#000' : theme.palette.text.primary
                                        }}
                                    >
                                        <Gear />
                                    </IconButton>
                                )
                            }


                        </Stack>
                    </Stack>
                    <Stack spacing={4}>
                        <AntSwitch onChange={() => onToggleMode()} defaultChecked />
                        {/* Profile Menu */}
                        <ProfileMenu />
                    </Stack>
                </Stack>
            </Box>
        </>
    );
};

export default SideNav;
