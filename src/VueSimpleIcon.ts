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
          viewBox: "0 0 24 24",
          xmlns: "http://www.w3.org/2000/svg"
        }
      },
      children
    );
  }
})
export default class VueSimpleIcon extends Vue {
  @Prop({
    type: String,
    validator: x => Object.keys(SimpleIcons).indexOf(x) !== -1
  })
  name!: string;

  @Prop(String)
  color!: string;

  @Prop(String)
  title!: string;

  @Prop(Boolean)
  small!: string;
  @Prop(Boolean)
  medium!: string;
  @Prop(Boolean)
  large!: string;
  @Prop(Boolean)
  xLarge!: string;
  @Prop([String, Number])
  size!: string | number;

  get iconSize() {
    if (this.small) return 12;
    if (this.medium) return 24;
    if (this.large) return 36;
    if (this.xLarge) return 48;
    if (this.size) return this.size;
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
