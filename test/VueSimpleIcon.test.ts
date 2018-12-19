import { shallowMount } from "@vue/test-utils";
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

  it('should include title', () => {
    const wrapper = shallowMount(VueSimpleIcon, {
      propsData: {
        name: 'Travis CI'
      }
    });

    expect(wrapper.findAll('title').length).toBe(1);
  });

  it('should render icon with custom color', () => {
    const wrapper = shallowMount(VueSimpleIcon, {
      propsData: {
        name: 'Travis CI',
        color: '#123ABC'
      }
    });

    expect(wrapper.find('path').attributes('fill')).toBe('#123ABC');
  });

  it('should render icon with custom title', () => {
    const wrapper = shallowMount(VueSimpleIcon, {
      propsData: {
        name: 'Travis CI',
        title: 'Build passed'
      }
    });

    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should render error if name is invalid', () => {
    console.error = jest.fn();
    const wrapper = shallowMount(VueSimpleIcon, {
      propsData: {
        name: 'Invalid name'
      }
    });
    
    expect(console.error).toHaveBeenCalled();
    expect(wrapper.html()).toMatchSnapshot();
  });
});