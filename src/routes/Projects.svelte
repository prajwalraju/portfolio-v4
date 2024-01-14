<script>
  import config from "$lib/config.json";
  import ProjectElement from "./ProjectElement.svelte";
  let projects = config.featuredProjects;
  function toggleDirectionOnIndex(index) {
    return index % 2 === 0;
  }
</script>

<div id="projects" class="flex flex-col gap-10">
  <b class="text-xl text-highlightColor">What I MAKE</b>
  <div class="flex flex-col gap-36">
    {#each Object.keys(projects) as projectName, index (projectName)}
      <ProjectElement
        projectData={projects[projectName]}
        alignLeft={toggleDirectionOnIndex(index)}
      />
    {/each}
  </div>
</div>
