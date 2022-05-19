var MIDIChannelEvents = {
    noteOff: 0x08,
    noteOn: 0x09,
    noteAftertouch: 0x0a,
    controller: 0x0b,
    programChange: 0x0c,
    channelAftertouch: 0x0d,
    pitchBend: 0x0e,
};

var MIDIControlEventNames = [
    "Bank Select",
    "Modulation",
    "Breath Controller",
    "Undefined",
    "Foot Pedal",
    "Portamento Time",
    "Data Entry",
    "Volume",
    "Undefined",
    "Balance",
    "Pan",
    "Expression",
    "Effect Control 1",
    "Effect Control 2",
    "Undefined",
    "Undefined",
    "Ribbon Controller or General Purpose Slider 1",
    "Knob 1 or General Purpose Slider 2",
    "General Purpose Slider 3",
    "Knob 2 or General Purpose Slider 4",
    "Knob 3 or Undefined",
    "Knob 4 or Undefined",
    "Undefined",
    "Undefined",
    "Undefined",
    "Undefined",
    "Undefined",
    "Undefined",
    "Undefined",
    "Undefined",
    "Undefined",
    "Undefined",
    "Bank Select",
    "Modulation Wheel",
    "Breath controller",
    "Undefined",
    "Foot Pedal",
    "Portamento Time",
    "Data Entry",
    "Volume",
    "Balance",
    "Undefined",
    "Pan position",
    "Expression",
    "Effect Control 1",
    "Effect Control 2",
    "Undefined",
    "Undefined",
    "Undefined",
    "Undefined",
    "Undefined",
    "Undefined",
    "Undefined",
    "Undefined",
    "Undefined",
    "Undefined",
    "Undefined",
    "Undefined",
    "Undefined",
    "Undefined",
    "Undefined",
    "Undefined",
    "Undefined",
    "Undefined",
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
    "Undefined",
    "Undefined",
    "Undefined",
    "Undefined",
    "Undefined",
    "Undefined",
    "Undefined",
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
    "Undefined",
    "Undefined",
    "Undefined",
    "Undefined",
    "Undefined",
    "Undefined",
    "Undefined",
    "Undefined",
    "Undefined",
    "Undefined",
    "Undefined",
    "Undefined",
    "Undefined",
    "Undefined",
    "Undefined",
    "Undefined",
    "Undefined",
    "Undefined",
    "All Sound Off",
    "All Controllers Off",
    "Local Keyboard",
    "All Notes Off",
    "Omni Mode Off",
    "Omni Mode On",
    "Mono Operation",
    "Poly Operation", // CC127
];

