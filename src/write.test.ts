import assert from "assert"
import write from "./write"

describe("reader", () => {
  it("write Buffer", () => {
    const bytes = write([], 480)
    assert.equal(String.fromCharCode(...Array.from(bytes).slice(0, 4).map(e => (e))), "MThd")
  })
})
