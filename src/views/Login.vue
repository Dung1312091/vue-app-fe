<template>
  <form class="login" @submit="handleLogin">
    <div>
      <Input
        v-model="user.email"
        placeholder="Email"
        name="email"
        type="email"
        required
        v-bind:error="errors.email"
        v-bind:helperText="'Vui lòng nhập vào Email'"
      />
    </div>
    <div>
      <Input
        v-model="user.password"
        name="password"
        type="password"
        placeholder="Password"
        v-bind:error="errors.password"
        v-bind:helperText="'Vui lòng nhập vào password'"
        required
      />
    </div>
    <Button type="submit">Login</Button>
  </form>
</template>

<script>
// @ is an alias to /src
import Input from '@/components/Input.vue';
import Button from '@/components/Button.vue';
import GuestLayout from '../layouts/GuestLayout.vue';
import requestApi from '../apis/requestApi';
import { localStore } from '../utils/localStore';

export default {
  name: 'login',
  components: {
    Button,
    Input
  },
  data: function() {
    return {
      user: {
        email: '',
        password: ''
      },
      errors: {}
    };
  },
  created() {
    this.$emit(`update:layout`, GuestLayout);
  },
  watch: {
    user: {
      handler: function(val) {
        this.errors.email = !val.email;
        this.errors.password = !val.password;
      },
      deep: true
    }
  },
  methods: {
    handleLogin: async function(event) {
      event.preventDefault();
      const { data } = await requestApi.post('/login', this.user);
      if (data.status) {
        localStorage.setItem(localStore.ACCESS_TOKEN, data.data.accesstoken);
        this.$router.push('/');
      }
    }
  }
};
</script>
