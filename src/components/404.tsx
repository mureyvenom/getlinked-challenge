import { RouteComponentProps } from "react-router-dom";
import Button from "./Button";

const NotFound = ({ history }: RouteComponentProps) => {
  return (
    <div>
      <div className="fixed top-0 left-0 w-full h-screen bg-bg flex flex-col justify-center items-center">
        <div className="md:w-1/2 md:px-5 px-10 flex flex-col items-center md:max-w-[355px]">
          <p className="text-[140px] font-bold text-white mb-4 leading-[112px]">
            404
          </p>
          <p className="text-white text-lg text-center">
            Something it’s wrong. This page does not exist or it has been moved.
          </p>
          <Button onClick={() => history.push("/")}>Go back home {"<"}</Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
