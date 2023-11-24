import { useEffect, useState } from 'react'
import {
    Bars3Icon,
} from '@heroicons/react/24/outline'
import Sidebar from '../components/Sidebar';

import plus from '../../src/assets/images/plus_submit.svg'
import calender from '../../src/assets/images/uit_calender.svg';
import timer from '../../src/assets/images/timer.svg';
import { useDispatch } from 'react-redux';
import { createSale } from '../redux/actions/sales';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const CreateSale = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const sales = useSelector(state => state.sales.sales);

    const navigate = useNavigate();

    useEffect(() => {
        // navigate("/all-sales");
    }, [sales])

    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [place, setPlace] = useState('');
    const [roomNum, setRoomNum] = useState(0);
    const [receiver, setReceiver] = useState("");
    const [box, setBox] = useState("Square");
    const [size, setSize] = useState("Large");
    const [flag, setFlag] = useState(1);

    const dispatch = useDispatch();

    const handleDateChange = (event) => {
        setDate(event.target.value);
    };

    const handleTimeChange = (event) => {
        setTime(event.target.value);
    }

    const handleSubmit = () => {
        dispatch(createSale({
            date,
            time,
            place,
            roomNum,
            receiver,
            box,
            size,
            flag
        }));
    }

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

                    <main className="py-10 flex items-start justify-center h-screen px-8 mb-12">
                        <div className="w-full sm:px-6 lg:pl-24 lg:w-[60%]">
                            <p className='font-bold text-[24px] text-[#8BB862]'>Create a sale</p>

                            <div className='flex flex-col lg:flex-row justify-evenly items-center my-4'>
                                <div className='w-full my-2'>
                                    <p className='lg:pb-2 text-gray-800'>Date</p>
                                    <div className='relative'>
                                        <input
                                            type="date"
                                            value={date}
                                            onChange={handleDateChange}
                                            maxLength={10}
                                            className='block w-full border-0 h-[48px] py-3 pl-[80px] text-gray-900 bg-[#000000] bg-opacity-[8%] text-center text-sm placeholder:text-center'
                                            placeholder="_ _ / _ _ / _ _ _ _"
                                        />
                                        <div className='absolute top-0 bg-[#8BB862] p-4'>
                                            <img src={calender} width={15} height={15} alt='' />
                                        </div>
                                    </div>
                                </div>
                                <div className='w-full lg:ml-4 my-2'>
                                    <p className='lg:pb-2 text-gray-800'>Time</p>
                                    <div className='relative'>
                                        <input
                                            type='time'
                                            value={time}
                                            onChange={handleTimeChange}
                                            maxLength={8}
                                            className='block w-full border-0 h-[48px] py-3 pl-[80px] text-gray-900 bg-[#000000] bg-opacity-[8%] text-center text-sm'
                                            placeholder="00:00  AM/PM"
                                        />
                                        <div className='absolute top-0 bg-[#8BB862] p-4'>
                                            <img src={timer} width={15} height={15} alt='' />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='flex flex-col lg:flex-row justify-evenly items-center my-4'>
                                <div className='w-full my-2'>
                                    <p className='lg:pb-2 text-gray-800'>Place</p>
                                    <input
                                        type='text'
                                        className='block w-full border-0 py-3 text-gray-900 bg-[#000000] bg-opacity-[8%] text-sm px-4'
                                        value={place}
                                        onChange={e => setPlace(e.target.value)}

                                    />
                                </div>
                                <div className='w-full lg:ml-4 my-2'>
                                    <p className='lg:pb-2 text-gray-800'>Room number</p>
                                    <input
                                        type='number'
                                        className='block w-full border-0 py-3 text-gray-900 bg-[#000000] bg-opacity-[8%] text-sm px-4'
                                        value={roomNum}
                                        onChange={e => setRoomNum(e.target.value)}
                                    />
                                </div>
                            </div>

                            <div className='flex  justify-evenly items-center my-4 '>
                                <div className='w-full my-2'>
                                    <p className='pb-2 text-gray-800'>For who?</p>
                                    <input
                                        type='text'
                                        className='block w-full border-0 py-3 text-gray-900 bg-[#000000] bg-opacity-[8%] text-sm px-4'
                                        placeholder='Name of receiver'
                                        value={receiver}
                                        onChange={e => setReceiver(e.target.value)}
                                    />
                                </div>
                            </div>

                            <div className='flex flex-col lg:flex-row justify-evenly items-center my-4'>
                                <div className='w-full my-2'>
                                    <p className='lg:pb-2 text-gray-800'>Type of box</p>
                                    <select
                                        className='block w-full border-0 py-3 text-gray-900 bg-[#000000] bg-opacity-[8%] text-sm px-4'
                                        onChange={e => setBox(e.target.value)}
                                        value={box}
                                    >
                                        <option>Square</option>
                                        <option>Box</option>
                                    </select>
                                </div>
                                <div className='w-full lg:ml-4 my-2'>
                                    <p className='lg:pb-2 text-gray-800'>Select size</p>
                                    <select
                                        className='block w-full border-0 py-3 text-gray-900 bg-[#000000] bg-opacity-[8%] text-sm px-4'
                                        onChange={e => setSize(e.target.value)}
                                        value={size}
                                    >
                                        <option>Large</option>
                                        <option>Medium</option>
                                    </select>
                                </div>
                            </div>

                            <p className='mt-4'>Schleife hinzufügen?</p>
                            <div className='flex flex-col lg:flex-row justify-evenly items-center mt-2'>
                                <div className='block w-full border-0 py-3 text-gray-900 bg-[#000000] bg-opacity-[8%] text-sm px-4'>
                                    <div className='flex justify-start items-center'>
                                        <input
                                            type='radio'
                                            checked={flag === 1 ? true : false}
                                            onChange={() => setFlag(1)}
                                        />
                                        <p className='pl-2'>Ja</p>
                                    </div>
                                </div>
                                <div className='block w-full border-0 py-3 text-gray-900 bg-[#000000] bg-opacity-[8%] text-sm px-4 lg:ml-4 my-2'>
                                    <div className='flex justify-start items-center'>
                                        <input
                                            type='radio'
                                            checked={flag === 2 ? true : false}
                                            onChange={() => setFlag(2)}
                                        />
                                        <p className='pl-2'>Nein, weiter ohne Schleife</p>
                                    </div>
                                </div>
                            </div>

                            <div className='flex justify-center lg:justify-start items-center mt-8 mb-24'>
                                <img src={plus} alt='' width={16} height={16} />
                                <button
                                    className='bg-[#8BB862] px-4 py-3 ml-6 text-white w-[200px] font-semibold uppercase'
                                    onClick={() => handleSubmit()}
                                >
                                    Submit
                                </button>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </>
    )
}

export default CreateSale;