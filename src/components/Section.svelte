<script lang="ts">
  export let header: string;
</script>

<section class={$$props.class}>
  <header>
    <h3 class="text-norm font-bold uppercase">{header}</h3>
  </header>
  <slot />
</section>

<style lang="scss">
  header {
    position: sticky;
    top: 0;
    padding: 0.5rem 0;
    backdrop-filter: blur(10px);
    // width: 100vw;
  }
  h3 {
    margin: 0;
    letter-spacing: 1px;
  }
</style>
