import { createRouter, createWebHashHistory } from 'vue-router'
import App from '../App.vue'
import Login from '../components/Login.vue'
import Paciente from '../components/Paciente.vue'
import Medico from '../components/Medico.vue'
import Familiar from '../components/Familiar.vue'
import Inicio from '../components/Inicio.vue'

const routes = [
  {
    path: '/App',
    name: 'App',
    component: App
  },
  {
    path: '/Login',
    name: 'Login',
    component: Login
  },
  {
    path: '/Paciente',
    name: 'Paciente',
    component: Paciente
  },
  {
    path: '/Medico',
    name: 'Medico',
    component: Medico
  },
  {
    path: '/Familiar',
    name: 'Familiar',
    component: Familiar
  },
  {
    path: '/Login/Inicio',
    name: 'Inicio',
    component: Inicio
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
