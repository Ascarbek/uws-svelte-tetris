<script lang="ts">
  import Input from '$widgets/ui/Input.svelte';
  import Button from '$widgets/ui/Button.svelte';
  import { signUp } from '$features/api/UserApi';
  import { onMount } from 'svelte';
  import { SignUpSubject } from '$features/messages/MessageHandlerMap';
  import { showMessage } from '$features/modals/Modals';
  import PasswordInput from '$widgets/ui/PasswordInput.svelte';
  import { goto } from '$app/navigation';

  let username = '';
  let password = '';

  onMount(() => {
    const unsub = SignUpSubject.subscribe((response) => {
      if (!response.success) {
        return showMessage('Error', response.error);
      }
      goto('/');
    });

    return () => {
      unsub();
    };
  });

  const onSignUpClick = () => {
    signUp({
      username,
      password,
    });
  };
</script>

<div class="w-full h-full flex items-center justify-center">
  <div class="border rounded px-4 py-2 flex flex-col gap-4">
    <div>Sign Up</div>

    <div>
      <span>Username:</span>
      <Input bind:value="{username}" />
    </div>

    <div>
      <span>Password:</span>
      <PasswordInput bind:value="{password}" />
    </div>

    <div>
      <Button title="Sign Up" on:click="{onSignUpClick}"></Button>
    </div>
  </div>
</div>
