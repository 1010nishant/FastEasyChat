import React from 'react'
import { Stack, Box } from '@mui/material'
// import { useTheme } from "@mui/material/styles";
import Header from './Header';
import Footer from './Footer';
import Message from './Message';




const Conversation = () => {

    return (
        <Stack height={'100%'} maxHeight={'100vh'} width={'auto'} >
            {/* chat header */}
            <Header />
            {/* msg */}
            <Box
                height={'100%'}
                sx={{
                    flexFlow: 1,
                    height: '100%',
                    overflowY: 'scroll'
                }}>
                <Message />
            </Box>
            {/* chat footer */}
            <Footer />
        </Stack>
    )
}

export default Conversation