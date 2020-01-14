<template>
    <div>
        <b-table striped hover :items="playlists" :fields="['name', 'idPlaylist']" @row-clicked="updateId">
            <template v-slot:cell(idPlaylist)="data">
                <b-button variant="primary" class="glyphicon glyphicon-add" v-on:click="deletePlaylist(data.item.idPlaylist)">Delete</b-button>
            </template>
        </b-table>
    </div>
</template>

<script>
    import Axios from "axios";

    export default {
        name: "Playlist",
        data() {
            return{
                idUser: JSON.parse(localStorage.getItem('id')),
                playlists: null
            }
        },
        created() {
            Axios.get(this.$apiPlaylist + '/user/' + this.idUser).then(response => { this.playlists = response.data })
        },
        methods: {
            updateId(playlist, index) {
                this.$router.push({ name: 'update', params: { playlist: playlist } });
            },
            deletePlaylist(idPlaylist) {
                Axios.delete(this.$apiPlaylist + '/' + idPlaylist)
                Axios.get(this.$apiPlaylist + '/user/' + this.idUser).then(response => { this.playlists = response.data })
            }
        }
    }
</script>

<style scoped>

</style>
