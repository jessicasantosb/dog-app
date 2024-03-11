import React from "react";
import SunIcon from "../../assets/sun.svg?react";
import MoonIcon from "../../assets/moon.svg?react";

function ThemeToggleBtn() {
  const [theme, setTheme] = React.useState(() => {
    const initialTheme = localStorage.getItem("theme");
    return initialTheme ? initialTheme : "light";
  });

  const handleChangeTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
  };

  React.useEffect(() => {
    localStorage.setItem("theme", theme);
    document.body.classList.toggle("dark-theme", theme === "dark");
  }, [theme]);

  return (
    <div style={{ cursor: "pointer" }} onClick={handleChangeTheme}>
      {theme === "dark" ? <SunIcon /> : <MoonIcon />}
    </div>
  );
}

export default ThemeToggleBtn;
