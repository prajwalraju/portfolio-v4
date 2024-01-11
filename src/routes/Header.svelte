<script>
  import logo from "$lib/images/Logo.svg";
  import config from "$lib/config.json";
</script>

<header
  class="flex flex-1 w-full flex-col md:flex-row lg:flex-row xl:flex-row 2xl:flex-row gap-2"
>
  <a href="/" class="w-10">
    <img src={logo} alt="Prajwal Raju P" />
  </a>

  <nav class="justify-center flex w-full">
    <ul class="navMenu flex gap-2 overflow-scroll items-center">
      {#each Object.keys(config.navBarData) as element (element)}
        <a href={config.navBarData[element].link}
          >{config.navBarData[element].name}</a
        >
      {/each}
    </ul>
  </nav>
</header>
