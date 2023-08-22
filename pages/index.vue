<script setup lang="ts">
import ContactForm from "~/components/ContactForm.vue";
import InvestorForm from "~/components/InvestorForm.vue";
const route = useRoute();
useSeoMeta({
  title: "Giftbox | Home",
  description:
    "GiftBox is the largest free gifts platform that provides a decentralized system to manage digital giftings like gift card, rewards, gift vouchers, and discount vouchers.",
  ogTitle: "Giftbox | Home",
  ogDescription:
    "GiftBox is the largest free gifts platform that provides a decentralized system to manage digital giftings like gift card, rewards, gift vouchers, and discount vouchers.",
  ogImage: "/assets/images/hero_section_2.jpg",
  ogUrl: "https://giftbox.network",
  twitterTitle: "Giftbox | Home",
  twitterDescription:
    "GiftBox is the largest free gifts platform that provides a decentralized system to manage digital giftings like gift card, rewards, gift vouchers, and discount vouchers.",
  twitterImage: "/assets/images/hero_section_2.jpg",
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
      href: "/favicon.ico",
    },
  ],
});
</script>

<template>
  <div>
    <div class="banner-main">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 banner-txt" data-aos="fade-right">
            <h1>
              Your time!<br />
              Your money!<br />
              You earn GiftBox tokens!
            </h1>
            <p>
              GiftBox is an engage-to-earn crypto utility token that facilitates
              a unified gift-giving experience for platform users.
            </p>
          </div>
          <div
            class="col-sm-12 col-lg-6 text-left"
            data-aos="fade-left"
            :data-aos-duration="2000"
          >
            <figure class="banner-sideimg">
              <img
                src="/assets/images/hero_section_2.jpg"
                class="img-fluid"
                alt="Giftbox"
              />
            </figure>
          </div>
        </div>
      </div>
    </div>

    <div class="marquee-section">
      <Vue3Marquee :gradient="false">
        <p>Mission: GiftBox token aims to be the future gifting currency!</p>
        <p>Mission: GiftBox token aims to be the future gifting currency!</p>
        <p>Mission: GiftBox token aims to be the future gifting currency!</p>
      </Vue3Marquee>
    </div>

    <div class="sec-block-chain" data-aos="fade-up">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 col-sm-12 col-12 img-box">
            <figure class="text-left position-relative w-90">
              <img
                src="/assets/images/blockchain/g_top.png"
                class="img-fluid position-absolute left-0 top-0 g_top"
                alt="gift box"
              />
              <img
                src="/assets/images/blockchain/gift_box.png"
                class="img-fluid position-absolute left-0 top-0 gift_box"
                alt="gift box"
              />
              <img
                src="/assets/images/blockchain/2_large.png"
                class="img-fluid position-absolute left-0 top-0 two_large"
                alt="gift box"
              />
              <img
                src="/assets/images/blockchain/3_small.png"
                class="img-fluid position-absolute left-0 top-0 three_small"
                alt="gift box"
              />
              <img
                src="/assets/images/blockchain/g_bottom.png"
                class="img-fluid position-absolute left-0 top-0 g_bottom"
                alt="gift box"
              />
            </figure>
          </div>
          <div class="col-lg-6 col-12 col-sm-12">
            <h2>
              <small>Sagoon – </small><br />
              The blockchain-powered social gifting platform:
            </h2>
            <ul>
              <li>
                <strong>Gift-Giving: </strong>
                <span
                  >Sagoon wants to transform gift-giving to enhance
                  relationships— regardless of distance.</span
                >
              </li>
              <li>
                <strong>GiftBox Token: </strong>
                <span
                  >Develops by Sagoon to provide a monetary incentive for
                  gift-giving and socializing on the platform.</span
                >
              </li>
            </ul>
            <p class="mt-5">
              <NuxtLink
                href="https://sagoon.com/"
                target="_blank"
                class="theme-btn"
              >
                Visit Sagoon website
              </NuxtLink>
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="app-sagoon" data-aos="fade-up">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 justify-items-center">
            <h2>A memorable experience for an online celebration</h2>
            <p>
              Say goodbye to distance and celebrate your special moments live
              with instant gift-giving and earn tokens for doing.
            </p>
            <p class="wht">For more info, check the Sagoon app.</p>
            <p class="playstorep">
              <NuxtLink href="https://bit.ly/3PJKCVM" target="_blank">
                <img
                  src="/assets/images/playstore.png"
                  alt=""
                  class="img-fluid playstore"
                />
              </NuxtLink>
            </p>
          </div>
          <div class="col-lg-6">
            <figure class="w-100">
              <img
                src="/assets/images/smartphone-mockup-floating.png"
                class="img-fluid shop"
                alt="mobile"
              />
            </figure>
          </div>
        </div>
      </div>
    </div>

    <div class="giftbox-tokens" data-aos="fade-up">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 order-2 order-lg-1">
            <figure class="text-center position-relative">
              <img src="/assets/images/glogo.png" alt="" class="img-fluid" />
              <span class="">
                <img
                  src="/assets/images/4_dot.png"
                  alt=""
                  class="img-fluid position-absolute start-0 top-0 dot4"
                />
                <img
                  src="/assets/images/5_dot.png"
                  alt=""
                  class="img-fluid position-absolute start-0 top-0 dot5"
                />
              </span>
            </figure>
          </div>

          <div class="col-lg-6 order-1 order-lg-2 align-self-center">
            <h2>GiftBox Token — Key Usage:</h2>
            <ul>
              <li>
                <span>
                  Users can acquire tokens by exchanging gifts, engaging in
                  relevant activities, and transferring tokens to others as
                  gifts.
                </span>
              </li>
              <li>
                <span
                  >Users can redeem the value of their earned tokens to purchase
                  in-app gifts and services offered by commercial
                  partners.</span
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="tokenomics" data-aos="fade-up">
      <div class="tokenomics-inner">
        <div class="container">
          <div class="row d-flex">
            <div class="col-lg-6 align-self-center">
              <h2>
                <small>Tokenomics—</small><br />
                Designed to help the community grow.
              </h2>
              <p>
                GiftBox Token is capped at 4,000,000,000 (four billion) as its
                total token supply at the token generation event. No other
                tokens shall be created.
              </p>
              <p>
                30% of tokens are allocated to reward platform users. These
                tokens are intended to use in-app activities with monetary
                value.
              </p>
            </div>
            <div class="col-lg-1"></div>

            <div class="col-lg-5 align-self-center">
              <figure class="text-center">
                <img
                  src="/assets/images/graph.png"
                  class="img-fluid"
                  alt="chart"
                />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="team-gift">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 text-center">
            <h3>Team Behind</h3>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-12" data-aos="fade-up">
            <div class="team-outer">
              <div class="sec-team">
                <div class="sec-team-inner">
                  <div class="d-flex">
                    <figure>
                      <img
                        src="/assets/images/team/paul.png"
                        alt="Shantanu Chandra"
                        class="img-fluid"
                      />
                    </figure>
                    <section>
                      <h4>Paul Parker</h4>
                      <span>Board of Directors</span>
                    </section>
                  </div>
                  <div class="d-break">
                    <p>
                      Paul has over 15 years of experience in funds, finance,
                      fintech, legal and compliance sectors. Additionally, Paul
                      is a certified Bitcoin and crypto professional.
                    </p>
                  </div>
                </div>
              </div>

              <div class="sec-team">
                <div class="sec-team-inner">
                  <div class="d-flex">
                    <figure>
                      <img
                        src="/assets/images/team/shantanu.png"
                        alt="Shantanu Chandra"
                        class="img-fluid"
                      />
                    </figure>
                    <section>
                      <h4>Shantanu Chandra</h4>
                      <span
                        >Product Manager /<br />
                        Certified Blockchain Architect</span
                      >
                    </section>
                  </div>
                  <div class="d-break">
                    <p>
                      6+ years of experience in dapps. platforms designing and
                      implementation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-sm-12" data-aos="fade-up">
            <div class="team-outer">
              <div class="sec-team">
                <div class="sec-team-inner">
                  <div class="d-flex">
                    <figure>
                      <img
                        src="/assets/images/team/sharansh.png"
                        alt="Sharansh Guha"
                        class="img-fluid"
                      />
                    </figure>
                    <section>
                      <h4>Sharansh Guha</h4>
                      <span>Certified Blockchain Developer</span>
                    </section>
                  </div>
                  <div class="break">
                    <p>
                      5 years experience in blockchain development. Developed
                      15+ dapps.
                    </p>
                  </div>
                </div>
              </div>
              <div class="sec-team">
                <div class="sec-team-inner">
                  <div class="d-flex">
                    <figure>
                      <img
                        src="/assets/images/team/govinda-sir.png"
                        alt="Govinda Giri"
                        class="img-fluid"
                      />
                    </figure>
                    <section>
                      <h4>Govinda Giri</h4>
                      <span
                        >Founder / CEO<br />
                        Creative mind behind Sagoon</span
                      >
                    </section>
                  </div>
                  <div class="d-break">
                    <p>
                      20+ years of experience in products, business, technology,
                      and management. 11+ years experience working as system
                      engineer at L3/Pentagon.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-sm-12" data-aos="fade-up">
            <div class="team-outer">
              <div class="sec-team">
                <div class="sec-team-inner">
                  <div class="d-flex">
                    <figure>
                      <img
                        src="/assets/images/team/swati.png"
                        alt="Swati Dayal"
                        class="img-fluid"
                      />
                    </figure>
                    <section>
                      <h4>Swati Dayal</h4>
                      <span
                        >Co-founder / Chief of<br />
                        product & Growth</span
                      >
                    </section>
                  </div>
                  <div class="d-break">
                    <p>
                      11+ years of experience building products, technology, and
                      growth. Social media app scale to 7 million users
                    </p>
                  </div>
                </div>
              </div>
              <div class="sec-team">
                <div class="sec-team-inner">
                  <div class="d-flex">
                    <figure>
                      <img
                        src="/assets/images/team/niranjan.png"
                        alt="Niranjan Bhambi"
                        class="img-fluid"
                      />
                    </figure>
                    <section>
                      <h4>Niranjan Bhambi</h4>
                      <span>Chief Engineer</span>
                    </section>
                  </div>

                  <div class="d-break">
                    <p>
                      14+ years of experience building web and mobile apps. Has
                      built 10-15 social media tools and scaled them to 3M users
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-sm-12" data-aos="fade-up">
            <div class="team-outer">
              <div class="sec-team">
                <div class="sec-team-inner">
                  <div class="d-flex">
                    <figure>
                      <img
                        src="/assets/images/team/omer.png"
                        alt="Omer Bhat"
                        class="img-fluid"
                      />
                    </figure>
                    <section>
                      <h4>Omer Bhat</h4>
                      <span>Product Strategist</span>
                    </section>
                  </div>
                  <div class="d-break">
                    <p>
                      I am the bridge between developers, users, and business
                      objectives to create the experience that fits best.
                    </p>
                  </div>
                </div>
              </div>
              <div class="sec-team">
                <div class="sec-team-inner">
                  <div class="d-flex">
                    <figure>
                      <img
                        src="/assets/images/team/parag.jpg"
                        alt="Parag Arora"
                        class="img-fluid rounded-circle"
                      />
                    </figure>
                    <section>
                      <h4>Parag Arora</h4>
                      <span>Advisor | Founder at Revelin7</span>
                    </section>
                  </div>

                  <div class="d-break">
                    <p>
                      7+ years of experience in blockchains/crypto space.
                      Founding team at Xfinite.io – a decentralized
                      entertainment platform. Co-founder – YCombinator-backed
                      messaging app.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-sm-12" data-aos="fade-up">
            <div class="team-outer">
              <div class="sec-team">
                <div class="sec-team-inner">
                  <div class="d-flex">
                    <figure>
                      <img
                        src="/assets/images/team/jhakendra.jpeg"
                        alt="Jhakendra Sharma"
                        class="img-fluid rounded-circle"
                      />
                    </figure>
                    <section>
                      <h4>Jhakendra Sharma</h4>
                      <span>Advisor | Director at Bhargo Capital</span>
                    </section>
                  </div>
                  <div class="d-break">
                    <p>
                      10 + years of experience in financial planning and risk
                      management. Angel investor, a member of DeFi Blockchain
                      Council. Advocate at corporate and finance.
                    </p>
                  </div>
                </div>
              </div>

              <div class="sec-team">
                <div class="sec-team-inner d-flex align-items-center">
                  <p class="text-center mx-auto mb-0">
                    A team of 14+ developers & designers, with 10+ years of<br />
                    experience in Web2, and over 5 years of experience in
                    crypto—web3 space.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- <div class="col-sm-12">
            <div class="sec-team w-100">
              <div class="sec-team-inner w-100">
                <p class="text-center mx-auto mb-0">
                  A team of 14+ developers & designers, with 10+ years of<br />
                  experience in Web2, and over 5 years of experience in
                  crypto—web3 space.
                </p>
              </div>
            </div>
          </div> -->
        </div>
      </div>
    </div>
    <div class="founder-form">
      <div class="container" data-aos="fade-up">
        <div class="row">
          <div class="col-sm-12">
            <div class="start-invest">
              <div class="inner-glow">
                <div class="row">
                  <div class="col-lg-6">
                    <h3>Introducing the GiftBox Founders Club!</h3>
                    <p>
                      This club empowers early backers of the GiftBox token
                      ecosystem.
                    </p>
                    <ul>
                      <li>Exclusive membership through invitation.</li>
                      <li>
                        Gain voting rights in the DAO to shape the GiftBox's
                        future.
                      </li>
                      <li>
                        Engage in collaboration, innovation, and community
                        connections.
                      </li>
                    </ul>
                  </div>

                  <div class="col-lg-6">
                    <h5 class="mb-4">Interested in becoming a member?</h5>
                    <InvestorForm />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="join-community">
      <div class="container">
        <div class="row">
          <div class="col-sm-12">
            <h2>Join The Community</h2>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-6 col-12" data-aos="fade-up">
            <ClientOnly>
              <Vue3Lottie
                animationLink="/assets/community.json"
                :loop="true"
                width="100%"
                :speed="0.5"
              />
            </ClientOnly>
          </div>
          <div class="col-lg-6 col-12" data-aos="fade-up">
            <div class="sec-join">
              <figure>
                <img src="/assets/images/discord.png" alt="" />
              </figure>
              <section>
                <p>
                  "Stay updated on announcements, news, and updates—join our
                  official Discord channel."
                </p>
                <NuxtLink
                  href="https://discord.gg/FkQDANrF29"
                  target="_blank"
                  class="theme-btn"
                >
                  <span>Join Discord</span>
                </NuxtLink>
              </section>
            </div>

            <div class="sec-join">
              <figure>
                <img src="/assets/images/telegram.png" alt="" />
              </figure>
              <section>
                <p>
                  "Stay updated on announcements, news, and updates—join our
                  official Telegram channel."
                </p>
                <NuxtLink
                  href="https://t.me/GiftBoxToken"
                  class="theme-btn"
                  target="_blank"
                  ><span>Join Telegram</span></NuxtLink
                >
              </section>
            </div>
          </div>
        </div>
      </div>
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
  </div>
</template>
