<script>
  export let data;
  import Project from "../../components/page/Project.svelte";

  const groupedByYear = data.data.reduce((acc, project) => {
    const year = new Date(project.date).getFullYear();
    if (!acc[year]) {
      acc[year] = [];
    }
    acc[year].push(project);
    return acc;
  }, {});

  const entries = Object.entries(groupedByYear).sort((a, b) => b[0] - a[0]);
  console.log(groupedByYear);
</script>

<svelte:head>
  <title>Projects - Prajwal Raju P</title>
  <meta name="description" content="This are the projects for Prajwal Raju P" />
</svelte:head>

<section>
  <div class="projectContainer flex flex-col items-center gap-6 text-5xl py-9">
    <div class="accentText py-2 bg-accentColor">Work. Hobby. Open Source.</div>
    <div class="text-xl md:w-[50rem] text-justify">
      I'm obsessed with side projects and building in public. Here you can
      navigate to {data.data.length} different websites, apps, and libraries I built.
      Some projects are still active, others have been discontinued.
    </div>
    {#if data.data.length}
      <div class="allProjectsContainer flex flex-col gap-12 w-full md:w-[50rem]">
        <div class="text-4xl text-highlightColor">All Projects</div>
        {#each entries as [year, projects]}
          <div class="projectYearContainer flex flex-col gap-5">
            <div class="text-highlightColor">{year}</div>
            <div class="individualProjectsContienr flex flex-col gap-10">
              {#each projects as project}
                <Project {project} />
              {/each}
            </div>
          </div>
        {/each}
      </div>
    {/if}
  </div>
</section>

<style>
  .accentText {
    background: var(--accent);
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
</style>
