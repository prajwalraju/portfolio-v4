<script>
  export let contactDetails;
</script>

<div
  class="container pt-20 flex gap-10 items-center justify-center flex-row lg:flex-col lg:fixed lg:bottom-0 lg:left-0 lg:justify-start lg:items-start lg:m-10 w-auto"
>
  {#each Object.keys(contactDetails) as contactName (contactName)}
    <a href={contactDetails[contactName].link}>
      <img
        class="vectorIcon w-8"
        alt=""
        src="/contactMe/{contactDetails[contactName].name}Logo.png"
      />
    </a>
  {/each}
</div>
