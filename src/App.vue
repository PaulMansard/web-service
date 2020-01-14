<template>
  <div id="app">
    <b-navbar type="dark" variant="dark" v-if="login != ''">

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item to="/playlist">Playlist</b-nav-item>
          <b-nav-item to="/video">Vidéo</b-nav-item>
        </b-navbar-nav>

        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown right v-if="login != ''">
            <template v-slot:button-content>
              {{ login }}
            </template>
            <b-dropdown-item @click="removeUser()" href="/">Deconnexion</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <router-view @createLogin='createLogin' :idUser="id" :key="$route.path"/>
  </div>
</template>


<script>
  export default {
    data () {
      return {
        id: '',
        login: ''
      }
    },
    mounted() {
      if(JSON.parse(localStorage.getItem('login'))){
        this.login = JSON.parse(localStorage.getItem('login'))
        this.id = JSON.parse(localStorage.getItem('id'))
      }
    },
    methods: {
      createLogin (login) {
        this.id = login.id
        this.login = login.login
      },
      removeUser () {
        localStorage.removeItem('login')
        localStorage.removeItem('id')
      }
    }
  }
</script>
<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
