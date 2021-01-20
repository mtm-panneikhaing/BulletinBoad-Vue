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
        <div class="row">
          <div class="col">Name</div>
          <div class="col">{{ userInfo.name }}</div>
        </div>
        <div class="row">
          <div class="col">Email</div>
          <div class="col">{{ userInfo.email }}</div>
        </div>
        <div class="row">
          <div class="col">Phone</div>
          <div class="col">{{ userInfo.phone }}</div>
        </div>
        <div class="row">
          <div class="col">Type</div>
          <div class="col">{{ userInfo.type == 0 ? "Admin" : "User" }}</div>
        </div>
        <div class="row">
          <div class="col">Date Of Birth</div>
          <div class="col">{{ userInfo.dob }}</div>
        </div>
        <div class="row">
          <div class="col">Address</div>
          <div class="col">{{ userInfo.address }}</div>
        </div>
      </v-card-text>
    </v-form>
  </v-card>
</template>
<script src="../../services/pages/user/user-profile.js">
</script>