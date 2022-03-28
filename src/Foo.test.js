/**
 * @vitest-environment happy-dom
 */

import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import Foo from "./Foo.vue";

describe("Foo Test!", () => {
  it("Should Render", () => {
    const wrapper = mount(Foo);
    //has h1
    expect(wrapper.find("h1").exists()).toBeTruthy();
    //has input
    expect(wrapper.find('input[type="text"]').exists()).toBeTruthy();
    //has button
    expect(wrapper.find("button").exists()).toBeTruthy();
  });
  it("should change message", async () => {
    const wrapper = mount(Foo);
    await wrapper.find('input[type="text"]').setValue("mert-vue");
    await wrapper.find("button").trigger("click");
    expect(wrapper.find("h1").text()).toEqual("mert-vue");
  });
});
