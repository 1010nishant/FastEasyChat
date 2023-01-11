import React from "react";
import { useTheme } from '@mui/material/styles'
import { Box, Stack } from "@mui/system";
import Conversation from "../../components/Conversation";
import Chats from "./Chats";
import Contect from "../../components/Contect";
import { useSelector } from "react-redux";

const GeneralApp = () => {
  const theme = useTheme()
  const { sideBar } = useSelector((store) => store.app)
  return (
    <Stack direction='row' sx={{ width: '100%' }}>

      <Chats />
      <Box sx={{
        height: '100%',
        backgroundColor: theme.palette.mode === 'light' ? '#F0F4FA' : theme.palette.background.default,
        width: sideBar.open ? 'calc(100vw - 740px)' : 'calc(100vw - 420px)'
      }}>

        <Conversation />
      </Box>
      {/* contect */}
      {sideBar.open && <Contect />}

    </Stack>
  );
};

export default GeneralApp;
