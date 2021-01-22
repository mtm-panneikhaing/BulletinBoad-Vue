<template>
  <v-card class="mx-auto" max-width="344">
    <v-card-title class="create-user-title">
      <span class="user-title font-weight-light">User Update Confirm</span>
    </v-card-title>
    <v-form ref="form" @submit.prevent="updateUser()">
      <v-card-text>
        <div>
          <img :src="userProfile" style="width: 100px; height: 100px" />
        </div>
        <div class="user-input mt-4">
          <v-label class="label-title">Name:</v-label>
          <v-label>{{ userList.name }}</v-label>
        </div>
        <div class="user-input mt-4">
          <v-label class="label-title">Email:</v-label>
          <v-label>{{ userList.email }}</v-label>
        </div>
        <div class="user-input mt-4">
          <v-label class="label-title">Phone:</v-label>
          <v-label>{{ userList.phone }}</v-label>
        </div>
        <div class="user-input mt-4">
          <v-label class="label-title">Date Of Birth:</v-label>
          <v-label>{{ userList.dob }}</v-label>
        </div>
        <div class="user-input mt-4">
          <v-label class="label-title mt-4">Type:</v-label>
          <v-label>{{ userList.type == 0 ? "Admin" : "User" }}</v-label>
        </div>
        <div class="user-input mt-4">
          <v-label class="label-title">Address:</v-label>
          <v-label>{{ userList.address }}</v-label>
        </div>
      </v-card-text>
      <v-card-actions>
        <div class="post-action">
          <v-spacer></v-spacer>
          <v-btn type="submit" large color="primary" class="post-list-btn mr-4"
            >Update</v-btn
          >
          <v-btn
            href="javascript:history.back();"
            large
            color="warrning"
            class="post-list-btn mr-4"
            >Cancel</v-btn
          >
        </div>
      </v-card-actions>
    </v-form>
  </v-card>
</template>
<script src="../../services/pages/user/user-update-confirm.js">
</script>