import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import logo from '../assets/images/logo.svg';
import { signIn } from '../redux/actions/auth';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

    useEffect(() => {
        if(isLoggedIn) {
            navigate("/all-sales");
        }
    }, [isLoggedIn])

    // send login request...
    const login = () => {
        dispatch(signIn({
            email: email,
            password: password
        }));
    }

    return (
        <div className="py-8">
            <div className='fixed left-4 lg:top-[15px] lg:left-[50px]'>
                <img
                    className=""
                    width={120}
                    height={120}
                    src={logo}
                    alt="Your Company"
                />
            </div>


            <div className="flex w-full min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-[#8BB862]">
                        LOG IN
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <div className="space-y-6">
                        <div>
                            <label htmlFor="email" className="block text-sm  text-[#5D5D5D]">
                                Email
                            </label>
                            <div className="mt-2">
                                <input
                                    id={`email`}
                                    name={`email`}
                                    type={`email`}
                                    autoComplete={`email`}
                                    required
                                    value={email}
                                    onChange={e => { e.preventDefault(); setEmail(e.target.value); }}
                                    className="block w-full border-0 py-3 text-gray-900 bg-[#000000] bg-opacity-[8%]"
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm  text-[#5D5D5D]">
                                    Password
                                </label>
                            </div>
                            <div className="mt-2">
                                <input
                                    id={`password`}
                                    name={`password`}
                                    type={`password`}
                                    autoComplete={`password`}
                                    required
                                    value={password}
                                    onChange={e => { e.preventDefault(); setPassword(e.target.value); }}
                                    className="block w-full border-0 py-3 text-gray-900 bg-[#000000] bg-opacity-[8%]"
                                />
                            </div>
                        </div>

                        <div className="text-sm -translate-y-4">
                            <a href="/" className="underline text-[#5D5D5D] ">
                                Forgot your password?
                            </a>
                        </div>

                        <div className='mt-8'>
                            <button
                                className="flex w-full justify-center px-3 py-3 text-sm font-semibold bg-[#8BB862] text-white"
                                onClick={login}
                            >
                                LOG IN
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;