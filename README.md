[![npm version](https://badge.fury.io/js/midifile-ts.svg)](https://badge.fury.io/js/midifile-ts) [![Actions Status](https://github.com/ryohey/midifile-ts/workflows/CI/badge.svg?branch=master)](https://github.com/ryohey/midifile-ts/actions) [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)


# midifile-ts
TypeScript MIDI file parser forked from jasmid https://github.com/gasman/jasmid

## Installation

```bash
npm install midifile-ts --save
```

## Usage

```ts
import { read } from "midifile-ts"

const midi = read(data) // { header, tracks }
```

### Parse MIDI on node.js

```ts
import { read } from "midifile-ts"

const data = fs.readFileSync("song.mid")
const midi = read(data)
```

### Parse MIDI on the browser

```ts
import { read, MidiFile } from "midifile-ts"

const changeFileInput = (
  input: HTMLInputElement,
  callback: (midi: MidiFile|null) => void
) => {
  if (input.files === null || input.files.length === 0) {
    return
  }

  const file = input.files[0]
  const reader = new FileReader()

  reader.onload = e => {
    if (e.target == null) {
      callback(null)
      return
    }
    const buf = e.target.result as ArrayBuffer
    const midi = read(buf)
    callback(midi)
  }

  reader.readAsArrayBuffer(file)
}
```

