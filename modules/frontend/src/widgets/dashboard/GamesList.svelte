<script lang="ts">
  import type { TRoom } from '@split-tetris/backend';

  export let sessions: TRoom[] = [];
  export let selectedSessionId = '';

  const onSessionClick = (session: TRoom): void => {
    selectedSessionId = session.id;
  };
</script>

{#each sessions as item (item.id)}
  <button class="item" class:active="{selectedSessionId === item.id}" on:click="{() => onSessionClick(item)}">
    {item.host.username}
  </button>
{/each}
{#if sessions.length === 0}
  <div class="px-4 py-2 text-center">no sessions</div>
{/if}

<style lang="postcss">
  .item {
    @apply cursor-pointer px-4 py-2 hover:bg-neutral-200;
  }
  .item.active {
    @apply bg-sky-700 text-white;
  }
</style>
