<template>
  <section class="peek-section" id="home-section">
    <div class="home-pic">
      <img src="../assets/images/tinyWorld.png" />
    </div>
    <div class="home-section-headers">
      <h1 id="splash-text">Welcome<br />to<br />PeekPeek</h1>
      <div class="secondary hidden">
        <h1>It's all<br />about you.</h1>
        <div class="separator"></div>
        <div class="home-section-buttons">
          <button>
            <a target="_blank" href="https://www.youtube.com/watch?v=s4EEhXH_pz0">Watch video
            </a>
          </button>
          <button>
            <a target="_blank" href="https://www.peekpeek.com/industries">Take a peek </a>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({})
export default class HomeSection extends Vue {
  mounted() {
    document.onreadystatechange = () => {
      if (document.readyState == "complete") {
        this.splashScreen();
      }
    };
  }

  splashScreen() {
    document.getElementsByClassName("home-pic")[0].classList.add("collapsed");
    document.getElementById("splash-text")!.classList.add("hidden");
    document.getElementsByClassName("secondary")[0].classList.remove("hidden");
  }
}
</script>

<style lang="scss" scoped>
  a {
    text-decoration: none;
    color: white;
  }
.home-pic {
  width: 120%;
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;

  img {
    height: 100%;
    object-fit: contain;
  }
}

#splash-text {
  margin-top: 10%;
}

.collapsed {
  transition: all 1.25s;
  height: auto !important;
  width: 50% !important;
}

.hidden {
  transition: opacity 0.5s ease-in-out 1s;
  opacity: 0 !important;
}

.secondary {
  margin-top: -60%;
  transition: opacity 0.5s ease-in-out 1.5s;
  opacity: 1;
}

.home-section-headers {
  min-width: 30%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  //margin-left: 50px;

  h1 {
    margin: 20px auto 0 0;
  }

  .separator {
    width: 40%;
    height: 4px;
    border-radius: 2px;
    background-color: #8f8f94;
    margin: 20px 0 20px 0;
  }
}

.home-section-buttons {
  margin-top: 10px;

  button {
    float: left;
    margin-right: 25px;
  }
}
</style>
