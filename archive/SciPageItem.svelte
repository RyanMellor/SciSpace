<script context="module">
</script>

<script>
  import {
    OverflowMenu,
    OverflowMenuItem,
    Modal,
  } from "carbon-components-svelte";
  import "carbon-components-svelte/css/all.css";
  import { slide, fade } from "svelte/transition";

  import Add16 from "carbon-icons-svelte/lib/Add16";
  import Delete16 from "carbon-icons-svelte/lib/Delete16";
  import SearchLocate16 from "carbon-icons-svelte/lib/SearchLocate16";
  import Copy16 from "carbon-icons-svelte/lib/Copy16";

  import { activeId, projectTree, activeView, expandedIds } from "$lib/stores.js";
  import { copyToClipboard, nodeById } from "$lib/functions.js";
  // import  { deleteNode }  from "$lib/SciProject.svelte";

  import { v4 as uuid } from "@lukeed/uuid";

  export let content;

  let showOptions = false;
  let modalDelItem = false;

  const toggleShowOptions = () => (showOptions = !showOptions);

  const addGroup = (item) => console.log("Add group to " + item.id);
  const addElement = (item) => console.log("Add element to " + item.id);

  const inspectItem = (item) => {
    $activeId = item.id;
  };

  const delItem = () => {
    modalDelItem = true;
  };

  const confirmDelItem = (nodes, id, safeId = $projectTree[0].id) => {
    for (var i = 0; i < nodes.length; i++) {
      if (nodes[i].id === id) {
        nodes.splice(i, 1);
        $activeId = safeId;
        break;
      } else {
        if (nodes[i].children) {
          confirmDelItem(nodes[i].children, id, (safeId = nodes[i].id));
        }
      }
    }
    modalDelItem = false;
    $projectTree = $projectTree;
  };

  export const addItem = (previous, first = false) => {
    let id = uuid();
    $activeId = id;
    let newItem = {
      id: id,
      text: "Group",
      type: "group",
      content: "",
      parameters: [],
      children: [],
      showContent: true,
    };
    if (!first) {
      let parent = nodeById($projectTree, previous.parent);
      newItem.parent = parent.id;
      for (let i = 0; i < parent.children.length; i++) {
        if (parent.children[i].id === previous.id) {
          parent.children.splice(i + 1, 0, newItem);
          break;
        }
      }
    } else {
      let parent = nodeById($projectTree, previous.id);
      newItem.parent = parent.id;
      parent.children.unshift(newItem);
    }
    $expandedIds.push(id)
    $projectTree = $projectTree;
  };
</script>

{#each content as item}
  <Modal
    danger
    size="sm"
    open={modalDelItem}
    modalHeading="Delete item"
    primaryButtonText="Delete"
    secondaryButtonText="Cancel"
    on:close={() => (modalDelItem = false)}
    on:submit={() => {
      confirmDelItem($projectTree, item.id);
    }}
    on:open
  >
    <div>
      <h3>This action is irreversible</h3>
      <br />
      <p>Are you sure you want to delete this item and all children?</p>
      <br />
      <p>ID: {item.id}</p>
    </div>
  </Modal>
  <div class="item-container">
  <div
    class="container-head"
    on:mouseenter={toggleShowOptions}
    on:mouseleave={toggleShowOptions}
  >
    <span class="head-left">
      <button
        style="width:100%;"
        on:click={() => (item.showContent = !item.showContent)}
        aria-expanded={item.showContent}
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
        {item.text}
      </button>
    </span>
    <span class="head-right">
      {#if showOptions}
        <div transition:fade={{ duration: 300 }}>
          <OverflowMenu
            style="display: inline-block; vertical-align: middle; "
            icon={Add16}
            size="sm"
          >
            <OverflowMenuItem text="Add Group" on:click={addGroup(item)} />
            <OverflowMenuItem text="Add Element" on:click={addElement(item)} />
          </OverflowMenu>

          <OverflowMenu
            style="display: inline-block; vertical-align: middle; "
            icon={SearchLocate16}
            size="sm"
            on:click={inspectItem(item)}
          />

          <OverflowMenu
            style="display: inline-block; vertical-align: middle; "
            icon={Delete16}
            size="sm"
            on:click={delItem(item)}
          />
        </div>
      {/if}
    </span>
  </div>
  
    <div class="content" transition:slide={{ duration: 300 }}>
      {#if ["group"].includes(item.type)}
        <div class="add-item" on:click={addItem(item, true)}>
          <h6>&nbsp;+</h6>
        </div>
      {/if}
      {#if item.showContent}
        {#if item.children}
          {#each item.children as child}
            <svelte:self content={[child]} />
          {/each}
        {:else}
          <div>
            {item.content}
          </div>
        {/if}
      {/if}
    </div>
    <div class="add-item" on:click={addItem(item)}>
      <h6>&nbsp;+</h6>
    </div>
  </div>
{/each}

<style>
  .container-head {
    border: 1px solid var(--cds-ui-01);
    background: var(--cds-ui-01);
    display: flex;
    justify-content: space-between;
    color: inherit;
    margin-top: 0.5em;
    text-align: left;
    width: 100%;
    align-items: center;
    height: 2em;
  }

  .head-left {
    width: 70%;
  }

  .head-right {
    text-align: right;
  }

  button {
    background: None;
    color: var(--cds-ui-04);
    cursor: pointer;
    text-align: left;
    vertical-align: middle;
    border: None;
  }

  .content {
    border-left: 2px solid var(--cds-ui-01);
    background: none;
    display: block;
    color: inherit;
    padding: 0.2em;
    padding-right: 0;
    min-height: 0;
  }

  .content:hover{
    border-left: 2px solid var(--cds-ui-04);
  }

  [aria-expanded="true"] svg {
    transform: rotate(0.25turn);
  }

  svg {
    transition: transform 0.2s ease-in;
  }

  .add-item {
    width: 100%;
    color: var(--cds-ui-04);
    border: none;
    vertical-align: middle;
  }

</style>
