import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { signIn } from '../store/slices/userSlice'
import { signInNormal } from '../store/slices/userNormalSlice'

export default function Home() {
    const [name, setName] = useState('')
    const [pass, setPass] = useState('')

    const [nameNormal, setNameNormal] = useState('')
    const [passNormal, setPassNormal] = useState('')

    const userState = useSelector((state) => state.user)
    const userNormal = useSelector((state) => state.userNormal)

    const dispatch = useDispatch()

    const signin = () => {
        dispatch(signIn({ name: name, pass: pass }))
    }

    const signInNormalChnage = () => {
        dispatch(signInNormal({ name: nameNormal, pass: nameNormal }))
    }

    return (
        <div className="bg-zinc-800 w-full h-screen flex space-x-9 justify-center items-center p-8">
            <div>
                <div className="w-full space-y-3 bg-zinc-700 p-8 rounded-md text-zinc-800 font-medium text-lg">
                    <h1 className="text-3xl text-zinc-200 drop-shadow-md">
                        Persit Store
                    </h1>
                    <input
                        className="w-full h-10 rounded-md bg-zinc-300 px-3 shadow-md outline-none outline-offset-0 focus:outline-amber-700 caret-amber-700"
                        type="text"
                        name=""
                        value={name}
                        id=""
                        placeholder="Login"
                        onChange={(e) => setName(e.target.value)}
                    />
                    <input
                        className="w-full h-10 rounded-md bg-zinc-300 px-3 shadow-md outline-none outline-offset-0 focus:outline-amber-700 caret-amber-700"
                        type="text"
                        name=""
                        value={pass}
                        id=""
                        placeholder="Password"
                        onChange={(e) => setPass(e.target.value)}
                    />
                    <button
                        onClick={() => signin()}
                        className="w-full bg-amber-600 px-10 py-3 rounded-md text-white font-semibold text-2xl shadow-md">
                        Log In
                    </button>
                </div>
                <div className="w-full space-y-3 bg-zinc-700 p-8 rounded-md text-zinc-200 text-lg mt-10">
                    <p className="w-full border-b border-amber-700">
                        User: {userState?.user.name}
                    </p>
                    <p className="w-full border-b border-amber-700">
                        Password: {userState?.user.pass}
                    </p>
                    <p className="w-full border-b border-amber-700">
                        Logged: {userState?.isLoggedIn.toString()}
                    </p>
                </div>
            </div>
            <div>
                <div className="w-full space-y-3 bg-zinc-700 p-8 rounded-md text-zinc-800 text-lg">
                    <h1 className="text-3xl text-zinc-200 drop-shadow-md">
                        Normal Reducers
                    </h1>
                    <input
                        className="w-full h-10 rounded-md bg-zinc-300 px-3 shadow-md outline-none outline-offset-0 focus:outline-amber-700 caret-amber-700"
                        type="text"
                        name=""
                        value={nameNormal}
                        id=""
                        placeholder="Login"
                        onChange={(e) =>
                            setNameNormal(e.target.value)
                        }
                    />
                    <input
                        className="w-full h-10 rounded-md bg-zinc-300 px-3 shadow-md outline-none outline-offset-0 focus:outline-amber-700 caret-amber-700"
                        type="text"
                        name=""
                        value={passNormal}
                        id=""
                        placeholder="Password"
                        onChange={(e) =>
                            setPassNormal(e.target.value)
                        }
                    />
                    <button
                        onClick={() => signInNormalChnage()}
                        className="w-full bg-amber-600 px-10 py-3 rounded-md text-white font-semibold text-2xl shadow-md">
                        Log In
                    </button>
                </div>
                <div className="w-full space-y-3 bg-zinc-700 p-8 rounded-md text-zinc-200 text-lg mt-10">
                    <p className="w-full border-b border-amber-700">
                        User: {userNormal?.user.name}
                    </p>
                    <p className="w-full border-b border-amber-700">
                        Password: {userNormal?.user.pass}
                    </p>
                    <p className="w-full border-b border-amber-700">
                        Logged: {userNormal?.isLoggedIn.toString()}
                    </p>
                </div>
            </div>
        </div>
    )
}
