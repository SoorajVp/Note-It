import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Loading from '../../components/Elements/Shimmer';

const PrivateRoute = ({ children }) => {

    const navigate = useNavigate();
    const { isLoggedIn } = useSelector((store) => store.user)

    useEffect(() => {
        !isLoggedIn && navigate('/login');
    }, [isLoggedIn, navigate]);


    return children;
};

export default PrivateRoute;
