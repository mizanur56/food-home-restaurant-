import { useQuery } from "@tanstack/react-query";
import usePublicAxios from "./usePublicAxios";

const useMenu = () => {
  const publicAxios = usePublicAxios();
  const {
    data: menu = [],
    isPending: loading,
    refetch,
  } = useQuery({
    queryKey: ["menu"],
    queryFn: async () => {
      const res = await publicAxios.get("/menu");
      return res.data;
    },
  });

  return [menu, loading, refetch];
};
export default useMenu;
