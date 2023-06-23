<script lang="ts">
  import "../styles/__styles.scss";
  import Section from "../components/Section.svelte";
  import IconButton from "../components/IconButton.svelte";
  import FileDownloadIcon from "~icons/mdi/file-download";
  import EyeOffIcon from "~icons/mdi/eye-off";
  import EyeIcon from "~icons/mdi/eye";
  import GithubIcon from "~icons/fa6-brands/github";
  import LinkedInIcon from "~icons/fa6-brands/linkedin";

  let isShowingDetails = true;
  const toggleDetailsState = () => (isShowingDetails = !isShowingDetails);

  const test = ["About", "About", "About", "About", "About", "About", "About"];
</script>

<div id="app">
  <div id="content">
    <div id="left">
      <div id="fixed-content-wrap">
        <div id="profile-img-wrap" class="flex-center">
          <img src="/images/profile-min.jpg" alt="" />
        </div>
        <h1 class="text-lg font-black uppercase color-primary">Bryce Remick</h1>
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

        <div
          id="details-toggle-container"
          class="hover-font-primary"
          on:click={toggleDetailsState}
          on:keydown={() => {}}
        >
          {#if isShowingDetails}
            <EyeOffIcon class="font-color-secondary" />
          {:else}
            <EyeIcon class="font-color-secondary" />
          {/if}
          <span class="font-color-secondary">
            Show {isShowingDetails ? "less" : "more"} details
          </span>
        </div>
      </div>
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
      ><GithubIcon class="font-color-secondary" />
    </a>
    <a
      class="a-reset"
      href="https://www.linkedin.com/in/bryce-remick-290921160/"
      target="_blank"
      ><LinkedInIcon class="font-color-secondary" />
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
        position: sticky;
        top: 0px;
        max-height: 100vh;
        display: flex;
        justify-content: center;
        align-items: flex-start;
        flex-direction: column;
      }

      #left #fixed-content-wrap {
        width: 100%;
        @include small-devices-and-up {
          width: 500px;
        }

        #profile-img-wrap {
          width: 48px;
          height: 48px;
          border: 1px dashed var(--font-color-primary);
          margin-bottom: 0.5rem;

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
            width: 38px;
            height: 38px;
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
          margin: 0.5rem auto;
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
