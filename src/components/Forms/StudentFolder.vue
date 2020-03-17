<template>
    <form v-if="success">
        <md-card>
            <md-card-header :data-background-color="dataBackgroundColor">
                <h4 class="title">Fiche Elève</h4>
            </md-card-header>
            <md-card-content>
                <div class="md-layout">
                    <div class="md-layout-item md-xsmall-size-100 md-small-size-50 md-size-50">
                        <md-field>
                            <label class="time-label">Nom :</label>
                            <md-input v-model="nom" type="text"></md-input>
                        </md-field>
                    </div>
                    <div class="md-layout-item md-small-size-100 md-size-100">
                        <md-datepicker v-model="date" :md-open-on-focus="false" />
                    </div>
                    <div class="md-layout-item md-xsmall-size-100 md-small-size-50 md-size-50">
                        <md-field>
                            <label>Prénom :</label>
                            <md-input v-model="prenom" type="text"></md-input>
                        </md-field>
                    </div>
                    <div class="md-layout-item md-xsmall-size-100 md-small-size-50 md-size-50">
                        <md-field>
                            <label class="time-label">Nombre d'heures :</label>
                            <md-input v-model="heures" type="text"></md-input>
                        </md-field>
                    </div>
                    <div class="md-layout-item md-small-size-100 md-size-100">
                        <md-field>
                            <label class="time-label">Etat code de la route</label>
                            <md-input v-model="isCode" type="text"></md-input>
                        </md-field>
                    </div>
                    <div class="md-layout-item md-small-size-100 md-size-100">
                            <label>Points clés :</label><br>
                            <md-checkbox v-model="points"></md-checkbox>
                    </div>
                    <div class="md-layout-item md-size-100 text-center">
                        <md-button class="md-raised md-default" @click="close">OK</md-button>
                        <md-button class="md-raised md-default">Annuler séance</md-button>
                    </div>
                </div>
            </md-card-content>
        </md-card>
    </form>
</template>

<script>
    export default {
        name: "StudentFolder",
        data: () => {
            return{
                success: true
            }
        },
        methods: {
            close: function () {
                this.$emit('form-closed')
            }

        }

    }
</script>

<style scoped>
    .time-label  {
        transition: border .3s cubic-bezier(.4,0,.2,1),opacity .3s cubic-bezier(.4,0,.2,1),transform 0s cubic-bezier(.4,0,.2,1) .3s !important;
    }
</style>