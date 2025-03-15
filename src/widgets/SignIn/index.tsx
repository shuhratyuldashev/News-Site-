import SignInForm from "@/features/SignInForm";
import MyLink from "@/shared/link";
import { Button } from "@/shared/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/shared/ui/card";
import { Newspaper } from "lucide-react";

const SignInWidget = () => {
  return (
    <Card className="w-[90%] lg:w-[20%] md:w-[60%]">
      <CardHeader className="items-center text-center">
        <div className="w-14 h-14 mb-3 rounded-full flex items-center justify-center bg-primary text-primary-foreground">
          <Newspaper />
        </div>
        <CardTitle>Вход в аккаунт</CardTitle>
        <CardDescription>
          Для входа на сайт используйте ваш email и пароль, которые были указаны
          при регистрации на сайте
        </CardDescription>
      </CardHeader>
      <CardContent>
        <SignInForm />
      </CardContent>
      <CardFooter className="flex justify-center">
        <MyLink to="/sign-up" className="text-sm">
          <Button variant="link">
            Если у вас нету аккаунта Зарегистрируйтесь
          </Button>
        </MyLink>
      </CardFooter>
    </Card>
  );
};

export default SignInWidget;
