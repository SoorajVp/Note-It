import { Outlet } from 'react-router-dom' 
import { useSelector } from 'react-redux'
import PrivateRoute from './Private'
import Header from '../../components/Header/Header'
import Loading from '../../components/Elements/Shimmer'

const Layout = () => {
    const { isLoading } = useSelector((store) => store.user)

    return (
        <PrivateRoute >
            <Header />
            <div className='pt-6 px-3 sm:px-[10%] bg-purple-200 min-h-screen'>
                { isLoading && <Loading /> }
                <Outlet />
            </div>
        </PrivateRoute>
    )
}

export default Layout