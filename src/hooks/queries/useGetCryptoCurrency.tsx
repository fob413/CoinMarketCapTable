import { useQuery } from '@tanstack/react-query';
import { MOCKEDCRYPTOCURRENCY } from './mocks/cyptoCurrency';



const getCryptoCurrency = (page: number): any => {
    // returns a mocked api response data
    // console.log('>>> page', page * 10);
    return MOCKEDCRYPTOCURRENCY;
}

export const useGetCryptoCurrency = (page: number) => {
    return useQuery({
        queryKey: [`crypto-currency-${page}`],
        queryFn: () => getCryptoCurrency(page)
    })
}
