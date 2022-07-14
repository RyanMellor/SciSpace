<script>
  import {
    Theme,
    Header,
    HeaderUtilities,
    HeaderAction,
    HeaderPanelLinks,
    HeaderPanelDivider,
    HeaderPanelLink,
    SideNav,
    SideNavItems,
    SideNavLink,
    SideNavDivider,
    SkipToContent,
    Content,
  } from "carbon-components-svelte";
  import "carbon-components-svelte/css/all.css";

  import { page } from "$app/stores";

  import Home from "carbon-icons-svelte/lib/Home.svelte";
  import ToolBox from "carbon-icons-svelte/lib/ToolBox.svelte";
  import Idea from "carbon-icons-svelte/lib/Idea.svelte";
  import InformationSquare from "carbon-icons-svelte/lib/InformationSquare.svelte";

  let isSideNavOpen = false;
  let isUtilitiesOpen = false;

  import { beforeUpdate, afterUpdate } from 'svelte';

  // const changeCss = () => {
  //   console.log("hi")
  //   let treeNodes = document.getElementsByClassName("bx--tree-node__label");
  //   for (var i = 0; i < treeNodes.length; i++) {
  //     let length = treeNodes[i].style.paddingLeft;
  //     length = length.slice(0, -3);
  //     length *= 0.2;
  //     treeNodes[i].style.paddingLeft = length + "rem";
  //   }
  // };

  // afterUpdate(() => {
  //   changeCss();
  // });

</script>

<Theme theme="White" />
<!-- <svelte:window on:load={changeCss}/> -->

<Header company="SciSpace" platformName="" bind:isSideNavOpen>
  <div slot="skip-to-content">
    <SkipToContent />
  </div>
  <HeaderUtilities>
    <HeaderAction bind:isOpen={isUtilitiesOpen}>
      <div style="padding:0.5em;">
        <Theme render="select" persist persistKey="__carbon-theme" />
      </div>
    </HeaderAction>
  </HeaderUtilities>

  <SideNav bind:isOpen={isSideNavOpen} rail>
    <SideNavItems>
      <SideNavLink
        icon={Home}
        text="Home"
        href="/"
        isSelected={$page.url.pathname === "/" || $page.url.pathname === ""}
      />
      <SideNavLink
        icon={Idea}
        text="Knowledge Base"
        href="/knowledge"
        isSelected={$page.url.pathname === "/knowledge"}
      />
      <SideNavLink
        icon={ToolBox}
        text="Applications"
        href="/applications"
        isSelected={$page.url.pathname === "/applications"}
      />
      <SideNavDivider />
      <SideNavLink
        icon={InformationSquare}
        text="About"
        href="/about"
        isSelected={$page.url.pathname === "/about"}
      />
    </SideNavItems>
  </SideNav>
</Header>

<main>
  <Content>
    <slot />
  </Content>
</main>

<style>
  /* :global(.bx--side-nav__icon svg) {
    fill: var(--cds-ui-05);
  } */

  @import "https://fonts.googleapis.com/css?family=Roboto:300,400,500";
  @import "https://fonts.googleapis.com/css?family=Material+Icons&display=block";

  :global(body) {
    font-family: Roboto;
  }

  /* Scrollbar styles */
  :global(::-webkit-scrollbar) {
    width: 8px;
    height: 8px;
  }

  :global(::-webkit-scrollbar-track) {
    background: rgb(100, 100, 100);
    /* border: 1px solid rgb(135, 135, 135); */
  }

  :global(::-webkit-scrollbar-thumb) {
    background: rgb(130, 130, 130);
  }

  :global(::-webkit-scrollbar-thumb:hover) {
    background: rgb(160, 160, 160);
  }

  :global(::-webkit-scrollbar-corner){
    background: none;
  }

  :global(.bx--tree){
    height: -webkit-fill-available;
    overflow: scroll;
  }

  :global(h6) {
    display: flex;
    flex-direction: row;
    color: transparent;
    line-height: 0.5em;;
  }

  :global(h6:hover) {
    content: "";
    color: var(--cds-ui-04);
  }

  :global(h6:before) {
    content: "";
    flex: 1 1;
    border: none;
    margin: auto;
  }

 :global(h6:hover::before) {
    content: "";
    flex: 1 1;
    border: 1px solid var(--cds-ui-04);
    margin: auto;
  }

  
  :global(.add-item) {
    width: 100%;
    color: var(--cds-ui-04);
    border: none;
    vertical-align: middle;
  }

  :global(.add-item:hover) {
    color: var(--cds-ui-05);
    cursor: pointer;
  }
</style>
