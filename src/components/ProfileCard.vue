<template>
  <div>
    <a-row justify="space-between">
      <a-col :span="4" v-for="(user, i) in users" :key="i">
        <div class="card">
          <img class="ribbon" src="../assets/ribbon.svg" alt="Ribbon" />
          <img
            class="profile-img"
            src="../assets/logo.png"
            alt="Profile Image"
          />
          <p class="name">{{ user.firstName }} {{ user.lastName }}</p>
          <a-button class="button">yoyo</a-button>
        </div>
      </a-col>
    </a-row>
  </div>
</template>

<script>
import UserAPI from "../services/api.service.js";
export default {
  name: "ProfileCard",
  props: {
    msg: String,
  },
  data() {
    return {
      users: [],
    };
  },
  created() {
    UserAPI.getUser().then((response) => {
      console.log(response.data);
      this.users = response.data;
    });
  },
  methods: {
    handleClick() {
      this.$emit("clicked");
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card {
  background: #fafafa;
  border: 1px solid #aab0be;
  border-radius: 16px;
  padding: 32px;
  position: relative;
}
.name {
  font-size: 14px;
  line-height: 16px;
  color: #121418;
}
.button {
  padding: 8px 24px;
  width: 77px;
  height: 30px;
  margin: auto;
  background: #5fdba7;
  border-radius: 16px;
  border: none;
}
.ribbon {
  position: absolute;
  left: 0;
  top: 0;
}
.profile-img {
  border-radius: 100%;
  height: 125px;
  width: 125px;
  object-fit: cover;
  background-color: #c4c4c4;
}
</style>
