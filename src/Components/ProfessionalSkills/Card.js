import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { Progress } from 'react-sweet-progress';
import "react-sweet-progress/lib/style.css";
import './Card.css'

export default function CardComp(props) {

 

  return (
    <Card sx={{ display: 'flex' , width:'350px' }} className="mb-4 cardStyle" >
      <CardMedia
        component="img"
        sx={{ width: 120 ,height:120}}
        image={props.details.image}
        className="p-3"
        alt="Live from space album cover"
      />
      <Box sx={{ display: 'flex', flexDirection: 'column', width:"100%" }}>          
        <CardContent sx={{ flex: '1 0 auto', }}>
          <Typography component="div" variant="h5">
            {props.details.name}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            {props.details.descript}
          </Typography>
          <Progress percent={props.details.percent}  />
        </CardContent>    
      </Box>
    </Card>
  );
}