import { Box, Skeleton } from '@mui/material'
import React from 'react'


const Jskeleton: React.FC = () => {
    return (
        <div className=' bottom-1 rounded-md overflow-hidden' >
            <Box className='border-none overflow-hidden w-full h-[260px] rounded-b-xl p-1' sx={{ marginRight: 0.5, bgcolor: '#d2b48c' }} >
                <Skeleton
                    animation="wave"
                    variant="rectangular"
                    className=' rounded-md'
                    width={'100%'} height={"200px"} />
                <Box sx={{ pt: 0.5 }}>
                    <Skeleton animation="wave" />
                    <Skeleton animation="wave" width="40%" />
                </Box>
            </Box>
        </div>
    )
}

export default Jskeleton