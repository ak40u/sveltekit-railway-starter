<script lang="ts">
  let count = $state(0)
</script>

<h1>SvelteKit on Railway</h1>

<p>Server-rendered by adapter-node, listening on the port the platform assigns.</p>

<button onclick={() => count++}>clicked {count} times</button>

<p class="hint">Edit <code>src/routes/+page.svelte</code> and save.</p>

<style>
  button {
    font: inherit;
    padding: 0.5rem 1.25rem;
    border-radius: 0.5rem;
    border: 1px solid currentColor;
    background: transparent;
    color: inherit;
    cursor: pointer;
  }

  .hint {
    opacity: 0.7;
    font-size: 0.9rem;
  }
</style>