var MIDIControlEvents = {
    MSB_BANK: 0x00,
    MSB_MODWHEEL: 0x01,
    MSB_BREATH: 0x02,
    MSB_FOOT: 0x04,
    MSB_PORTAMENTO_TIME: 0x05,
    MSB_DATA_ENTRY: 0x06,
    MSB_MAIN_VOLUME: 0x07,
    MSB_BALANCE: 0x08,
    MSB_PAN: 0x0a,
    MSB_EXPRESSION: 0x0b,
    MSB_EFFECT1: 0x0c,
    MSB_EFFECT2: 0x0d,
    MSB_GENERAL_PURPOSE1: 0x10,
    MSB_GENERAL_PURPOSE2: 0x11,
    MSB_GENERAL_PURPOSE3: 0x12,
    MSB_GENERAL_PURPOSE4: 0x13,
    LSB_BANK: 0x20,
    LSB_MODWHEEL: 0x21,
    LSB_BREATH: 0x22,
    LSB_FOOT: 0x24,
    LSB_PORTAMENTO_TIME: 0x25,
    LSB_DATA_ENTRY: 0x26,
    LSB_MAIN_VOLUME: 0x27,
    LSB_BALANCE: 0x28,
    LSB_PAN: 0x2a,
    LSB_EXPRESSION: 0x2b,
    LSB_EFFECT1: 0x2c,
    LSB_EFFECT2: 0x2d,
    LSB_GENERAL_PURPOSE1: 0x30,
    LSB_GENERAL_PURPOSE2: 0x31,
    LSB_GENERAL_PURPOSE3: 0x32,
    LSB_GENERAL_PURPOSE4: 0x33,
    SUSTAIN: 0x40,
    PORTAMENTO: 0x41,
    SOSTENUTO: 0x42,
    SUSTENUTO: 0x42,
    SOFT_PEDAL: 0x43,
    LEGATO_FOOTSWITCH: 0x44,
    HOLD2: 0x45,
    SC1_SOUND_VARIATION: 0x46,
    SC2_TIMBRE: 0x47,
    SC3_RELEASE_TIME: 0x48,
    SC4_ATTACK_TIME: 0x49,
    SC5_BRIGHTNESS: 0x4a,
    SC6: 0x4b,
    SC7: 0x4c,
    SC8: 0x4d,
    SC9: 0x4e,
    SC10: 0x4f,
    GENERAL_PURPOSE5: 0x50,
    GENERAL_PURPOSE6: 0x51,
    GENERAL_PURPOSE7: 0x52,
    GENERAL_PURPOSE8: 0x53,
    PORTAMENTO_CONTROL: 0x54,
    E1_REVERB_DEPTH: 0x5b,
    E2_TREMOLO_DEPTH: 0x5c,
    E3_CHORUS_DEPTH: 0x5d,
    E4_DETUNE_DEPTH: 0x5e,
    E5_PHASER_DEPTH: 0x5f,
    DATA_INCREMENT: 0x60,
    DATA_DECREMENT: 0x61,
    NONREG_PARM_NUM_LSB: 0x62,
    NONREG_PARM_NUM_MSB: 0x63,
    REGIST_PARM_NUM_LSB: 0x64,
    REGIST_PARM_NUM_MSB: 0x65,
    ALL_SOUNDS_OFF: 0x78,
    RESET_CONTROLLERS: 0x79,
    LOCAL_CONTROL_SWITCH: 0x7a,
    ALL_NOTES_OFF: 0x7b,
    OMNI_OFF: 0x7c,
    OMNI_ON: 0x7d,
    MONO1: 0x7e,
    MONO2: 0x7f,
};

var MIDIMetaEventNames = {
    0x00: "sequenceNumber",
    0x01: "text",
    0x02: "copyrightNotice",
    0x03: "trackName",
    0x04: "instrumentName",
    0x05: "lyrics",
    0x06: "marker",
    0x07: "cuePoint",
    0x20: "midiChannelPrefix",
    0x21: "portPrefix",
    0x2f: "endOfTrack",
    0x51: "setTempo",
    0x54: "smpteOffset",
    0x58: "timeSignature",
    0x59: "keySignature",
    0x7f: "sequencerSpecific",
};

var MIDIMetaEvents = {
    sequenceNumber: 0x00,
    text: 0x01,
    copyrightNotice: 0x02,
    trackName: 0x03,
    instrumentName: 0x04,
    lyrics: 0x05,
    marker: 0x06,
    cuePoint: 0x07,
    midiChannelPrefix: 0x20,
    portPrefix: 0x21,
    endOfTrack: 0x2f,
    setTempo: 0x51,
    smpteOffset: 0x54,
    timeSignature: 0x58,
    keySignature: 0x59,
    sequencerSpecific: 0x7f,
};

