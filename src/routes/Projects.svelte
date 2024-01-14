<script>
  export let projects;
  import ProjectElement from "./ProjectElement.svelte";
  function toggleDirectionOnIndex(index) {
    return index % 2 === 0;
  }
</script>

{#if Object.keys(projects).length}
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
{/if}
