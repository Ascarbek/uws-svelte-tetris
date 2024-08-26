<script lang="ts">
  import Input from '$widgets/ui/Input.svelte';
  import Button from '$widgets/ui/Button.svelte';
  import { onMount } from 'svelte';
  import { SignInSubject } from '$features/messages/MessageHandlerMap';
  import { showMessage } from '$features/modals/Modals';
  import { signIn } from '$features/api/UserApi';
  import { CurrentUser } from '$stores/CurrentUser';
  import { goto } from '$app/navigation';

  let username = '';
  let password = '';

  onMount(() => {
    const unsub = SignInSubject.subscribe((response) => {
      if (!response.success) {
        return showMessage('Error', response.error);
      }
      const { data } = response;
      const { username, jwt } = data;
      $CurrentUser = {
        username,
        jwt,
      };
      goto('/');
    });

    return () => {
      unsub();
    };
  });

  const onSignInClick = () => {
    signIn({
      username,
      password,
    });
  };
</script>

<div class="w-full h-full flex items-center justify-center">
  <div class="border rounded px-4 py-2 flex flex-col gap-4">
    <div>Sign In</div>

    <div>
      <span>Username:</span>
      <Input bind:value="{username}" />
    </div>

    <div>
      <span>Password:</span>
      <Input bind:value="{password}" />
    </div>

    <div>
      <Button title="Sign In" on:click="{onSignInClick}"></Button>
    </div>
  </div>
</div>
