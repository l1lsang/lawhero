import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../auth/AuthProvider";

export default function AuthGuard({ children }) {

  const { user, authReady } = useAuth();

  const guest = localStorage.getItem("guest");

  if (!authReady) {
    return null;
  }

  /* 로그인도 없고 게스트도 아니면 */
  if (!user && !guest) {
    return <Navigate to="/auth" replace />;
  }

  return children ? children : <Outlet />;
}