<script lang="ts">
  import Header from '$widgets/nav/Header.svelte';
  import Footer from '$widgets/nav/Footer.svelte';
</script>

<Header />
<main class="container mx-auto">
  <slot />
</main>
<Footer />

<style lang="postcss">
  main {
    height: calc(100vh - 100px);
  }
</style>
