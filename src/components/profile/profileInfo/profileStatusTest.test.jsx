import React from "react";
import { create } from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

describe("ProfileStatusComponent component", () => {
  
    test("status from the props should be in the state", () => {
      const component = create(<ProfileStatus status="hello" />);
      const instance = component.getInstance();
      expect(instance.state.status).toBe("hello");
    });

    test("after creation <span></span>  should be displayed with correct status", () => {
      const component = create(<ProfileStatus status="hello" />);
      const root = component.root;
      const span = root.findAllByType('span')
      expect(span.length).toBe(1);
    });
    test("after creation <input> shouldn't be displayed", () => {
      const component = create(<ProfileStatus status="it-kamasutra.com" />);
      const root = component.root;
      expect(() => {
          let input = root.findByType("input");
      }).toThrow();
  });
    
    test("after creation <span> should contains correct status", () => {
      const component = create(<ProfileStatus status="hello" />);
      const root = component.root;
      let span = root.findByType("span");
      expect(span.children[0]).toBe("hello");
  });

    test("<span></span>  should be contain correct status", () => {
      const component = create(<ProfileStatus status="hello" />);
      const root = component.root;
      const span = root.findAllByType('span')
      expect(span.innerText).not.toBeNull();
    });
  });