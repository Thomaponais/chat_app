export class Message {
  id: string

  text!: string

  userId!: string

  channelId!: string

  createdAt!: string

  constructor(id: string, text: string, userId: string, channelId: string, createdAt: string) {
    this.id = id
    this.text = text
    this.userId = userId
    this.channelId = channelId
    this.createdAt = createdAt
  }

  time(): string {
    const date = new Date(this.createdAt)
    return `${date.getHours()}:${date.getMinutes()}`
  }
}
