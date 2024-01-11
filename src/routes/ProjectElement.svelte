<script>
  export let projectData;
  export let alignLeft = false;
  import githubLogo from "$lib/images/githubLogo.png";
  import externalLogo from "$lib/images/externalLogo.svg";
</script>

<div class="flex flex-col lg:flex-row xl:flex-row 2xl:flex-row gap-8">
  <div class="flex flex-1 justify-center">
    <img
      src={projectData.image}
      class="projectImage rounded-lg object-contain "
      alt=""
    />
  </div>
  <div class="projectDescription flex-1 flex flex-col gap-4">
    <b>{projectData.title}</b>
    <p class="descText">{projectData.description}</p>
    <div class="techStack flex gap-2">
      {#each projectData.techStack as tech (tech)}
        <p>{tech}</p>
      {/each}
    </div>
    <a href={projectData.link}>
      <img
        class="logoIcon w-8"
        alt=""
        src={projectData.linkOfGithub ? githubLogo : externalLogo}
      />
    </a>
  </div>
</div>

<style>
  .projectImage {
    background: var(--basic-text);
  }
</style>
