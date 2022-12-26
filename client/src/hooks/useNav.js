import { useNavigate } from "react-router-dom";

function useNav(url) {
  const navigate = useNavigate();

  const handler = () => {
    navigate(`/${url}`, { replace: true });
  };

  return handler;
}

export default useNav;
