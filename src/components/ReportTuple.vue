<template>
  <div class="question-details">
    <p>Result:</p>
    <div class="form-group selections">
      <label>
        <input type="radio" v-model="selectedOption" :value="0" :disabled="!ableEdit" :name="'answer-option'+name">
        {{ question.options[0] }}
      </label>
      <label>
        <input type="radio" v-model="selectedOption" :value="1" :disabled="!ableEdit" :name="'answer-option'+name">
        {{ question.options[1] }}
      </label>
      <label>
        <input type="radio" v-model="selectedOption" :value="2" :disabled="!ableEdit" :name="'answer-option'+name">
        {{ question.options[2] }}
      </label>
      <label>
        <input type="radio" v-model="selectedOption" :value="3" :disabled="!ableEdit" :name="'answer-option'+name">
        {{ question.options[3] }}
      </label>
    </div>
    <p>Reason:</p>
    <div class="form-group">
      <label>
        <textarea rows="3" v-model="reason" :disabled="!ableEdit"></textarea>
      </label>
    </div>
    <p>References:</p>
    <div class="form-group">
      <label>
        <textarea rows="5" v-model="references" :disabled="!ableEdit"></textarea>
      </label>
    </div>
  </div>
</template>

<script>
export default {
  name: "ReportTuple",
  props: {
    question: {
      type: Object,
      required: true
    },
    ableEdit: {
      type:Boolean,
      required: true
    },
    name: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      selectedOption: null,
      reason: "",
      references: ""
    }
  },
  methods: {
    resetParameters() {
      this.selectedOption = null;
      this.reason = "";
      this.references = "";
    }
  }
}
</script>

<style scoped>

.question-details {
  margin-top: 1rem;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group textarea{
  width: 45rem;
  max-width: 100%;
}
.selections label{
  margin-right: 4rem;
}
</style>