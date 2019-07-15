<template>
  <div>
    <header class="header">
      <div class="header__name inline-block align-middle">Thomas Wilson</div>
      <div class="header__icons">
        <div class="header__icons__icon">
          <icon icon-name="twitter" />
        </div>
        <div class="header__icons__icon">
          <icon icon-name="linkedin" />
        </div>
        <div class="header__icons__icon">
          <icon icon-name="git" />
        </div>
      </div>
    </header>
    <main class="w-full">
      <div class="bio w-full flex flex-col items-center">
        <p
          class="bio__text px-3 sm:px-5 text-lg flex items-center py-5 leading-loose font-light text-center"
        >
          I design and build things on the web. Currently working in data
          privacy, previously in EdTech. I also dance and produce for genau
          dance co. I really like cycling, French & Italian, and the history of
          Art and Place.
        </p>
      </div>

      <div class="flex items-center justify-center w-full px-5">
        <div class="bio-grid text-sm font-light leading-relaxed">
          <div class="bio-grid__cell">
            <p>
              <span class="font-normal">Web Developer.</span> The web is neat and I
              enjoy makig things for it - especially building information-heavy interfaces.
              I'm most familiar with React, but this site is built in Vue.
              I've worked my way down most rungs on the stack - working with servers and cloud
              development. I am most comfortable with TypeScript
              and Ruby, but I have worked in production with Python, C#, and Java.
            </p>
          </div>
          <div class="bio-grid__cell">
            <p class="font-light">
              <span class="font-medium">Designer</span> I am interested in
              visual design, in general, and for the web. This doesn't come
              as naturally to me as software development, and I'm enjoying
              actively developing my patience and attention to detail. I take
              a lot more pleasure in the design process - especially where it meets engineering.
            </p>
          </div>
          <div class="bio-grid__cell">
            <p class="font-light">
              <span class="font-normal">Dancer &amp; Producer</span>
              I am involved in the production and performances of genau dance
              co. - a London-based contemporary dance theatre company. We are
              currently creating a trilogy centred around resilience, and it's a
              nice counter point to being a sit-down developer.
            </p>
          </div>
          <div class="bio-grid__cell">
            <span class="font-normal">Cycling</span> In 2019 I cycled half way
            across Fance, before being rained out. Fortunately I had enough time
            to discover a love for mountain climbs on two wheels.
          </div>
          <div class="bio-grid__cell">
            <span class="font-medium">History of art and place</span> I am
            really interested in the stories behind the creation of art, and
            the lives lived in certain places (mosly European cities).
            I love how many peoples' efforts and layers of beauty sit beaneath
            things which appear static.
          </div>
          <div class="bio-grid__cell">
            <span class="font-medium">Psychology</span> In 2018 I was awarded my
            Ph.D. in education research, and since the decade before that
            I have been interested in how people interpret, store,
            and retrieve information. Specifically I am interested in the
            processes of language acquisition and story-telling.
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

import Icon from '../components/icon.vue'

@Component({
  name: 'HomePage',
  components: {
    Icon
  }
})
export default class Index extends Vue {}
</script>
<style lang="scss" scoped>
@import '~/assets/scss/styles.scss';

.header {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  background: $orange;
  color: white;
  padding: 30px 30px;
}

.header__name {
  font-family: $sans-serif-font;
  font-size: 40px;
}

.header__icons {
  display: grid;
  grid-template-columns: repeat(3, min-content);
  width: 100%;
  height: 100%;
  padding-right: 0px;
  justify-content: end;
  align-items: center;
  grid-column-gap: 8px;

  @media screen and (min-width: 500px) {
    padding-right: 50px;
    grid-column-gap: 25px;
  }
}

.header__icons__icon {
  width: fit-content;
}

.bio__text {
  font-family: $serif-font;
  max-width: 62ch;
  min-height: 250px;
}

.bio-links {
  padding: 20px 15px;
  font-family: $serif-font;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 25px;
}

.bio-links__link {
  min-width: 50px;
}

.bio-grid {
  display: grid;
  grid-column-gap: 30px;
  grid-row-gap: 20px;
  max-width: 775px;

  grid-template-columns: repeat(1, 1fr);

  @media screen and (min-width: 500px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (min-width: 751px) {
    grid-template-columns: repeat(3, 1fr);
  }
}

.bio-grid__cell {
  font-family: $serif-font;
  line-height: 165%;
}

.title {
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
