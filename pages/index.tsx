
import { ProductList } from '@/components/products';
import { FullScreenLoading } from '../components/ui';
import {Typography} from '@mui/material';
import { Inter } from '@next/font/google'
import { NextPage } from 'next';
import { ShopLayout } from '../components/layouts';
import {useProducts} from '../hooks'



const inter = Inter({ subsets: ['latin'] })

const HomePage: NextPage = () => {


  const {products, isLoading} = useProducts('/products')



  return (
   <ShopLayout title={'Teslo-Shop- Home'} pageDescription={'Encuentra los mejores productos de Teslo'}>
    <Typography variant='h1' component='h1'>Tienda</Typography>
    <Typography variant='h2' sx={{mb: 1}}>Todos los productos</Typography>

    {
      isLoading
      ? <FullScreenLoading/>
      : <ProductList products={products}/>
    }

  

   </ShopLayout>
  )
}

export default HomePage
