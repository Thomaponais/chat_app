export class Channel {
  channelId: string

  name: string

  constructor(channelId: string, name: string) {
    this.channelId = channelId
    this.name = name
  }
}

export const Channels = [new Channel('1', 'General Channel'), new Channel('2', 'Technology Channel'), new Channel('3', 'LGTM Channel')]
