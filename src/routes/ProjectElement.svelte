<script>
  export let projectData;
  export let alignLeft = false;
  import githubLogo from "$lib/images/githubLogo.png";
  import externalLogo from "$lib/images/externalLogo.svg";
</script>

<div
  class="projectContainer flex flex-col lg:flex-row gap-8"
  class:containerAlignLeft={alignLeft}
>
  <div class="flex flex-1 justify-center">
    <img
      src={projectData.image}
      class="projectImage rounded-lg object-contain"
      alt=""
    />
  </div>
  <div
    class="projectDescription flex-1 flex flex-col gap-4"
    class:descriptionAlignLeft={!alignLeft}
  >
    <b>{projectData.title}</b>
    <p class="descText" class:marginRight={alignLeft}>
      {projectData.description}
    </p>
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

  .descText {
    border-radius: var(--br-3xs);
    background-color: var(--background-grey);
    padding: 1.6rem;
  }

  @media (min-width: 1024px) {
    .containerAlignLeft {
      flex-direction: row-reverse;
    }

    .descriptionAlignLeft {
      align-items: end;
    }

    .descText {
      margin-left: -7rem;
    }

    .marginRight {
      margin-left: 0;
      margin-right: -7rem;
    }
  }
</style>
