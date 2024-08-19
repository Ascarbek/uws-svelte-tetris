<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import { fly, fade } from 'svelte/transition';

  const dispatch = createEventDispatcher();
</script>

<div
  in:fade="{{ duration: 200 }}"
  out:fade="{{ duration: 200, delay: 200 }}"
  class="fixed inset-0 z-20 backdrop-blur-lg"
></div>

<button on:click="{() => dispatch('close')}" class="fixed inset-0 z-20 flex items-center justify-center">
  <button
    on:click|stopPropagation
    in:fly="{{ y: -100, duration: 200, delay: 200 }}"
    out:fly="{{ y: -100, duration: 200 }}"
    class="cursor-default bg-white dark:bg-neutral-800 text-black dark:text-neutral-100 border border-neutral-300 dark:border-neutral-600 rounded-xl"
  >
    <slot />
  </button>
</button>