function deserialize(stream, lastEventTypeByte, setLastEventTypeByte) {
    if (lastEventTypeByte === void 0) { lastEventTypeByte = 0; }
    var deltaTime = stream.readVarInt();
    return deserializeSingleEvent(stream, deltaTime, lastEventTypeByte, setLastEventTypeByte);
}
function deserializeSingleEvent(stream, deltaTime, lastEventTypeByte, setLastEventTypeByte) {
    if (deltaTime === void 0) { deltaTime = 0; }
    if (lastEventTypeByte === void 0) { lastEventTypeByte = 0; }
    var eventTypeByte = stream.readInt8();
    if ((eventTypeByte & 0xf0) === 0xf0) {
        /* system / meta event */
        if (eventTypeByte === 0xff) {
            /* meta event */
            var type = "meta";
            var subtypeByte = stream.readInt8();
            var length = stream.readVarInt();
            switch (subtypeByte) {
                case MIDIMetaEvents.sequenceNumber:
                    if (length !== 2)
                        throw new Error("Expected length for sequenceNumber event is 2, got " + length);
                    return {
                        deltaTime: deltaTime,
                        type: type,
                        subtype: "sequenceNumber",
                        number: stream.readInt16(),
                    };
                case MIDIMetaEvents.text:
                    return {
                        deltaTime: deltaTime,
                        type: type,
                        subtype: "text",
                        text: stream.readStr(length),
                    };
                case MIDIMetaEvents.copyrightNotice:
                    return {
                        deltaTime: deltaTime,
                        type: type,
                        subtype: "copyrightNotice",
                        text: stream.readStr(length),
                    };
                case MIDIMetaEvents.trackName:
                    return {
                        deltaTime: deltaTime,
                        type: type,
                        subtype: "trackName",
                        text: stream.readStr(length),
                    };
                case MIDIMetaEvents.instrumentName:
                    return {
                        deltaTime: deltaTime,
                        type: type,
                        subtype: "instrumentName",
                        text: stream.readStr(length),
                    };
                case MIDIMetaEvents.lyrics:
                    return {
                        deltaTime: deltaTime,
                        type: type,
                        subtype: "lyrics",
                        text: stream.readStr(length),
                    };
                case MIDIMetaEvents.marker:
                    return {
                        deltaTime: deltaTime,
                        type: type,
                        subtype: "marker",
                        text: stream.readStr(length),
                    };
                case MIDIMetaEvents.cuePoint:
                    return {
                        deltaTime: deltaTime,
                        type: type,
                        subtype: "cuePoint",
                        text: stream.readStr(length),
                    };
                case MIDIMetaEvents.midiChannelPrefix:
                    if (length !== 1)
                        throw new Error("Expected length for midiChannelPrefix event is 1, got " + length);
                    return {
                        deltaTime: deltaTime,
                        type: type,
                        subtype: "midiChannelPrefix",
                        value: stream.readInt8(),
                    };
                case MIDIMetaEvents.portPrefix:
                    if (length !== 1)
                        throw new Error("Expected length for midiChannelPrefix event is 1, got " + length);
                    return {
                        deltaTime: deltaTime,
                        type: type,
                        subtype: "portPrefix",
                        port: stream.readInt8(),
                    };
                case MIDIMetaEvents.endOfTrack:
                    if (length !== 0)
                        throw new Error("Expected length for endOfTrack event is 0, got " + length);
                    return {
                        deltaTime: deltaTime,
                        type: type,
                        subtype: "endOfTrack",
                    };
                case MIDIMetaEvents.setTempo:
                    if (length !== 3)
                        throw new Error("Expected length for setTempo event is 3, got " + length);
                    return {
                        deltaTime: deltaTime,
                        type: type,
                        subtype: "setTempo",
                        microsecondsPerBeat: (stream.readInt8() << 16) +
                            (stream.readInt8() << 8) +
                            stream.readInt8(),
                    };
                case MIDIMetaEvents.smpteOffset: {
                    if (length !== 5)
                        throw new Error("Expected length for smpteOffset event is 5, got " + length);
                    var hourByte = stream.readInt8();
                    var table = {
                        0x00: 24,
                        0x20: 25,
                        0x40: 29,
                        0x60: 30,
                    };
                    return {
                        deltaTime: deltaTime,
                        type: type,
                        subtype: "smpteOffset",
                        frameRate: table[hourByte & 0x60],
                        hour: hourByte & 0x1f,
                        min: stream.readInt8(),
                        sec: stream.readInt8(),
                        frame: stream.readInt8(),
                        subframe: stream.readInt8(),
                    };
                }
                case MIDIMetaEvents.timeSignature:
                    if (length !== 4)
                        throw new Error("Expected length for timeSignature event is 4, got " + length);
                    return {
                        deltaTime: deltaTime,
                        type: type,
                        subtype: "timeSignature",
                        numerator: stream.readInt8(),
                        denominator: Math.pow(2, stream.readInt8()),
                        metronome: stream.readInt8(),
                        thirtyseconds: stream.readInt8(),
                    };
                case MIDIMetaEvents.keySignature:
                    if (length !== 2)
                        throw new Error("Expected length for keySignature event is 2, got " + length);
                    return {
                        deltaTime: deltaTime,
                        type: type,
                        subtype: "keySignature",
                        key: stream.readInt8(true),
                        scale: stream.readInt8(),
                    };
                case MIDIMetaEvents.sequencerSpecific:
                    return {
                        deltaTime: deltaTime,
                        type: type,
                        subtype: "sequencerSpecific",
                        data: stream.read(length),
                    };
                default:
                    return {
                        deltaTime: deltaTime,
                        type: type,
                        subtype: "unknown",
                        data: stream.read(length),
                    };
            }
        }
        else if (eventTypeByte === 0xf0) {
            var length = stream.readVarInt();
            return {
                deltaTime: deltaTime,
                type: "sysEx",
                data: stream.read(length),
            };
        }
        else if (eventTypeByte === 0xf7) {
            var length = stream.readVarInt();
            return {
                deltaTime: deltaTime,
                type: "dividedSysEx",
                data: stream.read(length),
            };
        }
        else {
            throw new Error("Unrecognised MIDI event type byte: " + eventTypeByte);
        }
    }
    else {
        /* channel event */
        var param1 = void 0;
        if ((eventTypeByte & 0x80) === 0) {
            /* running status - reuse lastEventTypeByte as the event type.
              eventTypeByte is actually the first parameter
            */
            param1 = eventTypeByte;
            eventTypeByte = lastEventTypeByte;
        }
        else {
            param1 = stream.readInt8();
            setLastEventTypeByte === null || setLastEventTypeByte === void 0 ? void 0 : setLastEventTypeByte(eventTypeByte);
        }
        var eventType = eventTypeByte >> 4;
        var channel = eventTypeByte & 0x0f;
        var type = "channel";
        switch (eventType) {
            case MIDIChannelEvents.noteOff:
                return {
                    deltaTime: deltaTime,
                    type: type,
                    channel: channel,
                    subtype: "noteOff",
                    noteNumber: param1,
                    velocity: stream.readInt8(),
                };
            case MIDIChannelEvents.noteOn: {
                var velocity = stream.readInt8();
                return {
                    deltaTime: deltaTime,
                    type: type,
                    channel: channel,
                    subtype: velocity === 0 ? "noteOff" : "noteOn",
                    noteNumber: param1,
                    velocity: velocity,
                };
            }
            case MIDIChannelEvents.noteAftertouch:
                return {
                    deltaTime: deltaTime,
                    type: type,
                    channel: channel,
                    subtype: "noteAftertouch",
                    noteNumber: param1,
                    amount: stream.readInt8(),
                };
            case MIDIChannelEvents.controller:
                return {
                    deltaTime: deltaTime,
                    type: type,
                    channel: channel,
                    subtype: "controller",
                    controllerType: param1,
                    value: stream.readInt8(),
                };
            case MIDIChannelEvents.programChange:
                return {
                    deltaTime: deltaTime,
                    type: type,
                    channel: channel,
                    subtype: "programChange",
                    value: param1,
                };
            case MIDIChannelEvents.channelAftertouch:
                return {
                    deltaTime: deltaTime,
                    type: type,
                    channel: channel,
                    subtype: "channelAftertouch",
                    amount: param1,
                };
            case MIDIChannelEvents.pitchBend:
                return {
                    deltaTime: deltaTime,
                    type: type,
                    channel: channel,
                    subtype: "pitchBend",
                    value: param1 + (stream.readInt8() << 7),
                };
            default:
                return {
                    deltaTime: deltaTime,
                    type: type,
                    channel: channel,
                    subtype: "unknown",
                    data: stream.readInt8(),
                };
        }
    }
}

