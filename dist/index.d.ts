import { AnyEvent } from "./event";
declare const MIDIChannelEvents: {
    readonly noteOff: 8;
    readonly noteOn: 9;
    readonly noteAftertouch: 10;
    readonly controller: 11;
    readonly programChange: 12;
    readonly channelAftertouch: 13;
    readonly pitchBend: 14;
};
declare const MIDIControlEventNames: readonly [
    "Bank Select",
    "Modulation",
    "Breath Controller",
    "Foot Pedal",
    "Portamento Time",
    "Data Entry",
    "Volume",
    "Balance",
    "Pan",
    "Expression",
    "Effect Control 1",
    "Effect Control 2",
    "Undefined",
    "Undefined",
    "General Purpose Slider 1",
    "General Purpose Slider 2",
    "General Purpose Slider 3",
    "Knob 2 General Purpose Slider 4",
    "Knob 3",
    "Knob 4",
    "Bank Select",
    "Modulation Wheel",
    "Breath controller",
    "Foot Pedal",
    "Portamento Time",
    "Data Entry",
    "Volume",
    "Balance",
    "Pan position",
    "Expression",
    "Effect Control 1",
    "Effect Control 2",
    "Hold Pedal",
    "Portamento",
    "Sustenuto Pedal",
    "Soft Pedal",
    "Legato Pedal",
    "Hold 2 Pedal",
    "Sound Variation",
    "Resonance",
    "Sound Release Time",
    "Sound Attack Time",
    "Frequency Cutoff",
    "Sound Control 6",
    "Sound Control 7",
    "Sound Control 8",
    "Sound Control 9",
    "Sound Control 10",
    "Decay",
    "High Pass Filter Frequency",
    "General Purpose Button 3",
    "General Purpose Button 4",
    "Reverb Level",
    "Tremolo Level",
    "Chorus Level",
    "Detune",
    "Phaser Level",
    "Data Button Increment",
    "Data Button Decrement",
    "NRPN (LSB)",
    "NRPN (MSB)",
    "RPN (LSB)",
    "RPN (MSB)",
    "All Sound Off",
    "All Controllers Off",
    "Local Keyboard",
    "All Notes Off",
    "Omni Mode Off",
    "Omni Mode On",
    "Mono Operation",
    "Poly Operation"
];
declare const MIDIControlEvents: {
    readonly MSB_BANK: 0;
    readonly MSB_MODWHEEL: 1;
    readonly MSB_BREATH: 2;
    readonly MSB_FOOT: 4;
    readonly MSB_PORTAMENTO_TIME: 5;
    readonly MSB_DATA_ENTRY: 6;
    readonly MSB_MAIN_VOLUME: 7;
    readonly MSB_BALANCE: 8;
    readonly MSB_PAN: 10;
    readonly MSB_EXPRESSION: 11;
    readonly MSB_EFFECT1: 12;
    readonly MSB_EFFECT2: 13;
    readonly MSB_GENERAL_PURPOSE1: 16;
    readonly MSB_GENERAL_PURPOSE2: 17;
    readonly MSB_GENERAL_PURPOSE3: 18;
    readonly MSB_GENERAL_PURPOSE4: 19;
    readonly LSB_BANK: 32;
    readonly LSB_MODWHEEL: 33;
    readonly LSB_BREATH: 34;
    readonly LSB_FOOT: 36;
    readonly LSB_PORTAMENTO_TIME: 37;
    readonly LSB_DATA_ENTRY: 38;
    readonly LSB_MAIN_VOLUME: 39;
    readonly LSB_BALANCE: 40;
    readonly LSB_PAN: 42;
    readonly LSB_EXPRESSION: 43;
    readonly LSB_EFFECT1: 44;
    readonly LSB_EFFECT2: 45;
    readonly LSB_GENERAL_PURPOSE1: 48;
    readonly LSB_GENERAL_PURPOSE2: 49;
    readonly LSB_GENERAL_PURPOSE3: 50;
    readonly LSB_GENERAL_PURPOSE4: 51;
    readonly SUSTAIN: 64;
    readonly PORTAMENTO: 65;
    readonly SOSTENUTO: 66;
    readonly SUSTENUTO: 66;
    readonly SOFT_PEDAL: 67;
    readonly LEGATO_FOOTSWITCH: 68;
    readonly HOLD2: 69;
    readonly SC1_SOUND_VARIATION: 70;
    readonly SC2_TIMBRE: 71;
    readonly SC3_RELEASE_TIME: 72;
    readonly SC4_ATTACK_TIME: 73;
    readonly SC5_BRIGHTNESS: 74;
    readonly SC6: 75;
    readonly SC7: 76;
    readonly SC8: 77;
    readonly SC9: 78;
    readonly SC10: 79;
    readonly GENERAL_PURPOSE5: 80;
    readonly GENERAL_PURPOSE6: 81;
    readonly GENERAL_PURPOSE7: 82;
    readonly GENERAL_PURPOSE8: 83;
    readonly PORTAMENTO_CONTROL: 84;
    readonly E1_REVERB_DEPTH: 91;
    readonly E2_TREMOLO_DEPTH: 92;
    readonly E3_CHORUS_DEPTH: 93;
    readonly E4_DETUNE_DEPTH: 94;
    readonly E5_PHASER_DEPTH: 95;
    readonly DATA_INCREMENT: 96;
    readonly DATA_DECREMENT: 97;
    readonly NONREG_PARM_NUM_LSB: 98;
    readonly NONREG_PARM_NUM_MSB: 99;
    readonly REGIST_PARM_NUM_LSB: 100;
    readonly REGIST_PARM_NUM_MSB: 101;
    readonly ALL_SOUNDS_OFF: 120;
    readonly RESET_CONTROLLERS: 121;
    readonly LOCAL_CONTROL_SWITCH: 122;
    readonly ALL_NOTES_OFF: 123;
    readonly OMNI_OFF: 124;
    readonly OMNI_ON: 125;
    readonly MONO1: 126;
    readonly MONO2: 127;
};
declare const MIDIMetaEventNames: {
    readonly 0: "sequenceNumber";
    readonly 1: "text";
    readonly 2: "copyrightNotice";
    readonly 3: "trackName";
    readonly 4: "instrumentName";
    readonly 5: "lyrics";
    readonly 6: "marker";
    readonly 7: "cuePoint";
    readonly 32: "midiChannelPrefix";
    readonly 33: "portPrefix";
    readonly 47: "endOfTrack";
    readonly 81: "setTempo";
    readonly 84: "smpteOffset";
    readonly 88: "timeSignature";
    readonly 89: "keySignature";
    readonly 127: "sequencerSpecific";
};
declare const MIDIMetaEvents: {
    readonly sequenceNumber: 0;
    readonly text: 1;
    readonly copyrightNotice: 2;
    readonly trackName: 3;
    readonly instrumentName: 4;
    readonly lyrics: 5;
    readonly marker: 6;
    readonly cuePoint: 7;
    readonly midiChannelPrefix: 32;
    readonly portPrefix: 33;
    readonly endOfTrack: 47;
    readonly setTempo: 81;
    readonly smpteOffset: 84;
    readonly timeSignature: 88;
    readonly keySignature: 89;
    readonly sequencerSpecific: 127;
};
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
/*
class to parse the .mid file format
(depends on stream.js)
*/
declare function read(data: StreamSource): MidiFile;
declare function serialize(e: AnyEvent, includeDeltaTime?: boolean): number[];
//https://sites.google.com/site/yyagisite/material/smfspec#format
declare function write(tracks: AnyEvent[][], ticksPerBeat?: number): Uint8Array;
export { MIDIChannelEvents, MIDIControlEventNames, MIDIControlEvents, MIDIMetaEventNames, MIDIMetaEvents, deserialize, MidiFile, MidiHeader, read, serialize, Stream, StreamSource, write };
export * from "./event";
