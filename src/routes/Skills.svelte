<script>
  import config from "$lib/config.json";
  import Skill from "./Skill.svelte";
  let selected = config.skills[0];
</script>

<div class="flex flex-col gap-10">
  <b class="text-xl text-highlightColor">What I Do</b>
  <div class="flex flex-col gap-4">
    {#each config.skills as skill (skill)}
      <button
        on:click={() => {
          selected = skill;
        }}
      >
        <Skill {skill} selected={selected == skill} />
      </button>
    {/each}
  </div>
</div>
