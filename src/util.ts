/// <reference path="./simple-icons.d.ts" />
import { VNode } from "vue";

export const renderError = (
  title: string,
  iconSize: number | string,
  h: Function
): VNode =>
  h("svg", {
    attrs: {
      width: iconSize,
      height: iconSize,
      viewBox: "0 0 24 24",
      xmlns: "http://www.w3.org/2000/svg"
    },
    domProps: {
      innerHTML: `<title>${title}</title><circle cx=\"12\" cy=\"12\" r=\"12\" fill=\"red\"></circle><line x1=\"12\" y1=\"20\" x2=\"12\" y2=\"20\" stroke=\"#fff\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-miterlimit=\"10\"></line><line x1=\"12\" y1=\"5\" x2=\"12\" y2=\"15\" stroke=\"#fff\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-miterlimit=\"10\"></line>`
    }
  });
