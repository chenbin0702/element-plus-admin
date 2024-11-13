const Layout = () => import("@/layout/index.vue");

export default {
  path: "/test",
  name: "Test",
  component: Layout,
  redirect: "/test1",
  meta: {
    icon: "ep:home-filled",
    title: "测试嘿嘿",
    rank: 0
  },
  children: [
    {
      path: "/test1",
      name: "Test",
      component: () => import("@/views/test/index.vue"),
      meta: {
        title: "测试嘿嘿"
      }
    }
  ]
} satisfies RouteConfigsTable;
