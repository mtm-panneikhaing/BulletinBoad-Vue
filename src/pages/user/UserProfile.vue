<template>
  <v-card class="mx-auto" max-width="344">
    <v-card-title class="create-post-title">
      <span class="title font-weight-light">Profile</span>
      <v-card-actions>
        <div class="action">
          <v-spacer></v-spacer>
          <v-btn
            large
            color="primary"
            :to="{ name: 'edit-profile' }"
            class="post-list-btn mr-4"
            >Edit</v-btn
          >
        </div>
      </v-card-actions>
    </v-card-title>
    <v-form ref="form" @submit.prevent="create">
      <v-card-text>
        <div class="text-input">
          <a :to="{ name: 'changePassword' }">Password Change</a>
        </div>
      </v-card-text>
    </v-form>
  </v-card>
</template>