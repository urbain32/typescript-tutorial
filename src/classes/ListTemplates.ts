import { HasFormatter } from "../interfaces/HasFormatter.js";

export class ListTemplates {
  constructor(private container: HTMLDListElement) {}
  render(item: HasFormatter, heading: string, pos: "start" | "end") {
    const list = document.createElement("li");
  }
}
