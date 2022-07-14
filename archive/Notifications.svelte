<script>
  import { ToastNotification } from "carbon-components-svelte";
  import { notificationStore } from "$lib/stores.js";

  const removeNotification = (notification) => {
    for (let i = $notificationStore.length - 1; i >= 0; i--) {
      if ($notificationStore[i].id === notification.id) {
        $notificationStore.splice(i, 1);
      }
    }
  };
</script>

<div class="notification-position">
  {#each $notificationStore as n}
    <ToastNotification
      kind={n.kind}
      title={n.title}
      caption={n.caption}
      subtitle={n.subtitle}
      timeout={n.timeout}
      on:close={removeNotification(n)}
    />
  {/each}
</div>

<style>
  .notification-position {
    position: fixed;
    width: 400px;
    bottom: 50px;
    right: 0;
  }
</style>
