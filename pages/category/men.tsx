import { ProductList } from '@/components/products';
import { FullScreenLoading } from '../../components/ui';
import {Typography} from '@mui/material';
import { Inter } from '@next/font/google'
import { NextPage } from 'next';
import { ShopLayout } from '../../components/layouts';
import {useProducts} from '../../hooks'



const inter = Inter({ subsets: ['latin'] })

const MenPage: NextPage = () => {


  const {products, isLoading} = useProducts('/products?gender=men')



  return (
   <ShopLayout title={'Teslo-Shop- Men'} pageDescription={'Encuentra los mejores productos de Teslo para ellos'}>
    <Typography variant='h1' component='h1'>Hombres</Typography>
    <Typography variant='h2' sx={{mb: 1}}>Productos para ellos</Typography>

    {
      isLoading
      ? <FullScreenLoading/>
      : <ProductList products={products}/>
    }

  

   </ShopLayout>
  )
}

export default MenPage