/* Wrapper for accessing strings through sequential reads */
var Stream = /** @class */ (function () {
    function Stream(buf) {
        this.position = 0;
        if (buf instanceof DataView) {
            this.buf = buf;
        }
        else if (buf instanceof ArrayBuffer) {
            this.buf = new DataView(buf);
        }
        else if (buf instanceof Array) {
            this.buf = new DataView(new Uint8Array(buf).buffer);
        }
        else if (buf instanceof Uint8Array) {
            this.buf = new DataView(buf.buffer);
        }
        else {
            throw new Error("not supported type: " + typeof buf);
        }
    }
    Stream.prototype.readByte = function () {
        return this.buf.getUint8(this.position++);
    };
    Stream.prototype.readStr = function (length) {
        return this.read(length)
            .map(function (e) { return String.fromCharCode(e); })
            .join("");
    };
    Stream.prototype.read = function (length) {
        var result = [];
        for (var index = 0; index < length; index++) {
            result.push(this.readByte());
        }
        return result;
    };
    /* read a big-endian 32-bit integer */
    Stream.prototype.readInt32 = function () {
        var result = this.buf.getInt32(this.position, false);
        this.position += 4;
        return result;
    };
    /* read a big-endian 16-bit integer */
    Stream.prototype.readInt16 = function () {
        var result = this.buf.getInt16(this.position, false);
        this.position += 2;
        return result;
    };
    /* read an 8-bit integer */
    Stream.prototype.readInt8 = function (signed) {
        if (signed === void 0) { signed = false; }
        if (signed) {
            return this.buf.getInt8(this.position++);
        }
        else {
            return this.readByte();
        }
    };
    Stream.prototype.eof = function () {
        return this.position >= this.buf.byteLength;
    };
    /* read a MIDI-style variable-length integer
      (big-endian value in groups of 7 bits,
      with top bit set to signify that another byte follows)
    */
    Stream.prototype.readVarInt = function () {
        var result = 0;
        for (;;) {
            var b = this.readInt8();
            if (b & 0x80) {
                result += b & 0x7f;
                result <<= 7;
            }
            else {
                /* b is the last byte */
                return result + b;
            }
        }
    };
    return Stream;
}());

