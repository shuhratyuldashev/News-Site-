import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/shared/ui/form";
import { Input } from "@/shared/ui/input";
import { Button } from "@/shared/ui/button";
import { LogIn } from "lucide-react";
import { SignInSchema, onSubmitSignIn } from "./models";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const SignInForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const form = useForm({
    resolver: zodResolver(SignInSchema),
    defaultValues: {
      email: "bobe@gmail.com",
      password: "asd123_AA",
    },
  });

  return (
    <Form {...form}>
      <form
        className="px-4"
        onSubmit={form.handleSubmit((body) =>
          onSubmitSignIn(body, dispatch, navigate),
        )}
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Введите почту</FormLabel>
              <Input type="email" {...field} placeholder="Bobe228@gmail.com" />
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem className="mt-2">
              <FormLabel>Введите Пароль</FormLabel>
              <Input {...field} placeholder="asd123_AA" />
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="mt-4 w-full">
          <LogIn /> Войти
        </Button>
      </form>
    </Form>
  );
};

export default SignInForm;
