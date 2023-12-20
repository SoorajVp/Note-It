import Logo from '../Elements/Logo';
import LoginForm from './LoginForm';

const Login = () => {
    return (
        <div className="font-[sans-serif] text-[#333]">
            <div className="grid lg:grid-cols-2 gap-4 bg-gradient-to-r from-secondary to-primary sm:p-8 p-4 h-[320px]">
                <div>
                    <Logo />
                    <div className="max-w-lg mt-16 px-6 max-lg:hidden">
                        <h3 className="text-3xl font-bold text-white">Sign in</h3>
                        <p className="text-sm mt-4 text-white">Embark on a seamless journey as you sign in to your account. Unlock a realm of opportunities and possibilities that await you.</p>
                    </div>
                </div>
                <div className="bg-white mt-16 rounded-xl sm:px-6 px-4 py-8 max-w-md w-full h-max shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] max-lg:mx-auto">
                    <LoginForm />
                </div>
            </div>
        </div>
    )
}

export default Login;