/*
class to parse the .mid file format
(depends on stream.js)
*/
function read(data) {
    function readChunk(stream) {
        var id = stream.readStr(4);
        var length = stream.readInt32();
        return {
            id: id,
            length: length,
            data: stream.read(length),
        };
    }
    var stream = new Stream(data);
    var headerChunk = readChunk(stream);
    if (headerChunk.id !== "MThd" || headerChunk.length !== 6) {
        throw new Error("Bad .mid file - header not found");
    }
    var headerStream = new Stream(headerChunk.data);
    var formatType = headerStream.readInt16();
    var trackCount = headerStream.readInt16();
    var timeDivision = headerStream.readInt16();
    var ticksPerBeat;
    if (timeDivision & 0x8000) {
        throw new Error("Expressing time division in SMTPE frames is not supported yet");
    }
    else {
        ticksPerBeat = timeDivision;
    }
    var header = {
        formatType: formatType,
        trackCount: trackCount,
        ticksPerBeat: ticksPerBeat,
    };
    var lastEventTypeByte;
    function readEvent(stream) {
        return deserialize(stream, lastEventTypeByte, function (byte) { return (lastEventTypeByte = byte); });
    }
    var tracks = [];
    for (var i = 0; i < header.trackCount; i++) {
        tracks[i] = [];
        var trackChunk = readChunk(stream);
        if (trackChunk.id !== "MTrk") {
            throw new Error("Unexpected chunk - expected MTrk, got " + trackChunk.id);
        }
        var trackStream = new Stream(trackChunk.data);
        while (!trackStream.eof()) {
            var event = readEvent(trackStream);
            tracks[i].push(event);
        }
    }
    return {
        header: header,
        tracks: tracks,
    };
}

