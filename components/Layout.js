import Nav from "./Nav";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <Nav />
      <main>{children}</main>
      <footer>Footer</footer>
    </div>
  );
};

export default Layout;
