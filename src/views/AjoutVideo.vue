<template>
    <div>
        <h3>Ajout d'une video</h3>
        <b-form @submit.prevent="onSubmit">
            <b-form-group label-cols-sm="2" id="input-group-1" label="URL :" label-for="input-1">
                <b-form-input id="input-1" v-model="url" type="text" required placeholder="Entrez une url"></b-form-input>
            </b-form-group>
                <b-button type="submit" variant="primary">Valider</b-button>
        </b-form>
    </div>
</template>

<script>
    import Axios from "axios";

    export default {
        name: "AjoutVideo",
        data() {
            return {
                url: null
            }
        },
        methods: {
            onSubmit() {
                var id = this.url.split('https://www.youtube.com/watch?v=')
                Axios.post(this.$apiVideo + '/' + id[1]).then(response => {
                    this.$router.push({ name: 'video' })
                    if ( response.data.error !== undefined) {
                    alert(response.data.error)
                }})

            }
        }
    }
</script>

<style scoped>

</style>
