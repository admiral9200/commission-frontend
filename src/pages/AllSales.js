import { useEffect, useState } from 'react'
import {
    Bars3Icon
} from '@heroicons/react/24/outline'
import Sidebar from '../components/Sidebar';
import { useDispatch } from 'react-redux';
import { getAllSales } from '../redux/actions/sales';
import { useSelector } from 'react-redux';
import SalesTable from '../components/SalesTable';

const AllSales = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [sales, setSales] = useState([]);

    const dispatch = useDispatch();
    const allSales = useSelector(state => state.sales.sales);

    useEffect(() => {
        dispatch(getAllSales());
    }, [])

    useEffect(() => {
        setSales(allSales);
    }, [allSales])

    return (
        <>
            <div>
                <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

                <div className="lg:pl-72">
                    <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 bg-white px-4 sm:gap-x-6 sm:px-6 lg:px-8">
                        <button type="button" className="-m-2.5 p-2.5 text-gray-700 lg:hidden" onClick={() => setSidebarOpen(true)}>
                            <span className="sr-only">Open sidebar</span>
                            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>

                    <main className="py-10">
                        <div className='px-8'>
                            <p className='text-[#8BB862] py-4 font-semibold text-[24px]'>
                                See all orders
                            </p>
                            <div className="px-4 sm:px-6 lg:px-8 bg-gray-50 border-2 border-gray-100">
                                {
                                    sales &&
                                    <SalesTable sales={sales} />
                                }
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </>
    )
}

export default AllSales;