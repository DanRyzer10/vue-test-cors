import axios from 'axios';

const usePostTransaction = async (url: string, data: any,headers:any) => {
    try {
        const response = await axios.post(url, data,{
            headers: headers
        });
        return response.data;
    } catch (error) {
        console.error('Error posting transaction:', error);
        throw error;
    }
};

export default usePostTransaction;