function toCharCodes(str) {
    var bytes = [];
    for (var i = 0; i < str.length; i++) {
        bytes.push(str.charCodeAt(i));
    }
    return bytes;
}

// variable-length quantity
function toVLQ(intNum) {
    var v = intNum;
    var r = [v & 0x7f];
    while (true) {
        v >>= 7;
        if (v === 0) {
            break;
        }
        r.unshift(0x80 + (v & 0x7f));
    }
    return r;
}

function serialize(e, includeDeltaTime) {
    if (includeDeltaTime === void 0) { includeDeltaTime = true; }
    var bytes = [];
    function add(data) {
        if (Array.isArray(data)) {
            data.forEach(add);
        }
        else {
            if (!Number.isInteger(data)) {
                throw new Error("\"".concat(data, "\" is not integer"));
            }
            bytes.push(data);
        }
    }
    if (includeDeltaTime) {
        add(toVLQ(e.deltaTime));
    }
    function addNumbers(list) {
        add(list.length);
        list.forEach(function (v) { return add(v); });
    }
    function addText(text) {
        add(text.length);
        add(toCharCodes(text));
    }
    switch (e.type) {
        case "meta": {
            var subtypeCode = MIDIMetaEvents[e.subtype];
            if (subtypeCode === undefined) {
                return [];
            }
            add(0xff); // type
            add(subtypeCode); // subtype
            switch (e.subtype) {
                case "sequenceNumber":
                    add(e.number);
                    break;
                case "text":
                    addText(e.text);
                    break;
                case "copyrightNotice":
                    addText(e.text);
                    break;
                case "trackName":
                    addText(e.text);
                    break;
                case "instrumentName":
                    addText(e.text);
                    break;
                case "lyrics":
                    addText(e.text);
                    break;
                case "marker":
                    addText(e.text);
                    break;
                case "cuePoint":
                    addText(e.text);
                    break;
                case "midiChannelPrefix":
                    addNumbers([e.value]);
                    break;
                case "portPrefix":
                    addNumbers([e.port]);
                    break;
                case "endOfTrack":
                    add(0);
                    break;
                case "setTempo": {
                    var t = e.microsecondsPerBeat;
                    addNumbers([(t >> 16) & 0xff, (t >> 8) & 0xff, t & 0xff]);
                    break;
                }
                case "smpteOffset": {
                    var frameRateByte = {
                        24: 0x00,
                        25: 0x20,
                        29: 0x40,
                        30: 0x60,
                    };
                    addNumbers([
                        frameRateByte[e.frameRate] + (0x1f & e.hour),
                        e.min,
                        e.sec,
                        e.frame,
                        e.subframe,
                    ]);
                    break;
                }
                case "timeSignature": {
                    addNumbers([
                        e.numerator,
                        Math.log2(e.denominator),
                        e.metronome,
                        e.thirtyseconds,
                    ]);
                    break;
                }
                case "keySignature": {
                    addNumbers([e.key, e.scale]);
                    break;
                }
                case "sequencerSpecific":
                    addNumbers(e.data);
                    break;
                case "unknown":
                    addNumbers(e.data);
                    break;
            }
            break;
        }
        case "sysEx":
            add(0xf0);
            addNumbers(e.data);
            break;
        case "dividedSysEx":
            add(0xf7);
            addNumbers(e.data);
            break;
        case "channel": {
            var subtypeCode = MIDIChannelEvents[e.subtype];
            if (subtypeCode === undefined) {
                return [];
            }
            add((subtypeCode << 4) + e.channel); // subtype + channel
            switch (e.subtype) {
                case "noteOff": {
                    add(e.noteNumber);
                    add(e.velocity);
                    break;
                }
                case "noteOn": {
                    add(e.noteNumber);
                    add(e.velocity);
                    break;
                }
                case "noteAftertouch": {
                    add(e.noteNumber);
                    add(e.amount);
                    break;
                }
                case "controller": {
                    add(e.controllerType);
                    add(e.value);
                    break;
                }
                case "programChange":
                    add(e.value);
                    break;
                case "channelAftertouch":
                    add(e.amount);
                    break;
                case "pitchBend": {
                    add(e.value & 0x7f);
                    add((e.value >> 7) & 0x7f);
                    break;
                }
                case "unknown":
                    add(e.data);
                    break;
            }
            break;
        }
    }
    return bytes;
}

