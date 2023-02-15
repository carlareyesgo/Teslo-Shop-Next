import { ShopLayout } from "@/components/layouts"
import { initialData } from "@/database/products"
import { Box } from "@mui/material"
import Button from "@mui/material/Button/Button"
import Chip from "@mui/material/Chip"
import Grid from "@mui/material/Grid/Grid"
import Typography from "@mui/material/Typography"

const product = initialData.products[0]


const ProductPage = () => {
  return (
    <ShopLayout title={product.title} pageDescription={product.description}>
      <Grid container spacing={3}>

        <Grid item xs={12} sm={7}>

        </Grid>
        <Grid item xs={12} sm={5}>
          <Box display='flex' flexDirection='column'>
            <Typography variant='h1' component='h1'>
              {product.title}
            </Typography>
            <Typography variant='subtitle1' component='h2'>
              {`$${product.price}`}
            </Typography>

            <Box sx={{my: 2}}>
              <Typography variant='subtitle2'>
                Cantidad
              </Typography>
            </Box>

            <Button color="secondary" className='circular-btn'>
              Agregar al carrito
            </Button>

{/*             <Chip label="No hay disponibles" color="error" variant="outlined"/> */}

            <Box sx={{mt: 3}}>
              <Typography variant='subtitle2'>Descripción</Typography>
              <Typography variant='body2'>{product.description}</Typography>
            </Box>

          </Box>
        </Grid>

      </Grid>


    </ShopLayout>
  )
}

export default ProductPage