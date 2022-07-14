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

  import NavaidMilitary from "carbon-icons-svelte/lib/NavaidMilitary.svelte";
  import ScalesTipped from "carbon-icons-svelte/lib/ScalesTipped.svelte";
  import LoadBalancerClassic from "carbon-icons-svelte/lib/LoadBalancerClassic.svelte";
  import WatsonHealthDna from "carbon-icons-svelte/lib/WatsonHealthDna.svelte";
  import Compass from "carbon-icons-svelte/lib/Compass.svelte";
  import Medication from "carbon-icons-svelte/lib/Medication.svelte";
</script>

<svelte:head>
  <title>Knowledge Base</title>
</svelte:head>

<Content>
  <div class="center" style="padding:2em;">
    <h1>
      <span class="text-highlight">SCI</span>
      <span class="text-bold">SPACE</span>
    </h1>
    <h3>Knowledge Base</h3>
  </div>

  <Grid
    fullWidth
    noGutterRight="True"
    noGutterLeft="True"
    padding="True"
    style="padding:2em; border-top:2px solid var(--cds-ui-01);"
  >
    <Row>
      <!-- <div class="center text-highlight">
        <h2>Methods in Pharmacy</h2>
      </div> -->
    </Row>
    <Row>
      <SciCard
      icon={NavaidMilitary}
      text="Basic Concepts"
      href="https://docs.sci-space.co.uk/methods-in-pharmacy/basic-concepts"/>
      <SciCard
      icon={ScalesTipped}
      text="Analysis"
      href="https://docs.sci-space.co.uk/methods-in-pharmacy/analysis"/>
      <SciCard
      icon={LoadBalancerClassic}
      text="Processing"
      href="https://docs.sci-space.co.uk/methods-in-pharmacy/processing"/>
      <SciCard
      icon={WatsonHealthDna}
      text="Biological"
      href="https://docs.sci-space.co.uk/methods-in-pharmacy/biological"/>
      <SciCard
      icon={Compass}
      text="Pre-Formulation and Formulation"
      href="https://docs.sci-space.co.uk/methods-in-pharmacy/pre-formulation-and-formulation"/>
      <SciCard
      icon={Medication}
      text="Clinical Trials"
      href="https://docs.sci-space.co.uk/methods-in-pharmacy/clinical-trials"/>
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