var Buffer = /** @class */ (function () {
    function Buffer() {
        this.data = [];
        this.position = 0;
    }
    Object.defineProperty(Buffer.prototype, "length", {
        get: function () {
            return this.data.length;
        },
        enumerable: false,
        configurable: true
    });
    Buffer.prototype.writeByte = function (v) {
        this.data.push(v);
        this.position++;
    };
    Buffer.prototype.writeStr = function (str) {
        this.writeBytes(toCharCodes(str));
    };
    Buffer.prototype.writeInt32 = function (v) {
        this.writeByte((v >> 24) & 0xff);
        this.writeByte((v >> 16) & 0xff);
        this.writeByte((v >> 8) & 0xff);
        this.writeByte(v & 0xff);
    };
    Buffer.prototype.writeInt16 = function (v) {
        this.writeByte((v >> 8) & 0xff);
        this.writeByte(v & 0xff);
    };
    Buffer.prototype.writeBytes = function (arr) {
        var _this = this;
        arr.forEach(function (v) { return _this.writeByte(v); });
    };
    Buffer.prototype.writeChunk = function (id, func) {
        this.writeStr(id);
        var chunkBuf = new Buffer();
        func(chunkBuf);
        this.writeInt32(chunkBuf.length);
        this.writeBytes(chunkBuf.data);
    };
    Buffer.prototype.toBytes = function () {
        return new Uint8Array(this.data);
    };
    return Buffer;
}());

//https://sites.google.com/site/yyagisite/material/smfspec#format
function write(tracks, ticksPerBeat) {
    if (ticksPerBeat === void 0) { ticksPerBeat = 480; }
    var buf = new Buffer();
    // header chunk
    buf.writeChunk("MThd", function (it) {
        it.writeInt16(1); // formatType
        it.writeInt16(tracks.length); // trackCount
        it.writeInt16(ticksPerBeat); // timeDivision
    });
    var _loop_1 = function (track) {
        buf.writeChunk("MTrk", function (it) {
            for (var _i = 0, track_1 = track; _i < track_1.length; _i++) {
                var event = track_1[_i];
                it.writeBytes(serialize(event));
            }
        });
    };
    // track chunk
    for (var _i = 0, tracks_1 = tracks; _i < tracks_1.length; _i++) {
        var track = tracks_1[_i];
        _loop_1(track);
    }
    return buf.toBytes();
}

export { MIDIChannelEvents, MIDIControlEventNames, MIDIControlEvents, MIDIMetaEventNames, MIDIMetaEvents, Stream, deserialize, deserializeSingleEvent, read, serialize, write };
//# sourceMappingURL=index.js.map
