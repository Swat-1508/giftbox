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

  <div
    class="modal fade"
    id="contactModal"
    tabindex="-1"
    aria-labelledby="contactModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered modal-xl">
      <div class="modal-content">
        <div class="modal-body p-0">
          <div class="start-invest m-0">
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="32px"
                viewBox="0 0 24 24"
                width="32px"
                fill="#FFFFFF"
              >
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path
                  d="M18.3 5.71c-.39-.39-1.02-.39-1.41 0L12 10.59 7.11 5.7c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41L10.59 12 5.7 16.89c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 13.41l4.89 4.89c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z"
                />
              </svg>
            </button>
            <div class="inner-glow">
              <div class="row">
                <div class="col-lg-6">
                  <h3 class="text-start">We’d love to hear from you!</h3>
                  <p>
                    Contact our customer support team for all inquiries,
                    including product feedback, partnerships etc.
                  </p>
                  <p>
                    Email:
                    <a
                      href="mailto:connect@giftbox.network"
                      target="_blank"
                      class="text-white"
                    >
                      connect@giftbox.network
                    </a>
                  </p>
                </div>

                <div class="col-lg-6">
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import ContactForm from "~/components/ContactForm.vue";
import InvestorForm from "~/components/InvestorForm.vue";
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
