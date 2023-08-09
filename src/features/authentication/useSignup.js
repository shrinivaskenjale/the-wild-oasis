import { useMutation } from "@tanstack/react-query";
import { signup as signupApi } from "../../services/apiAuth";
import { toast } from "react-hot-toast";

export const useSignup = () => {
  const { mutate: signup, isLoading } = useMutation({
    mutationFn: signupApi,
    onSuccess: (user) => {
      console.log(user);
      toast.success(
        "Created new account successfully. Please verify the new account from the user's email address."
      );
    },
    // onError: (err) => {
    //   console.log(err);
    //   toast.error(
    //     "There was an error while creating new account. Please try again."
    //   );
    // },
  });

  return { signup, isLoading };
};
