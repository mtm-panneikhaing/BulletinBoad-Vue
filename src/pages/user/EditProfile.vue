<template>
  <v-card class="mx-auto" max-width="344">
    <v-card-title class="create-post-title">
      <span class="title font-weight-light">Edit Profile</span>
    </v-card-title>
    <v-form ref="form" @submit.prevent="create">
      <v-card-text>
        <div class="route-links">
          <router-link :to="{ name: 'change-password' }" class="route-link ml-2"
            >Change Password
          </router-link>
        </div>
      </v-card-text>
    </v-form>
  </v-card>
</template>