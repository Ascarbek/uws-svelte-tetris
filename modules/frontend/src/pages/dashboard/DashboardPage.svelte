<script lang="ts">
  import Button from '$widgets/ui/Button.svelte';
  import { listGames, startGame } from '$features/api/GameApi';
  import { CurrentUser } from '$stores/CurrentUser';
  import { onMount } from 'svelte';
  import type { TCurrentUser, TGameSession } from '@split-tetris/backend';
  import { ListGamesSubject } from '$features/messages/MessageHandlerMap';
  import { showMessage } from '$features/modals/Modals';

  let sessions: TGameSession[] = [];

  onMount(() => {
    const unsubList = ListGamesSubject.subscribe((response) => {
      if (!response.success) {
        return showMessage('Error', response.error);
      }
      const { items } = response;
      sessions = [...items];
    });

    loadSessions($CurrentUser);

    return () => {
      unsubList();
    };
  });

  const loadSessions = (user: TCurrentUser | null) => {
    if (!user) return;
    listGames({ jwt: user.jwt });
  };

  const onStartGameClick = () => {
    if (!$CurrentUser) return;
    startGame({
      jwt: $CurrentUser.jwt,
    });
  };
</script>

<div class="h-full flex items-center justify-center">
  <div class="flex flex-col gap-4">
    <div>List of game sessions</div>
    <div class="border rounded border-neutral-400 p-4 flex flex-col gap-2">
      {#each sessions as item (item.id)}
        <div>{item.host.username}</div>
      {/each}
    </div>
    <div class="flex items-center gap-4">
      <Button on:click="{onStartGameClick}" title="Start Game" />
      <Button title="Join Game" />
    </div>
  </div>
</div>
