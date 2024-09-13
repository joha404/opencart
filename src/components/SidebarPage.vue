<template>
  <div class="mainSection">
    <header>
      <!-- Sidebar -->
      <nav id="sidebarMenu" class="collapse d-lg-block sidebar collapse">
        <div class="position-sticky">
          <div class="list-group list-group-flush mx-3">
            <a
              href="#"
              class="list-group-item list-group-item-action py-2 ripple"
              aria-current="true"
            >
              <i class="fas fa-tachometer-alt fa-fw me-3"></i
              ><span><router-link to="/">Dashboard</router-link></span>
            </a>
            <a
              href="#"
              class="list-group-item list-group-item-action py-2 ripple"
            >
              <i class="fas fa-chart-area fa-fw me-3"></i
              ><span><router-link to="/category">Category</router-link></span>
            </a>
            <a
              href="#"
              class="list-group-item list-group-item-action py-2 ripple"
            >
              <i class="fas fa-chart-area fa-fw me-3"></i
              ><span><router-link to="/product">Product</router-link></span>
            </a>
            <a
              href="#"
              class="list-group-item list-group-item-action py-2 ripple"
              ><i class="fas fa-chart-line fa-fw me-3"></i
              ><span>Analytics</span></a
            >
            <a
              href="#"
              class="list-group-item list-group-item-action py-2 ripple"
            >
              <i class="fas fa-chart-pie fa-fw me-3"></i><span>SEO</span>
            </a>
            <a
              href="#"
              class="list-group-item list-group-item-action py-2 ripple"
              ><i class="fas fa-chart-bar fa-fw me-3"></i><span>Orders</span></a
            >
            <a
              href="#"
              class="list-group-item list-group-item-action py-2 ripple"
              ><i class="fas fa-globe fa-fw me-3"></i
              ><span>International</span></a
            >
            <a
              href="#"
              class="list-group-item list-group-item-action py-2 ripple"
              ><i class="fas fa-building fa-fw me-3"></i
              ><span>Partners</span></a
            >
            <a
              href="#"
              class="list-group-item list-group-item-action py-2 ripple"
              ><i class="fas fa-calendar fa-fw me-3"></i
              ><span>Calendar</span></a
            >
            <a
              href="#"
              class="list-group-item list-group-item-action py-2 ripple"
              ><i class="fas fa-users fa-fw me-3"></i><span>Users</span></a
            >
            <a
              href="#"
              class="list-group-item list-group-item-action py-2 ripple"
              ><i class="fas fa-money-bill fa-fw me-3"></i><span>Sales</span></a
            >
          </div>
        </div>
      </nav>
      <!-- Sidebar -->
    </header>
    <div class="main">
      <router-view></router-view>
    </div>

    <!--Main layout-->

    <!--Main layout-->
  </div>
</template>

<script>
export default {};
</script>

<style>
@media (min-width: 991.98px) {
  main {
    padding-left: 240px;
  }
}

/* Sidebar */
.sidebar {
  padding: 58px 0 0; /* Height of navbar */
  box-shadow: 0 2px 5px 0 rgb(0 0 0 / 5%), 0 2px 10px 0 rgb(0 0 0 / 5%);
  width: 240px;
  z-index: 600;
}

@media (max-width: 991.98px) {
  .sidebar {
    width: 100%;
  }
}

.sidebar-sticky {
  position: relative;
  top: 0;
  height: calc(100vh - 48px);
  padding-top: 0.5rem;
  overflow-x: hidden;
  overflow-y: auto; /* Scrollable contents if viewport is shorter than content. */
}
#sidebarMenu {
  height: 100vh !important;
  background-color: #242d37;
}
.list-group-item-action {
  background-color: #242d37;
  color: white;
  border-bottom: none !important;
}
.list-group-item-action:hover {
  background-color: #171b21;
  color: white;
}
.list-group-item-action:active {
  background-color: #000000 !important;
  color: white;
}
.mainSection {
  display: flex;
}
.main {
  padding: 20px;
  background-color: #f6f6f6 !important;
  width: 100%;
}
</style>
