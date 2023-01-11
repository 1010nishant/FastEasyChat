import React from "react";
import { useTheme } from '@mui/material/styles'
import { Box, Stack } from "@mui/system";
import Conversation from "../../components/Conversation";
import Chats from "./Chats";
import Contact from "../../components/Contact";
import { useSelector } from "react-redux";
import Media from "../../components/SharedMessages";
import StarredMessages from "../../components/StarredMessages";

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
      {
        sideBar.open &&
        (() => {
          switch (sideBar.type) {
            case "CONTACT":
              return <Contact />;

            case "STARRED":
              return <StarredMessages />;

            case "SHARED":
              return <Media />;

            default:
              break;
          }
        })()
      }

    </Stack>
  );
};

export default GeneralApp;
