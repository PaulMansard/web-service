import Vue from 'vue'
import VueRouter from 'vue-router'
import Connexion from "../views/Connexion"
import Accueil from "../views/Accueil"
import Inscription from "../views/Inscription"
import Playlist from "../views/Playlist"
import Video from "../views/Video"
import UpdatePlaylist from "../views/UpdatePlaylist";
import AjoutVideo from "../views/AjoutVideo";


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'connexion',
    component: Connexion
  },
  {
    path: '/accueil',
    name: 'accueil',
    component: Accueil
  },
  {
    path: '/inscription',
    name: 'inscription',
    component: Inscription
  },
  {
    path: '/playlist',
    name: 'playlist',
    component: Playlist
  },
  {
    path: '/video',
    name: 'video',
    component: Video
  },
  {
    path: '/update',
    name: 'update',
    component: UpdatePlaylist
  },
  {
    path: '/addvideo',
    name: 'addvideo',
    component: AjoutVideo
  }

]

const router = new VueRouter({
  routes
})

export default router
