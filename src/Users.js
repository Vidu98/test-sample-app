import {useState, useEffect} from 'react'
import { Box } from '@mui/material';
import UserForm from './UserForm';
import UsesTable from './UsesTable';
import Axios from 'axios';


const Users = () => {
    const [users, setUsers] = useState([]);
    const [submitted, setSubmitted] = useState(false);

    useEffect(()=>{
        getUsers();
    }, []);

    const getUsers = () => {
        Axios.get('http://127.0.0.1:3001/api/users')
        .then(response =>{
            setUsers(response.data?.responsee || []);
        })
        .catch(error =>{
            console.error("Axios Error :", error);
        });
    }

    const addUser = (data) =>{
        setSubmitted(true);

        const payload={
            id: data.id,
            name: data.name,
        }

        Axios.post('http://127.0.0.1:3001/api/createuser', payload)
        .then( () =>{
            getUsers();
            setSubmitted(false);
        })
        .catch(error =>{
            console.error("Axios Error :", error);
        });
    }

  return (
    <Box 
        sx={{
            width:'calc(100%-100px)',
            margin:'auto',
            marginTop:'100px',
        }}
    >
        <UserForm addUser = {addUser} />
        <UsesTable rows={users}/>
    </Box>
  );
}

export default Users;
