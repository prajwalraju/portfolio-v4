<script>
  export let project;
  let isHovered = false;
  import githubLogo from "$lib/images/githubLogo.png";
  import externalLogo from "$lib/images/externalLogo.svg";
</script>

{#if project}
  <div
    class="individualProjectContienr flex flex-col md:flex-row lg:flex-row text-base gap-5 p-2 hover:bg-backgroundSeleted "
    on:mouseover={() => (isHovered = true)}
    on:mouseout={() => (isHovered = false)}
    on:focus={() => (isHovered = true)}
    on:blur={() => (isHovered = false)}
    role="presentation"
  >
    <div
      class="projectTitle md:w-[7rem] lg:w-[10rem] text-xl"
      style="color: {isHovered ? 'var(--highlight-text)' : 'var(--basic-text)'}"
    >
      {project.title}
    </div>
    <div
      class="descContiner flex flex-col flex-grow gap-3"
      style="color: {isHovered ? 'var(--highlight-text)' : 'var(--basic-text)'}"
    >
      {#if project.company}
        <div>made @ {project.company}</div>
      {/if}
      <div
        class="projectDescription break-words"
        style="color: {isHovered
          ? 'var(--highlight-text)'
          : 'var(--basic-text)'}"
      >
        {project.shortDesc}
      </div>
    </div>
    <div class="flex gap-2">
      {#each Object.entries(project.links) as [key, value]}
        <a href={value} class="animate__animated animate__fadeInLeft">
          <img
            class="vectorIcon w-8 h-8"
            alt=""
            src={key === "github"
              ? isHovered
                ? githubLogo
                : "/disabled/githubLogo.svg"
              : isHovered
                ? externalLogo
                : "/disabled/externalLogo.svg"}
          />
        </a>
      {/each}
    </div>
  </div>
{/if}
