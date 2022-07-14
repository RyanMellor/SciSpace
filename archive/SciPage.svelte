<script context="module">
</script>

<script>
  import {
    Button,
    ButtonSet,
    Breadcrumb,
    BreadcrumbItem,
  } from "carbon-components-svelte";
  import "carbon-components-svelte/css/all.css";
  import SciPageItem from "$lib/SciPageItem.svelte";
  import { activeId, activeView, activeTree } from "$lib/stores.js";

</script>

{#if !["project"].includes($activeTree.type)}
  <Breadcrumb>
    {#each $activeView.breadcrumbs as breadcrumb}
      <BreadcrumbItem href="#" on:click={() => ($activeId = breadcrumb.id)}>
        {breadcrumb.text}
      </BreadcrumbItem>
    {/each}
  </Breadcrumb>
{/if}
<p>{$activeView.text}</p>

<div class="main-view" style="margin:2px">
  <ButtonSet stacked>
    {#if ["project", "collection", "subsection"].includes($activeTree.type)}
      {#each $activeTree.children as child}
        <Button kind="ghost" on:click={() => ($activeId = child.id)}>
          {child.text}
        </Button>
      {/each}
    {:else}
    <div class="add-item">
      <h6>&nbsp;+</h6>
    </div>
      {#each $activeView.children as item}
        <SciPageItem content={[item]} />
      {/each}
    {/if}
  </ButtonSet>
</div>

<style>
  .main-view {
    height: 75vh;
    overflow-y: scroll;
    overflow-x: hidden;
    padding-right: 1rem;
    height:95%;
    padding-bottom:1rem;
  }

.add-item {
    width: 100%;
    color: var(--cds-ui-04);
    padding: 0.2em;
    border: none;
    vertical-align: middle;
  }

  .add-item:hover {
    color: var(--cds-ui-05);
  }

</style>
