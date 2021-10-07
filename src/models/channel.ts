export class Channel {
  id: string

  name: string

  constructor(id: string, name: string) {
    this.id = id
    this.name = name
  }
}

export const Channels = [new Channel('1', 'General Channel'), new Channel('2', 'Technology Channel'), new Channel('3', 'LGTM Channel')]
