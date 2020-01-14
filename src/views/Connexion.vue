<template>
        <div>
            <h3>Connexion</h3>
            <b-form @submit.prevent="onSubmit">
                <b-form-group label-cols-sm="2" id="input-group-1" label="Login :" label-for="input-1">
                    <b-form-input id="input-1" v-model="form.login" type="text" required placeholder="Entrer votre un Login"></b-form-input>
                </b-form-group>
                <b-form-group label-cols-sm="2" id="input-group-2" label="Password :" label-for="input-2">
                    <b-form-input id="input-2" v-model="form.pwd" type="password" required placeholder="Entrer votre Password"></b-form-input>
                </b-form-group>
                <div>
                    <b-button type="submit" variant="primary">Connexion</b-button>
                    <b-button to="/inscription" variant="primary">Inscription</b-button>
                </div>
            </b-form>
        </div>
</template>

<script>
    import Axios from 'axios'
    export default {
        name: "Login",
        data() {
            return {
                form: {
                    login: '',
                    pwd: ''
                },
                reponse: ''
            }
        },
        methods: {
            onSubmit(evt) {
                evt.preventDefault()
                Axios.post(this.$apiConnexion + '/login', {
                    login: this.form.login,
                    pwd: this.form.pwd
                }).then(response => { if ( response.data.error === undefined) {
                    this.$emit('createLogin', { id: response.data[0].id, login: this.form.login })
                    localStorage.id = JSON.stringify(response.data[0].id)
                    localStorage.login = JSON.stringify(this.form.login)
                    this.$router.push({ name: 'accueil' })
                } else {
                    alert(response.data.error)
                }})

            }
        }
    }
</script>

<style scoped>

</style>
