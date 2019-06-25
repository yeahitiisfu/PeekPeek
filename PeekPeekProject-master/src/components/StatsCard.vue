<template>
    <div class="stats-card">
        <div class="stats-card-content">
            <p class="card-number">{{cardNumber}}</p>
            <div class="card-separator"></div>
            <p class="card-subtitle">{{supportiveTitle}}</p>
            <p class="card-title">{{title}}</p>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class StatsCard extends Vue {
    @Prop() private cardNumber!: string;
    @Prop() private supportiveTitle!: string;
    @Prop() private title!: string;
}
</script>

<style lang="scss" scoped>
.stats-card {
    width: 31.25vh;
    height: 25vh;
    background-color: rgb(254, 255, 254);
    border-radius: 10px;
    box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.18);
    display: flex;
    flex-direction: column;
    justify-content: center;
    

    .stats-card-content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: start;

        p {
            color: black;
        }

        .card-number {
            font-size: 9vh;
            font-weight: bold;
        }

        .card-separator {
            width: 9vh;
            margin: 1.4vh 0;
            height: 1vh;
            background-color: #8f8f94;
            border-radius: 4px;
        }

        .card-subtitle {
            font-size: 2.5vh;
        }

        .card-title {
            font-size: 2.5vh;
            font-weight: bold;
            color: #1c7d83;
        }
    }   
}
</style>
