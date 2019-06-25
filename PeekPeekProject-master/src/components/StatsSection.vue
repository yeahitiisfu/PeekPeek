<template>
    <section class="peek-section" id="stats-section">
        <div class="stats-cards-left-margin"></div>
        <div class="stats-cards">
            <div class="stats-cards-container">
                <StatsCard v-for="(card, index) in cardData" :key="index" :cardNumber="card.cardNumber" :supportiveTitle="card.supportiveTitle" :title="card.title" :id="'stats-card-' + (index + 1)" class="stats-card"/>
            </div>
        </div>
    
        <div class="stats-captions">
            <div class="stats-titles">
                <h2 class="title" id="work">We do work</h2>
                <h4 class="subtitle" id ="better">better than most, actually</h4>
            </div>
            <div class="stats-text">
                <p class="main-text" id="challenge">New challenge?</p>
                <p class="main-text" id="solution">New solution <i class="fas fa-long-arrow-alt-right"></i></p>
            </div>
        </div>

        <div class="stats-captions-parallax-margin"></div>
    </section>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import StatsCard from "@/components/StatsCard.vue";

import { TweenMax, TimelineMax, Power1 } from 'gsap';

let scenes: any;

@Component({
  components: {
    StatsCard,
  }
})
export default class StatsSection extends Vue { 
    mounted() {
        window.addEventListener('resize', ()=> {
            for (let i = 0; i < scenes.length; ++i)
            {
                scenes[i].destroy(true);
            }
            scenes = [];
            this.cardAnimation();
        })
        scenes = []; 
        this.cardAnimation();
    }

    data() {
        return {
            cardData: [
                {
                    cardNumber: '18x',
                    supportiveTitle: 'Longer',
                    title: 'Duration of Stay',
                },
                {
                    cardNumber: '130%',
                    supportiveTitle: 'Increase in',
                    title: 'Booking Rate',
                },
                {
                    cardNumber: '12%',
                    supportiveTitle: 'Increase in',
                    title: 'Engagement Rate',
                },
                {
                    cardNumber: '28%',
                    supportiveTitle: 'Conversion of',
                    title: 'Physical Visit',
                },
            ]
        }
    }

    animateValue(obj:Element, start = 0, end:any = null, duration = 1500) {
        if (obj) {

            // save starting text for later (and as a fallback text if JS not running and/or google)
            var textStarting = obj.innerHTML;

            // remove non-numeric from starting text if not specified
            end = end || parseInt(textStarting.replace(/\D/g, ""));

            var range = end - start;

            // no timer shorter than 50ms (not really visible any way)
            var minTimer = 50;

            // calc step time to show all interediate values
            var stepTime = Math.abs(Math.floor(duration / range));

            // never go below minTimer
            stepTime = Math.max(stepTime, minTimer);

            // get current time and calculate desired end time
            var startTime = new Date().getTime();
            var endTime = startTime + duration;
            var timer:number;

            function run() {
                var now = new Date().getTime();
                var remaining = Math.max((endTime - now) / duration, 0);
                var value = Math.round(end - (remaining * range));
                var text:string = value + "";
                // replace numeric digits only in the original string
                obj.innerHTML = textStarting.replace(/([0-9]+)/g, text);
                if (value == end) {
                    clearInterval(timer);
                }
            }

            timer = setInterval(run, stepTime);
            run();
        }
    }


    cardAnimation() {
        let cards = document.getElementsByClassName("stats-card");
        let cardheight = document.getElementById(cards[0].id)!.clientHeight;
        let cardWidth = document.getElementById(cards[0].id)!.clientWidth;
        for(let i = 0; i < cards.length; ++i)
        {

            var flightPath = {
                tree : {
                    curviness: 1.25,
                    values: [
                        { x: 0 , y: 0 },
                        { x: 0, y: -cardheight*.6*i - cardheight/2},
                        { x: i % 2 === 0 ? -cardWidth*.42 : cardWidth*.42, y: -cardheight*.8*i - cardheight/2}
                    ]
                }
            }
            var treeTween = TweenMax.to(cards[i], 1, {css:{bezier:flightPath.tree } , ease:Power1.easeInOut} )
            
            document.getElementById(cards[i].id)!.style.alignItems = i % 2 === 0 ? 'baseline' : 'flex-end';
            let firstElement: HTMLElement= <HTMLElement>(document.getElementById(cards[i].id)!.firstElementChild!)
            firstElement.style.margin = i % 2 === 0 ? 'auto 0 auto 2.5vh' : 'auto 2.5vh auto 0';
            firstElement.style.alignItems = i % 2 === 0 ? 'baseline' : 'flex-end';

            //Getting the width of the element
            let elementWidth = document.getElementById(cards[0].id)!.clientWidth;

            let scene = new Vue.prototype.$scrollmagic.scene({
            duration: window.innerWidth * 0.65,
            offset: window.innerWidth / 3,
            triggerHook: 'onEnter',
            triggerElement: '#stats-section',
            })
            scenes.push(scene);
            Vue.prototype.$scrollmagic.addScene(
                scene.setTween(treeTween)
            )
            let numberScene = new Vue.prototype.$scrollmagic.scene({
                duration: 2000,
                reverse: false,
                triggerHook: 'onEnter',
                triggerElement: `#${cards[i].id}`})
                .on("enter", () => this.animateValue(cards[i].getElementsByClassName("card-number")[0]));
            Vue.prototype.$scrollmagic.addScene(numberScene)
        }
    }
}
</script>

<style lang="scss" scoped>
#stats-section {
    flex-direction: row;
    display: flex;

    .stats-cards-left-margin {
        width: 10vh;
    }

    .stats-cards {
        .stats-cards-container {
            width: 51.25vh;
            height: 51.25vh;
            position: relative;
            top: 80vh;

            .stats-card {
                position: absolute;
                display: flex;
                flex-direction: column
            }

            .stats-card:nth-child(1) {
                z-index: 4;
                top: 0px;
            }

            .stats-card:nth-child(2) {
                z-index: 3;
                top: 10px;
            }

            .stats-card:nth-child(3) {
                z-index: 2;
                top: 20px;
            }

            .stats-card:nth-child(4) {
                z-index: 1;
                top: 30px;
            }
        }
    }        

    .stats-captions {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;


        h2 {
            font-size: 7vh;
            margin: 0;
            text-align: left;
        }

        h4 {
            font-size: 6vh;
            font-weight: normal;
            margin: 0;
            text-align: left;
        }

        .stats-text {
            align-self: flex-end;
            margin-right: 4vh;

            p {
                font-size: 3.5vh;
            }
        }
    }

    .stats-captions-parallax-margin {
        flex: auto;
    }

}
</style>
