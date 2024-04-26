<script>
  export let data;
</script>

<svelte:head>
  <title>Publications - Prajwal Raju P</title>
  <meta
    name="description"
    content="This are the publications from Prajwal Raju P"
  />
</svelte:head>

<section>
  <div
    class="publicationsContainer flex flex-col items-center gap-6 text-5xl py-9"
  >
    <div class="accentText py-2 bg-accentColor">IEEE</div>
    <div class="text-xl md:w-[50rem] text-justify">
      I'm obsessed with side projects and building in public. Here you can
      navigate to {data.data.length} different websites, apps, and libraries I built.
      Some projects are still active, others have been discontinued.
    </div>
    {#if data.data.length}
      <div
        class="allPublicationsContainer flex flex-col gap-12 w-full md:w-[50rem]"
      >
        <div class="text-4xl text-highlightColor">All Publications</div>
        {#each data.data as publication}
          <a href={publication.url} >
            <div class="PublicationsContainer flex flex-col gap-4">
              <div class="text-highlightColor">{publication.title}</div>
              <div class="flex flex-col gap-2 md:flex-row justify-between">
                <div class="text-xl">
                  Published on {publication.publication}
                </div>
                <div class="text-xl inline-flex">{publication.date}</div>
              </div>
              <div class="flex gap-4 overflow-x-auto whitespace-nowrap">
                {#each publication.authors as author}
                  <div class="text-lg bg-hoverColor rounded-2xl p-1 px-4">
                    {author.name}
                  </div>
                {/each}
              </div>
              <div class="text-xl pt-6">{publication.shortDesc}</div>
            </div>
          </a>
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
