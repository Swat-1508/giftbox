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
            class="navbar-toggler collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="32"
              viewBox="0 -960 960 960"
              width="32"
              fill="#ffffff"
            >
              <path
                d="M120-240v-60h720v60H120Zm0-210v-60h720v60H120Zm0-210v-60h720v60H120Z"
              />
            </svg>
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
