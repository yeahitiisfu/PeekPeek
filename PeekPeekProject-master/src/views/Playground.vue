<template>
<div>
    <p>This is a playground!</p>
    <FormButton v-for="caption of captions" :key="caption.id" :buttonCaption="caption"/>
</div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import FormButton from "@/components/FormButton.vue"; // @ is an alias to /src

@Component({
  components: {
    FormButton
  }
})
export default class Playground extends Vue {
    captions:string[] = ["Aha!", "Yeet"]
}
</script>

<style lang="scss" scoped>
p {
    margin: 10px auto;
}
</style>

