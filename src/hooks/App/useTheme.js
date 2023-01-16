import { useEffect } from "react";
import { useSelector } from "react-redux";

const useTheme = () => {
  const theme = useSelector((state) => state.setting.theme);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);
};

export default useTheme;
