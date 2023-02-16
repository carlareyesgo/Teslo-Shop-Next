import { CartList, OrdenSummary } from "@/components/cart";
import { ShopLayout } from "@/components/layouts"
import { CreditCardOffOutlined, CreditScoreOutlined } from "@mui/icons-material";
import { Typography, Grid, Card, CardContent, Divider, Box, Button, Chip } from '@mui/material';
import NextLink from 'next/link';


const OrderPage = () => {
    return (
        <ShopLayout title='Resumen de la Orden 233' pageDescription={'Resumen de la Orden'}>
            <Typography variant='h1' component='h1'>Orden: 233</Typography>

            {/*   <Chip
            sx={{my:2}}
            label="Pendiente de pago"
            variant='outlined'
            color="error"
            icon={<CreditCardOffOutlined/>}
        /> */}
            <Chip
                sx={{ my: 2 }}
                label="Pagada"
                variant='outlined'
                color="success"
                icon={<CreditScoreOutlined />}
            />

            <Grid container>
                <Grid item xs={12} sm={7}>
                    <CartList />
                </Grid>
                <Grid item xs={12} sm={5}>
                    <Card className='summary-card'>
                        <CardContent>
                            <Typography variant='h2'>
                                Resumen (3 Productos)
                            </Typography>
                            <Divider sx={{ my: 1 }} />
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
                            <Divider sx={{ my: 1 }} />

                            <Box display='flex' justifyContent='end'>
                                <NextLink href='/cart' passHref>
                                    Editar
                                </NextLink>
                            </Box>

                            <OrdenSummary />
                            <Box sx={{ mt: 3 }}>
                                <h1>Pagar</h1>

                                <Chip
                                    sx={{ my: 2 }}
                                    label="Pagada"
                                    variant='outlined'
                                    color="success"
                                    icon={<CreditScoreOutlined />}
                                />
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </ShopLayout>
    )
}

export default OrderPage