<template>
    <div>
        <b-form @submit.prevent="onSubmit" style="margin-top: 5px">
            <b-form-group label-cols-sm="2" id="input-group-1" label="Nom :" label-for="input-1">
                <b-form-input id="input-1" v-model="namePlaylist" type="text" required placeholder="Entrez un nom de playlist"></b-form-input>
            </b-form-group>
            <b-container align="center" v-for="video in videos">
                <b-card :title="video.title" style="max-width: 500px;" class="mb-auto">
                    <div>
                        <b-button variant="primary" v-on:click="addVideo(video.idVideo, $event)" align="center" style="margin-bottom: 5px">Ajouter</b-button>
                    </div>
                    <iframe id="ytplayer" type="text/html" width="300" height="150"
                            :src="'https://www.youtube.com/embed/' + video.idVideo"
                            frameborder="0"/>
                </b-card>
            </b-container>
            <b-button type="submit" variant="primary" style="margin-top: 5px">Valider</b-button>
        </b-form>
    </div>
</template>

<script>
    import Axios from "axios";

    export default {
        name: "AddPlaylist",
        data() {
            return {
                namePlaylist: null,
                videos: null,
                idVideos: ''
            }
        },
        created() {
            Axios.get(this.$apiVideo).then(response => { this.videos = response.data })
        },
        methods: {
            addVideo(idVideo, event){
                event.target.disabled = true
                this.idVideos += idVideo + '/'
            },
            onSubmit(){
                Axios.post(this.$apiPlaylist + '/',{
                    name: this.namePlaylist,
                    videos: this.idVideos,
                    idUser: JSON.parse(localStorage.getItem('id'))
                })
                this.$router.push({ name: 'playlist' });
            }
        }

    }
</script>

<style scoped>

</style>
