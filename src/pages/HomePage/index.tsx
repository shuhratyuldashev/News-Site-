import Container from "@/shared/container";
import Header from "@/widgets/Header";
import PostsWidget from "@/widgets/Posts";
import { useSelector } from "react-redux";
import { isAuth } from "@/shared/store/slices/auth.js"

export const HomePage = () => {
  const isUserAuth = useSelector(isAuth)
  return (
    <div className="w-full h-[100vh]">
      <Header isAuth={isUserAuth}/>
      <Container className="mt-4 justify-between">
        <PostsWidget isAuth={isUserAuth}/>
      </Container>
    </div>
  );
};

export default HomePage;
