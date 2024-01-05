import { useQuery } from '@tanstack/react-query';
import { MOCKEDCRYPTOCURRENCY } from './mocks/cyptoCurrency';



const getCryptoCurrency = async (page: number): Promise<any> => {
    const limit = 10;
    const start = page * limit;

    const headers = {
        'X-CMC_PRO_API_KEY': process.env.REACT_APP_PRO_API_KEY ? process.env.REACT_APP_PRO_API_KEY : ''
    }

    // TODO: Fix cross origin error and return data from server
    // const response = await fetch(
    //     `https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?start=${start}&limit=${limit}&convert=USD`,
    //     {
    //         mode: 'no-cors',
    //         headers
    //     }
    // );

    // returns a mocked api response data
    return MOCKEDCRYPTOCURRENCY;
}

export const useGetCryptoCurrency = (page: number) => {
    return useQuery({
        queryKey: [`crypto-currency-${page}`],
        queryFn: () => getCryptoCurrency(page)
    })
}
