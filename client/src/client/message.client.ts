import axios from 'axios'

import { Message } from '../models/message.model'

export class MessageClient {
  private readonly API_URL = 'http://localhost:3000/messages'

  public async findAll() {
    return await axios.get(this.API_URL)
  }

  public async save(message: Message) {
    return await axios.post(this.API_URL, message)
  }
}
