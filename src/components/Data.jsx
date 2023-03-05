import React from 'react'
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';

export default function Data(props) {
    console.log(props.data)
  return (
    <>
     <Container maxWidth="sm">
      <Card sx={{ minWidth: 300, height:200, background:"#eaeaea",mt:20, display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center" }}>
        <Typography sx={{ fontSize: 20 }}>
        <div> {props.data?.country} <br /> {props.data?.city}</div>
        </Typography>
        </Card>
        </Container>
      
    </>
  )
}
