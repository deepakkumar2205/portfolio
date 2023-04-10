import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, Stack } from '@mui/material';
import deepakResume from './deepakResume.png'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';
import resume from './deepakResumePdf.pdf'

export default function AboutCardResume() {
  const resumeLink = "https://drive.google.com/file/d/1E7N752ramUQeU1xJGo_w_ZyI9ki9r1iV/view?usp=sharing";

  return (
    <Card sx={{ width: 545,height:545, marginTop:"30px" }} elevation={6}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="410"
          image={deepakResume}
          alt="green iguana"
          style={{objectFit: "contain",marginTop:'30px'}}
        />
        <CardContent className='mb-3 p-3'>
          <Typography gutterBottom variant="h5" component="div">
            Resume
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <div className='d-flex flex-row pb-2  justify-content-around'>
           <Stack  direction='row' spacing={3}>
                <Button startIcon={<RemoveRedEyeIcon/>} href={resumeLink} target="_blank" > View</Button>
                <Button endIcon={<DownloadForOfflineIcon/>} download='Deepakkumar Resume.pdf' href={resume} >Download</Button>
           </Stack>
           </div>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}