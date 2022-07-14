<script context="module">
</script>

<script>
  import { TextInput } from "carbon-components-svelte";
  import "carbon-components-svelte/css/all.css";
  import SciCollapsible from "$lib/SciCollapsible.svelte";
  import { activeTree, projectTree } from "$lib/stores.js";
  import { copyToClipboard } from "$lib/functions.js";

  import Edit16 from "carbon-icons-svelte/lib/Edit16";
  import Checkmark16 from "carbon-icons-svelte/lib/Checkmark16";
  import Close16 from "carbon-icons-svelte/lib/Close16";
  import Copy16 from "carbon-icons-svelte/lib/Copy16";

  let renaming = false;
  let newName = "";

  const confirmRename = () => {
    $activeTree.text = newName;
    renaming = !renaming;
    $projectTree = $projectTree;
  };
</script>

<SciCollapsible title="Name">
  <td
    class="value"
    style="justify-content: space-between; display: flex; align-items:center;"
  >
    {#if !renaming}
      {$activeTree.text}
      <div>
        <button
          on:click={() => {
            newName = $activeTree.text;
            renaming = !renaming;
          }}><Edit16 /></button
        >
      </div>
    {:else}
      <div class="cover" />
      <div
        class="nofade"
        style="justify-content: space-between; display: flex; align-items:center;"
      >
        <TextInput
          size="sm"
          bind:value={newName}
          on:keyup={(event) => {
            if (event.keyCode === 13) confirmRename();
          }}
        />
        <div>
          <button on:click={confirmRename}><Checkmark16 /></button>
          
            <button
              on:click={() => {
                renaming = !renaming;
              }}
              ><Close16 />
            </button>
          
        </div>
      </div>
    {/if}
  </td>
</SciCollapsible>

<SciCollapsible title="ID">
  <td>
    <p class="value light">
      {$activeTree.id}
      <button on:click={copyToClipboard($activeTree.id)}>
        <Copy16 />
      </button>
    </p>
  </td>
</SciCollapsible>

<SciCollapsible title="Type">
  {#if $activeTree.subtype}
    <td class="value">{$activeTree.type} - {$activeTree.subtype}</td>
  {:else}
    <td class="value">{$activeTree.type}</td>
  {/if}
</SciCollapsible>

{#if $activeTree.children}
  <SciCollapsible title="Children">
    {#each $activeTree.children as child}
      <tr>
        <td class="value">
          {child.text}
        </td>
        <td class="light">
          {child.type}
        </td>
      </tr>
    {/each}
  </SciCollapsible>
{/if}

{#if !$activeTree.parameters.length == 0}
  <SciCollapsible title="Parameters">
    {#each $activeTree.parameters as parameter}
      <tr>
        <td class="value">
          {parameter.text}
        </td>
        <td class="light">
          {parameter.value}
        </td>
      </tr>
    {/each}
  </SciCollapsible>
{/if}

​

<style>
  td {
    padding: 0.5em;
  }

  .value {
    padding-left: 2rem;
  }

  .light {
    font-size: 8pt;
    color: var(--cds-ui-04);
  }

  button {
    background: None;
    color: inherit;
    cursor: pointer;
    text-align: left;
    vertical-align: middle;
    border: None;
    /* width: 100%; */
  }
  .cover {
    position: absolute;
    top: 0px;
    bottom: 0px;
    left: 0px;
    right: 0px;
    background-color: var(--cds-ui-05);
    z-index: 1;
    opacity: 0.3;
  }
  .nofade {
    background: var(--cds-ui-01);
    position: relative;
    z-index: 2;
  }
</style>
