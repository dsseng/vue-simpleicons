/// <reference path="./simple-icons.d.ts" />
import Vue, { VNode } from "vue";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";
import SimpleIcons from "simple-icons";

@Component<VueSimpleIcon>({
  render(h: Function): VNode {
    const icon = SimpleIcons[this.name];
    const path = icon.svg.slice(
      icon.svg.indexOf('d="') + 3,
      icon.svg.lastIndexOf('"')
    );
    return h("svg", {}, [
      h("path", {
        attrs: {
          d: path
        }
      })
    ]);
  }
})
export default class VueSimpleIcon extends Vue {
  @Prop()
  name!: string;
}
