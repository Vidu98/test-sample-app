import { Button, Grid, Input, Typography } from '@mui/material';
import React, { useState } from 'react'

const UserForm = ({addUser}) => {

    const [id,setId] = useState(0);
    const[name,setName] = useState('');

  return (
    <Grid
        container
        spacing={2}
        sx={{
            backgroundColor: "#ffffff",
            marginBottom: '30px',
            display: 'block',
        }}
    >
        <Grid item xs={12}>
            <Typography component={'h1'} sx={{color:'#000000'}}>User Form</Typography>
        </Grid>
        <Grid item xs={12} sm={6} sx={{display:'flex'}}>
            <Typography 
                component={'label'}
                htmlFor='id'
                sx={{
                    color: '#000000',
                    marginRight:'20px',
                    fontSize:'16',
                    width:'100px',
                    display:'block',
                }}
                
            >
                ID
            </Typography>
            <Input
                type="number"
                id='id'
                name='id'
                sx={{width:'400'}}
                value={id}
                onChange={e=>setId(e.target.value)}
            
            />
        </Grid>

        <Grid item xs={12} sm={6} sx={{display:'flex'}}>
            <Typography 
                component={'label'}
                htmlFor='id'
                sx={{
                    color: '#000000',
                    marginRight:'20px',
                    fontSize:'16',
                    width:'100px',
                    display:'block',
                }}
                
            >
                Name
            </Typography>
            <Input
                type="text"
                id='name'
                name='name'
                sx={{width:'400'}}
                value={name}
                onChange={e=>setName(e.target.value)}
            
            />
        </Grid>
        <Button
            sx={{
                margin: 'auto',
                marginBottom:'20px',
                backgroundColor:'#00c6e6',
                color: '#000000',
                marginLeft:'15px',
                marginTop:'20',
                '&:hover':{
                    opacity:'0.7',
                    backgroundColor:'#00c6e6',
                }
                
            }}
            onClick={() => addUser({id, name})}

        > Add
        </Button>
    </Grid>
  )
}

export default UserForm;
