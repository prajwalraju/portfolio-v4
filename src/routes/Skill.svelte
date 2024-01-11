<script>
  export let skill;
  export let selected = false;
</script>

<div class="flex gap-4 items-center">
  <div class="line w-10 h-1" />
  <p>{skill}</p>
</div>

<style>
  .line {
    background: var(--basic-text);
  }
</style>
