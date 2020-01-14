<template>
    <div>
        <b-button variant="primary" to="/addvideo">Ajouter une vidéo</b-button>
        <b-container class="mx-auto" v-for="video in videos">
            <b-card :title="video.title" style="max-width: 300px;" class="mb-auto">
                <iframe id="ytplayer" type="text/html" width="250" height="150"
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
