<template>
  <v-card class="mx-auto" max-width="344">
    <v-card-title class="create-post-title">
      <span class="title font-weight-light">Upload CSV file</span>
    </v-card-title>
    <v-form ref="form">
      <v-card-text>
        <div class="text-input">
          <v-label>Upload</v-label>
          <input
            id="file"
            name="uploadFile"
            type="file"
            ref="import_file"
            @change="onFileChange"
          />
          <br />
          <span v-if="error" class="error-message">{{ error.message }}</span>
        </div>
      </v-card-text>
      <v-card-actions>
        <div class="action">
          <v-spacer></v-spacer>
          <v-btn
            type="button"
            v-on:click="upload()"
            large
            color="primary"
            class="post-list-btn mr-4"
            >Upload</v-btn
          >
          <v-btn
            type="reset"
            v-on:click="clear()"
            large
            color="warrning"
            class="post-list-btn mr-4"
            >Cancel</v-btn
          >
        </div>
      </v-card-actions>
    </v-form>
  </v-card>
</template>
<script src="../../services/post/post-upload.js">
</script>
<style scoped src="../../assets/css/pages/post/post-create-confirmation.css">
</style>