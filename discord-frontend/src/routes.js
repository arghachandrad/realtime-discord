import React, { Suspense, Fragment, lazy } from "react"
import { Switch, Redirect, Route } from "react-router-dom"
import LoginPage from "./authPages/LoginPage/LoginPage"
import LoadingScreen from "./LoadingScreen"
import AuthGuard from "./shared/components/AuthGuard"

// import DashboardLayout from 'src/layouts/DashboardLayout';
// import DoctorDashboardLayout from "src/layouts/DoctorDashboardLayout"
// import PracticeLayout from "src/layouts/PracticeLayout"
// import MainLayout from "src/layouts/MainLayout"
// import HomeView from "src/views/home/HomeView"
// import LoadingScreen from "src/components/LoadingScreen"

// import AuthGuard from "src/components/AuthGuard"
// import DoctorAuthGuard from "src/components/DoctorAuthGuard"
// import GuestGuard from "src/components/GuestGuard"

export const renderRoutes = (routes = []) => (
  <Suspense fallback={<LoadingScreen />}>
    <Switch>
      {routes.map((route, i) => {
        const Guard = route.guard || Fragment
        // const Layout = route.layout || Fragment
        const Component = route.component

        return (
          <Route
            key={i}
            path={route.path}
            exact={route.exact}
            render={(props) => (
              <Guard>
                {/* <Layout> */}
                {route.routes ? (
                  renderRoutes(route.routes)
                ) : (
                  <Component {...props} />
                )}
                {/* </Layout> */}
              </Guard>
            )}
          />
        )
      })}
    </Switch>
  </Suspense>
)

const routes = [
  {
    exact: true,
    path: "/404",
    component: lazy(() => import("./NotFound")),
  },
  {
    exact: true,
    // guard: GuestGuard,
    path: "/login",
    component: lazy(() => import("./authPages/LoginPage/LoginPage")),
  },
  {
    exact: true,
    // guard: GuestGuard,
    path: "/register",
    component: lazy(() => import("./authPages/RegisterPage/RegisterPage")),
  },
  {
    exact: true,
    guard: AuthGuard,
    path: "/dashboard",
    component: lazy(() => import("./Dashboard/Dashboard")),
  },
  // Open routes for video and feedback page END
  {
    path: "/dashboard",
    guard: AuthGuard,
    // layout: PracticeLayout,
    routes: [
      {
        exact: true,
        path: "/dashboard/user",
        component: lazy(() => import("./Dashboard/User")),
      },
    ],
  },

  {
    path: "*",
    // layout: MainLayout,
    routes: [
      {
        exact: true,
        path: "/",
        component: LoginPage,
      },
      {
        component: () => <Redirect to="/404" />,
      },
    ],
  },
]

export default routes
