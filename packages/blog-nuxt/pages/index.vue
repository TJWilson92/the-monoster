<template>
  <div>
    <header class="header">
      <div class="header__name inline-block align-middle">
        Thomas Wilson
      </div>
      <div class="header__icons">
        <div class="header__icons__icon">
          <svg src="~/assets/icons/linkedin.svg" />
        </div>
        <div class="header__icons__icon">
          <linkedin />
        </div>
        <div class="header__icons__icon">
          Twitter
        </div>
      </div>
    </header>
    <main class="w-full">
      <div class="bio w-full flex flex-col items-center">
        <p
          class="bio__text px-3 sm:px-5 text-lg  flex items-center py-5 leading-loose font-light text-center"
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
              <span class="font-normal">Web Developer</span> I enjoy working
              most on the front of the web stack, but at least some experience
              on each layers of the stack. I am most comfortable with TypeScript
              and Ruby, but I have worked in production with Python, C#, and
              Java
            </p>
          </div>
          <div class="bio-grid__cell">
            <p class="font-light">
              <span class="font-medium">Designer</span> I am interested in
              visual design for the web, and I am actively developing the skills
              and characteristics that make a good designer (looking at you,
              patience). I take great pleasure in the design process -
              specifically where it meets engineering.
            </p>
          </div>
          <div class="bio-grid__cell">
            <p class="font-light">
              <span class="font-normal">Dancer &amp; Producer</span>
              I am involved in the production and performances of genau dance
              co. - a London-based contemporary dance theatre company. It makes
              a nice difference from a lot of the sitting involved in software
              development.
            </p>
          </div>
          <div class="bio-grid__cell">
            <span class="font-normal">Cycling</span> In 2019 I cycled half way
            across Fance, before being rained out. Fortunately I had enough time
            to discover a love for mountain climbs on two wheels.
          </div>
          <div class="bio-grid__cell">
            <span class="font-medium">History of art and place</span> I am
            really interested in the history of art (specifically the Italian
            Renaissance, the pre-raphaelites, and impressionism) - and places
            (mosly European cities). I love how many people's efforts and layers
            of beauty sit beaneath things which appear static.
          </div>
          <div class="bio-grid__cell">
            <span class="font-medium">Psychology</span> In 2018 I was awarded my
            Ph.D. in education research, and since at least a decade before that
            I have been interested in understanding how people interpret, store,
            and retrieve information. Specifically I am interested in the
            processes of language acquisition, and story-telling.
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  components: {}
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/styles.scss';

.header {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  background: $orange;
  color: white;
  padding: 30px 15px;
}

.header__name {
  font-family: $sans-serif-font;
  font-size: 40px;
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
