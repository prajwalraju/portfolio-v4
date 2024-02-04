<script context="module">
  export const prerender = true;
</script>

<script>
  import { onMount } from "svelte";
  import ContactMe from "./ContactMe.svelte";
  import Header from "./Header.svelte";
  import SplashScreen from "./SplashScreen.svelte";
  import "./styles.css";
  import "animate.css";
  export let data;

  let showSplash = true;

  onMount(() => {
    setTimeout(() => {
      showSplash = false;
    }, 800);
  });
</script>

{#if showSplash}
  <SplashScreen />
{:else}
  <div class="app flex flex-col p-3 lg:p-10">
    <Header />

    <main>
      <slot />
    </main>

    <footer>
      <ContactMe contactDetails={data.data.contactDetails} />
    </footer>
  </div>
{/if}
