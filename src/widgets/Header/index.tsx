import { Button } from "@/shared/ui/button";
import HeaderButtons from "./ui/HeaderButtons";
import MyLink from "@/shared/link";
import DropdownTheme from "./ui/ChangeTheme";
import Container from "@/shared/container";

const Header = ({ isAuth }: { isAuth: boolean }) => {

  return (
    <header className="py-2 w-full">
      <Container className="flex justify-between items-center">
        <DropdownTheme />
        <MyLink
          to="/"
          className="bg-primary text-primary-foreground rounded-md hidden lg:block md:block"
        >
          <Button className="text-primary-foreground" variant="link">
            News Blog
          </Button>
        </MyLink>
        <div className="flex gap-2">
          <HeaderButtons isAuth={isAuth} />
        </div>
      </Container>
    </header>
  );
};

export default Header;
