<template>
    <section class="peek-section wide-peek-section" id="hotspot-section">
        <img class="hotspot-skyline" src="../assets/images/peekvideogif.gif"/>
        <div class="hotspot-titles">
            <h4 class="subtitle" id="space">It's not just the space</h4>
            <h2 class="wide-title" id="story">Tell me about your story</h2>
            <h4 class="subtitle" id="spotlights">with Spotlights</h4>
        </div>
    </section>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class HotspotSection extends Vue {
    
}
</script>

<style lang="scss" scoped>
#hotspot-section {
    display: flex;
    flex-direction: row;
    justify-content: baseline;

    .hotspot-skyline {
        width: 95%;
        object-fit: contain;
        position: absolute;
        bottom: 0;
        left: 0;
        max-height: 70%;
    }

    .hotspot-titles {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        margin-top: 80px;
        margin-right: 5vw;
        z-index: 10;

        #space {
            align-self: baseline;
        }
        
        #spotlights {
            align-self: flex-end;
        }

        h2 {
            margin: 0;
        }

        h4 {
            margin-top: 5px;
            margin-bottom: 5px;
        }
    }

    .hotspot-titles-parallax-margin {
        width: 25vh;
        align-items: flex-end;
    }
}


</style>