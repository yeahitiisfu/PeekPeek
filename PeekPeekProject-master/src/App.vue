<template>
  <div id="app">
    <Navigation id="floating-nav"/>
    <div id="sections-container">
      <HomeSection/>
      <StatsSection/>
      <VideoSection/>
      <HotspotSection/>
      <DemoSection/>
      <PartnersSection/>
      <ContactSection/>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Navigation from '@/components/Navigation.vue';
import HomeSection from '@/components/HomeSection.vue';
import StatsSection from '@/components/StatsSection.vue';
import VideoSection from '@/components/VideoSection.vue';
import HotspotSection from '@/components/HotspotSection.vue';
import DemoSection from '@/components/DemoSection.vue';
import PartnersSection from '@/components/PartnersSection.vue';
import ContactSection from '@/components/ContactSection.vue';

import { TweenMax, TimelineMax, Linear } from 'gsap';
let windowLength;
let parallaxLength: { [index:string] : number };
let scenes:any;

@Component({
  components: {
    Navigation,
    HomeSection,
    StatsSection,
    VideoSection,
    HotspotSection,
    DemoSection,
    PartnersSection,
    ContactSection,
  }
})
export default class App extends Vue {
  mounted(){
     windowLength = {
      titles: 3,
      subtitles: 4.5,
      media: 4,
      maintext: 5.25
    };

    parallaxLength= {
      widetitle: 60,
      titles: 40,
      subtitles: 35,
      media: 30,
      maintext: 50,
    }
    console.log(`Width: ${window.innerWidth}, navMaxTouchIsNotZero: ${navigator.maxTouchPoints !== 0}, ots: ${'ontouchstart' in window}`)
    console.log(`notTouch: ${!(navigator.maxTouchPoints !== 0 || 'ontouchstart' in window)}`);
    if (window.innerWidth > 992 || (window.innerWidth <= 992 && !(navigator.maxTouchPoints !== 0 || 'ontouchstart' in window))) {
      // This means the device is a laptop that is touchscreen, a laptop that is not touch screen, or a large touchscreen thing
      // Here is where we want to put parallax into the website
      console.log('should enable parallax');
      scenes = []; 
      this.parallaxAnimation();
    }
    window.addEventListener('resize', () => {
      if (window.innerWidth > 992 || (window.innerWidth <= 992 && !(navigator.maxTouchPoints !== 0 || (navigator.msMaxTouchPoints !== undefined || navigator.msMaxTouchPoints !== 0) || 'ontouchstart' in window))) {
      // This means the device is a laptop that is touchscreen, a laptop that is not touch screen, or a large touchscreen thing
      // Here is where we want to put parallax into the website
      for (let i = 0; i < scenes.length; ++i)
        {
            scenes[i].destroy(true);
        }
      scenes = []; 
      this.parallaxAnimation();
      }
    })  
  }

  parallaxAnimation()
  {
    let titles = <HTMLCollectionOf<HTMLElement>> document.getElementsByClassName("title");
    let subtitles = <HTMLCollectionOf<HTMLElement>> document.getElementsByClassName("subtitle");
    let media = <HTMLCollectionOf<HTMLElement>> document.getElementsByClassName("media");
    let mainText = <HTMLCollectionOf<HTMLElement>> document.getElementsByClassName("main-text");
    let wideTitle = <HTMLCollectionOf<HTMLElement>> document.getElementsByClassName("wide-title");
    let windowWidth = window.innerWidth > 992 ? window.innerWidth : 992;
    let windowHeight = window.innerHeight;

    console.log(`Window width: ${windowWidth}`)

    this.makeTween(titles, parallaxLength["titles"]);
    this.makeTween(subtitles, parallaxLength['subtitles']);
    this.makeTween(media, parallaxLength['media']);
    this.makeTween(mainText, parallaxLength['maintext']);  
    this.makeTween(wideTitle, parallaxLength['widetitle']);
    
  }

  makeTween(array: HTMLCollectionOf<HTMLElement>, lengthOfTween: number)
  {
    console.log(lengthOfTween);
    let windowWidth = window.innerWidth > 992 ? window.innerWidth : 992;
    let windowHeight = window.innerHeight;
    for (let i = 0; i < array.length; ++i)
    {
      // let roomLeft = ((windowWidth * 1.5) + windowWidth * 0.05) - (array[i].offsetLeft + (array[i].clientWidth * 1.5));
      console.log(`parent of section: ${this.getParentSection(array[i].id)}`);
      let sectionWidth = document.getElementById(this.getParentSection(array[i].id))!.clientWidth;
      let tweenLength = lengthOfTween * windowHeight/100
      let roomLeft = sectionWidth - array[i].offsetLeft - array[i].clientWidth;
      // roomLeft = roomLeft > array[i].clientWidth * 1 ? array[i].clientWidth * 1 : roomLeft;
      //console.log(`Element: ${array[i].id} RoomLeft: ${lengthOfTween}`);
      let scene = new Vue.prototype.$scrollmagic.scene(
        {
          triggerElement:`#${array[i].id}`,
          duration: windowHeight*2.75,
          offset: 0,
          triggerHook: 1,
        }).setTween(`#${array[i].id}`, {x:`${tweenLength}`, ease: Linear.easeNone})
        // .addIndicators()
        scenes.push(scene);
      Vue.prototype.$scrollmagic.addScene(scene)
    }
  }

  getParentSection(elementName: string): string {
    //console.log(elementName)
    const element = document.getElementById(elementName);
    //console.log(element)
    let result = element!.parentElement;
    while (result !== null) {
        if (result.tagName === 'SECTION') {
            break;
        }
        result = result.parentElement;
    }
    return result!.id;
  }
}

