<script setup lang="ts">
const route = useRoute();
useSeoMeta({
  title: "Home Page",
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
      href: "/favicon.ico",
    },
  ],
});
</script>

<template>
  <div>
    <div class="banner-main" data-aos="fade-up">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 d-lg-none text-center">
            <figure>
              <img
                src="/assets/images/illustration.png"
                class="img-fluid"
                alt=""
              />
            </figure>
          </div>

          <div class="col-lg-6">
            <h1>
              <span class="welcome">Welcome!</span>
              Your time!<br />
              Your money!<br />
              You earn GiftBox tokens!
            </h1>
            <p>
              GiftBox is an engage-to-earn crypto utility token that facilitates
              a unified gift-giving experience for platform users.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="marquee-section" data-aos="fade-up">
      <marquee behavior="" direction="" scrollamount="12"
        ><p>Mission: GiftBox token aims to be the future gifting currency!</p>
        <p>Mission: GiftBox token aims to be the future gifting currency!</p>
        <p>Mission: GiftBox token aims to be the future gifting currency!</p>
      </marquee>
    </div>

    <div class="sec-block-chain" data-aos="fade-up">
      <div class="container">
        <div class="row">
          <div class="col-lg-6"></div>
          <div class="col-12 d-lg-none">
            <figure class="text-center">
              <img src="/assets/images/giftsbox.png" class="img-fluid" alt="" />
            </figure>
          </div>
          <div class="col-lg-6">
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
            <p>
              <NuxtLink href="https://sagoon.com/" target="_blank" class="btn"
                >Visit Sagoon website</NuxtLink
              >
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="app-sagoon" data-aos="fade-up">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <h2>A memorable experience for an online celebration</h2>
            <p>
              Say goodbye to distance and celebrate your special moments live
              with instant gift-giving and earn tokens for doing.
            </p>
            <p class="wht">For more, check the app.</p>
            <NuxtLink href="https://bit.ly/3PJKCVM" target="_blank"
              ><img src="/assets/images/get-it-on.png" alt="" class="img-fluid"
            /></NuxtLink>
          </div>
          <div class="col-lg-2"></div>
          <div class="col-lg-4">
            <figure>
              <img
                src="/assets/images/mobile-screen.png"
                alt=""
                class="img-fluid"
              />
            </figure>
            <figcaption class="text-center">Sagoon platform</figcaption>
          </div>
        </div>
      </div>
    </div>
    <div class="giftbox-tokens" data-aos="fade-up">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 order-2 order-lg-1">
            <figure class="text-center">
              <img
                src="/assets/images/giftbox-token.png"
                alt=""
                class="img-fluid"
              />
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
                  src="/assets/images/chart-graph.png"
                  class="img-fluid"
                  alt="chart"
                />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="team-gift" data-aos="fade-up">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 text-center">
            <h3>Team Behind</h3>
          </div>
        </div>

        <div class="row">
          <div class="col-sm-12">
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

          <div class="col-sm-12">
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

          <div class="col-sm-12">
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

          <div class="col-sm-12">
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
                        src="/assets/images/team/niranjan.png"
                        alt="Niranjan Bhambi"
                        class="img-fluid"
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

          <div class="col-sm-12">
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

    <div class="join-community" data-aos="fade-up">
      <div class="container">
        <div class="row">
          <div class="col-sm-12">
            <h2>Join The Community</h2>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-5">
            <figure>
              <img
                src="/assets/images/community.png"
                class="img-fluid"
                alt=""
              />
            </figure>
          </div>
          <div class="col-lg-1"></div>
          <div class="col-lg-6">
            <div class="sec-join">
              <figure>
                <img src="/assets/images/discord.png" alt="" />
              </figure>
              <section>
                <p>
                  Stay informed on the Pre-sale by joining the official Discord
                  server.
                </p>
                <NuxtLink
                  href="https://discord.gg/FkQDANrF29"
                  target="_blank"
                  class="btn-join"
                  ><span>Join Discord</span></NuxtLink
                >
              </section>
            </div>

            <div class="sec-join">
              <figure>
                <img src="/assets/images/telegram.png" alt="" />
              </figure>
              <section>
                <p>
                  Stay informed on the announcements by joining the official
                  Telegram server.
                </p>
                <NuxtLink
                  href="https://t.me/GiftBoxToken"
                  class="btn-join"
                  target="_blank"
                  ><span>Join Telegram</span></NuxtLink
                >
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>

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
                  <div>
                    <input
                      type="text"
                      name="Name"
                      id="Name"
                      placeholder="Name"
                      class="form-control"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Email"
                      class="form-control"
                    />
                  </div>

                  <div>
                    <input
                      type="tel"
                      name="number"
                      id="number"
                      placeholder="Phone Number"
                      class="form-control"
                    />
                  </div>

                  <div class="col-12">
                    <p class="space-top">Interested in becoming a member?</p>
                    <input
                      id="submitButton"
                      type="submit"
                      name="Submit"
                      class="btn-sbmt"
                      value="Send request"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container" id="contact">
      <div class="row">
        <div class="col-sm-12">
          <div class="form-container">
            <form name="contactForm" id="contactForm">
              <div class="form-about">
                <h3>Get In Touch</h3>
                <div class="row">
                  <div class="col-sm-12 col-md-6">
                    <div class="form-cont">
                      <input
                        type="text"
                        name="firstName"
                        id="firstName"
                        placeholder="First Name"
                        class="form-control"
                        fdprocessedid="s9yy4"
                      />
                    </div>
                  </div>
                  <div class="col-sm-12 col-md-6">
                    <div class="form-cont">
                      <input
                        type="text"
                        name="lastName"
                        id="lastName"
                        placeholder="Last Name"
                        class="form-control"
                        fdprocessedid="jzq03s"
                      />
                    </div>
                  </div>
                  <div class="col-sm-12 col-md-6">
                    <div class="form-cont">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Email"
                        class="form-control"
                        fdprocessedid="e7pxkd"
                      />
                    </div>
                  </div>
                  <div class="col-sm-12 col-md-6">
                    <div class="form-cont">
                      <input
                        type="tel"
                        name="phoneNumber"
                        id="phoneNumber"
                        placeholder="+44-1234567890"
                        class="form-control"
                        fdprocessedid="5ero6"
                      />
                    </div>
                  </div>
                  <div class="col-sm-12 col-md-12">
                    <div class="form-cont">
                      <textarea
                        cols="0"
                        rows="2"
                        name="messagetext"
                        id="messagetext"
                        class="form-control"
                        placeholder="Message"
                      ></textarea>
                    </div>
                  </div>

                  <div class="col-sm-12">
                    <div class="row">
                      <div class="col-lg-5">
                        <div class="form-cont">
                          <div id="captchaBackground">
                            <canvas id="captcha">captcha text</canvas>
                          </div>
                        </div>
                      </div>

                      <div class="col-lg-5">
                        <div class="form-cont">
                          <input
                            class="form-control"
                            id="textBox"
                            placeholder="Enter Captcha"
                            type="text"
                            name="text"
                          />
                        </div>
                        <span id="output" class="captchaError"></span>
                      </div>

                      <div class="col-lg-1 text-center">
                        <div id="buttons">
                          <button id="refreshButton" type="submit" class="">
                            <img
                              style="color: white"
                              src="/assets/images/refresh.png"
                            />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="col-12 text-center">
                    <input
                      id="submitButton"
                      type="submit"
                      name="Submit"
                      class="btn-sbmt"
                      value="Submit"
                      fdprocessedid="f5mcxt"
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
