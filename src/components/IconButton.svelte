<script lang="ts">
  export let text: string;
</script>

<button class={`button ${$$props.class}`} on:click>
  {#if $$slots.iconLeft}
    <div class="icon-container icon-left">
      <slot name="iconLeft" />
    </div>
  {/if}
  <div
    class="text-container
    {!$$slots.iconLeft ? 'gap-left' : ''} 
    {$$slots.iconRight ? 'lg-gap-right' : 'sm-gap-right'}"
  >
    <span>{text}</span>
  </div>
  {#if $$slots.iconRight}
    <div class="icon-container icon-right">
      <slot name="iconRight" />
    </div>
  {/if}
</button>

<style lang="scss">
  button {
    display: flex;

    .icon-container {
      width: 50px;
      height: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
      //   border: 1px solid white;
    }

    .text-container {
      height: 100%;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      //   margin: 0px 20px;
    }

    .gap-left {
      margin-left: 15px;
    }

    .lg-gap-right {
      margin-right: 25px;
    }
    .sm-gap-right {
      margin-right: 15px;
    }
  }
</style>
