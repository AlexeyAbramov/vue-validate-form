<template>
  <div class="form-group">
    <div class="d-flex">
      <h2>{{ input.title }}</h2>
      <i class="fas" :class="correct" v-if="isActivated"></i>
    </div>
    <input :type="input.type" :value="input.value" @input="onInput($event)" />
  </div>
</template>

<script>
export default {
  props: {
    input: {
      type: Object,
      required: true
    },
    index: Number
  },
  data() {
    return {
      isActivated: this.input.value != '',
    };
  },
  methods: {
    onInput(e) {
      this.isActivated = true;
      this.$store.commit('onInput', {value:e.target.value, index:this.index});

      this.$emit('change', {value:this.input.pattern.test(this.input.value), index:this.index})
    }
  },
  computed: {
    correct() {
      return this.input.pattern.test(this.input.value) && this.input.value!='' ? 'fa-check-circle green': 'fa-times-circle red'
    }
  }
};
</script>
