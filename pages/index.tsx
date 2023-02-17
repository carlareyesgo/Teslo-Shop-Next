
import { ProductList } from '@/components/products';
import { Grid } from '@mui/material';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Inter } from '@next/font/google'
import { NextPage } from 'next';
import { ShopLayout } from '../components/layouts';

import useSWR from "swr"

const fetcher = (...args: [key: string]) => fetch(...args).then(res => res.json())

const inter = Inter({ subsets: ['latin'] })

const HomePage: NextPage = () => {

  const { data, error, isLoading } = useSWR("/api/products", fetcher)

  if (error) return <div>failed to load</div>
  if (isLoading) return <div>loading...</div>



  return (
   <ShopLayout title={'Teslo-Shop- Home'} pageDescription={'Encuentra los mejores productos de Teslo'}>
    <Typography variant='h1' component='h1'>Tienda</Typography>
    <Typography variant='h2' sx={{mb: 1}}>Todos los productos</Typography>

  <ProductList
    products={data}
  />

   </ShopLayout>
  )
}

export default HomePage
