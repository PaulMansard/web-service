<template>
    <div>
        <h3>Inscription</h3>
        <b-form @submit="valider">
            <b-form-group label-cols-sm="2" id="input-group-1" label="Login :" label-for="input-1">
                <b-form-input id="input-1" v-model="form.login" type="text" required placeholder="Entrer votre un Login"></b-form-input>
            </b-form-group>
            <b-form-group label-cols-sm="2" id="input-group-2" label="Email :" label-for="input-2">
                <b-form-input id="input-2" v-model="form.email" type="email" required placeholder="Entrer votre Email"></b-form-input>
            </b-form-group>
            <b-form-group label-cols-sm="2" id="input-group-3" label="Password :" label-for="input-3">
                <b-form-input id="input-3" v-model="form.password" type="password" required placeholder="Entrer votre Password"></b-form-input>
            </b-form-group>
            <b-button type="submit" variant="primary">Valider</b-button>
        </b-form>
    </div>
</template>

<script>
    import Axios from 'axios'
    export default {
        name: "InscriptionForm",
        data() {
            return {
                form: {
                    login: '',
                    email: '',
                    password: ''
                }
            }
        },
        methods: {
            valider: function(){
                Axios.post(this.$apiConnexion +'/user', {
                    login: this.form.login,
                    pwd: this.form.password,
                    mail: this.form.email
                }).then(response => { if ( response.data.error === undefined) {
                    this.$router.push({ name: 'connexion' });
                } else {
                    alert(response.data.error)
                }})
            }
        }
    }
</script>

<style scoped>

</style>
