import { MIDIChannelEvents } from "./constants/MIDIChannelEvents"
import { MIDIMetaEvents } from "./constants/MIDIMetaEvents"
import { AnyEvent } from "./event"
import { toCharCodes } from "./toCharCodes"
import { toVLQ } from "./vlq"

export function serialize(e: AnyEvent, includeDeltaTime = true) {
  const bytes: number[] = []

  function add(data: number | number[]) {
    if (Array.isArray(data)) {
      data.forEach(add)
    } else {
      if (!Number.isInteger(data)) {
        throw new Error(`"${data}" is not integer`)
      }
      bytes.push(data)
    }
  }

  if (includeDeltaTime) {
    add(toVLQ(e.deltaTime))
  }

  function addNumbers(list: number[]) {
    add(list.length)
    list.forEach((v) => add(v))
  }

  function addText(text: string) {
    add(text.length)
    add(toCharCodes(text))
  }

  switch (e.type) {
    case "meta": {
      const subtypeCode = MIDIMetaEvents[e.subtype]
      if (subtypeCode === undefined) {
        return []
      }
      add(0xff) // type
      add(subtypeCode) // subtype
      switch (e.subtype) {
        case "sequenceNumber":
          add(e.number)
          break
        case "text":
          addText(e.text)
          break
        case "copyrightNotice":
          addText(e.text)
          break
        case "trackName":
          addText(e.text)
          break
        case "instrumentName":
          addText(e.text)
          break
        case "lyrics":
          addText(e.text)
          break
        case "marker":
          addText(e.text)
          break
        case "cuePoint":
          addText(e.text)
          break
        case "midiChannelPrefix":
          addNumbers([e.value])
          break
        case "portPrefix":
          addNumbers([e.port])
          break
        case "endOfTrack":
          add(0)
          break
        case "setTempo": {
          const t = e.microsecondsPerBeat
          addNumbers([(t >> 16) & 0xff, (t >> 8) & 0xff, t & 0xff])
          break
        }
        case "smpteOffset": {
          const frameRateByte = {
            24: 0x00,
            25: 0x20,
            29: 0x40,
            30: 0x60,
          }
          addNumbers([
            frameRateByte[e.frameRate] + (0x1f & e.hour),
            e.min,
            e.sec,
            e.frame,
            e.subframe,
          ])
          break
        }
        case "timeSignature": {
          addNumbers([
            e.numerator,
            Math.log2(e.denominator),
            e.metronome,
            e.thirtyseconds,
          ])
          break
        }
        case "keySignature": {
          addNumbers([e.key, e.scale])
          break
        }
        case "sequencerSpecific":
          addNumbers(e.data)
          break
        case "unknown":
          addNumbers(e.data)
          break
      }
      break
    }
    case "sysEx":
      add(0xf0)
      addNumbers(e.data)
      break
    case "dividedSysEx":
      add(0xf7)
      addNumbers(e.data)
      break
    case "channel": {
      const subtypeCode = MIDIChannelEvents[e.subtype]
      if (subtypeCode === undefined) {
        return []
      }
      add((subtypeCode << 4) + e.channel) // subtype + channel
      switch (e.subtype) {
        case "noteOff": {
          add(e.noteNumber)
          add(e.velocity)
          break
        }
        case "noteOn": {
          add(e.noteNumber)
          add(e.velocity)
          break
        }
        case "noteAftertouch": {
          add(e.noteNumber)
          add(e.amount)
          break
        }
        case "controller": {
          add(e.controllerType)
          add(e.value)
          break
        }
        case "programChange":
          add(e.value)
          break
        case "channelAftertouch":
          add(e.amount)
          break
        case "pitchBend": {
          add(e.value & 0x7f)
          add((e.value >> 7) & 0x7f)
          break
        }
        case "unknown":
          add(e.data)
          break
      }
      break
    }
  }

  return bytes
}
