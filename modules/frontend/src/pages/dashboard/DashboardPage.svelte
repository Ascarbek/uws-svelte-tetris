<script lang="ts">
  import Button from '$widgets/ui/Button.svelte';
</script>

<div class="h-full flex items-center justify-center">
  <div class="flex flex-col gap-4">
    <div>List of game sessions</div>
    <div class="border rounded border-neutral-400 p-4 flex flex-col gap-2">
      <div>session1</div>
      <div>session2</div>
    </div>
    <div class="flex items-center gap-4">
      <Button title="Start Game"/>
      <Button title="Join Game"/>
    </div>
  </div>
</div>
