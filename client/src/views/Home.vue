<template>
  <main>
    <message-form v-on:messageSent="searchMessages()" />
    <div class="columns is-multiline is-mobile" style="margin-left: 12px;">
      <div class="column is-narrow" v-for="message in messages" :key="message._id">
        <div class="card message-card"
          :style="{'background-image': `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${message.imageUrl})`}">
          <div class="card-content">
            <p class="title">
              “{{ message.message }}”
            </p>
            <p class="subtitle">
              {{ message.subject }} - {{ message.username }}
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="columns is-centered is-mobile">
      <div class="column is-half">
        <section class="section" v-if="!messages || messages.length <= 0">
          <div class="content has-text-grey has-text-centered">
            <p><b-icon pack="far" icon="sad-tear" size="is-large"/></p>
            <p style="font-size: 20px;">Nobody left messages</p>
          </div>
        </section>
      </div>
    </div>
  </main>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import { Message } from '../models/message.model'
import { MessageClient } from '../client/message.client'
import MessageForm from './MessageForm.vue'

@Component({
  components: {
    MessageForm
  }
})
export default class Home extends Vue {
  private messageClient!: MessageClient
  private messages: Message[] = []

  private created(): void {
    this.messageClient = new MessageClient()
  }
  
  private mounted(): void {
    this.searchMessages()
  }

  private searchMessages(): void {
    this.messageClient.findAll()
      .then(result => {
        this.messages = result.data
      }).catch(error => {
        console.log(error)
      })
  }
}
</script>
<style>
.message-card {
  width: 350px; 
  max-width: 350px;
  background-repeat: no-repeat;
  border-radius: 5px;
  background-position: center;
  background-size: 350px auto;
}
</style>