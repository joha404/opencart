<template>
  <div>
    <navbar-page></navbar-page>
    <sidebar-page></sidebar-page>
  </div>
</template>

<script>
import NavbarPage from "./components/NavbarPage.vue";
import SidebarPage from "./components/SidebarPage.vue";
export default {
  components: { NavbarPage, SidebarPage },
};
</script>

<style scoped></style>
