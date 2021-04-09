import AdminPrograms from "./page/AdminPrograms";
import Auth from "./page/Auth";
import Login from "./page/Login";
import ProgramsList from "./page/ProgramsList";
import UserPrograms from "./page/UserPrograms";
import { ADMIN_PROGRAMS_ROUTE, LOGIN_ROUTE, PROGRAM_LIST_ROUTE, REGISTER_ROUTE, USER_PROGRAMS_ROUTE } from "./utils/const";

export const authRoutes = [
  {
    path: PROGRAM_LIST_ROUTE,
    Component: ProgramsList
  },
  {
    path: USER_PROGRAMS_ROUTE,
    Component: UserPrograms
  },
  {
    path: ADMIN_PROGRAMS_ROUTE,
    Component: AdminPrograms
  }
]

export const publicRoutes = [
  {
    path: REGISTER_ROUTE,
    Component: Auth
  },


  {
    path: LOGIN_ROUTE,
    Component: Login
  }
]