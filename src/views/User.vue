<template>
  <div class="user">
    <Table v-bind:thead="thead"></Table>
  </div>
</template>

<script>
// @ is an alias to /src
import Table from '@/components/Table.vue';

const thead = [
  {
    name: 'name',
    width: 300
  },
  {
    name: 'status',
    width: 100
  },
  {
    name: 'phone number',
    width: 200
  },
  {
    name: 'email',
    width: 200
  },
  {
    name: 'date created',
    width: 100
  }
];

export default {
  name: 'home',
  components: {
    Table
  },
  data() {
    return {
      thead
    };
  }
};
</script>
