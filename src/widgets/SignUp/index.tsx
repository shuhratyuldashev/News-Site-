import SignUpForm from "@/features/SignUpForm";
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

const SignUpWidget = () => {
  return (
    <Card className="w-[90%] lg:w-[20%] md:w-[60%]">
      <CardHeader className="items-center text-center">
        <div className="w-14 h-14 mb-3 rounded-full flex items-center justify-center text-primary-foreground bg-primary">
          <Newspaper />
        </div>
        <CardTitle>Регистрация</CardTitle>
        <CardDescription>
          Для регистрации на сайт введите вашк имя, адрес почты и пароль
        </CardDescription>
      </CardHeader>
      <CardContent>
        <SignUpForm />
      </CardContent>
      <CardFooter className="flex justify-center">
        <MyLink to="/sign-in" className="text-sm">
          <Button variant="link">Если у вас есть аккаунта Войдите</Button>
        </MyLink>
      </CardFooter>
    </Card>
  );
};

export default SignUpWidget;
