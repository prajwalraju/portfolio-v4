<script>
  export let skill;
  export let selected = false;
</script>

<div class="flex gap-4 items-center">
  <div class="line w-10 h-1" class:selected />
  <p class:selectedText={selected}>{skill}</p>
</div>

<style>
  .line {
    background: var(--basic-text);
  }

  .selectedText {
    color: var(--highlight-text);
  }
  .selected {
    width: 5rem;
    background-color: var(--highlight-text);
  }
</style>
