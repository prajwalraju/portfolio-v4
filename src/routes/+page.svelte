<script>
  import About from "./About.svelte";
  import Experience from "./Experience.svelte";
  import Hero from "./Hero.svelte";
  import Projects from "./Projects.svelte";
  import Skills from "./Skills.svelte";
</script>

<svelte:head>
  <title>Prajwal Raju P</title>
  <meta name="description" content="This is a portfolio for Prajwal Raju P" />
</svelte:head>

<section>
  <div class="heroContainer flex flex-col h-[95vh] justify-center">
    <Hero />
  </div>
  <div class="flex w-full justify-center">
  <div
    class="contentContainer flex flex-col gap-24 content-center justify-center w-full md:w-[30rem] lg:w-[50rem]"
  >
    <About />
    <Experience />
    <Skills />
    <Projects />
  </div>
</div>
</section>
