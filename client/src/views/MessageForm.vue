<template>
  <validation-observer ref="formObserver" v-slot="{ passes, invalid }"
    class="columns is-multiline is-mobile is-centered"  style="margin-top: 20px;">
    <div class="column is-narrow">
      <validation-provider
        rules="required"
        v-slot="{ errors, valid }"
        name="subject" >
        <b-field
          :message="errors"
          :type="{ 'is-danger': errors[0], 'is-success': valid }">
          <b-input
            type="text"
            icon="comment"
            icon-pack="fas"
            v-model="message.subject"
            placeholder="Subject"/>
        </b-field>
      </validation-provider>
    </div>
    <div class="column is-narrow">
      <validation-provider
        v-slot="{ errors, valid }"
        name="author" >
        <b-field
          :message="errors"
          :type="{ 'is-danger': errors[0], 'is-success': valid }">
          <b-input
            type="text"
            icon="user"
            icon-pack="fas"
            v-model="message.username"
            placeholder="Author | Publisher"/>
        </b-field>
      </validation-provider>
    </div>
    <div class="column is-narrow">
      <validation-provider
        v-slot="{ errors, valid }"
        name="imageUrl">
        <b-field
          :message="errors"
          :type="{ 'is-danger': errors[0], 'is-success': valid }">
          <b-input
            type="text"
            icon="image"
            icon-pack="fas"
            v-model="message.imageUrl"
            placeholder="Image URL"/>
        </b-field>
      </validation-provider>
    </div>
    <div class="column is-half">
      <validation-provider
        rules="required"
        v-slot="{ errors, valid }"
        name="message">
        <b-field
          :message="errors"
          :type="{ 'is-danger': errors[0], 'is-success': valid }">
          <b-input
            type="text"
            icon="comments"
            icon-pack="fas"
            v-model="message.message"
            placeholder="Take a deep breath and live a message here..."/>
        </b-field>
      </validation-provider>
    </div>
    <div class="column is-narrow">
      <b-button class="button is-success" :disabled="invalid" @click="passes(sendMessage)">
        <b-icon icon="paper-plane" pack="fas" size="is-small"></b-icon>
      </b-button>
    </div>
  </validation-observer>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

import { Message } from '../models/message.model'
import { MessageClient } from '../client/message.client'

@Component
export default class MessageForm extends Vue {
  private message: Message = new Message()
  private messageClient!: MessageClient

  private created(): void {
    this.messageClient = new MessageClient()    
  }

  private sendMessage(): void {
    this.messageClient.save(this.message)
      .then(response => {
        if (response.data) {
          this.$buefy.toast.open({
            message: 'Message sent!',
            position: 'is-bottom',
            type: 'is-success'
          })
          this.$emit('messageSent')
          this.clearForm()
        }
      }).catch(error => {
        this.clearForm()
        console.log(error)
      })
  }
  
  private async clearForm() {
    this.message.message = ''
    this.message.username = ''
    this.message.imageUrl = ''
    this.message.subject = ''
  }
}
</script>