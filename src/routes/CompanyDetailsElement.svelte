<script>
  export let companyDetails;
  import pointer from "$lib/images/pointer.png";
</script>

<div class="companyDetailsContainer flex flex-col gap-4">
  <b>{companyDetails.designation}</b>
  <div>
    <span class="companyName">{companyDetails.name}</span>
    <span> • </span>
    <span class="companyLocation">{companyDetails.location}</span>
  </div>
  <div>
    <span class="timeLine">April 2021 - Present</span>
    <span> • </span>
    <span class="duration">2 yr 5 mos</span>
  </div>
  <div class="techStack flex gap-2">
    {#each companyDetails.techStack as tech (tech)}
      <p>{tech}</p>
    {/each}
  </div>
  <div class="descriptionContainer flex flex-col gap-4">
    {#each companyDetails.descriptions as description, index (description)}
      <div class="description flex gap-2">
        <img class="descriptionPointer w-4 h-fit" alt={index} src={pointer} />
        <p class="descriptionText">{description}</p>
      </div>
    {/each}
  </div>
</div>
