<script>
  export let data;
  import About from "../components/page/About.svelte";
  import Experience from "../components/page/Experience.svelte";
  import Hero from "../components/page/Hero.svelte";
  import Projects from "../components/page/HeroProjects.svelte";
  import Skills from "../components/page/Skills.svelte";
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
      <Experience companies={data.data.companies} />
      <Skills skills={data.data.skills} />
      <Projects projects={data.data.featuredProjects} />
    </div>
  </div>
</section>
