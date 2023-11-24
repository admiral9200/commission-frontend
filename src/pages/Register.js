import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import { signUp } from "../redux/actions/auth";

import logo from '../assets/images/logo.svg';

const Register = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [password2, setPassword2] = useState();

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const isRegistered = useSelector(state => state.auth.isRegistered);

    const register = () => {
        if (password === password2) {
            dispatch(signUp({
                email: email,
                password: password,
                password2: password2
            }));
        }
    }

    useEffect(() => {
        if(isRegistered) {
            navigate("/auth/sign-in");
        }
    }, [isRegistered])

    return (
        <div className="flex flex-col w-full py-36">
            <div className='fixed left-4 top-2 lg:top-[15px] lg:left-[50px]'>
                <img
                    className=""
                    width={120}
                    height={120}
                    src={logo}
                    alt="Your Company"
                />
            </div>
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-[#8BB862]">
                        Register
                    </h2>
                </div>
            <form className="w-full max-w-sm mx-auto">
                <div className="mb-5">
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                    <input
                        type="email"
                        id="email"
                        className="block w-full border-0 py-3 text-gray-900 bg-[#000000] bg-opacity-[8%]" placeholder="name@gmail.com" required
                        value={email}
                        onChange={e => { e.preventDefault(); setEmail(e.target.value) }}
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                    <input
                        type="password"
                        id="password"
                        className="block w-full border-0 py-3 text-gray-900 bg-[#000000] bg-opacity-[8%]" required
                        value={password}
                        onChange={e => { e.preventDefault(); setPassword(e.target.value); }}
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="repeat-password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Repeat password</label>
                    <input
                        type="password"
                        id="repeat-password"
                        className="block w-full border-0 py-3 text-gray-900 bg-[#000000] bg-opacity-[8%]" required
                        value={password2}
                        onChange={e => { e.preventDefault(); setPassword2(e.target.value); }}
                    />
                </div>
                <div className="flex items-start mb-5">
                    <div className="flex items-center h-5">
                        <input id="terms" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
                    </div>
                    <label htmlFor="terms" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree with the <a href="/" className="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a></label>
                </div>
                <button
                    className="flex w-full justify-center px-3 py-3 text-sm font-semibold bg-[#8BB862] text-white"
                    onClick={register}
                >
                    Register new account
                </button>
            </form>
        </div>
    )
}

export default Register;