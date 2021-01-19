<template>
  <v-card>
    <v-card-title>
      Post list
      <v-spacer></v-spacer>
      <v-form ref="form" @submit.prevent="filterPost">
        <v-row class="filter-bar">
          <v-col md="2.5">
            <v-text-field
              v-model="search"
              label="Search keyword"
              hide-details="auto"
            ></v-text-field>
          </v-col>
          <v-btn type="submit" class="post-list-btn mr-4" color="primary"
            >Filter</v-btn
          >
          <v-btn
            :to="{ name: 'post-create' }"
            class="post-list-btn mr-4"
            color="primary"
            >Create</v-btn
          >
          <v-btn
            :to="{ name: 'upload' }"
            class="post-list-btn mr-4"
            color="primary"
            >Upload</v-btn
          >
          <v-btn
            v-on:click="download()"
            class="post-list-btn mr-4"
            color="primary"
            >Download</v-btn
          >
        </v-row>
      </v-form>
    </v-card-title>
    <v-container>
      <v-data-table :headers="headers" :items="showList">
        <template v-slot:[`item.title`]="{ item }">
          <a
            v-if="item.title"
            @click="show(item.id, item.title, item.description)"
            >{{ item.title }}</a
          >
        </template>
        <template v-slot:[`item.operation`]="{ item }">
          <v-row>
            <div class="operation-btn">
              <v-btn
                color="primary"
                class="post-list-btn"
                @click="
                  $router.push({
                    name: 'post-update',
                    params: { id: item.id },
                  })
                "
                >Edit</v-btn
              >
            </div>
            <div class="operation-btn">
              <v-btn
                color="error"
                class="post-list-btn"
                v-on:click="deletePost(item.id)"
                >Delete</v-btn
              >
            </div>
          </v-row>
        </template>
      </v-data-table>
      <!-- <modal name="hello">Hello world modal</modal> -->
    </v-container>
  </v-card>
</template>

<script src="../../services/post/post-list.js">
</script>

<style scoped src="../../assets/css/pages/post/post-list.css">
</style>
