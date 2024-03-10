<script>
  import { page } from "$app/stores";
  import logo from "$lib/images/Logo.svg";
  import config from "$lib/config.json";
</script>

<header class="flex flex-1 w-full flex-col md:flex-row lg:flex-row gap-2">
  <a href="/" class="w-10">
    <img src={logo} alt="Prajwal Raju P" />
  </a>

  <nav class="justify-center flex w-full">
    <ul class="navMenu flex gap-2 overflow-scroll items-center">
      {#each Object.keys(config.navBarData) as element, index (element)}
        <div
          class="flex flex-col p-2 rounded hover:bg-hoverColor items-center animate__animated animate__fadeInDown"
          style="--animate-duration:{(index + 1) * 0.5}s"
        >
          <a
            href={config.navBarData[element].link}
            class:selectedHeader={$page.url.hash ==
              config.navBarData[element].link}
            >{config.navBarData[element].name}</a
          >
          {#if $page.url.hash == config.navBarData[element].link}
            <div class="border-u w-[50%] bg-highlightColor h-0.5"></div>
          {/if}
        </div>
      {/each}
    </ul>
  </nav>
</header>

<style>
  .selectedHeader {
    color: var(--highlight-text);
  }
</style>
