import { IBestAFSRoute } from "@umijs/plugin-layout";

const routes: IBestAFSRoute[] = [
  {
    path: "/*",
    component: "@/pages/index",
    routes: [
      {
        path: "/home",
        component: "@/pages/home/index"
      },
      {
        path: "/article",
        routes: [
          {
            path: "/article/list",
            component: "./article/index"
          },
          {
            path: "/article/detail",
            component: "@/pages/article/detail/index"
          }
        ]
      },
      {
        path: "/about",
        component: "@/pages/about/index"
      },
      {
        path: "/message",
        component: "@/pages/message/index"
      },
      {
        path: "/archive",
        component: "@/pages/archive/index"
      },
      {
        path: "/loading",
        component: "@/Loading"
      },
      {
        path: "/404",
        component: "@/404"
      }
    ]
  }
];

export default routes;
