
import { ProductList } from '@/components/product';
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

  <ProductList
    products={initialData.products as any}
  />

   </ShopLayout>
  )
}
