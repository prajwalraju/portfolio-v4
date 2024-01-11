<script>
  import config from "$lib/config.json";
  import ProjectElement from "./ProjectElement.svelte";
  let projects = config.featuredProjects;
</script>

<div class="flex flex-col gap-10">
  <b class="text-xl">What I MAKE</b>
  <div class="flex flex-col gap-24">
    {#each Object.keys(projects) as projectName (projectName)}
      <ProjectElement projectData={projects[projectName]} />
    {/each}
  </div>
</div>
