<template>
    <button @click="printCaption()">{{ buttonCaption }}</button>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class FormButton extends Vue {
    @Prop() private buttonCaption!: string;

    printCaption = () => {
        console.log(this.buttonCaption)
    }
}
</script>

<style lang="scss" scoped>
button {
    background-color: black;
    color: white;
    font-size: 18px;

    width: 50px;
    height: 50px;
    border-radius: 25px;
}
</style>
