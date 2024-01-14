<script>
  export let companyName;
  export let selected = false;
</script>

<div class="flex gap-2">
  <div class="border w-1 hidden xl:block" class:borderSelected={selected}></div>
  <b class:selected class="py-2">{companyName}</b>
</div>

<style>
  .border {
    background-color: var(--basic-text);
    border-color: var(--basic-text);
  }
  .borderSelected {
    background-color: var(--highlight-text);
    border-color: var(--highlight-text);
  }
  .selected {
    color: var(--highlight-text);
  }
</style>
