<script context="module">
</script>

<script>
  import { TreeView } from "carbon-components-svelte";
  import "carbon-components-svelte/css/all.css";

  import LoadBalancerClassic16 from "carbon-icons-svelte/lib/LoadBalancerClassic16";
  import ExpandAll16 from "carbon-icons-svelte/lib/ExpandAll16";
  import DocumentBlank16 from "carbon-icons-svelte/lib/DocumentBlank16";
  import ChartBarFloating16 from "carbon-icons-svelte/lib/ChartBarFloating16";
  import GroupResource16 from "carbon-icons-svelte/lib/GroupResource16";

  import {
    activeId,
    activeView,
    activeTree,
    projectTree,
    projectFlat,
    expandedIds,
  } from "$lib/stores.js";

  import { v4 as uuid } from "@lukeed/uuid";
  // console.log(uuid())

  const icons = {
    project: LoadBalancerClassic16,
    collection: ExpandAll16,
    subsection: ChartBarFloating16,
    page: DocumentBlank16,
    group: GroupResource16,
  };

  const createDataTree = (nodes) => {
    const hashTable = Object.create(null);
    nodes.forEach((aData) => {
      hashTable[aData.id] = {
        ...aData,
        showContent: true,
        icon: icons[aData.type],
        breadcrumbs: [],
        children: [],
      };
      $expandedIds.push(aData.id);
    });
    const dataTree = [];
    nodes.forEach((aData) => {
      if (aData.parent) {
        hashTable[aData.parent].children.push(hashTable[aData.id]);
        let parentBreadcrumbs = hashTable[aData.parent].breadcrumbs;
        hashTable[aData.id].breadcrumbs = [...parentBreadcrumbs];
        hashTable[aData.id].breadcrumbs.push({
          id: hashTable[aData.parent].id,
          text: hashTable[aData.parent].text,
        });
      } else dataTree.push(hashTable[aData.id]);
    });
    return dataTree;
  };

  const traverse = (parent) => {
    if (parent.children.length === 0) delete parent.children;
    else parent.children.forEach((child) => traverse(child));
  };

  const nodeById = (nodes, id) => {
    let res;
    const findNode = (nodes, id) => {
      for (let i = 0; i < nodes.length; i++) {
        if (nodes[i].id === id) {
          res = nodes[i];
          break;
        }
        if (nodes[i].children) {
          findNode(nodes[i].children, id);
        }
      }
    };
    findNode(nodes, id);
    return res;
  };

  const viewById = (nodes, id) => {
    let node = nodeById(nodes, id);
    if (["project", "collection", "subsection", "page"].includes(node.type))
      return node;
    else return viewById(nodes, node.parent);
  };

  $projectTree = createDataTree($projectFlat);
  $projectTree.forEach((child) => traverse(child));

  $: $activeTree = nodeById($projectTree, $activeId);
  $: $activeView = viewById($projectTree, $activeId);
</script>

<div style="height:100%; padding-bottom:2rem">
  <TreeView
    hideLabel="True"
    size="compact"
    children={$projectTree}
    bind:activeId={$activeId}
    bind:expandedIds={$expandedIds}
    style="font-size:8pt;"
  /> 
</div>
<style>
</style>
