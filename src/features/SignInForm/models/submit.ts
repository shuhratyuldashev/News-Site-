import { toast } from "sonner";
import { iSignIn } from "../types/types";
import { fetchingSignIn } from "@/shared/store/slices/auth.js";

export const onSubmitSignIn = async (
  body: iSignIn,
  dispatch: any,
  navigate: any,
) => {
  try {
    const data = await dispatch(fetchingSignIn(body)).unwrap();

    if (!data?.token) {
      toast.error("Ошибка авторизации, проверьте почту и пароль");
      return;
    }

    window.localStorage.setItem("token", data.token);
    toast.success("Вы успешно вошли в систему");
  } catch (error) {
    toast.error("Ошибка авторизации, проверьте почту и пароль");
    console.log(error);
  } finally {
    navigate("/");
  }
};
