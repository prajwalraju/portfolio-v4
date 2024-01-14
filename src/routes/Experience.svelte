<script>
  export let companies;
  import CompanyDetailsElement from "./CompanyDetailsElement.svelte";
  import CompanyElement from "./CompanyElement.svelte";
  import pointer from "$lib/images/pointer.png";

  let selectedCompany;
  if (Object.keys(companies).length) {
    selectedCompany = Object.keys(companies)[0];
  }
  function updateSelectedCompany(companyName) {
    selectedCompany = companyName;
  }
</script>

{#if Object.keys(companies).length}
  <div id="career" class="experienceContainer flex flex-col gap-10">
    <b class="text-xl text-highlightColor">History</b>
    <div class="companyContainer flex flex-col lg:flex-row gap-4">
      <div
        class="companyListContainer flex flex-row gap-2 lg:flex-col overflow-scroll lg:overflow-visible lg:gap-0 content-center whitespace-nowrap"
      >
        {#each Object.keys(companies) as companyName (companyName)}
          <button on:click={() => updateSelectedCompany(companyName)}>
            <CompanyElement
              {companyName}
              selected={selectedCompany == companyName}
            />
          </button>
        {/each}
      </div>
      <div class="companyDetails p-4 rounded-lg">
        <CompanyDetailsElement companyDetails={companies[selectedCompany]} />
      </div>
    </div>
    <a
      class="resumeConatiner flex gap-2 items-center"
      href="/PRAJWAL RAJU P.pdf"
    >
      <b class="text-highlightColor">View Full Resume</b>
      <img class="resumePointer w-2 h-fit" alt="" src={pointer} />
    </a>
  </div>
{/if}

<style>
  .companyDetails {
    background: var(--background-grey);
  }
</style>
