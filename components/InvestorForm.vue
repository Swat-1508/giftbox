<template>
  <div>
    <form @submit.prevent="checkSubmission()">
      <div class="mb-4">
        <input
          type="text"
          class="form-control"
          id="Name"
          autocomplete="off"
          aria-describedby="nameHelp"
          v-model="cform.name"
          placeholder="Your name*"
        />
        <div class="invalid-feedback d-block" v-if="cform_error.name">
          {{ cform_error.name }}
        </div>
      </div>
      <div class="col-sm-12 mb-4">
        <input
          type="text"
          name="email"
          id="email"
          minlength="6"
          placeholder="Email*"
          autocomplete="off"
          class="form-control"
          v-model="cform.email"
        />
        <div class="invalid-feedback d-block" v-if="cform_error.email">
          {{ cform_error.email }}
        </div>
      </div>
      <div class="col-sm-12 mb-4">
        <input
          type="text"
          name="phone"
          id="phone"
          minlength="6"
          placeholder="Phone"
          autocomplete="off"
          class="form-control"
          v-model="cform.phone"
          fdprocessedid="llzh0i"
        />
        <div class="invalid-feedback d-block" v-if="cform_error.phone">
          {{ cform_error.phone }}
        </div>
      </div>
      <div class="col-sm-12 mb-3">
        <textarea
          cols="0"
          rows="3"
          name="about"
          id="about"
          class="form-control"
          placeholder="About you*"
          v-model="cform.about"
        ></textarea>
        <div class="invalid-feedback d-block" v-if="cform_error.about">
          {{ cform_error.about }}
        </div>
      </div>
      <button type="submit" class="theme-btn mt-2" :disabled="processing">
        {{ processing ? "Sending ..." : "Send request" }}
      </button>
    </form>
  </div>
</template>
<script setup lang="ts">
import { useToast } from "vue-toastification";

import {
  nameValidator,
  emailValidator,
  phoneValidator,
  textareaValidator,
} from "~/validator";
const cform = ref({
  name: "",
  phone: "",
  email: "",
  about: "",
});
const processing = ref(false);
const cform_error = reactive({
  name: "",
  phone: "",
  email: "",
  about: "",
});
const checkSubmission = async () => {
  processing.value = true;
  if (validateForm() === false) {
    processing.value = false;
    return false;
  } else {
    let data = cform.value;
    const response = await useFetch(
      "https://zyrrvgs147.execute-api.ap-south-1.amazonaws.com/prod/giftbox-contact",
      {
        headers: { "Content-Type": "application/json" },
        method: "post",
        body: { ...data, source: "Giftbox website" },
      }
    );
    resetForm();
    useToast().info(
      "Your query has been submitted successfully. One of our executives will contact you at the easiest."
    );
  }
};

const resetForm = () => {
  setTimeout(() => {
    cform.value = {
      name: "",
      phone: "",
      email: "",
      about: "",
    };
    processing.value = false;
  }, 1000);
};

const validateForm = () => {
  cform_error.name =
    (nameValidator(cform.value.name)?.error
      ? nameValidator(cform.value.name)?.msg
      : "") ?? "";
  cform_error.email =
    (emailValidator(cform.value.email)?.error
      ? emailValidator(cform.value.email)?.msg
      : "") ?? "";
  cform_error.phone =
    (phoneValidator(cform.value.phone)?.error
      ? phoneValidator(cform.value.phone)?.msg
      : "") ?? "";
  cform_error.about =
    (textareaValidator(cform.value.about, 5)?.error
      ? textareaValidator(cform.value.about, 5)?.msg
      : "") ?? "";

  let errs = Object.values(cform_error).filter((n) => n);
  if (errs.length > 0) {
    return false;
  } else {
    return true;
  }
};
</script>
