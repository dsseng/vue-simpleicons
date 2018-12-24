/// <reference path="./simple-icons.d.ts" />
import Vue, { VNode } from "vue";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";
import SimpleIcons from "simple-icons";

@Component<VueSimpleIcon>({
  render(createElement: Function): VNode {
    const icon = SimpleIcons[this.name];
    if (!icon)
      return renderError("Icon not found", this.iconSize, createElement);

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
        viewBox: "0 0 24 24",
        xmlns: "http://www.w3.org/2000/svg"
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

  @Prop({
    type: String,
    validator: color => {
      if (color === "") return false;
      if (color === "inherit") return false;
      if (color === "transparent") return false;

      const el = document.createElement("div");

      el.style.color = "rgb(0, 0, 0)";
      el.style.color = color;
      if (el.style.color !== "rgb(0, 0, 0)") return true;
      el.style.color = "rgb(255, 255, 255)";
      el.style.color = color;
      return el.style.color !== "rgb(255, 255, 255)";
    }
  })
  color!: string;

  @Prop(String)
  title!: string;

  @Prop(Boolean)
  small!: Boolean;
  @Prop(Boolean)
  medium!: Boolean;
  @Prop(Boolean)
  large!: Boolean;
  @Prop(Boolean)
  xLarge!: Boolean;
  @Prop([Number, String])
  size!: number | string;

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

const renderError = (
  title: string,
  iconSize: number | string,
  h: Function
): VNode =>
  h(
    "svg",
    {
      attrs: {
        width: iconSize,
        height: iconSize,
        viewBox: "0 0 24 24",
        xmlns: "http://www.w3.org/2000/svg"
      }
    },
    [
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
    ]
  );
