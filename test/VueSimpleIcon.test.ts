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

  it('should render small icon', () => {
    const wrapper = shallowMount(VueSimpleIcon, {
      propsData: {
        name: 'Travis CI',
        small: true
      }
    });
    
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should render medium icon', () => {
    const wrapper = shallowMount(VueSimpleIcon, {
      propsData: {
        name: 'Travis CI',
        medium: true
      }
    });
    
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should render large icon', () => {
    const wrapper = shallowMount(VueSimpleIcon, {
      propsData: {
        name: 'Travis CI',
        large: true
      }
    });
    
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should render xLarge icon', () => {
    const wrapper = shallowMount(VueSimpleIcon, {
      propsData: {
        name: 'Travis CI',
        xLarge: true
      }
    });
    
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should render custom size icon', () => {
    const wrapper = shallowMount(VueSimpleIcon, {
      propsData: {
        name: 'Travis CI',
        size: 100
      }
    });
    
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should render medium icon by default', () => {
    const wrapper = shallowMount(VueSimpleIcon, {
      propsData: {
        name: 'Travis CI'
      }
    });
    
    expect(wrapper.html()).toMatchSnapshot();
  });
});