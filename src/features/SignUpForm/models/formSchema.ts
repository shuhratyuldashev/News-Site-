import { z } from "zod";

export const SignUpSchema = z.object({
  username: z
    .string()
    .min(4, "Имя должно быть больше 4 символов")
    .max(16, "Имя должно быть больше 16 символов"),
  email: z.string().email("Введите корректный email"),
  password: z
    .string()
    .min(4, "Пароль должен быть больше 4 символов")
    .max(16, "Пароль должен быть меньше 16 символов"),
});
