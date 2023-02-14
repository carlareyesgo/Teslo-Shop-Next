import NextLink from 'next/link'
import { AppBar, Box, Toolbar, Typography, Button, IconButton } from "@mui/material"
import { Link } from '@mui/icons-material'
import { SearchOutlined, ShoppingCartOutlined } from '@mui/icons-material'
import Badge from '@mui/material/Badge'


export const NavBar = () => {
    return (
        <AppBar>
            <Toolbar>
                <NextLink href='/' passHref style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>

                    <Typography variant='h6'>
                        Teslo |
                    </Typography>
                    <Typography sx={{ ml: 0.5 }}>
                        Shop
                    </Typography>

                </NextLink>
                <Box flex={1} />

                <Box sx={{display:{xs: 'none', sm: 'block '}}}>
                    <NextLink href='category/men' passHref style={{ textDecoration: 'none' }}>
                        <Button  >Hombres</Button>
                    </NextLink>
                    <NextLink href='category/women' passHref style={{ textDecoration: 'none' }}>
                        <Button>Mujeres</Button>
                    </NextLink>
                    <NextLink href='category/kid' passHref style={{ textDecoration: 'none' }}>
                        <Button>Niños</Button>
                    </NextLink>
                </Box>

                <Box flex={1} />

                <IconButton>
                    <SearchOutlined />
                </IconButton>

                <NextLink href="/cart" passHref style={{ textDecoration: 'none' }}>
                    <IconButton>
                        <Badge badgeContent={2} color="secondary">
                            <ShoppingCartOutlined />
                        </Badge>
                    </IconButton>
                </NextLink>

                <Button>
                    Menú
                </Button>

            </Toolbar>
        </AppBar>
    )
}
