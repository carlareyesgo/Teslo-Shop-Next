import { Box, Card, CardActionArea, CardMedia, Grid, Link } from "@mui/material"
import Typography from "@mui/material/Typography";
import { FC, useMemo, useState } from "react"
import { IProduct } from '../../interfaces/products';
import NextLink from 'next/link';


interface Props {
    product: IProduct
}

export const ProductCard: FC<Props> = ({ product }) => {

    const [isHovered, setisHovered] = useState(false)
    const [isImageLoaded, setIsImageLoaded] = useState(false)


    const productImage = useMemo(() => {
        return isHovered
            ? `/products/${product.images[1]}`
            : `/products/${product.images[0]}`
    }, [isHovered, product.images])


    return (
        <Grid item xs={6} sm={4} onMouseEnter={() => setisHovered(true)} onMouseLeave={() => setisHovered(false)}>
            <Card>
                <NextLink href="/product/slug" passHref prefetch={false}>

                        <CardActionArea>
                            <CardMedia
                                component='img'
                                className="fadeIn"
                                image={productImage}
                                alt={product.title}
                                onLoad={() => setIsImageLoaded(true)}
                            />
                        </CardActionArea>




                </NextLink>

            </Card>
            <Box sx={{ mt: 1, display: isImageLoaded? 'block' : 'none' }} className='fadeIn'>
                <Typography fontWeight={700}>{product.title}</Typography>
                <Typography fontWeight={500}>{`$${product.price}`}</Typography>
            </Box>
        </Grid>
    )
}
