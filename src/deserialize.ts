import { MIDIChannelEvents } from "."
import { MIDIMetaEvents } from "./constants/MIDIMetaEvents"
import {
  AnyEvent,
  ChannelAftertouchEvent,
  ChannelPrefixEvent,
  ControllerEvent,
  CopyrightNoticeEvent,
  CuePointEvent,
  DividedSysExEvent,
  EndOfTrackEvent,
  InstrumentNameEvent,
  KeySignatureEvent,
  LyricsEvent,
  MarkerEvent,
  NoteAftertouchEvent,
  NoteOffEvent,
  NoteOnEvent,
  PitchBendEvent,
  PortPrefixEvent,
  ProgramChangeEvent,
  SequenceNumberEvent,
  SequencerSpecificEvent,
  SetTempoEvent,
  SmpteOffsetEvent,
  SysExEvent,
  TextEvent,
  TimeSignatureEvent,
  TrackNameEvent,
  UnknownChannelEvent,
  UnknownMetaEvent,
} from "./event"
import { Stream } from "./stream"

export function deserialize(
  stream: Stream,
  lastEventTypeByte: number = 0,
  setLastEventTypeByte?: (eventType: number) => void
): AnyEvent {
  const deltaTime = stream.readVarInt()
  return deserializeSingleEvent(
    stream,
    deltaTime,
    lastEventTypeByte,
    setLastEventTypeByte
  )
}

