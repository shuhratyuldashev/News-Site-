import HomePage from "@/pages/HomePage";
import PostPage from "@/pages/PostPage";
import ProfilePage from "@/pages/ProfilePage";
import SignInPage from "@/pages/SignInPage";
import SignUpPage from "@/pages/SignUpPage";
import { Toaster } from "@/shared/ui/sonner";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { fetchingAuthMe, isAuth } from "@/shared/store/slices/auth.js"

const AppRouter = () => {
  const isUserAuth = useSelector(isAuth);
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchingAuthMe)
  }, [])

  return (
    <>
      <Routes>
        {isUserAuth ? (
          <>
            <Route path="/" element={<HomePage />} />
            <Route path="/post/:id" element={<PostPage />} />
            <Route path="/profile" element={<ProfilePage />} />
          </>
        ) : (
          <>
            <Route path="/" element={<HomePage />} />
            <Route path="/post/:id" element={<PostPage />} />
            <Route path="/sign-in" element={<SignInPage />} />
            <Route path="/sign-up" element={<SignUpPage />} />
          </>
        )}
      </Routes>
      <Toaster position="top-center" />
    </>
  );
};

export default AppRouter;
