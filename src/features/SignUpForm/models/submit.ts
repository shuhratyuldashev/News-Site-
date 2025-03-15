import { toast } from "sonner";
import { iSignUp } from "../types/types";

export const onSubmitSignUp = (data: iSignUp) => {
  console.log("Форма отправлена:", data);
  toast.success("Вы успешно зарегистровались в систему");
};
