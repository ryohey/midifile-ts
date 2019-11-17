import assert from "assert"
import { serialize } from "./serialize"
import { TrackNameEvent } from "./event"
import { deserialize } from "./deserialize"
import { Stream } from "./stream"

describe("serialize", () => {
  it("serialize and deserialize", () => {
    const e: TrackNameEvent = {
      text: "Track Name",
      subtype: "trackName",
      type: "meta",
      deltaTime: 123
    }
    const bytes = serialize(e, true)
    const e2 = deserialize(new Stream(bytes), 0, () => {})
    assert.deepStrictEqual(e, e2)
  })
})
