<template>
  <div class="container">
    <h1>{{ title }}</h1>
    <div class="intro">
      <p v-html="introduction1"></p>
      <p v-html="introduction2"></p>
      <p v-html="introduction3"></p>
    </div>
    <form>
      <div class="name_input">
        <span>Your name: </span>
        <label>
          <input type="text" v-model="name" required>
        </label>
      </div>
      <div>
        <button @click="pracQuestionnaire" class="start">Practice</button>
      </div>
      <button @click="startQuestionnaire" class="start">Start</button>
    </form>

  </div>
</template>

<script>

export default {
  data() {
    return {
      title: 'User Study about Safety Report',
      introduction1: 'Welcome to our user study! In this study, you will be required to complete <b>4</b> safety reports that compare the safety characteristics of similar products, such as Intel chips vs AMD chips. Each report should be completed within a <b>10-minute</b> time frame, and once the time is up, you will not be able to make any further changes and must move on to the next question.',
      introduction2: 'For each report, you will need to search for clues and determine which product is superior for a specific aspect, providing a choice, reason, and references that will be considered as factors in the safety comparison result. We call this <b>&lt;choice, reason, references&gt;</b> a factor tuple. You may add as many factor tuples as you wish to each report, but ensure that your answers are real, accurate, and comprehensive.',
      introduction3: 'To begin the study, please enter your name and click start. The first report will commence, and the timer will begin counting down.',
      name: ''
    }
  },
  methods: {
    startQuestionnaire() {
      // Code to start the questionnaire
      if (this.name.trim() !== '') {
        this.$router.push({name: 'report', params: {name: this.name}});
        // this.$router.push({name: 'demo', params: {name: this.name}});
      }
    },
    pracQuestionnaire () {
      if (this.name.trim() !== '') {
        // this.$router.push({name: 'report', params: {name: this.name}});
        this.$router.push({name: 'demo', params: {name: this.name}});
      }
    }
  }
}
</script>

<style>
/* Add your CSS styles here */
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 70vh;
}

.intro {
  width: 66.67%;
  text-align: left;
}

.start {
  font-size: 1.25rem;
  margin-top: 1.5rem;
  padding: 0.2rem 0.4rem;
}

.name_input {
  margin-top: 1.5rem;
  margin-bottom: 1rem;
}
</style>
