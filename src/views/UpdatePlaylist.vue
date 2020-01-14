<template>
    <div class="mt-3">
        <b-container align="center" v-for="video in videos">
            <b-card :title="video.title" style="max-width: 500px;" class="mb-auto">
                <iframe id="ytplayer" type="text/html" width="300" height="150"
                        :src="'https://www.youtube.com/embed/' + video.idVideo"
                        frameborder="0"/>
                <div>
                    <b-button variant="danger" v-on:click="deleteVideo(video.idVideo, $event)" align="center" style="margin-bottom: 5px">Delete</b-button>
                </div>
            </b-card>
        </b-container>
    </div>
</template>

<script>
    import Axios from "axios";

    export default {
        name: "UpdatePlaylist",
        data() {
            return {
                playlist: this.$route.params.playlist,
                videos: null
            }
        },
        created() {
            Axios.post(this.$apiVideo + '/multiple',{
                videos: this.playlist.videos
            }).then(response => { this.videos = response.data })
        },
        methods: {
            deleteVideo(idVideo, event) {
                event.target.parentElement.parentElement.parentElement.style.visibility = 'hidden'
                Axios.put(this.$apiPlaylist + '/delete/' + this.playlist.idPlaylist + '/' + idVideo)
            }
        }
    }
</script>

<style scoped>

</style>
