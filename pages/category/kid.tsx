import { ProductList } from '@/components/products';
import { FullScreenLoading } from '../../components/ui';
import {Typography} from '@mui/material';
import { Inter } from '@next/font/google'
import { NextPage } from 'next';
import { ShopLayout } from '../../components/layouts';
import {useProducts} from '../../hooks'



const inter = Inter({ subsets: ['latin'] })

const KidPage: NextPage = () => {


  const {products, isLoading} = useProducts('/products?gender=kid')



  return (
   <ShopLayout title={'Teslo-Shop- Kids'} pageDescription={'Encuentra los mejores productos de Teslo para niños'}>
    <Typography variant='h1' component='h1'>Niños</Typography>
    <Typography variant='h2' sx={{mb: 1}}>Productos para niños</Typography>

    {
      isLoading
      ? <FullScreenLoading/>
      : <ProductList products={products}/>
    }

  

   </ShopLayout>
  )
}

export default KidPage
