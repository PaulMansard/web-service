import Vue from 'vue'
import VueRouter from 'vue-router'
import Connexion from "../views/Connexion"
import Inscription from "../views/Inscription"
import Playlist from "../views/Playlist"
import Video from "../views/Video"
import UpdatePlaylist from "../views/UpdatePlaylist";
import AjoutVideo from "../views/AjoutVideo";
import AddPlaylist from "../views/AddPlaylist";


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'connexion',
    component: Connexion
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
  },
  {
    path: '/addplaylist',
    name: 'addplaylist',
    component: AddPlaylist
  }

]

const router = new VueRouter({
  routes
})

export default router
