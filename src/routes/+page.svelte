<script lang="ts">
  import "../styles/__styles.scss";
  import Header from "../components/Header.svelte";
  import Section from "../components/Section.svelte";
  import GithubIcon from "~icons/fa6-brands/github";
  import LinkedInIcon from "~icons/fa6-brands/linkedin";

  let isShowingDetails = true;
  const toggleDetailsState = () => (isShowingDetails = !isShowingDetails);

  const test = ["About", "About", "About", "About", "About", "About", "About"];
</script>

<div id="app">
  <div id="content">
    <div id="left">
      <Header />
    </div>
    <div id="right">
      {#if isShowingDetails}
        <div id="scroll-content">
          {#each test as section}
            <Section class="content-section" header={section}>
              <p class="about-content">
                Torem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                eu turpis molestie, dictum est a, mattis tellus. Sed dignissim,
                metus nec fringilla accumsan, risus sem sollicitudin lacus, ut
                interdum tellus elit sed risus. Maecenas eget condimentum velit,
                sit amet feugiat lectus.
              </p>
              <p class="about-content">
                Torem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                eu turpis molestie, dictum est a, mattis tellus. Sed dignissim,
                metus nec fringilla accumsan, risus sem sollicitudin lacus, ut
                interdum tellus elit sed risus. Maecenas eget condimentum velit,
                sit amet feugiat lectus.
              </p>
            </Section>
          {/each}
        </div>
      {/if}
    </div>
  </div>
  <div id="profiles-container">
    <a class="a-reset" href="https://github.com/bryceremick" target="_blank"
      ><GithubIcon class="color-secondary" />
    </a>
    <a
      class="a-reset"
      href="https://www.linkedin.com/in/bryce-remick-290921160/"
      target="_blank"
      ><LinkedInIcon class="color-secondary" />
    </a>
  </div>
</div>

<style lang="scss">
  #app {
    width: 100%;
    height: 100%;
    overflow-y: scroll;
    background-color: var(--background-color-primary);
    background: linear-gradient(
      to bottom right,
      var(--background-color-primary),
      var(--background-color-secondary)
    );
    padding: 0px;
    margin: 0px;

    #content {
      display: flex;
      flex-direction: column;
      min-height: 100vh;
      padding: 2rem 1rem;
      gap: 1rem;

      @include small-devices-and-up {
        padding: 3rem 3rem;
      }

      @include medium-devices-and-up {
      }

      @include large-devices-and-up {
        flex-direction: row;
        margin: 0px auto;
        max-width: 1440px;
      }

      #left,
      #right {
        width: 100%;
        @include large-devices-and-up {
          width: 50%;
        }
      }

      #left {
        top: 0px;
        max-height: 100vh;
        display: flex;
        justify-content: center;
        align-items: flex-start;
        flex-direction: column;

        @include large-devices-and-up {
          position: sticky;
        }
      }

      #right #scroll-content {
        display: flex;
        flex-direction: column;
        gap: 15px;
        margin-top: 5rem;
        margin-bottom: 6rem;

        @include large-devices-and-up {
          margin-top: 45vh;
        }

        // :global(.content-section) {
        //   // border: 1px solid white;
        //   // margin-bottom: 25px;
        // }
      }
    }

    #profiles-container {
      // border: 1px solid white;
      position: fixed;
      bottom: 2rem;
      left: 2rem;
      display: flex;
      flex-direction: row;
      gap: 1rem;
    }
  }
</style>
