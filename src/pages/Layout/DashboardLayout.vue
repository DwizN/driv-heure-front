<template>
  <div class="wrapper" :class="{ 'nav-open': $sidebar.showSidebar }">
    <notifications></notifications>

    <side-bar>
      <mobile-menu slot="content"></mobile-menu>
      <sidebar-link to="/dashboard">
        <md-icon>dashboard</md-icon>
        <p>Dashboard Secrétaire</p>
      </sidebar-link>
      <sidebar-link to="/dashboardM">
        <md-icon>dashboard</md-icon>
        <p>Dashboard Moniteur</p>
      </sidebar-link>
      <sidebar-link to="/dashboardc">
        <md-icon>dashboard</md-icon>
        <p>Dashboard Elève</p>
      </sidebar-link>
      <sidebar-link to="/user">
        <md-icon>person</md-icon>
        <p>Mon profil</p>
      </sidebar-link>
      <!--<sidebar-link to="/table">
        <md-icon>content_paste</md-icon>
        <p>Table list</p>
      </sidebar-link>
      <sidebar-link to="/typography">
        <md-icon>library_books</md-icon>
        <p>Typography</p>
      </sidebar-link>
      <sidebar-link to="/icons">
        <md-icon>bubble_chart</md-icon>
        <p>Icons</p>
      </sidebar-link>
      <sidebar-link to="/maps">
        <md-icon>location_on</md-icon>
        <p>Maps</p>
      </sidebar-link>-->
      <sidebar-link to="/notifications">
        <md-icon>notifications</md-icon>
        <p>Notifications</p>
      </sidebar-link><!--
      <sidebar-link to="/upgrade" class="active-pro">
        <md-icon>unarchive</md-icon>
        <p>Upgrade to PRO</p>
      </sidebar-link>-->
      <!--
      <md-button @click="isEleve">Eleve</md-button>
      <md-button @click="isMoniteur">Moniteur</md-button>
      <md-button @click="isSecretaire">Secretaire</md-button>
      -->
    </side-bar>

    <div class="main-panel">
      <top-navbar></top-navbar>

      <dashboard-content> </dashboard-content>

      <content-footer v-if="!$route.meta.hideFooter"></content-footer>
    </div>
  </div>
</template>
<style lang="scss"></style>
<script>
  import TopNavbar from "./TopNavbar.vue";
  import ContentFooter from "./ContentFooter.vue";
  import DashboardContent from "./Content.vue";
  import MobileMenu from "@/pages/Layout/MobileMenu.vue";

  export default {
    components: {
      TopNavbar,
      DashboardContent,
      ContentFooter,
      MobileMenu
    },
    data: function() {
      return {
        status: '',
      }
    },
    created(){
      if (!localStorage.status)
        localStorage.status = status = "eleve";
    },
    methods: {
      isEleve: function() {
        localStorage.status = status = "eleve";
      },
      isMoniteur: function() {
        localStorage.status = status = "moniteur";
      },
      isSecretaire: function() {
        localStorage.status = status = "secretaire";
      }
    }
  };
</script>
