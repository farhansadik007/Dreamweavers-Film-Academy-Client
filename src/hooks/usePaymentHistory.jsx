import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const usePaymentHistory = () => {
    const [axiosSecure] = useAxiosSecure();
    const { data: paymentHistory = [], isLoading: loading, refetch } = useQuery({
        queryKey: ['paymenthistory'],
        queryFn: async () => {
            const response = await axiosSecure(`/paymenthistory`)
            return response.data;
        }
    })
    return [paymentHistory, loading, refetch]
}

export default usePaymentHistory;