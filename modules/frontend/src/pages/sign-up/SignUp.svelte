<script lang="ts">
  import Input from '$widgets/ui/Input.svelte';
  import Button from '$widgets/ui/Button.svelte';

  let username = '';
  let password = '';

  const onSignUpClick = () => {

  }
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
      <Input bind:value="{password}" />
    </div>

    <div>
      <Button title="Sign Up" on:click={onSignUpClick}></Button>
    </div>
  </div>
</div>