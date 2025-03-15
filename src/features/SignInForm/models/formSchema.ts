import { z } from "zod";

export const SignInSchema = z.object({
  email: z.string().email("Введите корректный email"),
  password: z
    .string()
    .min(4, "Пароль должен быть больше 4 символов")
    .max(16, "Пароль должен быть меньше 16 символов"),
});
