/// <reference path="./simple-icons.d.ts" />
import Vue, { VNode } from "vue";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";
import SimpleIcons from "simple-icons";

@Component<VueSimpleIcon>({
  render(createElement: Function): VNode {
    const icon = SimpleIcons[this.name];
    if (!icon) return renderError("Icon not found", createElement);

    let svgContent = icon.svg.replace(/<\/?svg[^>]*>/, "");
    if (this.title) {
      svgContent = svgContent.replace(
        /<title>.*<\/title>/,
        `<title>${this.title}</title>`
      );
    }

    return createElement("svg", {
      attrs: {
        fill: this.color || `#${icon.hex}`,
        width: this.iconSize,
        height: this.iconSize,
        viewBox: "0 0 24 24"
      },
      domProps: {
        innerHTML: svgContent
      }
    });
  }
})
export default class VueSimpleIcon extends Vue {
  @Prop({
    type: String,
    validator: name => Object.keys(SimpleIcons).indexOf(name) !== -1
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

  constructor() {
    super();
  }

  get iconSize() {
    if (this.small) return 12;
    if (this.medium) return 24;
    if (this.large) return 36;
    if (this.xLarge) return 48;
    if (this.size) return this.size;
    return 24;
  }
}

const renderError = (title: String, h: Function): VNode =>
  h("svg", {}, [
    h("title", {}, [title]),
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
