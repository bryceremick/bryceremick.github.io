<script lang="ts">
  import "../styles/__styles.scss";
  import EyeOffIcon from "~icons/mdi/eye-off";
  import EyeIcon from "~icons/mdi/eye";

  let isShowingDetails = true;
  const toggleDetailsState = () => (isShowingDetails = !isShowingDetails);
</script>

<header>
  <div id="profile-img-name" class="flex-row-center-left">
    <div id="profile-img-wrap" class="flex-center">
      <img src="/images/profile-min.jpg" alt="profile" />
    </div>
    <h1 class="text-lg font-black uppercase color-primary">Bryce Remick</h1>
  </div>
  <h3 class="text-md font-med color-primary">
    Software Engineer III <a
      class="font-bold"
      href="https://www.keiser.com/"
      target="_blank">@KeiserCorp</a
    >
  </h3>
  <p class="text-norm font-norm">
    I create full-stack software systems for mobile devices & the web.
  </p>

  <!-- <div
    id="details-toggle-container"
    class="hover-color-primary"
    on:click={toggleDetailsState}
    on:keydown={() => {}}
  >
    {#if isShowingDetails}
      <EyeOffIcon class="color-secondary" />
    {:else}
      <EyeIcon class="color-secondary" />
    {/if}
    <span class="color-secondary">
      Show {isShowingDetails ? "less" : "more"} details
    </span>
  </div> -->
</header>

<style lang="scss">
  header {
    width: 100%;
    @include small-devices-and-up {
      width: 500px;
    }

    #profile-img-wrap {
      width: 42px;
      height: 42px;
      border: 1px dashed var(--font-color-primary);
      // margin-bottom: 0.5rem;

      @include small-devices-and-up {
        width: 64px;
        height: 64px;
      }
      @include medium-devices-and-up {
        width: 96px;
        height: 96px;
      }

      img {
        display: block;
        width: 32px;
        height: 32px;
        object-fit: cover;

        @include small-devices-and-up {
          width: 54px;
          height: 54px;
        }
        @include medium-devices-and-up {
          width: 86px;
          height: 86px;
        }
      }
    }

    h1 {
      margin: 0 1rem;
      letter-spacing: -1px;
    }

    h3 {
      margin: 0.5rem auto;
      a {
        color: #b83047;
      }
    }

    p {
      margin: 0.5rem auto;
    }

    #details-toggle-container {
      display: flex;
      gap: 10px;
      margin-top: 2rem;
      cursor: pointer;
      user-select: none;

      span {
        font-size: 16px;
        text-decoration: underline;
        text-underline-offset: 4px;
      }
    }
  }
</style>
