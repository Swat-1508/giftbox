<script setup lang="ts">
const route = useRoute();
useSeoMeta({
  title: "Blog",
  description: "[description]",
  ogTitle: "[og:title]",
  ogDescription: "[og:description]",
  ogImage: "[og:image]",
  ogUrl: "[og:url]",
  twitterTitle: "[twitter:title]",
  twitterDescription: "[twitter:description]",
  twitterImage: "[twitter:image]",
  twitterCard: "summary",
});

useHead({
  htmlAttrs: {
    lang: "en",
  },
  link: [
    {
      rel: "icon",
      type: "image/ico",
      href: "favicon.ico",
    },
  ],
});
</script>

<template>
  <div class="blog-sec main-page-blog">
    <div class="container">
      <div class="row sec-blog">
        <div class="col-sm-3">
          <figure>
            <img
              src="assets/images/corporate-gifting-giftbox-min.png"
              class="img-fluid"
              alt="Corporate Gifting"
            />
          </figure>
        </div>

        <div class="col-sm-9">
          <span class="datetime">14/06/2023</span>
          <section>
            <h3 class="no-spc">
              Corporate Gifting: A Perfect Way to Appreciate Employees and Make
              Workplace Thriving
            </h3>
            <p>
              <strong>Gist of the Blog -</strong> Corporate gifting is more than
              just a token gesture; it is a powerful tool that contributes to
              acknowledging employee contributions...
              <a href="/blog/corporate-gifting">Read more</a>
            </p>
          </section>
        </div>
      </div>

      <div class="row sec-blog">
        <div class="col-sm-3">
          <figure>
            <img
              src="assets/images/live-celebration-min.png"
              class="img-fluid"
              alt="Live celebration"
            />
          </figure>
        </div>

        <div class="col-sm-9">
          <span class="datetime">05/06/2023</span>
          <section>
            <h3 class="no-spc">
              Live Celebration: Celebrate events live and exchange gifts &
              wishes instantly
            </h3>
            <p>
              <strong>Gist of the Blog -</strong> We are excited to announce
              that we have released the groundbreaking feature of Sagoon- “Live
              Celebration” with instant gift-giving...
              <a href="/blog/live-celebration">Read more</a>
            </p>
          </section>
        </div>
      </div>

      <div class="row sec-blog">
        <div class="col-sm-3">
          <figure>
            <img
              src="assets/images/trending-gift-box.jpg"
              class="img-fluid"
              alt="gifting"
            />
          </figure>
        </div>

        <div class="col-sm-9">
          <span class="datetime">30/05/2023</span>
          <section>
            <h3 class="no-spc">Trending Gifts in 2023</h3>
            <p>
              <strong>Gist of the Blog -</strong> The era of conventional
              gift-giving is slowly fading away, making room for extraordinary
              alternatives. While traditional gifts like...
              <a href="/blog/trending-gifts-in-2023">Read more</a>
            </p>
          </section>
        </div>
      </div>

      <div class="row sec-blog">
        <div class="col-sm-3">
          <figure>
            <img
              src="assets/images/tips-to-choose-min.png"
              class="img-fluid"
              alt="gifting"
            />
          </figure>
        </div>

        <div class="col-sm-9">
          <span class="datetime">25/05/2023</span>
          <section>
            <h3 class="no-spc">
              Tips to Choose the Perfect Gifts for Loved Ones
            </h3>
            <p>
              <strong>Gist of the Blog</strong> - This blog provides 6 practical
              tips to choose the perfect gifts for loved ones. It acknowledges
              the shift towards online gifting due...
              <a href="/blog/gifts-for-loved-ones">Read more</a>
            </p>
          </section>
        </div>
      </div>

      <div class="row sec-blog">
        <div class="col-sm-3">
          <figure>
            <img
              src="assets/images/gifting-fig.jpg"
              class="img-fluid"
              alt="gifting"
            />
          </figure>
        </div>

        <div class="col-sm-9">
          <span class="datetime">19/05/2023</span>
          <section>
            <h3 class="no-spc">
              Sagoon: Where Connections Matter and Gifting is a Celebration of
              Genuine Bonds
            </h3>
            <p>
              <strong>Gist of the Blog</strong> - Explore how Sagoon embraces
              the digital age to provide a unique and meaningful gifting
              experience for loved ones. Find out...
              <a href="/blog/introduction-to-sagoon-gifitng">Read more</a>
            </p>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>
