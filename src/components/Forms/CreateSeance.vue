<template>

    <form>
        <md-card>
            <md-card-header :data-background-color="dataBackgroundColor">
                <h4 class="title">Réserver une séance</h4>
                <p class="category">Choisissez vos préférences</p>
            </md-card-header>

            <md-card-content>
                <div class="md-layout">
                    <div class="md-layout-item md-small-size-100 md-size-100">
                        <md-field>
                            <label>Date</label>
                            <md-input v-model="date" type="date"></md-input>
                        </md-field>
                    </div>
                    <div class="md-layout-item md-small-size-100 md-size-50">
                        <md-field>
                            <label>Heure début</label>
                            <md-input v-model="startTime" type="time"></md-input>
                        </md-field>
                    </div>
                    <div class="md-layout-item md-small-size-100 md-size-50">
                        <md-field>
                            <label>Heure fin</label>
                            <md-input v-model="endTime" type="time"></md-input>
                        </md-field>
                    </div>
                    <div class="md-layout-item md-small-size-100 md-size-50">
                        <md-field>
                            <label>First Name</label>
                            <md-input v-model="firstname" type="text"></md-input>
                        </md-field>
                    </div>
                    <div class="md-layout-item md-small-size-100 md-size-50">
                        <md-field>
                            <label>Last Name</label>
                            <md-input v-model="lastname" type="text"></md-input>
                        </md-field>
                    </div>
                    <div class="md-layout-item md-small-size-100 md-size-100">
                        <md-field>
                            <md-radio v-model="type" value="conduite">conduite</md-radio>
                            <md-radio v-model="type" value="code">code</md-radio>
                        </md-field>
                    </div>
                    <div v-if="type=='conduite'" class="md-layout-item md-small-size-100 md-size-100">
                        <md-field>
                            <md-select v-model="moniteur" name="moniteur" placeholder="Moniteur">
                                <md-option value="antoine">Antoine</md-option>
                                <md-option value="gwen">Gwen</md-option>
                                <md-option value="simon">Simon</md-option>
                            </md-select>
                        </md-field>
                    </div>
                    <div class="md-layout-item md-size-100 text-center">
                        <md-button class="md-raised md-default">Créer</md-button>
                    </div>
                </div>
            </md-card-content>
        </md-card>
    </form>
</template>

<script>
  export default {
    name: "CreateSeance",
    data() {
      return {
        type: ''
      }
    }
  };
</script>

<style scoped>

</style>