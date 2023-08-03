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
    <div class="banner-main">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 d-lg-none text-center">
            <figure>
              <img
                src="assets/images/illustration.png"
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
              You earn GiftBox!
            </h1>
            <p>
              GiftBox is a engage to earn utility token that rewards you for
              gift-giving and socializing with your people.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="marquee-section">
      <marquee behavior="" direction=""
        ><p>“Our vision: The Giftbox token will serve as a gifting</p>
        <p>“Our vision: The Giftbox token will serve as a gifting</p>
        <p>“Our vision: The Giftbox token will serve as a gifting</p></marquee
      >
    </div>

    <div class="sec-block-chain">
      <div class="container">
        <div class="row">
          <div class="col-lg-6"></div>
          <div class="col-12 d-lg-none">
            <figure class="text-center">
              <img src="assets/images/giftsbox.png" class="img-fluid" alt="" />
            </figure>
          </div>
          <div class="col-lg-6">
            <h2>
              Sagoon – the blockchain-powered social gifting
              <img src="assets/images/gifting.png" alt="" /> platform:
            </h2>
            <p>
              <strong>Gift-Giving:</strong> Sagoon aims to revolutionize
              gift-giving to build relationships strong. Users can celebrate
              LIVE events like Birthdays, exchange gifts in real- time, and
              share emotions— regardless of distance.
            </p>
            <p>
              <strong>GiftBox Token:</strong> With the introduction of the
              GiftBox Token, Sagoon provides monetary incentives for gift-giving
              and socializing activities.
            </p>
            <p>
              <strong>Utility and In-App Currency:</strong> GiftBox serves not
              only as utility tokens but also as an in-app currency (when
              available) for transactions.
            </p>
            <NuxtLink href="https://sagoon.com/" target="_blank" class="btn"
              >Visit Sagoon website</NuxtLink
            >
          </div>
        </div>
      </div>
    </div>

    <div class="app-sagoon">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <h2>Sagoon App <img src="assets/images/star.png" alt="" /></h2>
            <p>
              Sagoon’s app allows users to celebrate LIVE events like birthdays
              by sending instant gifts and wishes.
            </p>
            <p>
              Additionally, users can surprise family and friends with
              personalize gifts on various occasions like Diwali, Christmas and
              more from their Wishlist.
            </p>
            <a href="#" class="learn-more">Learn more</a>
            <a href=""
              ><img src="assets/images/get-it-on.png" alt="" class="img-fluid"
            /></a>
          </div>
          <div class="col-lg-2"></div>
          <div class="col-lg-4">
            <figure>
              <img
                src="assets/images/mobile-screen.png"
                alt=""
                class="img-fluid"
              />
            </figure>
          </div>
        </div>
      </div>
    </div>
    <div class="giftbox-tokens">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 order-2 order-lg-1">
            <figure class="text-center">
              <img
                src="assets/images/giftbox-token.png"
                alt=""
                class="img-fluid"
              />
            </figure>
          </div>

          <div class="col-lg-6 order-1 order-lg-2">
            <h2>GiftBox token</h2>
            <p>
              The GiftBox is a cryptographic token that will be integrated into
              Sagoon platform, designed to tokenize gift-giving and socializing
              activities.
            </p>
            <h3>GiftBox — Utility Token</h3>
            <ul>
              <li>
                <strong>Earn tokens while gifting!</strong>
                <span>
                  Users can acquire tokens by exchanging gifts and engaging in
                  relevant activities on Sagoon platform and network.</span
                >
              </li>
              <li>
                <strong>Enjoy economic benefits!</strong>
                <span
                  >Users can redeem the value of their earned tokens to purchase
                  in-app gifts and services offered by commercial
                  partners.</span
                >
              </li>
              <li>
                <strong>Easy tokens gifting!</strong>
                <span
                  >Users can easily transfer tokens to others as gifts within
                  the Sagoon platform without incurring any gas fees.</span
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="tokenomics">
      <div class="tokenomics-inner">
        <div class="container">
          <div class="row d-flex">
            <div class="col-lg-5 align-self-center">
              <h2>Tokenomics</h2>
              <p>
                GiftBox Tokens is capped at 1,000,000,000 (one billion) as its
                total token supply at the token generation event. No other
                tokens shall be created.
              </p>
              <p>
                GiftBox Tokens is capped at 1,000,000,000 (one billion) as its
                total token supply at the token generation event. No other
                tokens shall be created.
              </p>
              <p>
                <span class="special">Special notes:</span>
                30% tokens are allocated to the “community fund” to reward
                platform users. These tokens are designed to circulate for
                in-app activities. The platform users who hold tokens cannot
                sell or resell out of the Sagoon platform, such as an exchange.
              </p>
            </div>
            <div class="col-lg-2"></div>

            <div class="col-lg-5 align-self-center">
              <figure class="text-center">
                <img
                  src="assets/images/chart-graph.png"
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
          <div class="col-sm-12">
            <div class="sec-team">
              <div class="sec-team-inner">
                <figure>
                  <img
                    src="assets/images/team/paul.png"
                    alt="paul"
                    class="img-fluid"
                  />
                </figure>
                <section>
                  <h4>Paul Parker</h4>
                  <span>Board of Directors</span>
                  <p>
                    Paul has over 15 years of experience in funds, finance,
                    fintech, legal and compliance sectors. Additionally, Paul is
                    a certified Bitcoin and crypto professional.
                  </p>
                </section>
              </div>
            </div>
          </div>

          <div class="col-sm-12">
            <div class="team-outer">
              <div class="sec-team">
                <div class="sec-team-inner">
                  <figure>
                    <img
                      src="assets/images/team/shantanu.png"
                      alt="Shantanu Chandra"
                      class="img-fluid"
                    />
                  </figure>
                  <section>
                    <h4>Shantanu Chandra</h4>
                    <span
                      >Product Manager / Certified Blockchain Architect</span
                    >
                    <p>
                      6+ years of experience in dapps. platforms designing and
                      implementation.
                    </p>
                  </section>
                </div>
              </div>

              <div class="sec-team">
                <div class="sec-team-inner">
                  <figure>
                    <img
                      src="assets/images/team/sharansh.png"
                      alt="Sharansh Guha"
                      class="img-fluid"
                    />
                  </figure>
                  <section>
                    <h4>Sharansh Guha</h4>
                    <span>Certified Blockchain Developer</span>
                    <p>
                      5 years experience in blockchain development. Developed
                      15+ dapps.
                    </p>
                  </section>
                </div>
              </div>
            </div>
          </div>

          <div class="col-sm-12">
            <div class="team-outer">
              <div class="sec-team">
                <div class="sec-team-inner">
                  <figure>
                    <img
                      src="assets/images/team/govinda-sir.png"
                      alt="Govinda Giri"
                      class="img-fluid"
                    />
                  </figure>
                  <section>
                    <h4>Govinda Giri</h4>
                    <span>Founder / CEO Creative mind behind Sagoon</span>
                    <p>
                      20+ years of experience in products, business, technology,
                      and management. 11+ years experience working as system
                      engineer at L3/Pentagon.
                    </p>
                  </section>
                </div>
              </div>
              <div class="sec-team">
                <div class="sec-team-inner">
                  <figure>
                    <img
                      src="assets/images/team/swati.png"
                      alt="Swati Dayal"
                      class="img-fluid"
                    />
                  </figure>
                  <section>
                    <h4>Swati Dayal</h4>
                    <span>Co-founder / Chief of product & Growth</span>
                    <p>
                      11+ years of experience building products, technology, and
                      growth. Social media app scale to 7 million users
                    </p>
                  </section>
                </div>
              </div>
            </div>
          </div>

          <div class="col-sm-12">
            <div class="team-outer">
              <div class="sec-team">
                <div class="sec-team-inner">
                  <figure>
                    <img
                      src="assets/images/team/niranjan.png"
                      alt="Niranjan Bhambi"
                      class="img-fluid"
                    />
                  </figure>
                  <section>
                    <h4>Niranjan Bhambi</h4>
                    <span>Chief Engineer</span>
                    <p>
                      14+ years of experience building web and mobile apps. Has
                      built 10-15 social media tools and scaled them to 3M users
                    </p>
                  </section>
                </div>
              </div>
              <div class="sec-team">
                <div class="sec-team-inner">
                  <figure>
                    <img
                      src="assets/images/team/omer.png"
                      alt="Omer Bhat"
                      class="img-fluid"
                    />
                  </figure>
                  <section>
                    <h4>Omer Bhat</h4>
                    <span>Product Strategist</span>
                    <p>
                      I am the bridge between developers, users, and business
                      objectives to create the experience that fits best.
                    </p>
                  </section>
                </div>
              </div>
            </div>
          </div>

          <div class="col-sm-12">
            <div class="sec-team w-100">
              <div class="sec-team-inner w-100">
                <p class="text-center mx-auto mb-0">
                  A team of 14+ developers & designers, with 10+ years of<br />
                  experience in Web2, and over 5 years of experience in
                  crypto—web3 space.
                </p>
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
          <div class="col-lg-5">
            <figure>
              <img src="assets/images/community.png" class="img-fluid" alt="" />
            </figure>
          </div>
          <div class="col-lg-1"></div>
          <div class="col-lg-6">
            <div class="sec-join">
              <figure>
                <img src="assets/images/discord.png" alt="" />
              </figure>
              <section>
                <p>
                  Stay informed on the Pre-sale by joining the official Discord
                  server.
                </p>
                <a href="#" class="btn-join"><span>Join Discord</span></a>
              </section>
            </div>

            <div class="sec-join">
              <figure>
                <img src="assets/images/telegram.png" alt="" />
              </figure>
              <section>
                <p>
                  Stay informed on the announcements by joining the official
                  Telegram server.
                </p>
                <a href="#" class="btn-join"><span>Join Telegram</span></a>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row">
        <div class="col-sm-12">
          <div class="start-invest">
            <div class="inner-glow">
              <div class="row">
                <div class="col-lg-6">
                  <h3>Start investing in Giftbox now!</h3>
                  <p>
                    A crypto utility asset—into Sagoon app to offer a better
                    incentive to monetize users' time and activities on the
                    Sagoon platform.
                  </p>
                </div>

                <div class="col-lg-6">
                  <div>
                    <input
                      type="text"
                      name="Name"
                      id="Name"
                      placeholder="Name"
                      class="form-control"
                      required=""
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Email"
                      class="form-control"
                      required=""
                    />
                  </div>

                  <div>
                    <input
                      type="number"
                      name="number"
                      id="number"
                      placeholder="Phone Number"
                      class="form-control"
                      required=""
                    />
                  </div>

                  <div class="col-12">
                    <input
                      id="submitButton"
                      type="submit"
                      name="Submit"
                      class="btn-sbmt"
                      value="Become an investor"
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
                        required=""
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
                        required=""
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
                        required=""
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
                        required=""
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
                        required=""
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
                              src="assets/images/refresh.png"
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
