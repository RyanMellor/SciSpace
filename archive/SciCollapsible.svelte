<script context="module">
</script>

<script>
  import "carbon-components-svelte/css/all.css";

  import { slide } from "svelte/transition";

  export let title;

  let showContent = true;
</script>

<table>
  <tr>
    <button
      on:click={() => (showContent = !showContent)}
      aria-expanded={showContent}
    >
      <svg
        style="tran"
        width="10"
        height="10"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        viewBox="0 0 24 24"
        stroke="currentColor"
        ><path d="M9 5l7 7-7 7" />
      </svg>
      {title}
    </button>
  </tr>
  {#if showContent}
    <tr>
      <div transition:slide={{ duration: 300 }}>
        <slot />
    </div>
    </tr>
  {/if}
</table>

<style>
  table {
    border: 1px solid var(--cds-ui-02);
    width: 100%;
    margin-top: 0.5em;
  }
  
  /* td {
    padding: 0.5em;
  } */

  button {
    background: None;
    color: inherit;
    cursor: pointer;
    text-align: left;
    vertical-align: middle;
    border: None;
    width: 100%;
  }

  [aria-expanded="true"] svg {
    transform: rotate(0.25turn);
  }

  svg {
    transition: transform 0.2s ease-in;
  }
</style>
