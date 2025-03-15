import MyLink from "@/shared/link";
import { Button } from "@/shared/ui/button";
import { LogIn } from "lucide-react";

const HeaderButtons = ({ isAuth }: { isAuth: boolean }) => {
  return isAuth ? (
    <>
      <Button size="sm" variant="ghost">
        Создать Статью
      </Button>
      <Button size="sm" variant="secondary">
        <MyLink to="/profile">Профиль</MyLink>
      </Button>
    </>
  ) : (
    <>
      <Button size="sm" variant="ghost">
        <MyLink className="gap-2" to="/sign-in">
          <LogIn /> Войти
        </MyLink>
      </Button>
    </>
  );
};

export default HeaderButtons;
