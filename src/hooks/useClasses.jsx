import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useClasses = () => {
    const [axiosSecure] = useAxiosSecure();
    const { data: classes = [], isLoading: loading, refetch } = useQuery({
        queryKey: ['classes'],
        queryFn: async () => {
            const response = await axiosSecure(`/classes`)
            return response.data;
        }
    })
    return [classes, loading, refetch]
}

export default useClasses;