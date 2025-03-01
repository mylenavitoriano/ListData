import ThemeSwitch from "./ThemeSwitch";

const Header = () => {
  return (
    <header className="py-4">
      <div className="flex items-center justify-between ">
        <p className="text-lg font-semibold">List.Data</p>
        <ThemeSwitch />
      </div>
      <hr className="border-t border-secondary my-4" />
    </header>
  );
};

export default Header;
