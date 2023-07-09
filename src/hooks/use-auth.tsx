import { useSelector } from 'react-redux';
import { RootState } from '../app/store';

const useAuth = () => {
    const { isAuth } = useSelector((state: RootState) => state.auth);
    return isAuth;
};
export default useAuth;
