import { ProductList } from '@/components/products';
import { FullScreenLoading } from '../../components/ui';
import {Typography} from '@mui/material';
import { Inter } from '@next/font/google'
import { NextPage } from 'next';
import { ShopLayout } from '../../components/layouts';
import {useProducts} from '../../hooks'



const inter = Inter({ subsets: ['latin'] })

const WomenPage: NextPage = () => {


  const {products, isLoading} = useProducts('/products?gender=women')



  return (
   <ShopLayout title={'Teslo-Shop- Women'} pageDescription={'Encuentra los mejores productos de Teslo para ellas'}>
    <Typography variant='h1' component='h1'>Mujeres</Typography>
    <Typography variant='h2' sx={{mb: 1}}>Productos para ellas</Typography>

    {
      isLoading
      ? <FullScreenLoading/>
      : <ProductList products={products}/>
    }

  

   </ShopLayout>
  )
}

export default WomenPage
