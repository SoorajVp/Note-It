import logo from '../../assets/logo.png'

const Logo = () => {
    return (
        <div className=' flex text-white'>
            <img src={logo} alt="logo" className='w-9 h-9' />
            <h1 className='text-2xl font-semibold border-t-2 border-r-2 border-b-2 pr-2 uppercase'>BytePad</h1>
        </div>
    )
}

export default Logo