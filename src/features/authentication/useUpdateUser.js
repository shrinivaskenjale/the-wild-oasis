import { toast } from "react-hot-toast";
import { updateCurrentUser } from "../../services/apiAuth";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useUpdateUser = () => {
  const queryClient = useQueryClient();

  const { mutate: updateUser, isLoading: isUpdating } = useMutation({
    mutationFn: updateCurrentUser,
    onSuccess: ({ user }) => {
      toast.success("Updated the account successfully");
      // queryClient.invalidateQueries({ queryKey: ["user"] });
      queryClient.setQueryData(["user"], user);
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { updateUser, isUpdating };
};
