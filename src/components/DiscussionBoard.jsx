import { useState, useRef } from 'react';
// import sendRequest from '../utils/api/api';
import { Box, useTheme } from '@mui/material';
import { PageTitle } from './PageTitle.jsx';
import { Discussion } from './Discussion.jsx';
import { ActiveControl } from './ActiveControl.jsx';
import { NewDiscussion } from './NewDiscussion.jsx';

export const DiscussionBoard = () => {
    const theme = useTheme();

    const [openDialog, setOpenDialog] = useState(false);
    const newDiscussionRef = useRef(null);

    const Open = () => {
        setOpenDialog(true);
        if (newDiscussionRef.current) {
            newDiscussionRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };
    const onclose = ()=>{
        setOpenDialog(false);
    };

    // const allDiscussions = await sendRequest('/subject' , 'GET');
    // setSubjects(allDiscussions);
    const allDiscussions = [
        { id: '123', name: 'ressume', comments: [{ date: new Date() }] },
        { id: '123', name: 'salary', comments: [{ date: new Date() }] },
        { id: '123', name: 'activity', comments: [{ date: new Date() }] },
        { id: '123', name: 'ressume', comments: [{ date: new Date() }] },
        { id: '123', name: 'salary', comments: [{ date: new Date() }] },
        { id: '123', name: 'activity', comments: [{ date: new Date() }] },
        { id: '123', name: 'salary', comments: [{ date: new Date() }] },
        { id: '123', name: 'activity', comments: [{ date: new Date() }] },
    ];

    // return (
    //     <>
    //         <Container
    //             sx={{
    //                 // position: 'relative',
    //                 // display:'flex',
    //                 // flexDirection:'column',
    //                 backgroundColor: theme.palette.background.default
    //             }}
    //         >
    //             <Box sx={{
    //                 width:'5%',
    //                 position: 'absolute',
    //                 top: 0,
    //                 height:1,
    //                 left: 300,
    //             }}>
    //                 <PageTitle props={{ title: 'יצירת דיון חדש'} }
    //                     sx={{
    //                         textAlign: 'center',
    //                         width:'100%',
    //                     }}></PageTitle>
    //             </Box>
    //             <ActiveControl props={{ title: 'יצירת דיון חדש' }} onOpen={Open}></ActiveControl>
    //             <Box sx={{
    //                 display: 'flex',
    //                 flexDirection: 'column',
    //                 justifyContent: 'space-evenly',
    //             }}>
    //                 {allDiscussions.map((discussion) => (
    //                     <Discussion key={discussion.id} props={discussion}></Discussion>
    //                 ))}
    //             </Box>

    //             <ActiveControl props={{ title: 'יצירת דיון חדש' }} onOpen={Open}></ActiveControl>
    //         </Container >
    //     </>
    // );
    return (
        <Box
            sx={{
                backgroundColor: theme.palette.background.default, // Set the background color to dark
                minHeight: '88.9vh',
                padding: '20px',
                overflow: 'hidden',
                position: 'relative',
            }}
        >
            <Box sx={{
                height: '20%',
                background: `radial-gradient(circle,
                 ${theme.palette.primary.light} 0%, ${theme.palette.background.default} 100%)`,
                backgroundPosition: 'center',
            }}>
                <Box
                    sx={{
                        margin: '0 auto',
                        padding: '10px',
                        position: 'absolute',
                        top: 0,
                        // left: '50%',
                        transform: 'translateX(-50%)',
                        // zIndex: -1, 
                        width: '100%',
                        position: 'absolute',
                        // top: '-32%',
                        left: '50%',
                        // width: '40%',
                        height: '30%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        textShadow: `
    0 0 50px #49ACEF,
    0 0 100px #49ACEF,
    0 0 200px #49ACEF,
    0 0 300px #49ACEF`,
                    }}
                >
                    <PageTitle props={{ title: 'דיונים' }} />
                </Box>
            </Box>


            <ActiveControl props={{ title: 'יצירת דיון חדש' }} onOpen={Open} sx={{
                // position: 'absolute', top: '10%'
            }}></ActiveControl>
            <Box sx={{ marginTop: 3 }}>
                {allDiscussions.map((discussion, index) => (
                    <Discussion key={index} props={discussion} />
                ))}
            </Box>
            <Box ref={newDiscussionRef}>
                <NewDiscussion open={openDialog} onClose={() => setOpenDialog(false) || onclose} />
            </Box>
        </Box>
    );

};