import { describe, it, expect } from "vitest";

import { Name } from "../../../src/adap-b04/names/Name";
import { StringName } from "../../../src/adap-b04/names/StringName";
import { StringArrayName } from "../../../src/adap-b04/names/StringArrayName";
import { AbstractName } from "../../../src/adap-b04/names/AbstractName";



describe("StringName functions tests", () => {
    it("test insert", () => {
      let name = new StringName("t.s.t");
      name.insert(1, "e");
      expect(name.asString()).toBe("t.e.s.t");
    });
    it("test append", () => {
      let name = new StringName("t.e.s");
      name.append("t");
      expect(name.asString()).toBe("t.e.s.t");
    });
    it("test remove", () => {
      let name = new StringName("t.e.s.t");
      name.remove(0);
      expect(name.asString()).toBe("e.s.t");
    });
    
  });

