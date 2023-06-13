<script lang="ts">
  import "../styles/__styles.scss";
  import Section from "../components/Section.svelte";
  import IconButton from "../components/IconButton.svelte";
  import FileDownload from "~icons/mdi/file-download";
  import EyeOff from "~icons/mdi/eye-off";
  import Eye from "~icons/mdi/eye";

  let shouldShowDetails = true;
  const test = ["About", "About", "About", "About", "About", "About", "About"];
</script>

<div id="app">
  <div id="content">
    <div id="left">
      <div id="fixed-content-wrap">
        <div id="profile-img-wrap">
          <img src="/images/profile-min.jpg" alt="" />
        </div>
        <h1>Bryce Remick</h1>
        <h3>
          Software Engineer III <a
            href="https://www.keiser.com/"
            target="_blank">@KeiserCorp</a
          >
        </h3>
        <p>
          I create full-stack software systems for mobile devices & the web.
        </p>
        <div id="button-container">
          <IconButton
            text="Show {true ? 'Less' : 'More'} Details"
            on:click={() => {
              shouldShowDetails = !shouldShowDetails;
            }}
          >
            {#if shouldShowDetails}
              <EyeOff slot="iconLeft" />
            {:else}
              <Eye slot="iconLeft" />
            {/if}
          </IconButton>
          <IconButton text="Download Resume">
            <FileDownload slot="iconLeft" />
          </IconButton>
          <!-- <IconButton text="View Simple Website">
            <FileAccount slot="iconLeft" />
          </IconButton> -->
        </div>
      </div>
    </div>
    <div id="right">
      <div id="scroll-content">
        {#each test as section}
          <Section class="content-section" header={section}>
            <p class="about-content">
              Torem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
              turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
              nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
              tellus elit sed risus. Maecenas eget condimentum velit, sit amet
              feugiat lectus.
            </p>
            <p class="about-content">
              Torem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
              turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
              nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
              tellus elit sed risus. Maecenas eget condimentum velit, sit amet
              feugiat lectus.
            </p>
          </Section>
        {/each}
      </div>
    </div>
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
      flex-direction: row;
      min-height: 100vh;
      max-width: 1440px;
      padding: 0px 6rem;
      margin: 0px auto;
      gap: 1rem;

      #left,
      #right {
        width: 50%;
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
        width: 500px;

        #profile-img-wrap {
          width: 96px;
          height: 96px;
          display: flex;
          justify-content: center;
          align-items: center;
          border: 1px dashed var(--font-color-primary);
          margin-bottom: 1rem;

          img {
            display: block;
            width: 80px;
            height: 80px;
            object-fit: cover;
          }
        }
        h1 {
          font-weight: 900;
          text-transform: uppercase;
          font-size: 48px;
          margin: 0.5rem auto;
          letter-spacing: -1px;
        }

        h3 {
          font-weight: 500;
          margin: 0.5rem auto;
          font-size: 24px;
          a {
            font-weight: 700;
            color: #b83047;
            text-decoration: underline;
          }
        }

        p {
          font-size: 20px;
          margin: 0.5rem auto;
        }

        #button-container {
          margin-top: 1rem;
          display: flex;
          justify-content: flex-start;
          align-items: center;
          gap: 1rem;
        }
      }

      #right #scroll-content {
        display: flex;
        flex-direction: column;
        gap: 15px;
        margin-top: 45vh;
        margin-bottom: 6rem;
        // :global(.content-section) {
        //   // border: 1px solid white;
        //   // margin-bottom: 25px;
        // }
      }
    }
  }

  .about-content {
    margin: 10px 0px;
  }
</style>
