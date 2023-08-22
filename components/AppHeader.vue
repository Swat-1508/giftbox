<template>
  <div>
    <!-- <nav>
      <ul>
        <li><NuxtLink to="/">Home</NuxtLink></li>
        <li><NuxtLink to="/about">About</NuxtLink></li>
      </ul>
    </nav> -->

    <header class="header">
      <nav
        id="mainnav"
        class="navbar navbar-expand-lg"
        :class="[active, headerclass]"
      >
        <div class="container">
          <NuxtLink class="navbar-brand" to="/">
            <img src="/assets/images/logo-gift.svg" alt="giftbox" />
          </NuxtLink>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <ul class="navbar-nav">
              <li class="nav-item">
                <NuxtLink class="nav-link" href="/blog">Blog</NuxtLink>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  data-bs-toggle="modal"
                  data-bs-target="#contactModal"
                  href="javascript:void(0)"
                  >Contact us</a
                >
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
    <!-- header ends here -->
  </div>
</template>
<script lang="ts" setup>
let active = ref("");
const props = defineProps({
  headerclass: {
    type: String,
    default: "",
    required: false,
  },
});
onMounted(() => {
  /* window.addEventListener("scroll", () => {
    if (window.scrollY >= 5) {
      active.value = "change-clr";
    } else {
      let navId = document.getElementById("navbarNav");
      if (navId?.classList.contains("show")) {
        active.value = "change-clr";
      } else {
        active.value = "";
      }
    }
  }); */
});
/* const addClass = () => {
  setTimeout(() => {
    let navId = document.getElementById("navbarNav");
    if (navId?.classList.contains("show")) {
      active.value = "change-clr";
    } else {
      active.value = "";
    }
  }, 370);
}; */
</script>
