/// <reference types="node" />
/// <reference types="node" />
declare type StreamSource = DataView | number[] | ArrayBuffer | Buffer | Uint8Array;
declare class Stream {
    private buf;
    private position;
    constructor(buf: StreamSource);
    readByte(): number;
    readStr(length: number): string;
    read(length: number): number[];
    readInt32(): number;
    readInt16(): number;
    readInt8(signed?: boolean): number;
    eof(): boolean;
    readVarInt(): number;
}
interface Event<T extends string> {
    deltaTime: number;
    type: T;
}
interface MetaEvent<T extends string> extends Event<"meta"> {
    subtype: T;
}
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
interface ControllerEvent extends ChannelEvent<"controller"> {
    controllerType: number;
    value: number;
}
interface SysExEvent extends Event<"sysEx"> {
    data: number[];
}
interface DividedSysExEvent extends Event<"dividedSysEx"> {
    data: number[];
}
declare type AnyEvent = SequenceNumberEvent | TextEvent | CopyrightNoticeEvent | TrackNameEvent | InstrumentNameEvent | LyricsEvent | MarkerEvent | CuePointEvent | ChannelPrefixEvent | PortPrefixEvent | EndOfTrackEvent | SetTempoEvent | SmpteOffsetEvent | TimeSignatureEvent | KeySignatureEvent | SequencerSpecificEvent | UnknownMetaEvent | NoteOffEvent | NoteOnEvent | NoteAftertouchEvent | ProgramChangeEvent | ChannelAftertouchEvent | PitchBendEvent | UnknownChannelEvent | ControllerEvent | SysExEvent | DividedSysExEvent;
declare function deserialize(stream: Stream, lastEventTypeByte: number, setLastEventTypeByte: (eventType: number) => void): AnyEvent;
interface MidiHeader {
    formatType: number;
    trackCount: number;
    ticksPerBeat: number;
}
interface MidiFile {
    header: MidiHeader;
    tracks: AnyEvent[][];
}
declare function read(data: StreamSource): MidiFile;
declare class Buffer {
    private data;
    private position;
    get length(): number;
    writeByte(v: number): void;
    writeStr(str: string): void;
    writeInt32(v: number): void;
    writeInt16(v: number): void;
    writeBytes(arr: number[]): void;
    writeChunk(id: string, func: (buf: Buffer) => void): void;
    toBytes(): Uint8Array;
}
declare const _default: {
    [key: string]: number;
};
declare function serialize(e: AnyEvent, includeDeltaTime?: boolean): number[];
declare function write(tracks: AnyEvent[][], ticksPerBeat?: number): Uint8Array;
export { _default as MIDIChannelEvents };
export { _default as MIDIControlEventNames };
export { _default as MIDIControlEvents };
export { _default as MIDIMetaEventNames };
export { _default as MIDIMetaEvents };
export { read, MidiFile, MidiHeader, write, serialize, deserialize, StreamSource, Event, MetaEvent, SequenceNumberEvent, TextEvent, CopyrightNoticeEvent, TrackNameEvent, InstrumentNameEvent, LyricsEvent, MarkerEvent, CuePointEvent, ChannelPrefixEvent, PortPrefixEvent, EndOfTrackEvent, SetTempoEvent, SmpteOffsetEvent, TimeSignatureEvent, KeySignatureEvent, SequencerSpecificEvent, UnknownMetaEvent, ChannelEvent, NoteOffEvent, NoteOnEvent, NoteAftertouchEvent, ProgramChangeEvent, ChannelAftertouchEvent, PitchBendEvent, UnknownChannelEvent, ControllerEvent, SysExEvent, DividedSysExEvent, AnyEvent };
