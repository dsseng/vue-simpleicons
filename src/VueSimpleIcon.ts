/// <reference path="./simple-icons.d.ts" />
import Vue, { VNode } from "vue";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";
import * as SimpleIcons from "simple-icons";
import { renderError } from "./util";

@Component<VueSimpleIcon>({
  render(createElement: Function): VNode {
    const icon = SimpleIcons[this.name];
    if (!icon)
      return renderError("Icon not found", this.iconSize, createElement);

    const title = this.title ? this.title : `${icon.title} icon`;

    return createElement(
      "svg",
      {
        attrs: {
          fill: this.color || `#${icon.hex}`,
          width: this.iconSize,
          height: this.iconSize,
          viewBox: "0 0 24 24",
          xmlns: "http://www.w3.org/2000/svg"
        }
      },
      [
        createElement("title", title),
        createElement("path", {
          attrs: {
            d: icon.path
          }
        })
      ]
    );
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
