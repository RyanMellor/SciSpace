<script context="module">
</script>

<script>
  import { Content, Grid, Row, Column } from "carbon-components-svelte";
  import "carbon-components-svelte/css/all.css";

  import SciCard from "$lib/SciCard.svelte"

  import Chemistry from "carbon-icons-svelte/lib/Chemistry.svelte";
</script>

<svelte:head>
  <title>About</title>
</svelte:head>

<Content>
  <div class="center" style="padding:2em;">
    <h1>
      <span class="text-highlight">SCI</span>
      <span class="text-bold">SPACE</span>
    </h1>
    <h3>
      About
    </h3>
  </div>

  <Grid
    fullWidth
    noGutterRight="True"
    noGutterLeft="True"
    padding="True"
    style="padding:2em; border-top:2px solid var(--cds-ui-01);"
  >
    <!-- <Row>
      <div class="center text-highlight">
        <h2>About</h2>
      </div>
    </Row> -->
    <Row>
      <Column sm={1} md={2} lg={4}></Column>
      <SciCard
      icon={Chemistry}
      text="A collection of science information and tools"
      href="#"/>
    </Row>
  </Grid>
</Content>

<style>
  .text-highlight {
    color: #58bbee;
  }

  .text-bold {
    font-weight: 800;
    color: var(--cds-ui-05);
  }

  .center {
    text-align: center;
    margin: auto;
  }
</style>
