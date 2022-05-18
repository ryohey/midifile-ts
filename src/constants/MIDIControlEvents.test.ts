import { MIDIControlEventNames } from "./MIDIControlEventNames"
import { MIDIControlEvents } from "./MIDIControlEvents"

describe("MIDIControlEvent", () => {
  it("should have 128 elements", () => {
    expect(MIDIControlEventNames).toHaveLength(128)
  })

  it("should have Bank Select at CC0", () => {
    expect(MIDIControlEventNames[MIDIControlEvents.MSB_BANK]).toBe(
      "Bank Select"
    )
  })

  it("should have Volume at CC7", () => {
    expect(MIDIControlEventNames[MIDIControlEvents.MSB_MAIN_VOLUME]).toBe(
      "Volume"
    )
  })

  it("should have Reverb Level at CC91", () => {
    expect(MIDIControlEventNames[MIDIControlEvents.E1_REVERB_DEPTH]).toBe(
      "Reverb Level"
    )
  })

  it("should have Poly Operation at CC127", () => {
    expect(MIDIControlEventNames[MIDIControlEvents.MONO2]).toBe(
      "Poly Operation"
    )
  })
})
