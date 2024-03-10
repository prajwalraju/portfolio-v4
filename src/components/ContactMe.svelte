<script>
  export let contactDetails;

  import { onMount } from "svelte";
  let isVisible = false;
  onMount(() => {
    setTimeout(() => {
      isVisible = true;
    }, 900);
  });
</script>

<div
  class="container hidden pt-20 gap-10 items-center justify-center flex-row lg:flex-col lg:fixed lg:bottom-0 lg:left-0 lg:justify-start lg:items-start lg:m-10 w-auto"
  class:show={isVisible}
>
  {#each Object.keys(contactDetails) as contactName, index (contactName)}
    <a
      href={contactDetails[contactName].link}
      class="animate__animated animate__fadeInLeft"
      style="--animate-duration:{(index + 1) * 0.3}s"
    >
      <img
        class="vectorIcon w-8"
        alt=""
        src="/contactMe/{contactDetails[contactName].name}Logo.svg"
      />
    </a>
  {/each}
</div>

<style>
  .hidden {
    display: none;
  }
  .show {
    display: flex;
  }
</style>
