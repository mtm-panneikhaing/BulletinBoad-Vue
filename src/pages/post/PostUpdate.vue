<template>
  <v-card class="mx-auto" max-width="344">
    <v-card-title class="create-post-title">
      <span class="title font-weight-light">Update Post</span>
    </v-card-title>
    <v-form ref="form" @submit.prevent="updatePost">
      <v-card-text>
        <div class="text-input">
          <v-text-field
            type="text"
            label="Title"
            hide-details="auto"
            :value="title"
          ></v-text-field>
        </div>
        <div class="text-input">
          <v-text-field
            type="text"
            label="Description"
            hide-details="auto"
            :value="description"
          ></v-text-field>
        </div>
      </v-card-text>
      <v-card-actions>
        <div class="action">
          <v-spacer></v-spacer>
          <v-btn type="submit" large color="primary" class="post-list-btn mr-4"
            >Update</v-btn
          >
          <v-btn type="reset" large color="warrning" class="post-list-btn mr-4"
            >Cancel</v-btn
          >
        </div>
      </v-card-actions>
    </v-form>
  </v-card>
</template>
<script src="../../services/post/post-update.js">
</script>