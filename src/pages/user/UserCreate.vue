<template>
  <v-card class="mx-auto" max-width="344">
    <v-card-title class="create-post-title">
      <span class="title font-weight-light">Create User</span>
    </v-card-title>
    <v-form ref="form" @submit.prevent="create">
      <v-card-text>
        <div class="text-input">
          <v-text-field type="text" label="Name" hide-details="auto">
          </v-text-field>
        </div>
        <div class="text-input">
          <v-text-field type="email" label="Email Address" hide-details="auto">
          </v-text-field>
        </div>
        <div class="text-input">
          <v-text-field type="password" label="Password" hide-details="auto">
          </v-text-field>
        </div>
        <div class="text-input">
          <v-text-field
            type="password"
            label="Confirm Password"
            hide-details="auto"
          >
          </v-text-field>
        </div>
        <div class="text-input">
          <v-text-field type="number" label="Phone" hide-details="auto">
          </v-text-field>
        </div>
        <div class="text-input">
          <v-text-field type="date" hide-details="auto"> </v-text-field>
        </div>
        <div class="text-input">
          <v-text-field type="file" hide-details="auto"> </v-text-field>
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