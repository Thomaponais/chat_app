export class Message {
  messageId: string

  text!: string

  userId!: string

  channelId!: string

  datetime!: string

  constructor(messageId: string, text: string, userId: string, channelId: string, datetime: string) {
    this.messageId = messageId
    this.text = text
    this.userId = userId
    this.channelId = channelId
    this.datetime = datetime
  }

  time(): string {
    const date = new Date(this.datetime)
    return `${date.getHours()}:${date.getMinutes()}`
  }
}
