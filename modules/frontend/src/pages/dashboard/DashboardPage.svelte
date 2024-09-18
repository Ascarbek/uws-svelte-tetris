<script lang="ts">
  import Button from '$widgets/ui/Button.svelte';
  import { listGames, startGame } from '$features/api/GameApi';
  import { CurrentUser } from '$stores/CurrentUser';
  import { onMount } from 'svelte';
  import type { TCurrentUser, TGameSession } from '@split-tetris/backend';
  import { ListGamesSubject } from '$features/messages/MessageHandlerMap';
  import { showMessage } from '$features/modals/Modals';
  import GamesList from '$widgets/dashboard/GamesList.svelte';

  let sessions: TGameSession[] = [];
  let selectedSessionId = '';

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
    <div class="bg-neutral-100 flex flex-col">
      <GamesList {sessions} bind:selectedSessionId />
    </div>
    <div class="flex items-center gap-4">
      <Button on:click="{onStartGameClick}" title="Start Game" />
      <Button disabled="{selectedSessionId === ''}" title="Join Game" />
    </div>
  </div>
</div>
