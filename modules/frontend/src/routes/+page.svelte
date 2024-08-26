<script lang="ts">
  import HomePage from '$pages/home/HomePage.svelte';
  import { CurrentUser } from '$stores/CurrentUser';
  import DashboardPage from '$pages/dashboard/DashboardPage.svelte';
</script>

{#if $CurrentUser === null}
  <HomePage />
{:else}
  <DashboardPage />
{/if}
