import VueGtag from "vue-gtag";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueGtag, {
    appName: "Giftbox Website",
    pageTrackerScreenviewEnabled: true,
    config: {
      id: "G-K0B4N7P390",
      params: {
        anonymize_ip: false,
        send_page_view: true,
      },
    },
  });
});
