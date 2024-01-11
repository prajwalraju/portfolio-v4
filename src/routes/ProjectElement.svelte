<script>
  export let projectData;
  import githubLogo from "$lib/images/githubLogo.png";
  import externalLogo from "$lib/images/externalLogo.svg";
</script>

<div class="flex flex-col gap-2">
  <img
    src={projectData.image}
    class="projectImage rounded-lg object-contain"
    alt=""
  />
  <div class="projectDescription flex flex-col gap-4">
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
