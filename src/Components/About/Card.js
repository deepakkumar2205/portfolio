import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import coderGif from './coderGif.gif'

export default function AboutCard() {
  return (
    <Card sx={{ maxWidth: 545 , marginTop:"30px"}} elevation={6}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="350"
          image={coderGif}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            My Self
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Hey, I am Deepakkumar, an aspiring developer with a degree in Automobile Engineering. I am currently learning new skills with a vision of becoming better at what I do. I like Web Development and to Create a new Interfaces. I enjoy learning about technology and helping others use it to improve their lives and be more productive. I also have Frontend skills in HTML, CSS, Javascript, React js and Backend skills in node js, mongoDB, express.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}