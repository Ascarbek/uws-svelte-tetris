<script lang="ts">
  import Popup from '$widgets/shared/Popup.svelte';
  import { MessageModalData } from '$stores/ModalStore';
  import { popModal } from '$features/modals/ModalQueue';

  const onCloseClick = () => {
    popModal();
  };
</script>

<Popup on:close="{onCloseClick}">
  <div class="border-b border-neutral-300 py-2 px-4 w-[500px]">{$MessageModalData.title}</div>
  <div class="py-12 text-center px-8">{$MessageModalData.message}</div>
  <div class="flex pb-4 items-center justify-center gap-4">
    <button on:click="{onCloseClick}">Ok</button>
  </div>
</Popup>

<style lang="postcss">
  button {
    @apply h-[40px] w-[220px] rounded-lg bg-sky-700 text-white;
  }
</style>
