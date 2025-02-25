import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

function Areas({image, title, description}) {
  return (
    <Card>
        <CardMedia component="img" image={image} height="160" />
        <CardContent>
            <Typography gutterBottom variant='h5' component="div" >{title}</Typography>
            <Typography variant='body1'>{description}</Typography>
        </CardContent>
    </Card>

  )
}

export default Areas

  
