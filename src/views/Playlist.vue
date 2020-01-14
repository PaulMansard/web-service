<template>
    <div>
        <b-button variant="primary" to="/addplaylist" style="margin-top: 5px; margin-bottom: 15px">Ajouter une playlist</b-button>
        <b-table striped hover :items="playlists" :fields="['name', { key: 'idPlaylist', label: '' }]" @row-clicked="updateId">
            <template v-slot:cell(idPlaylist)="data">
                <b-button variant="danger" class="glyphicon glyphicon-add" v-on:click="deletePlaylist(data.item.idPlaylist)">Delete</b-button>
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
