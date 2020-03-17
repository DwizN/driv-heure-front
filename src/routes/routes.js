import DashboardLayout from "@/pages/Layout/DashboardLayout.vue";

import Dashboard from "@/pages/Dashboard.vue";
import Login from "@/pages/Login.vue";
import DashboardM from "@/pages/DashboardM.vue";
import Dashboardc from "@/pages/Dashboardc.vue";
import UserProfile from "@/pages/UserProfile.vue";
import Notifications from "@/pages/Notifications.vue";

const routes = [
  {
    path: "/",
    name: "Login Page",
    component: Login
  },
  {
    path: "/",
    component: DashboardLayout,
    redirect: "/dashboard",
    children: [
      {
        path: "dashboard",
        name: "Dashboard Secrétaire",
        component: Dashboard
      },
      {
        path: "dashboardM",
        name: "Dashboard Moniteur",
        component: DashboardM
      },
      {
        path: "dashboardc",
        name: "Dashboard Elève",
        component: Dashboardc
      },
      {
        path: "user",
        name: "User Profile",
        component: UserProfile
      },
      {
        path: "notifications",
        name: "Notifications",
        component: Notifications
      }
    ]
  }
];

export default routes;
