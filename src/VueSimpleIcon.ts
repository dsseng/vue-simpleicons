/// <reference path="./simple-icons.d.ts" />
import Vue, { VNode } from "vue";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";
import SimpleIcons from "simple-icons";

@Component<VueSimpleIcon>({
  render(h: Function): VNode {
    const icon = SimpleIcons[this.name];
    if (!icon) return renderError(h);
    const svg = this.parser.parseFromString(icon.svg, "image/svg+xml");
    let children: VNode[] = [];
    svg.firstChild &&
      svg.firstChild.childNodes.forEach(node => {
        const _node = node as HTMLElement;

        if (_node.nodeName === "path") {
          /* istanbul ignore next */
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
        }
        if (_node.nodeName === "title")
          children.push(h("title", {}, [this.title || _node.textContent]));
      });

    return h(
      "svg",
      {
        attrs: {
          width: this.iconSize,
          height: this.iconSize,
          viewBox: "0 0 24 24"
        }
      },
      children
    );
  }
})
export default class VueSimpleIcon extends Vue {
  @Prop({
    validator: x => Object.keys(SimpleIcons).indexOf(x) !== -1
  })
  name!: string;

  @Prop()
  color!: string;

  @Prop()
  title!: string;

  @Prop()
  small!: string;
  @Prop()
  medium!: string;
  @Prop()
  large!: string;
  @Prop()
  xLarge!: string;
  @Prop()
  size!: string | number;

  get iconSize() {
    if (this.small !== undefined) return 12;
    if (this.medium !== undefined) return 24;
    if (this.large !== undefined) return 36;
    if (this.xLarge !== undefined) return 48;
    if (this.size !== undefined) return this.size;
    return 24;
  }

  parser: DOMParser;

  constructor() {
    super();
    this.parser = new DOMParser();
  }
}

const renderError = (h: Function): VNode =>
  h("svg", {}, [
    h("title", {}, ["Icon not found!"]),
    h("circle", {
      attrs: {
        cx: 12,
        cy: 12,
        r: 12,
        fill: "red"
      }
    }),
    h("line", {
      attrs: {
        x1: 12,
        y1: 20,
        x2: 12,
        y2: 20,
        stroke: "#fff",
        fill: "none",
        "stroke-width": 2,
        "stroke-linecap": "round",
        "stroke-miterlimit": 10
      }
    }),
    h("line", {
      attrs: {
        x1: 12,
        y1: 5,
        x2: 12,
        y2: 15,
        stroke: "#fff",
        fill: "none",
        "stroke-width": 2,
        "stroke-linecap": "round",
        "stroke-miterlimit": 10
      }
    })
  ]);
