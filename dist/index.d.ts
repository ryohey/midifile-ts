interface Event<T extends string> {
    deltaTime: number;
    type: T;
}
interface MetaEvent<T extends string> extends Event<"meta"> {
    subtype: T;
}
/* Meta */
interface SequenceNumberEvent extends MetaEvent<"sequenceNumber"> {
    number: number;
}
interface TextEvent extends MetaEvent<"text"> {
    text: string;
}
interface CopyrightNoticeEvent extends MetaEvent<"copyrightNotice"> {
    text: string;
}
interface TrackNameEvent extends MetaEvent<"trackName"> {
    text: string;
}
interface InstrumentNameEvent extends MetaEvent<"instrumentName"> {
    text: string;
}
interface LyricsEvent extends MetaEvent<"lyrics"> {
    text: string;
}
interface MarkerEvent extends MetaEvent<"marker"> {
    text: string;
}
interface CuePointEvent extends MetaEvent<"cuePoint"> {
    text: string;
}
interface ChannelPrefixEvent extends MetaEvent<"midiChannelPrefix"> {
    channel: number;
}
interface PortPrefixEvent extends MetaEvent<"portPrefix"> {
    port: number;
}
interface EndOfTrackEvent extends MetaEvent<"endOfTrack"> {
}
interface SetTempoEvent extends MetaEvent<"setTempo"> {
    microsecondsPerBeat: number;
}
interface SmpteOffsetEvent extends MetaEvent<"smpteOffset"> {
    frameRate: number;
    hour: number;
    min: number;
    sec: number;
    frame: number;
    subframe: number;
}
interface TimeSignatureEvent extends MetaEvent<"timeSignature"> {
    numerator: number;
    denominator: number;
    metronome: number;
    thirtyseconds: number;
}
interface KeySignatureEvent extends MetaEvent<"keySignature"> {
    key: number;
    scale: number;
}
interface SequencerSpecificEvent extends MetaEvent<"sequencerSpecific"> {
    data: number[];
}
interface UnknownMetaEvent extends MetaEvent<"unknown"> {
    data: number[];
}
/* Channel */
interface ChannelEvent<T extends string> extends Event<"channel"> {
    channel: number;
    subtype: T;
}
interface NoteOffEvent extends ChannelEvent<"noteOff"> {
    noteNumber: number;
    velocity: number;
}
interface NoteOnEvent extends ChannelEvent<"noteOn"> {
    noteNumber: number;
    velocity: number;
}
interface NoteAftertouchEvent extends ChannelEvent<"noteAftertouch"> {
    noteNumber: number;
    amount: number;
}
interface ProgramChangeEvent extends ChannelEvent<"programChange"> {
    value: number;
}
interface ChannelAftertouchEvent extends ChannelEvent<"channelAftertouch"> {
    amount: number;
}
interface PitchBendEvent extends ChannelEvent<"pitchBend"> {
    value: number;
}
interface UnknownChannelEvent extends ChannelEvent<"unknown"> {
    data: number;
}
/* Controller */
interface ControllerEvent extends ChannelEvent<"controller"> {
    controllerType: number;
    value: number;
}
/* Other */
interface SysExEvent extends Event<"sysEx"> {
    data: number[];
}
interface DividedSysExEvent extends Event<"dividedSysEx"> {
    data: number[];
}
type AnyEvent = SequenceNumberEvent | TextEvent | CopyrightNoticeEvent | TrackNameEvent | InstrumentNameEvent | LyricsEvent | MarkerEvent | CuePointEvent | ChannelPrefixEvent | PortPrefixEvent | EndOfTrackEvent | SetTempoEvent | SmpteOffsetEvent | TimeSignatureEvent | KeySignatureEvent | SequencerSpecificEvent | UnknownMetaEvent | NoteOffEvent | NoteOnEvent | NoteAftertouchEvent | ProgramChangeEvent | ChannelAftertouchEvent | PitchBendEvent | UnknownChannelEvent | ControllerEvent | SysExEvent | DividedSysExEvent;
type StreamSource = DataView | number[] | ArrayBuffer | Uint8Array;
/* Wrapper for accessing strings through sequential reads */
declare class Stream {
    private buf;
    private position;
    constructor(buf: StreamSource);
    readByte(): number;
    readStr(length: number): string;
    read(length: number): number[];
    /* read a big-endian 32-bit integer */
    readInt32(): number;
    /* read a big-endian 16-bit integer */
    readInt16(): number;
    /* read an 8-bit integer */
    readInt8(signed?: boolean): number;
    eof(): boolean;
    /* read a MIDI-style variable-length integer
    (big-endian value in groups of 7 bits,
    with top bit set to signify that another byte follows)
    */
    readVarInt(): number;
}
interface MidiHeader {
    formatType: number;
    trackCount: number;
    ticksPerBeat: number;
}
interface MidiFile {
    header: MidiHeader;
    tracks: AnyEvent[][];
}
/*
class to parse the .mid file format
(depends on stream.js)
*/
declare function read(data: StreamSource): MidiFile;
//https://sites.google.com/site/yyagisite/material/smfspec#format
declare function write(tracks: AnyEvent[][], ticksPerBeat?: number): Uint8Array;
declare function serialize(e: AnyEvent, includeDeltaTime?: boolean): number[];
declare function deserialize(stream: Stream, lastEventTypeByte: number, setLastEventTypeByte: (eventType: number) => void): AnyEvent;
declare const MIDIChannelEvents: {
    [key: string]: number;
};
declare const MIDIControlEventNames: string[];
declare const MIDIControlEvents: {
    [key: string]: number;
};
declare const MIDIMetaEventNames: {
    [key: number]: string;
};
declare const MIDIMetaEvents: {
    [key: string]: number;
};
export { read, MidiFile, MidiHeader, write, serialize, deserialize, MIDIChannelEvents, MIDIControlEventNames, MIDIControlEvents, MIDIMetaEventNames, MIDIMetaEvents, StreamSource, Stream, Event, MetaEvent, SequenceNumberEvent, TextEvent, CopyrightNoticeEvent, TrackNameEvent, InstrumentNameEvent, LyricsEvent, MarkerEvent, CuePointEvent, ChannelPrefixEvent, PortPrefixEvent, EndOfTrackEvent, SetTempoEvent, SmpteOffsetEvent, TimeSignatureEvent, KeySignatureEvent, SequencerSpecificEvent, UnknownMetaEvent, ChannelEvent, NoteOffEvent, NoteOnEvent, NoteAftertouchEvent, ProgramChangeEvent, ChannelAftertouchEvent, PitchBendEvent, UnknownChannelEvent, ControllerEvent, SysExEvent, DividedSysExEvent, AnyEvent };
