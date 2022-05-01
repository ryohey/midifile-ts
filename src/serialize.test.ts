import assert from "assert"
import { deserialize } from "./deserialize"
import { SmpteOffsetEvent, TrackNameEvent } from "./event"
import { serialize } from "./serialize"
import { Stream } from "./stream"

describe("serialize", () => {
  it("serialize and deserialize", () => {
    const e: TrackNameEvent = {
      text: "Track Name",
      subtype: "trackName",
      type: "meta",
      deltaTime: 123,
    }
    const bytes = serialize(e, true)
    const e2 = deserialize(new Stream(bytes), 0, () => {})
    assert.deepStrictEqual(e, e2)
  }),
    it("serializes smpteOffset events", () => {
      const e: SmpteOffsetEvent = {
        type: "meta",
        subtype: "smpteOffset",
        deltaTime: 0,
        frameRate: 24,
        hour: 1,
        min: 0,
        sec: 0,
        frame: 0,
        subframe: 0,
      }
      const bytes = serialize(e, true)
      const e2 = deserialize(new Stream(bytes), 0, () => {})
      assert.deepStrictEqual(e, e2)
    }),
    it("serializes smpteOffset events with various time values", () => {
      const e: SmpteOffsetEvent = {
        type: "meta",
        subtype: "smpteOffset",
        deltaTime: 0,
        frameRate: 29,
        hour: 23,
        min: 59,
        sec: 58,
        frame: 20,
        subframe: 99,
      }
      const bytes = serialize(e, true)
      const e2 = deserialize(new Stream(bytes), 0, () => {})
      assert.deepStrictEqual(e, e2)
    })
})
