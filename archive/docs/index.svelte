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

  import SciProject from "$lib/SciProject.svelte";
  import SciPage from "$lib/SciPage.svelte";
  import SciInspector from "$lib/SciInspector.svelte";
  import Notifications from "$lib/Notifications.svelte";  
</script>

<svelte:head>
  <title>SciDocs</title>
</svelte:head>

<Content>
  <Grid fullWidth noGutterRight="True" padding="True">
    <Row>
      <Column sm={1} md={2} lg={3} style="height: 85vh; border-right: 2px solid var(--cds-ui-04);">
        <p>Projects</p>
        <SciProject/>
      </Column>

      <Column sm={2} md={4} lg={10} style="height: 85vh;">
        <SciPage/>
      </Column>

      <Column sm={1} md={2} lg={3} style="height: 85vh; border-left: 2px solid var(--cds-ui-04);">
        <p>Inspector</p>
        <SciInspector/>
      </Column>
    </Row>
  </Grid>
</Content>

<Notifications/>
