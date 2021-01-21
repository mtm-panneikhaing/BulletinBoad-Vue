<template>
  <v-card class="mx-auto" max-width="344">
    <v-card-title class="create-user-title">
      <span class="user-title font-weight-light">Create User Confirmatin</span>
    </v-card-title>
    <v-form ref="form" @submit.prevent="createUserConfirm">
      <v-card-text>
        <img :src="userProfile" style="width: 100px; height: 100px" />
        <div class="user-input">
          <v-label class="label-title">Name:</v-label>
          <v-label>{{ registerName }}</v-label>
        </div>
        <div class="user-input">
          <v-label class="label-title">Email:</v-label>
          <v-label>{{ registerEmail }}</v-label>
        </div>
        <div class="user-input">
          <v-label class="label-title">Password:</v-label>
          <v-label>{{ registerPassword }}</v-label>
        </div>
        <div class="user-input">
          <v-label class="label-title">Phone:</v-label>
          <v-label>{{ registerPhone }}</v-label>
        </div>
        <div class="user-input">
          <v-label class="label-title">Date of Birth:</v-label>
          <v-label>{{ registerDob }}</v-label>
        </div>
        <div class="user-input">
          <v-label class="label-title">Type:</v-label>
          <v-label>{{ registerType == 0 ? "Admin" : "User" }}</v-label>
        </div>
        <!-- <div class="user-input">
          <v-label class="label-title">Profile:</v-label>
          <v-label>{{ userProfile }}</v-label>
        </div> -->
        <div class="user-input">
          <v-label class="label-title">Address:</v-label>
          <v-label>{{ registerAddress }}</v-label>
        </div>
      </v-card-text>
      <v-card-actions>
        <div class="post-action">
          <v-spacer></v-spacer>
          <v-btn type="submit" large color="primary" class="post-list-btn mr-4"
            >Create</v-btn
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
<script src="../../services/pages/user/user-create-confirmation.js">
</script>
<style scoped src="../../assets/css/pages/user/user-confirmation.css">
</style>