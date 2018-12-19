import { createLocalVue, shallowMount } from "@vue/test-utils";
import VueSimpleIcon from "../src/VueSimpleIcon";

describe('VueSimpleIcon', () => {
  it('should render icon', () => {
    const wrapper = shallowMount(VueSimpleIcon, {
      propsData: {
        name: 'Google'
      }
    });

    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should render icon with multiple paths', () => {
    const wrapper = shallowMount(VueSimpleIcon, {
      propsData: {
        name: 'Travis CI'
      }
    });

    expect(wrapper.html()).toMatchSnapshot();
  });
});