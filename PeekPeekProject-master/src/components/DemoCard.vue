<template>
    <div class="demo-section-frame flippety">
        <slot name="iframe"></slot>
        <slot name="title"></slot>
        <slot name="subtitle"></slot>
        <slot name="img"></slot>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class DemoCard extends Vue {
    
}
</script>

<style lang="scss" scoped>

</style>

