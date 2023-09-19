import { ReactNode } from "react";
import Navbar from "./Navbar";

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <div className="h-screen w-full overflow-hidden flex bg-primary text-white">
      <div className="flex-1 h-full overflow-y-auto flex-col flex">
        <Navbar />
        {children}
      </div>
    </div>
  );
};

export default Layout;
