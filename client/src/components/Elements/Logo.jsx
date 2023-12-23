import logo from '../../assets/logo.png'

const Logo = () => {
    return (
        <div className='flex text-white'>
            <img src={logo} alt="logo" className='w-7 h-7' />
            <h1 className='text-base font-semibold border-t-2 border-r-2 border-b-2 rounded-sm pr-1.5 uppercase'>BytePad</h1>
        </div>
    )
}

export default Logo