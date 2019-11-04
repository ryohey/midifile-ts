import toCharCodes from "./toCharCodes"

export default class Buffer {
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
    this.writeInt32(0) // dummy chunk size
    const start = this.length
    func(this) // write chunk contents
    const size = this.length - start
    this.writeInt32(size) // write chunk size
  }

  toBytes() {
    return new Uint8Array(this.data)
  }
}
