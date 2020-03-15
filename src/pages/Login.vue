<template>
    <div class="login">
        <div class="container" :class="{'sign-up-active': signUp}">
            <div class="overlay-container">
                <div class="overlay">
                    <div class="overlay-left">
                        <h2>Déjà membre ?</h2>
                        <p>Connecte-toi avec tes informations personnelles !</p>
                        <md-button class="invert" id="signIn" @click="signUp = !signUp">Se connecter</md-button>
                    </div>
                    <div class="overlay-right">
                        <h2>Nouveau membre ?</h2>
                        <p>Inscris-toi ici !</p>
                        <md-button class="invert" id="signUp" @click="signUp = !signUp">S'inscrire</md-button>
                    </div>
                </div>
            </div>
            <form class="sign-in" action="#">
                <h2>Se connecter</h2>
                <md-field>
                    <label>Email</label>
                    <md-input v-model="email" type="email"></md-input>
                </md-field>
                <md-field>
                    <label>Password</label>
                    <md-input v-model="password" type="password"></md-input>
                </md-field>
                <a href="#">Mot de passe oublié ?</a>
                <md-button>Se connecter</md-button>
            </form>
            <form class="sign-up" action="#">
                <h2>Créer un compte</h2>
                <div class="md-layout">
                    <div class="md-layout-item md-small-size-100 md-size-100">
                        <md-field>
                            <label>Nom</label>
                            <md-input v-model="compagnie" type="text"></md-input>
                        </md-field>
                    </div>
                    <div class="md-layout-item md-small-size-100 md-size-100">
                        <md-field>
                            <label>Adresse Mail</label>
                            <md-input v-model="mail" type="email"></md-input>
                        </md-field>
                    </div>
                    <div class="md-layout-item md-small-size-100 md-size-50">
                        <md-field>
                            <label>Mot de passe</label>
                            <md-input v-model="password" type="password"></md-input>
                        </md-field>
                    </div>
                    <div class="md-layout-item md-small-size-100 md-size-50">
                        <md-field>
                            <label>Code</label>
                            <md-input v-model="code" type="text"></md-input>
                        </md-field>
                    </div>
                </div>
                <md-button>S'inscrire</md-button>
            </form>
        </div>
    </div>
</template>

<script>
    export default {
        data: () => {
            return{
                signUp: false
            }
        }
    }
</script>

<style scoped>

</style>