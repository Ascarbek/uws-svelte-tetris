<script lang="ts">
  import Header from '$widgets/nav/Header.svelte';
  import Footer from '$widgets/nav/Footer.svelte';
  import { MessageModal, ModalQueue } from '$stores/ModalStore';
  import Message from '$widgets/popup/Message.svelte';

  $MessageModal = Message;
</script>

<Header />
<main class="container mx-auto">
  <slot />
</main>
<Footer />

{#each $ModalQueue as modal}
  <svelte:component this="{modal}"></svelte:component>
{/each}

<style lang="postcss">
  main {
    height: calc(100vh - 100px);
  }
</style>
