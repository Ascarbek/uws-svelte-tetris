<script lang="ts">
  export let value = '';
  export let size: 'normal' | 'small' | 'medium' | 'large' | 'huge' = 'normal';
</script>

<input bind:value class="{size}" />

<style lang="postcss">
  .normal {
    @apply rounded border px-2 py-1;
  }
</style>
