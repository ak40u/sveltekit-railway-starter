<script lang="ts">
  let { children } = $props()
</script>

<main>
  {@render children()}
</main>

<style>
  :global(:root) {
    color-scheme: light dark;
    font-family: system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
    line-height: 1.6;
  }

  :global(body) {
    margin: 0;
    display: grid;
    place-items: center;
    min-height: 100vh;
  }

  main {
    max-width: 34rem;
    padding: 2rem;
    text-align: center;
  }
</style>
