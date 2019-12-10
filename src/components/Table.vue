<template>
  <div class="table-wrap">
    <table>
      <thead>
        <th
          v-for="(th, index) in thead"
          v-bind:key="index"
          v-bind:style="{ width: `${th.width}px` }"
        >
          {{ th.name }}
        </th>
      </thead>
      <tr>
        <td>Jill</td>
        <td>Smith</td>
        <td>50</td>
        <td>50</td>
        <td>50</td>
      </tr>
      <tr>
        <td>Eve</td>
        <td>Jackson</td>
        <td>94</td>
        <td>94</td>
        <td>94</td>
      </tr>
      <tr>
        <td>Adam</td>
        <td>Johnson</td>
        <td>67</td>
        <td>67</td>
        <td>67</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'Table',
  props: {
    thead: Array
  }
};
</script>

<style scoped lang="scss">
.table-wrap {
  overflow-x: auto;
  table {
    border-collapse: separate;
    thead {
      background-color: #f7f7f7;
      th {
        text-align: left;
        font-size: 14px;
        font-weight: 600;
        text-transform: uppercase;
        background-color: #f7f7f7;
        padding: 8px;
      }
    }
  }
}
</style>
