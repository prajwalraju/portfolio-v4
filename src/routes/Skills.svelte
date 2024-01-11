<script>
  import config from "$lib/config.json";
  import Skill from "./Skill.svelte";
</script>

<div class="flex flex-col gap-10">
  <b class="text-xl">What I Do</b>
  <div class="flex flex-col gap-4">
    {#each config.skills as skill (skill)}
      <Skill {skill} />
    {/each}
  </div>
</div>
