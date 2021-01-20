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
            v-model="userInfo.name"
            type="text"
            label="Name"
            hide-details="auto"
          >
          </v-text-field>
        </div>
        <div class="text-input">
          <v-text-field
            v-model="userInfo.email"
            type="email"
            label="Email Address"
            hide-details="auto"
          >
          </v-text-field>
        </div>
        <div class="text-input">
          <v-text-field
            v-model="userInfo.password"
            type="password"
            label="Password"
            hide-details="auto"
          >
          </v-text-field>
        </div>
        <div class="text-input">
          <v-text-field
            v-model="userInfo.password_confirm"
            type="password"
            label="Confirm Password"
            hide-details="auto"
          >
          </v-text-field>
        </div>
        <div class="text-input">
          <v-select
            label="Type"
            :value="selectedType"
            :items="options"
            @input="setSelected"
          ></v-select>
        </div>
        <div class="text-input">
          <v-text-field
            v-model="userInfo.phone"
            type="number"
            label="Phone"
            hide-details="auto"
          >
          </v-text-field>
        </div>
        <div class="text-input">
          <v-text-field v-model="userInfo.dob" type="date" hide-details="auto">
          </v-text-field>
        </div>
        <div class="text-input">
          <v-text-field
            v-model="userInfo.address"
            type="text"
            label="Address"
            hide-details="auto"
          >
          </v-text-field>
        </div>
        <div class="img-wrap">
          <div style="flex: 1; margin-left: 5px">
            <input
              hide-details="auto"
              type="file"
              @change="imageChanged"
              accept="image/*"
            />

            <div class="img-container">
              <img v-if="previewProfile" :src="previewProfile" id="profile" />
            </div>
          </div>
        </div>
      </v-card-text>
      <v-card-actions class="mt-4">
        <div class="action">
          <v-spacer></v-spacer>
          <v-btn type="submit" large color="primary" class="post-list-btn mr-4"
            >Create</v-btn
          >
          <v-btn type="reset" large color="warrning" class="post-list-btn mr-4"
            >Clear</v-btn
          >
        </div>
      </v-card-actions>
    </v-form>
  </v-card>
</template>
<script src="../../services/pages/user/user-create.js">
</script>
<style scoped src="../../assets/css/pages/user/user-create.css">
</style>