<template>
  <v-card class="mx-auto" max-width="344">
    <v-card-title class="create-post-title">
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
          >
          </v-text-field>
          <v-text-field
            v-model="password.new_password"
            type="password"
            label="New Password"
            hide-details="auto"
          >
          </v-text-field>
          <v-text-field
            v-model="password.con_new_password"
            type="password"
            label="Confirm New Password"
            hide-details="auto"
          >
          </v-text-field>
        </div>
      </v-card-text>
      <v-card-actions class="mt-4">
        <div class="action">
          <v-spacer></v-spacer>
          <v-btn type="submit" large color="primary" class="post-list-btn mr-4"
            >Change</v-btn
          >
          <v-btn type="reset" large color="warrning" class="post-list-btn mr-4"
            >Cancel</v-btn
          >
        </div>
      </v-card-actions>
    </v-form>
  </v-card>
</template>

<script src="../../services/pages/user/change-password.js">
</script>