export function deserializeSingleEvent(
  stream: Stream,
  deltaTime: number = 0,
  lastEventTypeByte: number = 0,
  setLastEventTypeByte?: (eventType: number) => void
) {
  let eventTypeByte = stream.readInt8()
  if ((eventTypeByte & 0xf0) === 0xf0) {
    /* system / meta event */
    if (eventTypeByte === 0xff) {
      /* meta event */
      const type = "meta"
      const subtypeByte = stream.readInt8()
      const length = stream.readVarInt()
      switch (subtypeByte) {
        case MIDIMetaEvents.sequenceNumber:
          if (length !== 2)
            throw new Error(
              "Expected length for sequenceNumber event is 2, got " + length
            )
          return <SequenceNumberEvent>{
            deltaTime,
            type,
            subtype: "sequenceNumber",
            number: stream.readInt16(),
          }
        case MIDIMetaEvents.text:
          return <TextEvent>{
            deltaTime,
            type,
            subtype: "text",
            text: stream.readStr(length),
          }
        case MIDIMetaEvents.copyrightNotice:
          return <CopyrightNoticeEvent>{
            deltaTime,
            type,
            subtype: "copyrightNotice",
            text: stream.readStr(length),
          }
        case MIDIMetaEvents.trackName:
          return <TrackNameEvent>{
            deltaTime,
            type,
            subtype: "trackName",
            text: stream.readStr(length),
          }
        case MIDIMetaEvents.instrumentName:
          return <InstrumentNameEvent>{
            deltaTime,
            type,
            subtype: "instrumentName",
            text: stream.readStr(length),
          }
        case MIDIMetaEvents.lyrics:
          return <LyricsEvent>{
            deltaTime,
            type,
            subtype: "lyrics",
            text: stream.readStr(length),
          }
        case MIDIMetaEvents.marker:
          return <MarkerEvent>{
            deltaTime,
            type,
            subtype: "marker",
            text: stream.readStr(length),
          }
        case MIDIMetaEvents.cuePoint:
          return <CuePointEvent>{
            deltaTime,
            type,
            subtype: "cuePoint",
            text: stream.readStr(length),
          }
        case MIDIMetaEvents.midiChannelPrefix:
          if (length !== 1)
            throw new Error(
              "Expected length for midiChannelPrefix event is 1, got " + length
            )
          return <ChannelPrefixEvent>{
            deltaTime,
            type,
            subtype: "midiChannelPrefix",
            value: stream.readInt8(),
          }
        case MIDIMetaEvents.portPrefix:
          if (length !== 1)
            throw new Error(
              "Expected length for midiChannelPrefix event is 1, got " + length
            )
          return <PortPrefixEvent>{
            deltaTime,
            type,
            subtype: "portPrefix",
            port: stream.readInt8(),
          }
        case MIDIMetaEvents.endOfTrack:
          if (length !== 0)
            throw new Error(
              "Expected length for endOfTrack event is 0, got " + length
            )
          return <EndOfTrackEvent>{
            deltaTime,
            type,
            subtype: "endOfTrack",
          }
        case MIDIMetaEvents.setTempo:
          if (length !== 3)
            throw new Error(
              "Expected length for setTempo event is 3, got " + length
            )
          return <SetTempoEvent>{
            deltaTime,
            type,
            subtype: "setTempo",
            microsecondsPerBeat:
              (stream.readInt8() << 16) +
              (stream.readInt8() << 8) +
              stream.readInt8(),
          }
        case MIDIMetaEvents.smpteOffset: {
          if (length !== 5)
            throw new Error(
              "Expected length for smpteOffset event is 5, got " + length
            )
          const hourByte = stream.readInt8()
          const table: { [key: number]: number } = {
            0x00: 24,
            0x20: 25,
            0x40: 29,
            0x60: 30,
          }
          return <SmpteOffsetEvent>{
            deltaTime,
            type,
            subtype: "smpteOffset",
            frameRate: table[hourByte & 0x60],
            hour: hourByte & 0x1f,
            min: stream.readInt8(),
            sec: stream.readInt8(),
            frame: stream.readInt8(),
            subframe: stream.readInt8(),
          }
        }
        case MIDIMetaEvents.timeSignature:
          if (length !== 4)
            throw new Error(
              "Expected length for timeSignature event is 4, got " + length
            )
          return <TimeSignatureEvent>{
            deltaTime,
            type,
            subtype: "timeSignature",
            numerator: stream.readInt8(),
            denominator: Math.pow(2, stream.readInt8()),
            metronome: stream.readInt8(),
            thirtyseconds: stream.readInt8(),
          }
        case MIDIMetaEvents.keySignature:
          if (length !== 2)
            throw new Error(
              "Expected length for keySignature event is 2, got " + length
            )
          return <KeySignatureEvent>{
            deltaTime,
            type,
            subtype: "keySignature",
            key: stream.readInt8(true),
            scale: stream.readInt8(),
          }
        case MIDIMetaEvents.sequencerSpecific:
          return <SequencerSpecificEvent>{
            deltaTime,
            type,
            subtype: "sequencerSpecific",
            data: stream.read(length),
          }
        default:
          return <UnknownMetaEvent>{
            deltaTime,
            type,
            subtype: "unknown",
            data: stream.read(length),
          }
      }
    } else if (eventTypeByte === 0xf0) {
      const length = stream.readVarInt()
      return <SysExEvent>{
        deltaTime,
        type: "sysEx",
        data: stream.read(length),
      }
    } else if (eventTypeByte === 0xf7) {
      const length = stream.readVarInt()
      return <DividedSysExEvent>{
        deltaTime,
        type: "dividedSysEx",
        data: stream.read(length),
      }
    } else {
      throw new Error("Unrecognised MIDI event type byte: " + eventTypeByte)
    }
  } else {
    /* channel event */
    let param1
    if ((eventTypeByte & 0x80) === 0) {
      /* running status - reuse lastEventTypeByte as the event type.
        eventTypeByte is actually the first parameter
      */
      param1 = eventTypeByte
      eventTypeByte = lastEventTypeByte
    } else {
      param1 = stream.readInt8()
      setLastEventTypeByte?.(eventTypeByte)
    }
    const eventType = eventTypeByte >> 4
    const channel = eventTypeByte & 0x0f
    const type = "channel"
    switch (eventType) {
      case MIDIChannelEvents.noteOff:
        return <NoteOffEvent>{
          deltaTime,
          type,
          channel,
          subtype: "noteOff",
          noteNumber: param1,
          velocity: stream.readInt8(),
        }
      case MIDIChannelEvents.noteOn: {
        const velocity = stream.readInt8()
        return <NoteOnEvent>{
          deltaTime,
          type,
          channel,
          subtype: velocity === 0 ? "noteOff" : "noteOn",
          noteNumber: param1,
          velocity: velocity,
        }
      }
      case MIDIChannelEvents.noteAftertouch:
        return <NoteAftertouchEvent>{
          deltaTime,
          type,
          channel,
          subtype: "noteAftertouch",
          noteNumber: param1,
          amount: stream.readInt8(),
        }
      case MIDIChannelEvents.controller:
        return <ControllerEvent>{
          deltaTime,
          type,
          channel,
          subtype: "controller",
          controllerType: param1,
          value: stream.readInt8(),
        }
      case MIDIChannelEvents.programChange:
        return <ProgramChangeEvent>{
          deltaTime,
          type,
          channel,
          subtype: "programChange",
          value: param1,
        }
      case MIDIChannelEvents.channelAftertouch:
        return <ChannelAftertouchEvent>{
          deltaTime,
          type,
          channel,
          subtype: "channelAftertouch",
          amount: param1,
        }
      case MIDIChannelEvents.pitchBend:
        return <PitchBendEvent>{
          deltaTime,
          type,
          channel,
          subtype: "pitchBend",
          value: param1 + (stream.readInt8() << 7),
        }
      default:
        return <UnknownChannelEvent>{
          deltaTime,
          type,
          channel,
          subtype: "unknown",
          data: stream.readInt8(),
        }
    }
  }
}
