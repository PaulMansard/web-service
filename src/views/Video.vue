<template>
    <div class="mt-3">
        <b-button variant="primary" to="/addvideo" style="margin-top: 5px; margin-bottom: 15px">Ajouter une vidéo</b-button>
        <b-container align="center" v-for="video in videos">
            <b-card :title="video.title" style="max-width: 500px;" class="mb-auto">
                <iframe id="ytplayer" type="text/html" width="300" height="150"
                        :src="'https://www.youtube.com/embed/' + video.idVideo"
                        frameborder="0"/>
            </b-card>
        </b-container>
    </div>
</template>

<script>
    import Axios from "axios";

    export default {
        name: "Video",
        data() {
            return{
                videos: null
            }
        },
        created() {
            Axios.get(this.$apiVideo).then(response => { this.videos = response.data })
        }
    }
</script>

<style scoped>

</style>
