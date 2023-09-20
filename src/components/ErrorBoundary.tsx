import React, { ErrorInfo, ReactNode } from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";

interface Props extends RouteComponentProps {
  children: ReactNode;
}

interface State {
  hasErrored: boolean;
}

class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      hasErrored: false,
    };
  }

  static getDerivedStateFromError(error: Error) {
    console.log(error);
    return {
      hasErrored: true,
    };
  }

  componentDidCatch(err: Error, info: ErrorInfo) {
    console.log(err, info);
  }

  render() {
    return (
      <div>
        {this.state.hasErrored ? (
          <div className="fixed top-0 left-0 w-full h-screen bg-bg text-white flex flex-col justify-center items-center">
            <div className="md:w-1/2 md:px-5 px-10 flex flex-col items-center md:max-w-[355px]">
              <p className="text-[140px] font-bold text-white opacity-80 mb-4 leading-[112px]">
                ERROR
              </p>
              <p className="text-white text-lg text-center">
                Something went wrong
              </p>
              <button
                onClick={() => window.location.reload()}
                className="py-2 w-full bg-secondary text-white mt-4"
              >
                Try Again
              </button>
            </div>
          </div>
        ) : (
          this.props.children
        )}
      </div>
    );
  }
}

export default withRouter(ErrorBoundary);
