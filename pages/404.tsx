import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { ShopLayout } from '../components/layouts'

export default function Custom404() {
    return (
        <ShopLayout title='Página no encontrada' pageDescription='No hay nada aquí'>
            <Box display='flex' sx={{ flexDirection: { xs: 'column', sm: 'row' } }} justifyContent='center' alignItems='center' height='calc(100vh - 200px)'>
                <Typography variant='h1' component='h1' fontSize={80} fontWeight={200}>
                    404 |
                </Typography>
                <Typography marginLeft={2}>
                    No encontramos ninguna página
                </Typography>
            </Box>
        </ShopLayout>
    )
}
