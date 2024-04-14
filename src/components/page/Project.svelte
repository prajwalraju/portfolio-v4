<script>
  export let project;
</script>

{#if project}
  <div
    class="individualProjectContienr flex flex-col md:flex-row lg:flex-row text-base gap-5 hover:boder hover:border-white"
  >
    <div class="projectTitle md:w-[7rem] lg:w-[10rem] text-xl">
      {project.title}
    </div>
    <div class="descContiner flex flex-col flex-grow gap-3">
      {#if project.company}
        <div>made @ {project.company}</div>
      {/if}
      <div class="projectDescription break-words">
        {project.shortDesc}
      </div>
    </div>
    <div class="flex">
      {#each Object.entries(project.links) as [key, value]}
        <a href={value} class="animate__animated animate__fadeInLeft p-2">
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
{/if}
