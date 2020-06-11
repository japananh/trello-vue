import { uuid } from "./utils";

export default {
  name: "workshop",
  columns: [
    {
      name: "todo",
      tasks: [
        {
          description: "",
          name: "first task",
          id: uuid(),
          userAssigned: null
        },
        {
          description: "",
          name: "second task",
          id: uuid(),
          userAssigned: null
        },
        {
          description: "",
          name: "and third",
          id: uuid(),
          userAssigned: null
        }
      ]
    }
  ]
};
