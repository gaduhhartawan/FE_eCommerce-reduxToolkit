import axios from "axios";
import { useQuery, useMutation } from "@tanstack/react-query";

export const useFetchProducts = () => {
  return useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const { data } = await axios.get("http://localhost:5000/products");
      return data;
    },
  });
};

export const useFetchProduct = (id) => {
  return useQuery({
    queryKey: [`product`],
    queryFn: async () => {
      const { data } = await axios.get(`http://localhost:5000/products/${id}`);
      return data;
    },
  });
};

export const usePostProduct = () => {
  return useMutation({
    mutationFn: async (body) => {
      await axios.post("http://localhost:5000/products", body);
    },
  });
};

export const useDeleteProduct = () => {
  return useMutation({
    mutationFn: async (id) => {
      await axios.delete(`http://localhost:5000/products/${id}`);
    },
  });
};
