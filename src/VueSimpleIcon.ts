/// <reference path="./simple-icons.d.ts" />
import Vue, { VNode } from "vue";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";
import SimpleIcons from "simple-icons";

@Component<VueSimpleIcon>({
  render(h: Function): VNode {
    const icon = SimpleIcons[this.name];
    const svg = this.parser.parseFromString(icon.svg, "image/svg+xml");
    let paths: string[] = [];
    let title: string = "";
    svg.firstChild &&
      svg.firstChild.childNodes.forEach((node: any) => {
        if (node.nodeName === "path") paths.push(node.attributes.d.nodeValue);
        else if (node.nodeName === "title") title = node.textContent;
      });

    return h("svg", {}, [
      h("title", {}, [title]),
      ...paths.map(d => {
        return h("path", {
          attrs: {
            d: d,
            fill: this.color || "#" + icon.hex
          }
        });
      })
    ]);
  }
})
export default class VueSimpleIcon extends Vue {
  @Prop()
  name!: string;

  @Prop()
  color!: string;

  parser: DOMParser;

  constructor() {
    super();
    this.parser = new DOMParser();
  }
}
