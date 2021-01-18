import VueSelect from 'vue-next-select';
<template>
  <v-card class="mx-auto" max-width="344">
    <v-card-title class="create-post-title">
      <span class="title font-weight-light">Create User</span>
    </v-card-title>
    <v-form ref="form" @submit.prevent="createUser">
      <v-card-text>
        <div class="text-input">
          <v-text-field
            v-model="name"
            type="text"
            label="Name"
            hide-details="auto"
          >
          </v-text-field>
        </div>
        <div class="text-input">
          <v-text-field
            v-model="email"
            type="email"
            label="Email Address"
            hide-details="auto"
          >
          </v-text-field>
        </div>
        <div class="text-input">
          <v-text-field
            v-model="password"
            type="password"
            label="Password"
            hide-details="auto"
          >
          </v-text-field>
        </div>
        <div class="text-input">
          <v-text-field
            v-model="password_confirm"
            type="password"
            label="Confirm Password"
            hide-details="auto"
          >
          </v-text-field>
        </div>
        <div class="text-input">
          <v-select v-model="type" :items="options" hide-details="auto">
          </v-select>
        </div>
        <div class="text-input">
          <v-text-field
            v-model="phone"
            type="number"
            label="Phone"
            hide-details="auto"
          >
          </v-text-field>
        </div>
        <div class="text-input">
          <v-text-field v-model="dob" type="date" hide-details="auto">
          </v-text-field>
        </div>
        <div class="text-input">
          <v-text-field
            v-model="address"
            type="text"
            label="Address"
            hide-details="auto"
          >
          </v-text-field>
        </div>
        <div class="text-input">
          <v-text-field v-model="profile" type="file" hide-details="auto">
          </v-text-field>
        </div>
      </v-card-text>
      <v-card-actions class="mt-4">
        <div class="action">
          <v-spacer></v-spacer>
          <v-btn type="submit" large color="primary" class="post-list-btn mr-4"
            >Create</v-btn
          >
          <v-btn type="reset" large color="warrning" class="post-list-btn mr-4"
            >Cancel</v-btn
          >
        </div>
      </v-card-actions>
    </v-form>
  </v-card>
</template>
<script src="../../services/pages/user/user-create.js">
</script>