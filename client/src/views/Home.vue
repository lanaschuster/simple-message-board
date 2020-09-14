<template>
  <main>
    <message-form />
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
  </main>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import axios from 'axios'

import MessageForm from './MessageForm.vue'

@Component({
  components: {
    MessageForm
  }
})
export default class Home extends Vue {
  private readonly API_URL = 'http://localhost:3000/messages'
  private messages = []
  
  private mounted(): void {
    axios.get(this.API_URL)
      .then(response => {
        this.messages = response.data
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