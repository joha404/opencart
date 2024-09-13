<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light">
      <div class="container-fluid">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo03"
          aria-controls="navbarTogglerDemo03"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <a class="navbar-brand" href="#">
          <img
            src="https://demo.opencart.com/admin/view/image/logo.png"
            alt=""
          />
        </a>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul class="navbar-nav ms-auto mb-lg-0">
            <li class="nav-item mx-2 p-1">
              <a class="nav-link mt-2" aria-current="page" href="#"
                ><i class="fa-regular fa-bell"></i
              ></a>
            </li>
            <li class="nav-item mx-2 p-1">
              <a class="nav-link" href="#"
                ><img
                  src="https://demo.opencart.com/catalog/language/en-gb/en-gb.png"
                  alt=""
                  class="mt-3 flagImage"
              /></a>
            </li>
            <li class="nav-item mx-2 p-1">
              <a class="nav-link" href="#"
                ><img
                  src="https://demo.opencart.com/image/cache/profile-45x45.png"
                  alt=""
                  class="rounded-circle"
                />
                <span class="m-2" id="demodemo">Demo Demo</span></a
              >
            </li>
            <li class="nav-item mx-2 p-1">
              <a class="nav-link mt-2" href="#"
                ><i class="fa-solid fa-right-from-bracket mt-2"></i
                ><span class="m-2" id="demodemo">Log Out</span></a
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {};
</script>

<style>
nav {
  border-bottom: 1px solid #d8d8d8;
  box-shadow: 0 0 3px #ccc;
}
#demodemo {
  font-size: 12px;
  color: #898989;
}
.fa-bell {
  font-size: 22px;
  margin-top: 5px;
}
.flagImage {
  width: 20px;
}
li:hover {
  background-color: rgb(244, 245, 250);
  cursor: pointer;
}
li a:hover {
  color: #000 !important;
}
</style>
