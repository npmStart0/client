import { useEffect, useState } from 'react';
import sendRequest from '../utils/api/api';
import { Subject } from '../components/Subject.jsx';
import { Container } from '@mui/material';

export const SubjectBoard = () => {
    
    const [subjects,setSubjects] = useState([]);
    
    const fetchSubject = async ()  =>{
        const allSubjects = await sendRequest('/subject' , 'GET');
        setSubjects(allSubjects);
    };

    useEffect(()=>{
        fetchSubject();
    }, []);

    return (
        <>
            <Container 
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    gap: 5,
                }}
            >
                {subjects.map((subject) => (
                    <Subject key={subject.id} {...subject}></Subject>
                ))}
            </Container> 
        </>
    );
};