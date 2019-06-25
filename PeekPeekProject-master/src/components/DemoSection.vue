<template>
    <section class="peek-section super-wide-peek-section" id="demo-section">
        <div id="fake-card"></div>
        <div class="demo-section-frames" id="demo-section-frames">
            <DemoCard v-for="(item, index) in cardData" :key="index" :id="'demo-card-' + index">
                <h6 slot="title">{{item.title}}</h6>
                <p slot="subtitle">{{item.subtitle}}</p>
                <img slot="img" :src="imagePath(item.img)"/> 
            </DemoCard>
        </div>

        <img @click="closeAll" id="x-button" src="../assets/images/X.png"/>
        <iframe class="demo-iframes" v-for="(item,index) in cardData" :key="index" :id="'demo-frame-' + index" :src="item.iframe"></iframe>
        <div class="demo-section-frames-parallax-margin"></div>
        <div class="demo-section-text">
            <div class="demo-section-titles">
                <h2 class="title" id="special">Something <b>special</b></h2>
                <h4 class="subtitle" id="everysingleone">for every single one of you</h4>
            </div>
        </div>
        <div class="demo-section-text-parallax-margin"></div>
        <img class="placeholder" src="../assets/images/dotted-linez.png"/>
    </section>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import DemoCard from '@/components/DemoCard.vue';
import { TweenMax, TimelineMax } from 'gsap';

declare var Sine: any;

let scenes: any[] = [];

@Component({
    components: {
        DemoCard,
    }
})
export default class DemoSection extends Vue {
    mounted() {
        window.addEventListener('resize', ()=> {
            for (let i = 0; i < scenes.length; ++i)
            {
                scenes[i].destroy(true);
            }
            scenes = [];
            this.demoAnimations();
        })
        scenes = []; 
        this.demoAnimations();

        let cards = document.getElementById("demo-section-frames")!.children;
        for (let i = 0; i < cards.length; ++i)
        {
            cards[i].classList.add(i % 2 === 0 ? "demo-section-even": "demo-section-odd");
            cards[i].addEventListener("click", event => {
                let targetElement: HTMLElement = <HTMLElement> event.srcElement;
                targetElement = targetElement.className.toString().includes("demo-section-frame") ? targetElement : <HTMLElement> targetElement.parentElement;
                this.openCard(targetElement!, cards);
            });
        }
    }

    data() {
        return {
            imagePath: function (name:string): any {
                return require('../assets/images/' + name + '.png')
            }, 
            //To rearrange the content of the cards, do not change the structure of the data here.
            //Go to the Style section of this page and change the flex-order. 
            cardData: [
            {
                iframe: "http://vr.peekpeek.com/UCI_ARC/",
                title: "University of California, Irvine",
                subtitle: "Anteater Recreational Center Tour",
                img: "uci-arc",
            },
            {
                iframe: "http://panosensing.com/temp/peekpeek/LB_Rec_Center/v3.html",
                title: "Cal State Long Beach",
                subtitle: "Wellness Center Tour",
                img: "CSULB-Pyramid",
            },
            {
                iframe: "http://panosensing.com/temp/peekpeek/LB_Rec_Center/v3.html",
                title: "Fish on Tap",
                subtitle: "Restaurant Tour",
                img: "fish-on-tap",
            },
            {
                iframe: "http://panosensing.com/temp/peekpeek/LB_Rec_Center/v3.html",
                title: "West Covina Estates",
                subtitle: "Home Tour",
                img: "west-covina",
            }
        ]
        }
    }


    openCard(elem: HTMLElement, cards: HTMLCollection) {
        let foundIndex: number = -1;
        for (let i = 0; i < cards.length; ++i) {
            if (cards[i].id != elem.id) {
                console.log(cards[i].id + " is not the one you clicked");
                cards[i].classList.add("flat");
            }
            else{
                foundIndex = i;
            }
        }
        let fakeCard = document.getElementById("fake-card")!;
        fakeCard.style.width = `${elem.clientWidth}px`;
        fakeCard.style.height = `${elem.clientHeight}px`;
        fakeCard.style.left = `${elem.offsetLeft}px`;
        if (foundIndex % 2 === 0) {
            fakeCard.style.top = `${window.innerHeight - elem.clientHeight}px`;
            fakeCard.style.borderRadius = '10px 10px 0px 0px';
        } else {
            fakeCard.style.top = `0px`;
            fakeCard.style.borderRadius = '0px 0px 10px 10px';
        }

        setTimeout(() => {
            fakeCard.style.transition = 'all 1s';
            fakeCard.style.top = '20vh';
            fakeCard.style.left = '10vw';
        }, 1000)

        elem.classList.add("opened");
        fakeCard.classList.add("clicked");
        document.getElementById("x-button")!.style.opacity = "1";
        let currentFrame = document.getElementById(`demo-frame-${foundIndex}`);
        currentFrame!.classList.add("active-frame");          
    }

    demoAnimations(){
        let windowWidth = window.innerWidth;
        let windowHeight = window.innerHeight;
        let demos = document.getElementsByClassName("flippety");

        for (let i = 0; i < demos.length; ++i) {
            Vue.prototype.$scrollmagic.addScene(new Vue.prototype.$scrollmagic.scene({
                triggerElement: `#${demos[i].id}`,
                duration: demos[i].clientWidth * 1.25,
                offset: demos[i].clientWidth * .3,
                triggerHook: 'onEnter',
                reverse: false,
            }).setTween(`#${demos[i].id}`, {y: i % 2 === 0 ? -window.innerHeight * 0.85 : window.innerHeight * 0.85, ease: Sine.easeNone})
            )
        }
    }

