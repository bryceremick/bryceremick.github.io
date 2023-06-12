<script lang="ts">
  export let header: string;
</script>

<section class={$$props.class}>
  <h3>{header}</h3>
  <slot />
</section>

<style lang="scss">
  section h3 {
    font-size: 24px;
    font-weight: 500;
    margin-top: 0px;
    margin-bottom: 10px;
  }
</style>
