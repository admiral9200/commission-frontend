import { useState } from 'react'
import {
    Bars3Icon,
} from '@heroicons/react/24/outline'
import Sidebar from '../components/Sidebar';

import plus from '../../src/assets/images/plus_submit.svg'
import calender from '../../src/assets/images/uit_calender.svg';
import timer from '../../src/assets/images/timer.svg';
import Dropdown from '../components/Dropdown';

const ProfileSettings = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const [date, setDate] = useState('');
    const [time, setTime] = useState('');


    // handle date change...
    const handleDateChange = (event) => {
        const value = event.target.value.replace(/\D/g, '');
        const formattedValue = formatDateString(value);
        setDate(formattedValue);
    };

    // handle time change....
    const handleTimeChange = (event) => {
        const value = event.target.value.replace(/\D/g, '');
        const formattedValue = formatTimeString(value);
        setTime(formattedValue);
    };


    // definition the format of date...
    const formatDateString = (value) => {
        let formattedValue = '';
        const parts = value.match(/(\d{1,2})?(\d{1,2})?(\d{1,4})?/);

        if (parts[1]) {
            formattedValue += parts[1];
            if (parts[2]) {
                formattedValue += '/' + parts[2];
                if (parts[3]) {
                    formattedValue += '/' + parts[3];
                }
            }
        }

        return formattedValue;
    };

    // definition the format of time...
    const formatTimeString = (value) => {
        let formattedValue = '';
        const hours = value.slice(0, 2);
        const minutes = value.slice(2, 4);

        if (hours) {
            formattedValue += hours;
            if (hours > 12) {
                formattedValue = '12' + formattedValue.slice(2);
            }
        }

        if (minutes) {
            formattedValue += ':' + minutes;
            if (minutes > 59) {
                formattedValue = formattedValue.slice(0, 3) + '59';
            }
        }

        if (formattedValue.length > 2) {
            formattedValue = formattedValue.slice(0, 2) + ':' + formattedValue.slice(2);
        }

        if (formattedValue.length > 5) {
            formattedValue = formattedValue.slice(0, 5) + ' ' + formattedValue.slice(5);
        }

        return formattedValue;
    };

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

                    <main className="py-10 flex items-start justify-center h-screen px-8">
                        <div className='w-full sm:px-6 lg:pl-24'>
                            <p className=' text-[24px] text-[#8BB862] mb-4'>
                                Profile Settings
                            </p>

                            <div className='flex flex-col justify-center items-center '>
                                <div className='flex flex-col lg:flex-row justify-center w-full lg:gap-x-4 '>
                                    <div className='w-full bg-[#000000] bg-opacity-10 px-8 lg:p-8 flex flex-col justify-start items-start border-2 border-gray-300'>
                                        <div className='flex flex-col justify-start items-start my-4'>
                                            <label className='font-bold text-black mb-1'>Your Name</label>
                                            <p className='text-gray-600 text-sm'>Leo Marta</p>
                                        </div>
                                        <div className='flex flex-col justify-start items-start my-4'>
                                            <label className='font-bold text-black mb-1'>Username</label>
                                            <p className='text-gray-600 text-sm'>Leo2232</p>
                                        </div>
                                        <div className='flex flex-col justify-start items-start my-4'>
                                            <label className='font-bold text-black mb-1'>E-mail</label>
                                            <p className='text-gray-600 text-sm'>leo@gmail.com</p>
                                        </div>
                                        <div className='flex flex-col justify-start items-start my-4'>
                                            <label className='font-bold text-black mb-1'>Phone Number</label>
                                            <p className='text-gray-600 text-sm'>+126 4112 2563 23</p>
                                        </div>
                                        <div className='flex flex-col justify-start items-start my-4'>
                                            <label className='font-bold text-black mb-1'>Address</label>
                                            <p className='text-gray-600 text-sm'>Zip, City, Country</p>
                                        </div>
                                        <div className='flex flex-col justify-start items-start my-4'>
                                            <label className='font-bold text-black mb-1'>Commission</label>
                                            <p className='text-gray-600 text-sm'>10%</p>
                                        </div>
                                    </div>
                                    <div className='w-full mt-4 lg:mt-0'>
                                        <div className='w-full bg-[#000000] bg-opacity-10 p-8 border-2 border-gray-300'>
                                            <div className='py-2'>
                                                <label className='font-bold'>Old Password</label>
                                                <input type='password' className='block w-full border-0 py-3 text-gray-900 bg-[#000000] bg-opacity-[8%]' />
                                            </div>
                                            <div className='py-2'>
                                                <label className='font-bold'>Your new Password</label>
                                                <input type='password' className='block w-full border-0 py-3 text-gray-900 bg-[#000000] bg-opacity-[8%]' />
                                            </div>
                                            <div className='py-2'>
                                                <label className='font-bold'>Confirm new Password</label>
                                                <input type='password' className='block w-full border-0 py-3 text-gray-900 bg-[#000000] bg-opacity-[8%]' />
                                            </div>

                                            <button className='text-white bg-[#8BB862] px-10 py-3 uppercase mt-4 font-semibold'>
                                                Update
                                            </button>
                                        </div>
                                        <div className='w-full bg-[#000000] bg-opacity-10 p-8 mt-4 border-2 border-gray-300'>
                                            <div className='flex flex-col justify-start items-start my-4'>
                                                <label className='font-bold text-black mb-1'>Your role</label>
                                                <p className='text-gray-600 text-sm'>Employee</p>
                                            </div>
                                            <div className='flex flex-col justify-start items-start my-4'>
                                                <label className='font-bold text-black mb-1'>Commission collected: </label>
                                                <p className='text-gray-600 text-sm'>10,50$</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className='w-full py-1.5 px-2.5 bg-[#000000] bg-opacity-10 border-2 border-gray-300 mt-2'>
                                    <p><strong>Version</strong>: 1.0</p>
                                </div>
                            </div>
                            
                        </div>
                    </main>
                </div>
            </div>
        </>
    )
}

export default ProfileSettings;