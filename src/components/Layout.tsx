import { ReactNode } from "react";
import Navbar from "./Navbar";

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <div className="w-full overflow-hidden flex bg-bg text-white relative">
      <div className="h-full flex-col flex">
        <Navbar />
        {children}
      </div>
    </div>
  );
};

export default Layout;
