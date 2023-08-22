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
          name="phone_email"
          id="phone_email"
          minlength="6"
          placeholder="Mobile/Email*"
          autocomplete="off"
          class="form-control"
          v-model="cform.phone_email"
          fdprocessedid="llzh0i"
        />
        <div class="invalid-feedback d-block" v-if="cform_error.phone_email">
          {{ cform_error.phone_email }}
        </div>
      </div>
      <div class="col-sm-12 mb-3">
        <textarea
          cols="0"
          rows="2"
          name="message"
          id="message"
          class="form-control"
          placeholder="Message*"
          v-model="cform.message"
        ></textarea>
        <div class="invalid-feedback d-block" v-if="cform_error.message">
          {{ cform_error.message }}
        </div>
      </div>
      <button type="submit" class="theme-btn mt-2" :disabled="processing">
        {{ processing ? "Sending ..." : "Send" }}
      </button>
    </form>
  </div>
</template>
<script setup lang="ts">
import { useToast } from "vue-toastification";

import { nameValidator, emptyValidator, textareaValidator } from "~/validator";
const cform = ref({
  name: "",
  phone_email: "",
  message: "",
});
const processing = ref(false);
const cform_error = reactive({
  name: "",
  phone_email: "",
  message: "",
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
      phone_email: "",
      message: "",
    };
    processing.value = false;
  }, 1000);
};

const validateForm = () => {
  cform_error.name =
    (nameValidator(cform.value.name)?.error
      ? nameValidator(cform.value.name)?.msg
      : "") ?? "";
  cform_error.phone_email =
    (emptyValidator(cform.value.phone_email)?.error
      ? emptyValidator(cform.value.phone_email)?.msg
      : "") ?? "";
  cform_error.message =
    (textareaValidator(cform.value.message, 5)?.error
      ? textareaValidator(cform.value.message, 5)?.msg
      : "") ?? "";

  let errs = Object.values(cform_error).filter((n) => n);
  if (errs.length > 0) {
    return false;
  } else {
    return true;
  }
};
</script>
