<script lang="ts">
  import { CurrentUser } from '$stores/CurrentUser';
  import { goto } from '$app/navigation';

  const onSignOutClick = () => {
    $CurrentUser = null;
    goto('/');
  };
</script>

<div class="container mx-auto flex items-center justify-between">
  <div class="py-4">
    <a href="/" class="text-xl text-blue-500">UWS Tetris</a>
  </div>
  <div class="py-4 flex items-center gap-4">
    <div>Profile</div>
    <button on:click="{onSignOutClick}">Sign Out</button>
  </div>
</div>
