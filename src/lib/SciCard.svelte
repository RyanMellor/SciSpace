<script context="module">
</script>

<script>
  import { ClickableTile, Column } from "carbon-components-svelte";
  import "carbon-components-svelte/css/all.css";

  export let icon;
  export let text;
  export let href;
</script>

<Column sm={2} md={4} lg={8}>
  <ClickableTile style="border-top:2px solid #58bbee" href={href}>
    <div class="center text-highlight"><svelte:component this={icon} size=64/></div>
    <div class="center">{text}</div>
  </ClickableTile>
</Column>

<style>
  .text-highlight {
    color: #58bbee;
  }

  .center {
    text-align: center;
    margin: auto;
  }
</style>
