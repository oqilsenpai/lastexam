import { useQuery, useQueryClient } from "@tanstack/react-query";
import request from "../../services/api";

const useGetAllQuery = ({
                            key = "get-all",
                            url = "/",
                            params = {},
                            enabled = true,
                            refetchOnMount = true,
                        }) => {
    const queryClient = useQueryClient();
    const {
        isLoading,
        isError,
        data,
        error,
        isFetching
    } = useQuery({queryKey:[key],queryFn: () => request.get(url, params),options:{
        onSuccess: () => {
            // cb?.success(data)
        },
        onError: () => {
            // cb?.fail()
            // if (!hideErrorMsg) {
            //     toast.error(data?.response?.data?.message || `ERROR!!! ${url} api not working`)
            // }
        },
        enabled,
        refetchOnMount
    }});

    return {
        isLoading,
        isError,
        data,
        error,
        isFetching,
        queryClient
    }
};

export default useGetAllQuery;