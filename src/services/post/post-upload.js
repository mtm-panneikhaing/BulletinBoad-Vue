export default {
  data() {
    return {
      error: {},
      import_file: '',
    }
  },
  methods: {
    onFileChange(e) {
      this.import_file = e.target.files[0];
    },
    upload() {
      let formData = new FormData();
      formData.append('import_file', this.import_file);

      this.$axios.post('/post/import', formData)
        .then((response) => {
          console.log(response);
          this.error = "";
          this.$router.push({ name: "post-list" });
        })
        .catch(error => {
          this.uploading = false
          this.error = error.response.data;
          console.log('check error: ', this.error)
        });
    },
    clear() {
      this.error = " ";
    }
  }
}