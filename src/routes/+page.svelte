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
  <div class="heroContainer flex flex-col h-[90vh] justify-center">
    <Hero />
  </div>
  <div
    class="contentContainer flex flex-col gap-8 content-center justify-center w-full"
  >
    <About />
    <Experience />
    <Skills />
    <Projects />
  </div>
</section>
