<script lang="ts">
  import Button from '$widgets/ui/Button.svelte';

  const onLeaveRoomClick = () => {};
</script>

<div class="h-full flex items-center justify-center">
  <div class="flex flex-col gap-4">
    <div>Waiting for a user to join...</div>
    <div></div>
    <div class="flex items-center gap-4">
      <Button on:click="{onLeaveRoomClick}" title="Leave Room" />
    </div>
  </div>
</div>
