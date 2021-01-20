<template>
  <v-card class="mx-auto" max-width="344">
    <v-card-title class="create-post-title">
      <span class="title font-weight-light">Create Post</span>
    </v-card-title>
    <v-form ref="form" @submit.prevent="create">
      <v-card-text>
        <div class="text-input">
          <v-text-field
            v-model="title"
            type="text"
            label="Title"
            hide-details="auto"
          ></v-text-field>
          <span v-if="error && error.title" class="error-message">{{
            error.title[0]
          }}</span>
        </div>
        <div class="text-input">
          <v-text-field
            v-model="description"
            type="text"
            label="Description"
            hide-details="auto"
          ></v-text-field>
          <span v-if="error && error.description" class="error-message">{{
            error.description[0]
          }}</span>
        </div>
      </v-card-text>
      <v-card-actions>
        <div class="action">
          <v-spacer></v-spacer>
          <v-btn type="submit" large color="primary" class="post-list-btn mr-4"
            >Create</v-btn
          >
          <v-btn
            type="reset"
            v-on:click="clear()"
            large
            color="warrning"
            class="post-list-btn mr-4"
            >Clear</v-btn
          >
        </div>
      </v-card-actions>
    </v-form>
  </v-card>
</template>
<script src="../../services/post/post-create.js">
</script>
<style scoped src="../../assets/css/pages/post/post-create-confirmation.css">
</style>