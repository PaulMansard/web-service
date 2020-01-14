<template>
    <div>
        <h1>{{ playlist }}</h1>
    </div>
</template>

<script>
    import Axios from "axios";

    export default {
        name: "UpdatePlaylist",
        data() {
            return {
                playlist: this.$route.params.playlist
            }
        },
        created() {
            Axios.get(this.$apiPlaylist + '/user/' + this.idUser).then(response => { this.playlists = response.data })
        }
    }
</script>

<style scoped>

</style>
