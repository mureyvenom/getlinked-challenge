import { Suspense } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { Route, Switch } from "react-router";
import NotFound from "./components/404";
import ErrorBoundary from "./components/ErrorBoundary";
import Contact from "./pages/contact";
import Landing from "./pages/landing";
import Register from "./pages/register";

const routes = [
  {
    path: "/",
    exact: true,
    component: Landing,
  },
  {
    path: "/timeline",
    exact: true,
    component: Landing,
  },
  {
    path: "/faqs",
    exact: true,
    component: Landing,
  },
  {
    path: "/overview",
    exact: true,
    component: Landing,
  },
  {
    path: "/contact",
    exact: true,
    component: Contact,
  },
  {
    path: "/register",
    exact: true,
    component: Register,
  },
];

const LoadingBox = () => {
  return (
    <div className="dark:bg-black h-screen fixed top-0 left-0 w-full">
      <div className="fixed top-0 left-0 w-full h-screen bg-bg flex justify-center items-center flex-col">
        <AiOutlineLoading3Quarters size={48} color="#FFF" />
      </div>
    </div>
  );
};

function App() {
  return (
    <div className="bg-bg">
      <ErrorBoundary>
        <Suspense fallback={<LoadingBox />}>
          <Switch>
            {routes.map((r) => (
              <Route
                component={r.component}
                exact={r.exact}
                path={r.path}
                key={r.path}
              />
            ))}
            <Route component={NotFound} />
          </Switch>
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}

export default App;