    closeAll() {
        console.log("x-button-clicked");
        let cards = document.getElementsByClassName("demo-section-frames")[0].children;
    
        for (let i = 0; i < cards.length; ++i) {
            cards[i].classList.remove("flat");
        }

        let fakeCard = document.getElementById("fake-card")!;
        fakeCard.style.width = '';
        fakeCard.style.height = '';
        fakeCard.style.left = '';
        fakeCard.style.top = '';
        fakeCard.style.borderRadius = '';        
        
        fakeCard.classList.remove("clicked");
        document.getElementsByClassName("opened")[0].classList.remove("opened");
        document.getElementsByClassName("active-frame")[0].classList.remove("active-frame");
        let x_button = document.getElementById("x-button")!;     
        x_button.style.transition = "transition: opacity .5s ease-in-out 0s";
        x_button.style.opacity = "0";
        x_button.style.transition = "transition: opacity .5s ease-in-out 1.5s";

        



        // setTimeout(() => {
        //     fakeCard.style.transition = 'all 1s';
        //     fakeCard.style.top = '20vh';
        //     fakeCard.style.left = '10vw';
        // }, 1000)       
    }
    
    getParentSection(elementName: string): string {
        const element = document.getElementById(elementName);
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
</script>

<style lang="scss" scoped>
#demo-section {
    display: flex;
    flex-direction: row;

    #x-button {
        //transition: opacity .5s ease-in-out 1.5s;
        text-align: left;
        position: absolute;
        width: 40px;
        height: 40px;
        opacity: 0;
        left: 10vw;
        top: calc(20vh - 40px);
        cursor: pointer;
    }

    iframe {
        height: 60vh;
        width: 60vw;
        top: 20vh;
        left: 10vw;
        transition: opacity 1s ease 5s;
        position: absolute;
        visibility: hidden;
        border-width: 0px;
        opacity: 0;
    }

    #fake-card {
        transition: border-radius 1s ease 0s, width 1s ease 1s, height 1s ease 0s, transform 1s;
        position: absolute;
        top: 0;
        left: 0;
        background-color: black;
    }

    .clicked {
        width: 60vw !important;
        height: 60vh !important;
        border-radius: 0 !important;
    }

    .demo-section-text, .demo-section-icons {
        display: flex;
    }

    .flat {
        transition: height 1s;
        height: 0px !important;
        
        * {
            transition: opacity .2s;
            opacity: 0.0 !important;
        }
    }

    .active-frame {
        visibility: visible;
        transition: visbility 0s, opacity 1s ease-in-out 2s;
        opacity: 1;
    }
    
    .opened {
        visibility: hidden;

        img {
            transition: opacity .5s;
            opacity: 0.0;
            //display: none;
        }

        h6 {
            transition: opacity .5s;
            opacity: 0.0;
            //display: none;
        }

        p {            
            transition: opacity .5s;
            opacity: 0.0;
            //display: none;
        }

    }


    .demo-section-text {
        margin-top: 5vh;
        margin-left: 30px;
    }

    .placeholder {
        max-width: 300px;
        position: absolute;
        right: -10vh;
        z-index: -1;
    }

    .demo-section-text, .demo-section-icons {
        display: flex;
    }

    .demo-section-frames {
        width: 140vh; // 175vh * 55% + 43.75vh (175vh * 50% / 2)
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;

        .demo-section-frame:nth-child(odd) {
            border-radius: 10px 10px 0 0;
            margin: auto 10px -85vh 10px;
            
            img {
                margin: auto auto 0 auto;
            }
        }

        .demo-section-frame:nth-child(even) {
            border-radius: 0 0px 10px 10px;
            margin: -85vh 10px auto 10px;

            img {
                margin: 0 auto auto auto;
            }

            h6, p {
                order: 2;
            }

        }

        .demo-section-frame {
            box-shadow: 0px 4px 18px rgba(0, 0, 0, 0.5);
            width: 40%;
            height: 85%;
            background: white;
            cursor: pointer;

            display: flex;
            flex-direction: column;

            img {
                max-width: 100%;
                height: 85%;
                object-fit: cover;
            }

            h6 {
                font-size: 28px;
                padding-top: 15px !important;
            }

            h6, p {
                text-align: left;
                margin-bottom: 10px;
                margin-top: 0;
                padding: 0 15px;
            }
        }
    }  

    .demo-section-frames-parallax-margin {
        width: 12.5vh;
    }

    .demo-section-text {
        margin-top: 5vh;
        margin-left: 30px;
        display: flex;
        width: 70vh;

        flex-direction: column;
        align-items: flex-start;
        justify-content: space-around;

        .main-text {
            text-align: left;
            margin-bottom: 15vh;
        }

        .title, .subtitle {
            font-weight: normal;
            text-align: left;
            margin: 0;
        }
    }

    .demo-section-text-parallax-margin {
        width: 40vh;
    }
}

@media (max-height: 480px), (max-width: 768px) {
    .placeholder {
        display: none;
    }
}
</style>