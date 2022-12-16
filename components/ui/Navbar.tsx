import { SearchOutlined, ShoppingCartOutlined } from "@mui/icons-material";
import { AppBar, Badge, Box, Button, IconButton, Link as MuiLink, Toolbar, Typography } from "@mui/material"
import Link from "next/link";

export const Navbar = () => {
    return (
        <AppBar>
            <Toolbar>
                <MuiLink href='/' display='flex' alignItems='center'><Typography variant="h6">Tecnomega |</Typography>
                    <Typography sx={{ ml: 0.5 }}>Shop</Typography>
                    {/* <Link display='flex' alignItems='center'>
                        
                    </Link> */}
                </MuiLink>
                <Box flex={1} />
                <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                    {/* <Link href='/category/men' passHref> */}
                    {/* <MuiLink variant="body2"> */}
                    <Button href="/category/men" variant="contained">
                        Hombres
                    </Button>

                    {/* </MuiLink> */}
                    {/* <Link>
                            <Button>
                                Hombres
                            </Button>
                        </Link> */}
                    {/* </Link> */}
                    <Button href="/category/women" variant="contained">
                        Mujeres
                    </Button>
                    <Button href="/category/kids" variant="contained">
                        Niños
                    </Button>

                </Box>
                <Box flex={1} />
                <IconButton>
                    <SearchOutlined />
                </IconButton>
                <IconButton href="/cart">
                    <Badge badgeContent={2} color='secondary'>
                        <ShoppingCartOutlined />
                    </Badge>
                </IconButton>
                <Button>Menu</Button>
            </Toolbar>
        </AppBar>
    )
}
