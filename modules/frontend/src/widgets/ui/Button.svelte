<script lang="ts">
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();

  export let size: 'normal' | 'small' | 'medium' | 'large' | 'huge' = 'normal';
  export let title = '';
  export let className = '';
  export let disabled = false;
</script>

<button on:click="{() => !disabled && dispatch('click')}" class="{className}" {disabled}>{title}</button>

<style lang="postcss">
  button {
    @apply rounded-xl bg-blue-500 px-8 py-1 text-white transition-colors duration-300 hover:bg-blue-700;
  }
</style>
