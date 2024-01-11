<script>
  import config from "$lib/config.json";
  let contactDetails = config.contactDetails;
</script>

<div class="pt-5 flex gap-10 items-center justify-center">
  {#each Object.keys(contactDetails) as contactName (contactName)}
    <a href={contactDetails[contactName].link}>
      <img
        class="vectorIcon w-8"
        alt=""
        src={contactDetails[contactName].logo}
      />
    </a>
  {/each}
</div>
