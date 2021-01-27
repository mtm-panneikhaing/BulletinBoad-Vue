<template>
  <v-card class="mx-auto" max-width="344">
    <v-card-title class="create-user-title">
      <span class="title font-weight-light">Change Password</span>
    </v-card-title>
    <v-form ref="form" @submit.prevent="changePassword">
      <v-card-text>
        <div class="text-input">
          <v-text-field
            v-model="password.old_password"
            type="password"
            label="Old Password"
            hide-details="auto"
            class="error-box"
          >
          </v-text-field>
          <span v-if="error && error.old_password" class="error-message">{{
            error.old_password[0]
          }}</span>
          <span v-if="err_msg != def_err_msg" class="error-message">{{
            err_msg
          }}</span>
          <v-text-field
            v-model="password.new_password"
            type="password"
            label="New Password"
            hide-details="auto"
            class="error-box"
          >
            <span v-if="error && error.new_password" class="error-message">{{
              error.new_password[0]
            }}</span>
          </v-text-field>
          <v-text-field
            v-model="password.con_new_password"
            type="password"
            label="Confirm New Password"
            hide-details="auto"
            class="error-box"
          >
            <span
              v-if="error && error.con_new_password"
              class="error-message"
              >{{ error.con_new_password[0] }}</span
            >
          </v-text-field>
        </div>
      </v-card-text>
      <v-card-actions class="mt-4">
        <div class="action">
          <v-spacer></v-spacer>
          <v-btn type="submit" large color="primary" class="user-list-btn mr-4"
            >Change</v-btn
          >
          <v-btn
            type="reset"
            large
            color="warrning"
            class="user-list-btn mr-4"
            v-on:click="clear()"
            >Cancel</v-btn
          >
        </div>
      </v-card-actions>
    </v-form>
  </v-card>
</template>

<script src="../../services/pages/user/change-password.js">
</script>
<style scoped src="../../assets/css/pages/user/password-change.css">
</style>