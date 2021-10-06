import { deserialize } from "./deserialize"
import { AnyEvent } from "./event"
import { Stream, StreamSource } from "./stream"

export interface MidiHeader {
  formatType: number
  trackCount: number
  ticksPerBeat: number
}

export interface MidiFile {
  header: MidiHeader
  tracks: AnyEvent[][]
}

/*
class to parse the .mid file format
(depends on stream.js)
*/
export function read(data: StreamSource): MidiFile {
  function readChunk(stream: Stream) {
    const id = stream.readStr(4)
    const length = stream.readInt32()
    return {
      id,
      length,
      data: stream.read(length),
    }
  }

  const stream = new Stream(data)
  const headerChunk = readChunk(stream)
  if (headerChunk.id !== "MThd" || headerChunk.length !== 6) {
    throw new Error("Bad .mid file - header not found")
  }
  const headerStream = new Stream(headerChunk.data)
  const formatType = headerStream.readInt16()
  const trackCount = headerStream.readInt16()
  const timeDivision = headerStream.readInt16()
  let ticksPerBeat: number

  if (timeDivision & 0x8000) {
    throw new Error(
      "Expressing time division in SMTPE frames is not supported yet"
    )
  } else {
    ticksPerBeat = timeDivision
  }

  const header = {
    formatType,
    trackCount,
    ticksPerBeat,
  }

  let lastEventTypeByte: number
  function readEvent(stream: Stream): AnyEvent {
    return deserialize(
      stream,
      lastEventTypeByte,
      (byte) => (lastEventTypeByte = byte)
    )
  }

  const tracks: AnyEvent[][] = []
  for (let i = 0; i < header.trackCount; i++) {
    tracks[i] = []
    const trackChunk = readChunk(stream)
    if (trackChunk.id !== "MTrk") {
      throw new Error("Unexpected chunk - expected MTrk, got " + trackChunk.id)
    }
    const trackStream = new Stream(trackChunk.data)
    while (!trackStream.eof()) {
      const event = readEvent(trackStream)
      tracks[i].push(event)
    }
  }

  return {
    header,
    tracks,
  }
}
