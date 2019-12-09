<template>
  <div class="login">
    <div>
      <Input placeholder="Email" />
    </div>
    <div>
      <Input placeholder="Password" @change="onChange" />
    </div>
    <Button @onClick="handleLogin" v-bind:title="title"></Button>
  </div>
</template>

<script>
// @ is an alias to /src
import Input from '@/components/Input.vue';
import Button from '@/components/Button.vue';

export default {
  name: 'login',
  components: {
    Button,
    Input
  },
  data: function() {
    return {
      title: 'Login'
    };
  },
  methods: {
    handleLogin: function(event, data) {
      console.log({ data });
    },
    onChange: function() {
      console.log('aa');
    }
  }
};
</script>
