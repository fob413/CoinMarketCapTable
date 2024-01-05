import { useQuery } from '@tanstack/react-query';
import { MOCKEDCRYPTOCURRENCY } from './mocks/cyptoCurrency';



const getCryptoCurrency = (): any => {
    // returns a mocked api response data
    return MOCKEDCRYPTOCURRENCY;
}

export const useGetCryptoCurrency = () => {
    return useQuery({
        queryKey: ['crypto-currency'],
        queryFn: getCryptoCurrency
    })
}
