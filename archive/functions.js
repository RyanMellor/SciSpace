import { notificationStore } from "$lib/stores.js";
import { v4 as uuid } from "@lukeed/uuid";


export function notify(options) {
    notificationStore.update(ns => [...ns, options])
  }

export const copyToClipboard = (value) => {
    notify({
      id: uuid(),
      kind: "success",
      title: "",
      caption: value,
      subtitle: "Copied to clipboard:",
      timeout: 2000,
    });
  };

 export const nodeById = (nodes, id) => {
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