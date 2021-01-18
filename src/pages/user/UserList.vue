<template>
  <v-card>
    <v-card-title>
      User list
      <v-spacer></v-spacer>
      <v-form ref="form" @submit.prevent="filterUser">
        <v-row class="filter-bar">
          <v-col md="2.5">
            <v-text-field
              v-model="search"
              label="Search keyword"
              hide-details="auto"
            ></v-text-field>
          </v-col>
          <v-btn type="submit" class="user-list-btn mr-4" color="primary"
            >Filter</v-btn
          >
          <v-btn
            :to="{ name: 'user-create' }"
            class="user-list-btn mr-4"
            color="primary"
            >Create</v-btn
          >
        </v-row>
      </v-form>
    </v-card-title>

    <v-container>
      <v-data-table :headers="headers" :items="showList">
        <template v-slot:[`item.name`]="{ item }">
          <a v-if="item.name">{{ item.name }}</a>
        </template>

        <template v-slot:[`item.operation`]="{ item }">
          <v-row>
            <div class="operation-btn">
              <v-btn color="primary" class="user-list-btn">Edit</v-btn>
            </div>
            <div class="operation-btn">
              <v-btn
                color="error"
                class="user-list-btn"
                @click="deleteUser(item.id)"
                >Delete</v-btn
              >
            </div>
          </v-row>
        </template>
      </v-data-table>
    </v-container>
  </v-card>
</template>

<script src="../../services/pages/user/user-list.js">
</script>

<style scoped src="../../assets/css/pages/user/user-list.css">
</style>
