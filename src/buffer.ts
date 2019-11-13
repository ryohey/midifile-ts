import { toCharCodes } from "./toCharCodes"

export class Buffer {
  private data: number[] = []
  private position: number = 0

  get length() {
    return this.data.length
  }

  writeByte(v: number) {
    this.data.push(v)
    this.position++
  }

  writeStr(str: string) {
    this.writeBytes(toCharCodes(str))
  }

  writeInt32(v: number) {
    this.writeByte((v >> 24) & 0xff)
    this.writeByte((v >> 16) & 0xff)
    this.writeByte((v >> 8) & 0xff)
    this.writeByte(v & 0xff)
  }

  writeInt16(v: number) {
    this.writeByte((v >> 8) & 0xff)
    this.writeByte(v & 0xff)
  }

  writeBytes(arr: number[]) {
    arr.forEach(v => this.writeByte(v))
  }

  writeChunk(id: string, func: (buf: Buffer) => void) {
    this.writeStr(id)

    const chunkBuf = new Buffer()
    func(chunkBuf)

    this.writeInt32(chunkBuf.length)
    this.writeBytes(chunkBuf.data)
  }

  toBytes() {
    return new Uint8Array(this.data)
  }
}
