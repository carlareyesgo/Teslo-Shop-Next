
import { Grid } from '@mui/material';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Inter } from '@next/font/google'
import { ShopLayout } from '../components/layouts';
import { initialData } from '../database/products';


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
   <ShopLayout title={'Teslo-Shop- Home'} pageDescription={'Encuentra los mejores productos de Teslo'}>
    <Typography variant='h1' component='h1'>Tienda</Typography>
    <Typography variant='h2' sx={{mb: 1}}>Todos los productos</Typography>

    <Grid container spacing={4}>
      {
        initialData.products.map(product => (
          <Grid item xs={6} sm={4} key={product.slug}>
            <Card>
              <CardActionArea>
                <CardMedia
                component='img'
                image={`products/${product.images[0]}`}
                alt={product.title}
                />
              </CardActionArea>
            </Card>
          </Grid>
        ))
      }
    </Grid>

   </ShopLayout>
  )
}
