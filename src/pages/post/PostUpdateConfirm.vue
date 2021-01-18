<template>
  <v-card class="mx-auto" max-width="344">
    <v-card-title class="create-post-title">
      <span class="post-title font-weight-light">Update Confirm Post</span>
    </v-card-title>
    <v-form ref="form" @submit.prevent="updatePost">
      <v-card-text>
        <v-label class="label-title">Title:</v-label>
        <v-label>{{ postTitle }}</v-label>
        <v-label class="label-title">Description:</v-label>
        <v-label>{{ postDescription }}</v-label>
      </v-card-text>
      <v-card-actions>
        <div class="post-action">
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
<script src="../../services/post/post-update-confirm.js">
</script>
<style scoped src="../../assets/css/pages/post/post-create-confirmation.css">
</style>