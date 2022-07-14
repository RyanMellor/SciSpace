<script context="module">
</script>

<script>
  import { Content, Grid, Row, Column } from "carbon-components-svelte";

  import SciCard from "$lib/SciCard.svelte"

  import ToolBox from "carbon-icons-svelte/lib/ToolBox.svelte";
  import Idea from "carbon-icons-svelte/lib/Idea.svelte";

</script>

<svelte:head>
  <title>Home</title>
</svelte:head>

<Content>
  <div class="center" style="padding:2em;">
    <h1>
      <span class="text-highlight">SCI</span>
      <span class="text-bold">SPACE</span>
    </h1>
    <img width="100rem;" src="/favicon.png" alt=""/>
  </div>

  <Grid
    
    noGutterRight="True"
    noGutterLeft="True"
    padding="True"
    style="padding:2em; border-top:2px solid var(--cds-ui-01); margin:auto;"
  >
    <Row>
      <div class="center text-highlight">
        
      </div>
    </Row>
    <Row>
      <SciCard
      icon={Idea}
        text="Knowledge Base"
        href="/knowledge"
      />
      <SciCard
      icon={ToolBox}
        text="Applications"
        href="/applications"
      />
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