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
              src="/assets/images/crypto-mining-two.jpg"
              class="img-fluid"
              alt="Crypto mining II"
            />
          </figure>
        </div>

        <div class="col-sm-9">
          <span class="datetime">12/08/2023</span>
          <section>
            <h1>
              Crypto Mining Series — II: What are the Different Methods of
              Crypto Mining?
            </h1>
            <p>
              The mining landscape can be categorized based on equipment,
              processes, hardware, and consensus....
              <a
                href="/blog/crypto-mining-series-ii-what-are-the-different-methods-of-crypto-mining"
                >Read more</a
              >
            </p>
          </section>
        </div>
      </div>

      <div class="row sec-blog">
        <div class="col-sm-3">
          <figure>
            <img
              src="/assets/images/market-capitalization.jpg"
              class="img-fluid"
              alt="Market Capitalization"
            />
          </figure>
        </div>

        <div class="col-sm-9">
          <span class="datetime">11/08/2023</span>
          <section>
            <h2>
              Market Capitalization: A Key Metric to Evaluate Cryptocurrency
            </h2>
            <p>
              The top 10 companies with the highest market caps account for over
              20% of the global stock market ....
              <a
                href="/blog/market-capitalization-a-key-metric-to-evaluate-cryptocurrency"
                >Read more</a
              >
            </p>
          </section>
        </div>
      </div>

      <div class="row sec-blog">
        <div class="col-sm-3">
          <figure>
            <img
              src="/assets/images/crypto-mining-one.jpg"
              class="img-fluid"
              alt="Crypto Token Series — III"
            />
          </figure>
        </div>

        <div class="col-sm-9">
          <span class="datetime">10/08/2023</span>
          <section>
            <h3 class="no-spc">
              Crypto Mining Series — I: Understanding the Basics of
              Cryptocurrency Mining
            </h3>
            <p>
              Cryptocurrency Mining is a crucial pillar in cryptocurrencies,
              facilitating secure transactions....
              <a
                href="/blog/crypto-mining-series-i-understanding-the-basics-of-cryptocurrency-mining"
                >Read more</a
              >
            </p>
          </section>
        </div>
      </div>

      <div class="row sec-blog">
        <div class="col-sm-3">
          <figure>
            <img
              src="/assets/images/series-three.jpg"
              class="img-fluid"
              alt="Crypto Token Series — III"
            />
          </figure>
        </div>

        <div class="col-sm-9">
          <span class="datetime">08/08/2023</span>
          <section>
            <h3 class="no-spc">
              Crypto Token Series — III: Do Crypto Tokens Have Value?
            </h3>
            <p>
              In the ever-expanding space of crypto tokens, a common question
              often arises: “Do crypto tokens....
              <a
                href="/blog/crypto-token-series-iii-do-crypto-tokens-have-value"
                >Read more</a
              >
            </p>
          </section>
        </div>
      </div>

      <div class="row sec-blog">
        <div class="col-sm-3">
          <figure>
            <img
              src="/assets/images/series-crypto-two.jpg"
              class="img-fluid"
              alt="Crypto Token Series"
            />
          </figure>
        </div>

        <div class="col-sm-9">
          <span class="datetime">05/08/2023</span>
          <section>
            <h3 class="no-spc">
              Crypto Token Series — II: What are the Different Types of Crypto
              Tokens?
            </h3>
            <p>
              The world of cryptocurrency is a rapidly evolving landscape that
              continues to captivate both investors....
              <a
                href="/blog/crypto-token-series-ii-what-are-the-different-types-of-crypto-tokens"
                >Read more</a
              >
            </p>
          </section>
        </div>
      </div>

      <div class="row sec-blog">
        <div class="col-sm-3">
          <figure>
            <img
              src="/assets/images/series-crypto.jpg"
              class="img-fluid"
              alt="Crypto Token Series"
            />
          </figure>
        </div>

        <div class="col-sm-9">
          <span class="datetime">03/08/2023</span>
          <section>
            <h3 class="no-spc">
              Crypto Token Series — I: What is a Crypto Token & How Does It
              Works?
            </h3>
            <p>
              Blockchain technology’s inception has given birth to many new
              digital assets, including cryptocurrencies, that....
              <a
                href="/blog/crypto-token-series-i-what-is-a-crypto-token-how-does-it-works"
                >Read more</a
              >
            </p>
          </section>
        </div>
      </div>

      <div class="row sec-blog">
        <div class="col-sm-3">
          <figure>
            <img
              src="/assets/images/best-practice-crypto.jpg"
              class="img-fluid"
              alt="10 Best Practices to Secure Your Crypto Wallet"
            />
          </figure>
        </div>

        <div class="col-sm-9">
          <span class="datetime">01/08/2023</span>
          <section>
            <h3 class="no-spc">
              10 Best Practices to Secure Your Crypto Wallet
            </h3>
            <p>
              Overview Cryptocurrencies have gained significant popularity
              recently, attracting investors and enthusiasts worldwide.....
              <a href="/blog/10-best-practices-to-secure-your-crypto-wallet"
                >Read more</a
              >
            </p>
          </section>
        </div>
      </div>

      <div class="row sec-blog">
        <div class="col-sm-3">
          <figure>
            <img
              src="/assets/images/crypto-safeguard.jpg"
              class="img-fluid"
              alt="Different Types of Crypto Wallets to Safeguard Your Cryptocurrencies"
            />
          </figure>
        </div>

        <div class="col-sm-9">
          <span class="datetime">29/07/2023</span>
          <section>
            <h3 class="no-spc">
              Different Types of Crypto Wallets to Safeguard Your
              Cryptocurrencies
            </h3>
            <p>
              With the rising popularity of cryptocurrencies, cyber threats and
              hacks have become more prevalent than ever.....
              <a
                href="/blog/different-types-of-crypto-wallets-to-safeguard-your-cryptocurrencies"
                >Read more</a
              >
            </p>
          </section>
        </div>
      </div>

      <div class="row sec-blog">
        <div class="col-sm-3">
          <figure>
            <img
              src="/assets/images/how-crypto-thumb.jpg"
              class="img-fluid"
              alt="Corporate Gifting"
            />
          </figure>
        </div>

        <div class="col-sm-9">
          <span class="datetime">27/07/2023</span>
          <section>
            <h3 class="no-spc">
              What is a Crypto Wallet, Why is it Important, and How Does it
              Work?
            </h3>
            <p>
              Hackers and cyber attackers are evolving with digital innovation
              in this crypto age. They have become more aware and advanced in
              hacking.....
              <a href="/blog/secure-your-cryptocurrency-with-crypto-wallets"
                >Read more</a
              >
            </p>
          </section>
        </div>
      </div>

      <div class="row sec-blog">
        <div class="col-sm-3">
          <figure>
            <img
              src="/assets/images/invest-crypto-thumb.jpg"
              class="img-fluid"
              alt="Corporate Gifting"
            />
          </figure>
        </div>

        <div class="col-sm-9">
          <span class="datetime">25/07/2023</span>
          <section>
            <h3 class="no-spc">
              What are the Different Ways to Invest in Cryptocurrency?
            </h3>
            <p>
              Gone are the days of traditional stock markets and mundane
              investment options. In the crypto space.....
              <a
                href="/blog/what-are-the-different-ways-to-invest-in-cryptocurrency"
                >Read more</a
              >
            </p>
          </section>
        </div>
      </div>

      <div class="row sec-blog">
        <div class="col-sm-3">
          <figure>
            <img
              src="/assets/images/different-way-invest.jpg"
              class="img-fluid"
              alt="Corporate Gifting"
            />
          </figure>
        </div>

        <div class="col-sm-9">
          <span class="datetime">20/07/2023</span>
          <section>
            <h3 class="no-spc">
              Why Cryptocurrency is the New Frontier for Investors?
            </h3>
            <p>
              In an era where conventional investment channels appear congested
              and saturated, a new realm of....
              <a
                href="/blog/why-cryptocurrency-is-the-new-frontier-for-investors"
                >Read more</a
              >
            </p>
          </section>
        </div>
      </div>

      <div class="row sec-blog">
        <div class="col-sm-3">
          <figure>
            <img
              src="/assets/images/cryptocurrency-thumb.jpg"
              class="img-fluid"
              alt="Corporate Gifting"
            />
          </figure>
        </div>

        <div class="col-sm-9">
          <span class="datetime">18/07/2023</span>
          <section>
            <h3 class="no-spc">Cryptocurrency: Future of Finance</h3>
            <p>
              Cryptocurrency is a topic that has been gaining traction in recent
              years. However, for many of us, it can be....
              <a href="/blog/cryptocurrency-future-of-finance">Read more</a>
            </p>
          </section>
        </div>
      </div>

      <!-- <div class="row sec-blog">
        <div class="col-sm-3">
          <figure>
            <img
              src="/assets/images/corporate-gifting-giftbox-min.png"
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
      </div> -->

      <!-- <div class="row sec-blog">
        <div class="col-sm-3">
          <figure>
            <img
              src="/assets/images/live-celebration-min.png"
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
              src="/assets/images/trending-gift-box.jpg"
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
              src="/assets/images/tips-to-choose-min.png"
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
              src="/assets/images/gifting-fig.jpg"
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
      </div>-->
    </div>
  </div>
</template>
