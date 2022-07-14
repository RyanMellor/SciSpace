import { writable } from 'svelte/store';

export const activeId = writable("9a2a2c8c-cac7-4b93-8d1d-d00119460e30");
export const activeView = writable();
export const activeTree = writable();
export const expandedIds = writable([]);

export const notificationStore = writable([]);

export const projectTree = writable()
export const projectFlat = writable([
    {id: "aa573434-827d-449a-aa2c-8ccac78b93cd", text: "Project",          type: "project",    parent: null,                                   content: null             , parameters: [],                                                     },
    {id: "57343482-7d74-4a2a-ac8c-cac78b93cd1d", text: "Collection",       type: "collection", parent: "aa573434-827d-449a-aa2c-8ccac78b93cd", content: null             , parameters: [],                                                     },
    {id: "3434827d-749a-4a2c-8cca-c78b93cd1dd0", text: "Sub-section",      type: "subsection", parent: "57343482-7d74-4a2a-ac8c-cac78b93cd1d", content: null             , parameters: [],                                                     },
    {id: "34827d74-9a2a-4c8c-8ac7-8b93cd1dd001", text: "Page 1",           type: "page",       parent: "3434827d-749a-4a2c-8cca-c78b93cd1dd0", content: null             , parameters: [],                                                     },
    {id: "827d749a-2a2c-4cca-878b-93cd1dd00119", text: "Group 1.1",        type: "group",      parent: "34827d74-9a2a-4c8c-8ac7-8b93cd1dd001", content: null             , parameters: [],                                                     },
    {id: "7d749a2a-2c8c-4ac7-8b93-cd1dd0011946", text: "Group 1.1.1",      type: "group",      parent: "827d749a-2a2c-4cca-878b-93cd1dd00119", content: null             , parameters: [],                                                     },
    {id: "749a2a2c-8cca-478b-93cd-1dd00119460e", text: "Element 1.1.1.1",  type: "element",    parent: "7d749a2a-2c8c-4ac7-8b93-cd1dd0011946", content: "Content 1.1.1.1", parameters: [{text: "p1", value: "v1"}, {text: "p2", value: "v2"}], },
    {id: "9a2a2c8c-cac7-4b93-8d1d-d00119460e30", text: "Page 2",           type: "page",       parent: "3434827d-749a-4a2c-8cca-c78b93cd1dd0", content: null             , parameters: [],                                                     },
    {id: "2c8ccac7-8b93-4d1d-9001-19460e30dfc5", text: "Group 2.1",        type: "group",      parent: "9a2a2c8c-cac7-4b93-8d1d-d00119460e30", content: null             , parameters: [],                                                     },
    {id: "8ccac78b-93cd-4dd0-8119-460e30dfc5d2", text: "Element 2.1.1",    type: "element",    parent: "2c8ccac7-8b93-4d1d-9001-19460e30dfc5", content: "Content 2.1.1"  , parameters: [{text: "p1", value: "v1"}, {text: "p2", value: "v2"}], },
    {id: "cac78b93-cd1d-4001-9946-0e30dfc5d24a", text: "Element 2.1.2",    type: "element",    parent: "2c8ccac7-8b93-4d1d-9001-19460e30dfc5", content: "Content 2.1.2"  , parameters: [{text: "p1", value: "v1"}, {text: "p2", value: "v2"}], },
    {id: "fa6f5534-36d1-477d-ac37-4f5f372b7596", text: "Group 2.2",        type: "group",      parent: "9a2a2c8c-cac7-4b93-8d1d-d00119460e30", content: null             , parameters: [],                                                     },
    {id: "3436d1b7-7d6c-474f-9f37-2b75969cb50b", text: "Group 2.2.1",      type: "group",      parent: "fa6f5534-36d1-477d-ac37-4f5f372b7596", content: null             , parameters: [],                                                     },
    {id: "6f553436-d1b7-4d6c-b74f-5f372b75969c", text: "Element 2.2.1.1",  type: "element",    parent: "3436d1b7-7d6c-474f-9f37-2b75969cb50b", content: "Content 2.2.1.1", parameters: [{text: "p1", value: "v1"}, {text: "p2", value: "v2"}], },
    {id: "553436d1-b77d-4c37-8f5f-372b75969cb5", text: "Element 2.2.1.2",  type: "element",    parent: "3436d1b7-7d6c-474f-9f37-2b75969cb50b", content: "Content 2.2.1.2", parameters: [{text: "p1", value: "v1"}, {text: "p2", value: "v2"}], },
  ]);