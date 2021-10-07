export class User {
  id: string

  profilePictureUrl: string

  constructor(id: string, profilePictureUrl: string) {
    this.id = id
    this.profilePictureUrl = profilePictureUrl
  }
}

export const Users = [
  new User('Sam', 'https://angular-test-backend-yc4c5cvnnq-an.a.run.app/Sam.png'),
  new User('Russell', 'https://angular-test-backend-yc4c5cvnnq-an.a.run.app/Russell.png'),
  new User('Joyse', 'https://angular-test-backend-yc4c5cvnnq-an.a.run.app/Joyse.png'),
]
