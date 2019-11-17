import assert from "assert"
import { write } from "./write"
import { read } from "./read"
import fs from "fs"

describe("reader", () => {
  it("write Buffer", () => {
    const bytes = write([], 480)
    assert.equal(
      String.fromCharCode(
        ...Array.from(bytes)
          .slice(0, 4)
          .map(e => e)
      ),
      "MThd"
    )
  })
  it("read and write back", () => {
    const data = fs.readFileSync("./fixtures/tracks.mid")
    const midiA = read(data)
    const bytes = write(midiA.tracks, midiA.header.ticksPerBeat)
    const midiB = read(bytes)
    assert.deepStrictEqual(midiA, midiB)
  })
  it("read another song", () => {
    const data = fs.readFileSync("./fixtures/song.mid")
    const midiA = read(data)
    const bytes = write(midiA.tracks, midiA.header.ticksPerBeat)
    const midiB = read(bytes)
    assert.deepStrictEqual(midiA, midiB)
  })
})
