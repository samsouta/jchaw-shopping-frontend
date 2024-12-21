import React, { useContext, useState } from 'react'
import { useGetProductsGenreQuery } from '../redux/api/fetchJData'
import { StateContext } from '../context/StateContext';
import { Pagination } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useParams } from 'react-router-dom';
import ShopCard from '../components/UI/shop/ShopCard';
const theme = createTheme({
    palette: {
        primary: {
            main: '#009176',
        }
    },
});

const ShopCategory: React.FC = () => {
    const {type} = useParams();
    const [currentPage, setCurrentPage] = useState(1);

    const context = useContext(StateContext);
    if (!context) {
        throw new Error('StateContext not found');
    }
    const { genre } = context;
    const { data, isLoading } = useGetProductsGenreQuery({ genre: genre, page: currentPage });
    const product = data?.data
    const productMeta = data?.meta
    const GenTitle = type ? type.charAt(0).toUpperCase() + type.slice(1) : '';

    const handleChangePage = (event: React.ChangeEvent<unknown>, page: number) => {
        event.preventDefault()
        setCurrentPage(page);
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };
    return (
        <div className="mt-11 mx-1 lg:mx-4">
            <div className='flex justify-center items-center'>
                <h1 className='text-[var(--gold)] mb-6 text-4xl lg:text-[60px] lg:text-4xl header-text'>
                {GenTitle}
                </h1>
            </div>
            <div className=" flex-wrap grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 transition-all duration-300 ease-in-out">
                {
                    product?.map((item) => (
                        <ShopCard
                            key={item?.id}
                            data={item}
                            isLoading={isLoading}
                        />
                    ))
                }
            </div>
            {/* Pagination */}
            <ThemeProvider theme={theme}>
                <div className="flex justify-center my-8">
                    <Pagination
                        color="primary"
                        onChange={handleChangePage}
                        page={currentPage}
                        count={productMeta?.last_page}
                        variant="outlined"
                        shape="rounded"
                    />
                </div>
            </ThemeProvider>
        </div>
    )
}

export default ShopCategory