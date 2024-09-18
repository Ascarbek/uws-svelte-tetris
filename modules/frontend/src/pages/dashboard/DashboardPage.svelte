<script lang="ts">
  import Button from '$widgets/ui/Button.svelte';
  import { joinGame, listGames, startGame } from '$features/api/GameApi';
  import { CurrentUser } from '$stores/CurrentUser';
  import { onMount } from 'svelte';
  import type { TCurrentUser, TRoom } from '@split-tetris/backend';
  import { JoinGameSubject, ListGamesSubject } from '$features/messages/MessageHandlerMap';
  import { showMessage } from '$features/modals/Modals';
  import GamesList from '$widgets/dashboard/GamesList.svelte';
  import { goto } from '$app/navigation';

  let sessions: TRoom[] = [];
  let selectedSessionId = '';

  onMount(() => {
    const unsubList = ListGamesSubject.subscribe((response) => {
      if (!response.success) {
        return showMessage('Error', response.error);
      }
      if (!$CurrentUser) return;
      const { items } = response;
      sessions = [...items];

      const findMy = sessions.find((s) => s.host.username === $CurrentUser.username);
      if (findMy) {
        goto('/waiting-room');
      }
    });

    const unsubJoin = JoinGameSubject.subscribe((response) => {
      if (!response.success) {
        return showMessage('Error', response.error);
      }
    });

    loadSessions($CurrentUser);

    return () => {
      unsubList();
      unsubJoin();
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

  const onJoinGameClick = () => {
    if (!$CurrentUser) return;
    joinGame({
      jwt: $CurrentUser.jwt,
      sessionId: selectedSessionId,
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
      <Button disabled="{selectedSessionId === ''}" on:click="{onJoinGameClick}" title="Join Game" />
    </div>
  </div>
</div>
