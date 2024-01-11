<script>
  import config from "$lib/config.json";
  import CompanyDetailsElement from "./CompanyDetailsElement.svelte";
  import CompanyElement from "./CompanyElement.svelte";
  import pointer from "$lib/images/pointer.png";

  let selectedCompany = Object.keys(config.companies)[0];
</script>

<div class="experienceContainer flex flex-col gap-10">
  <b class="text-xl">History</b>
  <div class="companyContainer flex flex-col xl:flex-row 2xl:flex-row gap-4">
    <div
      class="companyListContainer flex flex-row xl:flex-col 2xl:flex-col overflow-scroll xl:overflow-visible 2xl:overflow-visible gap-4 content-center whitespace-nowrap"
    >
      {#each Object.keys(config.companies) as companyName (companyName)}
        <CompanyElement {companyName} />
      {/each}
    </div>
    <div class="companyDetails p-4 rounded-lg">
      <CompanyDetailsElement
        companyDetails={config.companies[selectedCompany]}
      />
    </div>
  </div>
  <div class="resumeConatiner flex gap-2 items-center">
    <b>View Full Resume</b>
    <img class="resumePointer w-2 h-fit" alt="" src={pointer} />
  </div>
</div>

<style>
  .companyDetails {
    background: var(--background-grey);
  }
</style>
