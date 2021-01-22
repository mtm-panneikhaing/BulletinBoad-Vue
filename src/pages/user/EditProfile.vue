<template>
  <v-card class="mx-auto" max-width="344">
    <v-card-title class="create-user-title">
      <span class="title font-weight-light">Edit Profile</span>
    </v-card-title>
    <v-form ref="form" @submit.prevent="editProfileConfirm">
      <v-card-text>
        <div>
          <img
            :src="'http://localhost:8000/images/' + userInfo.profile"
            width="100"
            height="100"
          />
        </div>
        <div class="text-input">
          <v-text-field
            type="text"
            label="Name"
            v-model="userInfo.name"
            :value="userInfo.name"
            hide-details="auto"
          ></v-text-field>
        </div>
        <div class="text-input">
          <v-text-field
            type="text"
            label="Email"
            v-model="userInfo.email"
            :value="userInfo.email"
            hide-details="auto"
          ></v-text-field>
        </div>
        <div class="text-input">
          <v-text-field
            type="text"
            label="Phone"
            v-model="userInfo.phone"
            :value="userInfo.phone"
            hide-details="auto"
          ></v-text-field>
        </div>
        <div class="text-input">
          <v-select
            label="Type"
            :value="selectedType"
            :items="types"
            @input="setSelected"
          ></v-select>
          <!-- <v-text-field
            type="text"
            label="Type"
            v-model="userInfo.type"
            :value="userInfo.type"
            hide-details="auto"
          ></v-text-field> -->
        </div>
        <div class="text-input">
          <v-text-field
            type="text"
            label="Date Of Birth"
            v-model="userInfo.dob"
            :value="userInfo.dob"
            hide-details="auto"
          ></v-text-field>
        </div>
        <div class="text-input">
          <v-text-field
            type="text"
            label="Address"
            v-model="userInfo.address"
            :value="userInfo.address"
            hide-details="auto"
          ></v-text-field>
        </div>
        <div class="img-wrap mt-4">
          <div style="flex: 1; margin-left: 5px">
            <input
              hide-details="auto"
              type="file"
              @change="imageChanged"
              accept="image/*"
            />
            <br />
            <span v-if="error && error.profile" class="error-message">{{
              error.profile[0]
            }}</span>
            <div class="img-container">
              <img v-if="previewProfile" :src="previewProfile" id="profile" />
            </div>
          </div>
        </div>
        <div class="text-input mt-4 mb-4">
          <div class="route-links">
            <router-link
              :to="{ name: 'change-password' }"
              class="route-link ml-2"
              >Change Password
            </router-link>
          </div>
        </div>
        <v-card-actions>
          <div class="action">
            <v-spacer></v-spacer>
            <v-btn
              type="submit"
              large
              color="primary"
              class="user-list-btn mr-4"
              >Update</v-btn
            >
            <v-btn
              type="reset"
              large
              color="warrning"
              class="user-list-btn mr-4"
              >Clear</v-btn
            >
          </div>
        </v-card-actions>
      </v-card-text>
    </v-form>
  </v-card>
</template>
<script src="../../services/pages/user/edit-profile.js">
</script>
<style scoped src="../../assets/css/pages/user/user-create.css">
</style>