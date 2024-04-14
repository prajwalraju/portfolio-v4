<script>
  export let data;
  import githubLogo from "$lib/images/githubLogo.png";
  import externalLogo from "$lib/images/externalLogo.svg";

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
    <div class=" accentText bg-accentColor">Work. Hobby. Open Source.</div>
    <div class="text-xl w-[50rem] text-justify">
      I'm obsessed with side projects and building in public. Here you can
      navigate to {data.data.length} different websites, apps, and libraries I built.
      Some projects are still active, others have been discontinued.
    </div>
    <div class="allProjectsContainer flex flex-col gap-12 w-[50rem]">
      {#if data.data.length}
        <div class="text-4xl text-highlightColor">All Projects</div>
        {#each entries as [year, projects]}
          <div class="projectYearContainer flex flex-col gap-5">
            <div class="text-highlightColor">{year}</div>
            <div class="individualProjectsContienr flex flex-col gap-5">
              {#each projects as project}
                <div
                  class="individualProjectContienr flex flex-col md:flex-row lg:flex-row text-base gap-5 hover:boder hover:border-white "
                >
                  <div class="projectTitle w-[10rem] text-xl">
                    {project.title}
                  </div>
                  <div class="descContiner flex flex-col flex-grow gap-3 w-max">
                    {#if project.company}
                      <div>made @ {project.company}</div>
                    {/if}
                    <div class="projectDescription">
                      {project.shortDesc}
                    </div>
                  </div>
                  <div class="flex">
                    {#each Object.entries(project.links) as [key, value]}
                      <a
                        href={value}
                        class="animate__animated animate__fadeInLeft p-2"
                      >
                        <img
                          class="vectorIcon w-8 h-8"
                          alt=""
                          src={key === "github"
                            ? "/disabled/githubLogo.svg"
                            : "/disabled/externalLogo.svg"}
                        />
                      </a>
                    {/each}
                  </div>
                </div>
              {/each}
            </div>
          </div>
        {/each}
      {/if}
    </div>
  </div>
</section>

<style>
  .accentText {
    background: var(--accent);
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
</style>
