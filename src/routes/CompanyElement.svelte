<script>
  export let companyName;
  export let selected = false;
</script>

<div class="flex lg:gap-2 items-center lg:items-stretch flex-col lg:flex-row">
  <div class="border w-1 hidden lg:block" class:borderSelected={selected} />
  <b class:selected class="py-2">{companyName}</b>
  <div class="w-[50%] block lg:hidden h-0.5" class:borderSelected={selected} />
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
