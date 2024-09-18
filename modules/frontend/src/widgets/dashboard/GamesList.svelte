<script lang="ts">
  import type { TGameSession } from '@split-tetris/backend';

  export let sessions: TGameSession[] = [];
  export let selectedSessionId = '';

  const onSessionClick = (session: TGameSession): void => {
    selectedSessionId = session.id;
  };
</script>

{#each sessions as item (item.id)}
  <button class="item" class:active="{selectedSessionId === item.id}" on:click="{() => onSessionClick(item)}">
    {item.host.username}
  </button>
{/each}

<style lang="postcss">
  .item {
    @apply cursor-pointer px-4 py-2 hover:bg-neutral-200;
  }
  .item.active {
    @apply bg-sky-700 text-white;
  }
</style>
