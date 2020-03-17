<template>
  <div class="wrapper" :class="{ 'nav-open': $sidebar.showSidebar }">
    <notifications></notifications>

    <side-bar>
      <mobile-menu slot="content"></mobile-menu>
      <sidebar-link v-if="getStatus('SECRETAIRE')" to="/dashboard">
        <md-icon>dashboard</md-icon>
        <p>Dashboard Secrétaire</p>
      </sidebar-link>
      <sidebar-link v-if="getStatus('MONITEUR')" to="/dashboardM">
        <md-icon>dashboard</md-icon>
        <p>Dashboard Moniteur</p>
      </sidebar-link>
      <sidebar-link v-if="getStatus('ELEVE')" to="/dashboardc">
        <md-icon>dashboard</md-icon>
        <p>Dashboard Elève</p>
      </sidebar-link>
      <sidebar-link to="/user">
        <md-icon>person</md-icon>
        <p>Mon profil</p>
      </sidebar-link>
      <sidebar-link v-if="getStatus('SECRETAIRE')" to="/notifications">
        <md-icon>notifications</md-icon>
        <p>Notifications</p>
      </sidebar-link>
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
        status = "ELEVE";
    },
    methods: {
      getStatus: function(statut){
        let test = localStorage.getItem("infosUser");
        console.log(JSON.parse(test))
        return localStorage.getItem("statut") === statut
      }
    }
  };
</script>
