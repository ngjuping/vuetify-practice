import Vue from 'vue'
import VueRouter from 'vue-router'
import TextAndButtons from '../views/Exercise1.vue'
import DashboardView from '../views/Dashboard.vue'
import ProjectsView from '../views/Projects.vue'
import TeamView from '../views/Team.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: DashboardView
  },
  {
    path: '/projects',
    name: 'Projects',
    component: ProjectsView
  },
  {
    path: '/team',
    name: 'Team',
    component: TeamView
  },
  {
    path: '/ex1',
    name: 'ex1',
    component: TextAndButtons
  }
]

const router = new VueRouter({
  routes
})

export default router
