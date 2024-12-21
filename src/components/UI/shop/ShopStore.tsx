import React, {  useState } from 'react';
import { CategoryList, MobileCategoryList } from './CatagoryList';
import JLoading from '../Loader/JLoading';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Pagination from '@mui/material/Pagination';
import ShopCard from './ShopCard';
import { useGetProductsQuery } from '../../../redux/api/fetchJData';

const theme = createTheme({
    palette: {
        primary: {
            main: '#009176',
        }
    },
});

const ShopStore: React.FC = () => {
    const [currentPage, setCurrentPage] = useState(1);
    
    const { data, isLoading } = useGetProductsQuery(currentPage); 
    const jData = data?.data;
    const jMeta = data?.meta;



    const handleChangePage = (event: React.ChangeEvent<unknown>, page: number) => {
        event.preventDefault()
        setCurrentPage(page);
        window.scrollTo({
            top: 800,
            behavior: 'smooth',
        });
    };

    if (isLoading) return <JLoading />;


    return (
        <>
            <div className="mt-20">
                <div className="flex flex-col gap-y-3">
                    <h1 className="header-text text-2xl w-full text-[var(--dark-brown)]">Category</h1>
                    <div className="hidden sm:block">
                        <CategoryList />
                    </div>
                    <div className="sm:hidden block">
                        <MobileCategoryList />
                    </div>
                </div>
                <div className="mt-10 flex-wrap grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 transition-all duration-300 ease-in-out">
                    {
                        jData?.map((item) => (
                            <ShopCard key={item?.id} data={item} isLoading={isLoading} />
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
                            count={jMeta?.last_page}
                            variant="outlined"
                            shape="rounded"
                        />
                    </div>
                </ThemeProvider>
            </div>
        </>
    );
};

export default ShopStore;
