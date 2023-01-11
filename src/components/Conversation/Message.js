import { Box, Stack } from '@mui/material'
import React from 'react'
import { Chat_History } from '../../data'
import { DocMsg, LinkMsg, MediaMsg, ReplyMsg, TextMsg, Timeline } from './MsgTypes'

const Message = ({ menu }) => {
    return (
        <Box p={3}>
            <Stack spacing={3} >
                {Chat_History.map((el) => {
                    switch (el.type) {
                        case 'divider':
                            return (
                                // Timeline
                                <Timeline el={el} />
                            );


                        case 'msg':
                            switch (el.subtype) {
                                case 'img':
                                    return (
                                        // Media Message
                                        <MediaMsg el={el} menu={menu} />
                                    );

                                case 'doc':
                                    return (
                                        // Doc Message
                                        <DocMsg el={el} menu={menu} />
                                    );

                                case 'link':
                                    return (
                                        //  Link Message
                                        <LinkMsg el={el} menu={menu} />
                                    );

                                case 'reply':
                                    return (
                                        //  ReplyMessage
                                        <ReplyMsg el={el} menu={menu} />
                                    );

                                default:
                                    // text msg
                                    return (
                                        // Text Message
                                        <TextMsg el={el} menu={menu} />
                                    );

                            }


                        default:
                            return <></>;
                    }
                })}
            </Stack>
        </Box>
    )
}

export default Message