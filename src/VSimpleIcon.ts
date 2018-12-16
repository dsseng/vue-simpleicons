/// <reference path="./simple-icons.d.ts" />
import Vue, { VNode } from "vue";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";
import SimpleIcons from "simple-icons";

@Component<VSimpleIcon>({
  render(h: Function): VNode {
    const icon = SimpleIcons[this.name];
    const path = icon.svg.slice(
      icon.svg.indexOf('d="') + 3,
      icon.svg.lastIndexOf('"')
    );
    console.log(path);
    return h("svg", {}, [
      h("path", {
        attrs: {
          d: path
        }
      })
    ]);
  }
})
export default class VSimpleIcon extends Vue {
  @Prop()
  name!: string;
}