if (window.innerHeight > 480 && window.innerWidth > 768) {
  // Scrolling vertically will move the page horizontally
  // Only activated when the website is stacked horizontally
  window.onwheel = event => {
    if (navigator.userAgent.includes('Safari') && !navigator.userAgent.includes('Chrome')) {
      // Need to prevent default behavior for Safari for touchpad scrolling gesture to work
      event.preventDefault();
      window.scrollTo(window.scrollX + event.deltaX + event.deltaY, window.scrollY); // Added deltaX to ensure native horizontal scrolling
    } else {
      // For all other browsers
      window.scrollTo(window.scrollX + event.deltaY, window.scrollY);
    }
  }
}

</script>


<style lang="scss">
$base-section-aspect-ratio: 1.75;
$wide-section-ratio: 1.25;
$super-wide-section-ratio: 1.5;

p, h1, h2, h4, h6, span, button {
  font-family: "Libre Franklin", Helvetica, sans-serif;
  color: black;
}

body {
  margin: 0;
  padding: 0;
  border: 0;
  height: 100vh;
  width: auto;
  display: flex;
  overscroll-behavior-y: none;
  overflow-x: auto;
  overflow-y: hidden;

  background-color: #fbf6f0;
}

button {
  font-size: 2.4vh;
  padding: 10px 18px;
  background-color: #16a4a9;
  color: white;
  border: none;
  box-shadow: rgba(0, 0, 0, 0.18) 0px 2px 15px;
  border-radius: 50px;
  text-decoration: none;
}

h1 {
  font-size: 9vh;
  text-align: left;
}

.title:not(.wide-title), .subtitle:not(.wide-subtitle), .main-text:not(.wide-text) {
  max-width: 70vh;
}

.title, .wide-title {
  font-size: 7vh;
  font-weight: bold;
}

.subtitle, .wide-subtitle {
  font-size: 4.8vh;
  font-weight: normal;
}

.main-text, .wide-text {
  font-size: 3.5vh;
  font-weight: normal;
}

.peek-section {
  display: flex;
}

#floating-nav {
  position: fixed;
  right: 20px;
}

.peek-section {
  height: 100%;
  width: 100vh * $base-section-aspect-ratio; // All sections will maintain a base 1.75:1 aspect ratio except for wide and superwide
  position: absolute;

  p {
    margin: 0;
  }
}

.wide-peek-section{
  width: 100vh * $base-section-aspect-ratio * $wide-section-ratio; // 25% wider than a normal section
}

.super-wide-peek-section {
  width: 100vh * $base-section-aspect-ratio * $super-wide-section-ratio; // 50% wider than a normal section
}

.peek-section:nth-child(1) {
  left: 0%;
  width: 100vw;
}

.peek-section:nth-child(2) {
  left: 100vw;
}

.peek-section:nth-child(3) {
  left: calc(100vw + 100vh * #{$base-section-aspect-ratio});
}

.peek-section:nth-child(4) {
  left: calc(100vw + 100vh * 2 * #{$base-section-aspect-ratio});
}

.peek-section:nth-child(5) {
  left: calc(100vw + 100vh * 2 * #{$base-section-aspect-ratio} 
  + 100vh * #{$base-section-aspect-ratio} * #{$wide-section-ratio});
}

.peek-section:nth-child(6) {
  left: calc(100vw + 100vh * 2 * #{$base-section-aspect-ratio} 
  + 100vh * #{$base-section-aspect-ratio} * #{$wide-section-ratio} 
  + 100vh * #{$base-section-aspect-ratio} * #{$super-wide-section-ratio});
}

.peek-section:nth-child(7) {
  left: calc(100vw + 100vh * 2 * #{$base-section-aspect-ratio} 
  + 100vh * #{$base-section-aspect-ratio} * #{$wide-section-ratio} 
  + 100vh * 2 * #{$base-section-aspect-ratio} * #{$super-wide-section-ratio});
  width: 100vw;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

@media (max-height: 480px), (max-width: 768px) {
  // Vertically stack
  body {
    overflow-y: auto;
  }

  .peek-section {
    position: relative;
    left: 0% !important;
    width: 100vw !important;
    height: 100vh !important;
    margin-bottom: 10vh;
  }
}

$home-width-breakpoint: 992px;
@media (max-width: $home-width-breakpoint) and (min-width: 769px) {
  .peek-section:nth-child(1) {
    width: $home-width-breakpoint;
    left: 0%;
  }

  .peek-section:nth-child(2) {
    left: $home-width-breakpoint;
  }

  .peek-section:nth-child(3) {
    left: calc(#{$home-width-breakpoint} + 100vh * #{$base-section-aspect-ratio});
  }

  .peek-section:nth-child(4) {
    left: calc(#{$home-width-breakpoint} + 100vh * 2 * #{$base-section-aspect-ratio});
  }

  .peek-section:nth-child(5) {
    left: calc(#{$home-width-breakpoint} + 100vh * 2 * #{$base-section-aspect-ratio} 
      + 100vh * #{$base-section-aspect-ratio} * #{$wide-section-ratio});
  }

  .peek-section:nth-child(6) {
    left: calc(#{$home-width-breakpoint} + 100vh * 2 * #{$base-section-aspect-ratio} 
      + 100vh * #{$base-section-aspect-ratio} * #{$wide-section-ratio} 
      + 100vh * #{$base-section-aspect-ratio} * #{$super-wide-section-ratio});
  }

  .peek-section:nth-child(7) {
    left: calc(#{$home-width-breakpoint} + 100vh * 2 * #{$base-section-aspect-ratio} 
      + 100vh * #{$base-section-aspect-ratio} * #{$wide-section-ratio} 
      + 100vh * 2 * #{$base-section-aspect-ratio} * #{$super-wide-section-ratio});
    width: $home-width-breakpoint;
  }
}
</style>