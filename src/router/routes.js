
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: 'p1', component: () => import('pages/P1.vue') },
      { path: '/EH', component: () => import('pages/Estelam-Hoghughi.vue')},
      { path: '/login', component: () => import('pages/login.vue')},


    ]
  },
  {
    path: '/login',
    component: () => import('pages/login.vue')

  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
