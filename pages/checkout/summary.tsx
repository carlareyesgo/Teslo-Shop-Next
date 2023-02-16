import { CartList, OrdenSummary } from "@/components/cart";
import { ShopLayout } from "@/components/layouts"
import { Typography, Grid, Card, CardContent, Divider, Box, Button } from '@mui/material';
import NextLink from 'next/link';


const SummaryPage = () => {
  return (
    <ShopLayout title='Resumen de Orden' pageDescription={'Resumen de la Orden'}>
        <Typography variant='h1' component='h1'>Resumen de la orden</Typography>

        <Grid container>
            <Grid item xs={12} sm={7}>
              <CartList/>
            </Grid>
            <Grid item xs={12} sm={5}>
              <Card className='summary-card'>
                <CardContent>
                  <Typography variant='h2'>
                    Resumen (3 Productos)
                  </Typography>
                  <Divider sx={{my: 1}}/>
                  <Box display='flex' justifyContent='space-between'>
                  <Typography variant='subtitle1'>Dirección de entrega</Typography>
                    <NextLink href='/checkout/address' passHref>
                        Editar
                    </NextLink>
                  </Box>

                  <Typography>Carla Godinez</Typography>
                  <Typography>123 Bravo</Typography>
                  <Typography>Tepic Nay</Typography>
                  <Typography>México</Typography>
                  <Typography>+2 3423432432</Typography>
                  <Divider sx={{my: 1}}/>

                  <Box display='flex' justifyContent='end'>
                    <NextLink href='/cart' passHref>
                        Editar
                    </NextLink>
                  </Box>

                  <OrdenSummary/>
                  <Box sx={{mt: 3}}>
                    <Button color="secondary" className='circular-btn' fullWidth>
                      Confirmar Orden
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
        </Grid>
    </ShopLayout>
  )
}

export default SummaryPage