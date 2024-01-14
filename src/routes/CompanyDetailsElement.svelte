<script>
  export let companyDetails;
  import pointer from "$lib/images/pointer.png";
  import { differenceInMonths, differenceInYears } from "date-fns";

  $: startDate = new Date(companyDetails.startDate);
  $: startDateInString = startDate.toLocaleString("en-US", {
    year: "numeric",
    month: "long",
  });

  $: endDateInString =
    companyDetails.endDate == null
      ? "Present"
      : new Date(companyDetails.endDate).toLocaleString("en-US", {
          year: "numeric",
          month: "long",
        });
  $: endDate =
    companyDetails.endDate == null
      ? new Date()
      : new Date(companyDetails.endDate);

  function dateDifference(date1, date2) {
    let diffInYears = differenceInYears(date1, date2);
    let diffInMonths = differenceInMonths(date1, date2) % 12;
    return diffInYears === 0
      ? `${diffInMonths} mos`
      : `${diffInYears} yrs ${diffInMonths} mos`;
  }

  $: timeDifferenceInString = dateDifference(endDate, startDate);
</script>

<div class="companyDetailsContainer flex flex-col gap-4">
 <b class="text-highlightColor">{companyDetails.designation}</b>
  <div>
    <span class="companyName text-highlightColor">{companyDetails.name}</span>
    <span> • </span>
    <span class="companyLocation">{companyDetails.location}</span>
  </div>
  <div>
    <span class="timeLine">{startDateInString} - {endDateInString}</span>
    <span> • </span>
    <span class="duration">{timeDifferenceInString}</span>
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
