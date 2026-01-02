import { useEffect } from 'react';
import { useNavigate} from 'react-router-dom';

export const useRedirection = (path: string, delay: number) => {

    const navigate = useNavigate();
    useEffect(() => {
        setTimeout(() => {
            navigate(path);
        }, delay);
    });
};
