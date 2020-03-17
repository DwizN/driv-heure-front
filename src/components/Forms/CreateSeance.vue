<template>

    <form>
        <md-card>
            <md-card-header :data-background-color="dataBackgroundColor">
                <h4 class="title">Réserver une séance</h4>
                <p class="category">Choisissez vos préférences</p>
            </md-card-header>

            <md-card-content>
                <div class="md-layout">
                    <div class="md-layout-item md-small-size-100 md-size-50">
                        <md-field>
                            <label>Prénom</label>
                            <md-input v-model="newSeance.firstname" disabled type="text"></md-input>
                        </md-field>
                    </div>
                    <div class="md-layout-item md-small-size-100 md-size-50">
                        <md-field>
                            <label>Nom</label>
                            <md-input v-model="newSeance.lastname" disabled type="text"></md-input>
                        </md-field>
                    </div>
                    <div class="md-layout-item md-small-size-100 md-size-100">
                        <md-field>
                            <label>Type</label>
                            <md-select v-model="newSeance.type" name="type" placeholder="Type">
                                <md-option value="Conduite">Conduite</md-option>
                                <md-option value="Examen du Code">Examen du Code</md-option>
                            </md-select>
                        </md-field>
                    </div>
                    <div v-if="newSeance.type=='Conduite'" class="md-layout-item md-small-size-100 md-size-100">
                        <md-field>
                            <label>Moniteur</label>
                            <md-select v-model="newSeance.moniteur" name="moniteur" placeholder="Moniteur">
                                <md-option value="Moniteur - Antoine">Antoine</md-option>
                                <md-option value="Monitrice - Gwen">Gwen</md-option>
                                <md-option value="Moniteur - Simon">Simon</md-option>
                            </md-select>
                        </md-field>
                    </div>
                    <div class="md-layout-item md-small-size-100 md-size-100">
                        <md-datepicker v-model="newSeance.day">
                            <label>Date</label>
                        </md-datepicker>
                    </div>
                    <div v-if="newSeance.day" class="md-layout-item md-xsmall-size-100 md-small-size-50 md-size-50">
                        <md-field>
                            <label>Heure début</label>
                            <md-select v-model="newSeance.startTime" name="startTime">
                                <md-option value="15:00">15h</md-option>
                                <md-option value="16:00">16h</md-option>
                            </md-select>
                        </md-field>
                    </div>
                    <div v-if="newSeance.day" class="md-layout-item md-xsmall-size-100 md-small-size-50 md-size-50">
                        <md-field>
                            <label>Heure fin</label>
                            <md-select v-model="newSeance.endTime" name="endTime">
                                <md-option value="16:00">16h</md-option>
                                <md-option value="17:00">17h</md-option>
                                <md-option value="18:00">18h</md-option>
                            </md-select>
                        </md-field>
                    </div>
                    <div class="md-layout-item md-size-100 text-center">
                        <md-button v-on:click="createSeance" class="md-raised md-default">Créer</md-button>
                    </div>
                </div>
            </md-card-content>
        </md-card>
    </form>
</template>

<script>
  export default {
    name: "CreateSeance",
    props: {
      dataBackgroundColor: {
        type: String,
        default: ""
      }
    },
    data: () => {
      return {
        newSeance: {
          firstname: "Axel",
          lastname: "Lecoeuche",
          type: "",
          moniteur: "",
          day: "",
          startTime: "",
          endTime: ""
        },
        // bouchon pour simuler la connexion à la BDD
        days: {
          "2020-02-18": {
            startTimes: ["15:00", "16:00"],
            endTimes: ["16:00", "17:00", "18:00"]
          },
          "2020-02-19": {
            startTimes: ["13:00"],
            endTimes: ["14:00"]
          }
        }
      };

    },
    methods: {
      createSeance: function() {
        this.$emit('new-seance', this.newSeance);
      }
    }
  };
</script>

<style scoped>
    .time-label {
        transition: border .3s cubic-bezier(.4, 0, .2, 1), opacity .3s cubic-bezier(.4, 0, .2, 1), transform 0s cubic-bezier(.4, 0, .2, 1) .3s !important;
    }


</style>