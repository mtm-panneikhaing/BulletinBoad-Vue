<template>
  <v-card class="mx-auto" max-width="344">
    <v-card-title class="create-post-title">
      <span class="title font-weight-light">Create Post</span>
    </v-card-title>
    <v-form ref="form" v-model="valid" @submit.prevent="create">
      <v-card-text>
        <!-- <div class="title-error">{{ error }}</div>
        <div class="login-error">{{ error }}</div> -->
        <div class="text-input">
          <v-text-field
            v-model="title"
            type="text"
            label="Title"
            hide-details="auto"
          ></v-text-field>
        </div>
        <div class="text-input">
          <v-text-field
            v-model="description"
            type="text"
            label="Description"
            hide-details="auto"
          ></v-text-field>
        </div>
      </v-card-text>
      <v-card-actions>
        <div class="action">
          <v-spacer></v-spacer>
          <v-btn
            type="submit"
            large
            color="primary"
            :disabled="!valid"
            class="post-list-btn mr-4"
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
<script src="../../services/post/post-create.js">
</script>