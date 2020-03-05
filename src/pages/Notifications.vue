<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item">
        <md-card>
          <md-card-header data-background-color="teal">
            <h4 class="title">Notifications</h4>
          </md-card-header>
          <md-card-content>
            <div class="md-layout">
                <div class="md-layout-item md-medium-size-100">
                    <h5>Réservations</h5>
                    <div class="alert alert-info">
                        <button type="button" aria-hidden="true" class="close">
                            ×
                        </button>
                        <span>Emilie D. a réservé une leçon de conduite de 16h à 18h30 le 18/02/2020 avec Gwen</span>
                    </div>
                    <div class="alert alert-info">
                        <button type="button" aria-hidden="true" class="close">
                            ×
                        </button>
                        <span>Mouad B. a réservé une leçon de conduite de 11h à 13h00 le 18/02/2020 avec Antoine</span>
                    </div>
                    <div class="alert alert-info">
                        <button type="button" aria-hidden="true" class="close">
                            ×
                        </button>
                        <span>Axel L. a réservé une leçon de conduite de 9h à 11h00 le 18/02/2020 avec Antoine</span>
                    </div>
                </div>
              <div class="md-layout-item md-medium-size-100">
                <h5>Important</h5>
                <div class="alert alert-warning">
                  <button type="button" aria-hidden="true" class="close">
                    ×
                  </button>
                  <span>Axel L. ne s'est pas présenté à sa séance de conduite du 18/02/2020 prévue de 9h à 11h</span>
                </div>
                <div class="alert alert-danger">
                  <button type="button" aria-hidden="true" class="close">
                    ×
                  </button>
                  <span>Un accident a eu lieu lors de la séance de conduite du 17/02/2020 de 15h30 à 17h de Mathis R. accompagné par Antoine</span>
                </div>
              </div>
            </div>
          </md-card-content>
        </md-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      type: ["", "info", "success", "warning", "danger"],
      notifications: {
        topCenter: false
      }
    };
  },
  methods: {
    notifyVue(verticalAlign, horizontalAlign) {
      var color = Math.floor(Math.random() * 4 + 1);
      this.$notify({
        message:
          "This is a notification",
        icon: "add_alert",
        horizontalAlign: horizontalAlign,
        verticalAlign: verticalAlign,
        type: this.type[color]
      });
    }
  }
};
</script>
