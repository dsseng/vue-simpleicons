import { shallowMount } from "@vue/test-utils";
import VueSimpleIcon from "../src/VueSimpleIcon";

describe('VueSimpleIcon', () => {
  it('should render icon', () => {
    const wrapper = shallowMount(VueSimpleIcon, {
      propsData: {
        name: 'Google'
      }
    });

    expect(wrapper.html()).toMatch(/<svg [^>]+><title>[^<]+<\/title><path d="[^"]+"><\/path><\/svg>/);
  });

  it('should include title', () => {
    const wrapper = shallowMount(VueSimpleIcon, {
      propsData: {
        name: 'Simple Icons'
      }
    });

    expect(wrapper.findAll('title').length).toBe(1);
  });

  it('should render icon with custom color', () => {
    const wrapper = shallowMount(VueSimpleIcon, {
      propsData: {
        name: 'Simple Icons',
        color: '#123ABC'
      }
    });

    expect(wrapper.find('svg').attributes('fill')).toBe('#123ABC');
  });

  it('should render icon with custom title', () => {
    const customTitle = 'Free SVG icons for popular brands';
    const wrapper = shallowMount(VueSimpleIcon, {
      propsData: {
        name: 'Simple Icons',
        title: customTitle
      }
    });

    expect(wrapper.find('title').text()).toBe(customTitle);
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

  it('should use custom size for error if the icon has a custom size', () => {
    console.error = jest.fn();
    const wrapper = shallowMount(VueSimpleIcon, {
      propsData: {
        name: 'Invalid name',
        xLarge: true
      }
    });

    expect(console.error).toHaveBeenCalled();
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should render small icon', () => {
    const wrapper = shallowMount(VueSimpleIcon, {
      propsData: {
        name: 'Simple Icons',
        small: true
      }
    });

    expect(wrapper.html()).toMatch(/<svg[^>]*width="12" height="12"[^>]*>.*/);
  });

  it('should render medium icon', () => {
    const wrapper = shallowMount(VueSimpleIcon, {
      propsData: {
        name: 'Simple Icons',
        medium: true
      }
    });

    expect(wrapper.html()).toMatch(/<svg[^>]*width="24" height="24"[^>]*>.*/);
  });

  it('should render large icon', () => {
    const wrapper = shallowMount(VueSimpleIcon, {
      propsData: {
        name: 'Simple Icons',
        large: true
      }
    });

    expect(wrapper.html()).toMatch(/<svg[^>]*width="36" height="36"[^>]*>.*/);
  });

  it('should render xLarge icon', () => {
    const wrapper = shallowMount(VueSimpleIcon, {
      propsData: {
        name: 'Simple Icons',
        xLarge: true
      }
    });

    expect(wrapper.html()).toMatch(/<svg[^>]*width="48" height="48"[^>]*>.*/);
  });

  it('should render custom size icon', () => {
    const wrapper = shallowMount(VueSimpleIcon, {
      propsData: {
        name: 'Simple Icons',
        size: 100
      }
    });

    expect(wrapper.html()).toMatch(/<svg[^>]*width="100" height="100"[^>]*>.*/);
  });

  it('should render medium icon by default', () => {
    const wrapper = shallowMount(VueSimpleIcon, {
      propsData: {
        name: 'Simple Icons'
      }
    });

    expect(wrapper.html()).toMatch(/<svg[^>]*width="24" height="24"[^>]*>.*/);
  });

  it('should throw an error with invalid color', () => {
    console.error = jest.fn();
    const wrapper = shallowMount(VueSimpleIcon, {
      propsData: {
        name: 'Simple Icons',
        color: '#badcolor'
      }
    });

    expect(console.error).toHaveBeenCalled();
  });

  it('should throw an error with empty color', () => {
    console.error = jest.fn();
    const wrapper = shallowMount(VueSimpleIcon, {
      propsData: {
        name: 'Simple Icons',
        color: ''
      }
    });

    expect(console.error).toHaveBeenCalled();
  });

  it('should work with size in em', () => {
    const wrapper = shallowMount(VueSimpleIcon, {
      propsData: {
        name: 'Simple Icons',
        size: "10em"
      }
    });

    expect(wrapper.html()).toMatch(/<svg[^>]*width="10em" height="10em"[^>]*>.*/);
  });

  it('should work with size in rem', () => {
    const wrapper = shallowMount(VueSimpleIcon, {
      propsData: {
        name: 'Simple Icons',
        size: "10rem"
      }
    });

    expect(wrapper.html()).toMatch(/<svg[^>]*width="10rem" height="10rem"[^>]*>.*/);
  });

  it('should work with size in vw', () => {
    const wrapper = shallowMount(VueSimpleIcon, {
      propsData: {
        name: 'Simple Icons',
        size: "1vw"
      }
    });

    expect(wrapper.html()).toMatch(/<svg[^>]*width="1vw" height="1vw"[^>]*>.*/);
  });

  it('should work with size in %', () => {
    const wrapper = shallowMount(VueSimpleIcon, {
      propsData: {
        name: 'Simple Icons',
        size: "5%"
      }
    });

    expect(wrapper.html()).toMatch(/<svg[^>]*width="5%" height="5%"[^>]*>.*/);
  });

  it('should work with color in rgb()', () => {
    const wrapper = shallowMount(VueSimpleIcon, {
      propsData: {
        name: 'Simple Icons',
        color: 'rgb(123, 123, 123)'
      }
    });

    expect(wrapper.find('svg').attributes('fill')).toBe('rgb(123, 123, 123)');
  });

  it('should work with color in rgba()', () => {
    const wrapper = shallowMount(VueSimpleIcon, {
      propsData: {
        name: 'Simple Icons',
        color: 'rgba(123, 123, 123, 0.5)'
      }
    });

    expect(wrapper.find('svg').attributes('fill')).toBe('rgba(123, 123, 123, 0.5)');
  });

  it('should work with color in hsl()', () => {
    const wrapper = shallowMount(VueSimpleIcon, {
      propsData: {
        name: 'Simple Icons',
        color: 'hsl(90, 100, 65)'
      }
    });

    expect(wrapper.find('svg').attributes('fill')).toBe('hsl(90, 100, 65)');
  });

  it('should work with color in hsla()', () => {
    const wrapper = shallowMount(VueSimpleIcon, {
      propsData: {
        name: 'Simple Icons',
        color: 'hsla(90, 100, 65, 0.6)'
      }
    });

    expect(wrapper.find('svg').attributes('fill')).toBe('hsla(90, 100, 65, 0.6)');
  });
});
