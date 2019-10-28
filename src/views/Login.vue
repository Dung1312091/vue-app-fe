<template>
  <div class="login">
    <Input placeholder="edit me" />
    <Button @onClick="handleLogin">Login</Button>
    {{ counter }}
  </div>
</template>

<script>
// @ is an alias to /src
import Input from '@/components/Input/index.vue';
import Button from '@/components/Button.vue';

export default {
  name: 'login',
  components: {
    Input,
    Button
  },
  data: function() {
    return {
      counter: 0
    };
  },
  methods: {
    handleLogin: function() {
      console.log('vao ko');
    }
  }
};
</script>
