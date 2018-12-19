/// <reference path="./simple-icons.d.ts" />
import Vue, { VNode } from "vue";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";
import SimpleIcons from "simple-icons";

@Component<VueSimpleIcon>({
  render(h: Function): VNode {
    const icon = SimpleIcons[this.name];
    const svg = this.parser.parseFromString(icon.svg, "image/svg+xml");
    let children: VNode[] = [];
    svg.firstChild &&
      svg.firstChild.childNodes.forEach(node => {
        const _node = node as HTMLElement;

        if (_node.nodeName === "path") {
          const dAttr = _node.attributes.getNamedItem("d") || new Attr();
          const d = dAttr.nodeValue;

          children.push(
            h("path", {
              attrs: {
                d: d,
                fill: this.color || "#" + icon.hex
              }
            })
          );
        } else if (_node.nodeName === "title")
          children.push(h("title", {}, [this.title || _node.textContent]));
      });

    return h("svg", {}, children);
  }
})
export default class VueSimpleIcon extends Vue {
  @Prop()
  name!: string;

  @Prop()
  color!: string;

  @Prop()
  title!: string;

  parser: DOMParser;

  constructor() {
    super();
    this.parser = new DOMParser();
  }
}
