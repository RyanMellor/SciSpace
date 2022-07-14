<script context="module">
</script>

<script>
  import {
    Content,
    Grid,
    Row,
    Column,
  } from "carbon-components-svelte";
  import "carbon-components-svelte/css/all.css";

  import SciCard from "$lib/SciCard.svelte"

  import CirclePacking from "carbon-icons-svelte/lib/CirclePacking.svelte";
  import ChartHistogram from "carbon-icons-svelte/lib/ChartHistogram.svelte";
  import ChartLineSmooth from "carbon-icons-svelte/lib/ChartLineSmooth.svelte";
  import Activity from "carbon-icons-svelte/lib/Activity.svelte";
</script>

<svelte:head>
  <title>Applications</title>
</svelte:head>

<Content>
  <div class="center" style="padding:2em;">
    <h1>
      <span class="text-highlight">SCI</span>
      <span class="text-bold">SPACE</span>
    </h1>
    <h3>Applications</h3>
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
        <h2>Methods in Pharmacy</h2>
      </div>
    </Row> -->
    <Row>
      <SciCard
      icon={ChartLineSmooth}
      text="Raman Signal Processor"
      href="/applications/RamanSignalProcessor"
      />
      <SciCard
      icon={ChartHistogram}
      text="UV-Vis Deconvolution"
      href="/applications/UVVisDeconvolution"
      />
      <SciCard
      icon={CirclePacking}
      text="Particle Counter"
      href="/applications/ParticleCounter"
      />
      <SciCard
      icon={Activity}
      text="HPLC Simulator"
      href="/applications/HPLCSimulator"
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
