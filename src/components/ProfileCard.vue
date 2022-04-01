<template>
  <div>
    <a-row type="flex" justify="space-around">
      <a-col v-for="(user, i) in users" :key="i">
        <div class="card">
          <template v-if="user.status === 'active'">
            <img class="ribbon" src="../assets/ribbon.svg" alt="Ribbon" />
          </template>
          <template v-if="user.status === 'inactive'">
            <img class="ribbon" src="../assets/ribbon-inactive.svg" alt="Ribbon" />
          </template>
          <img
            class="profile-img"
            :src="user.photos[2].url"
            alt="Profile Image"
          />
          <p class="name">{{ user.firstName }} {{ user.lastName }}</p>
          <div v-if="user.signal === 1 || user.signal === 2">
          <a-button class="button ok">OK</a-button>
          </div>
          <div v-else-if="user.signal === 3">
            <a-button class="button solid">SOLID</a-button>
          </div>
          <div v-else-if="user.signal === 4 || user.signal === 5">
            <a-button class="button good">GOOD</a-button>
          </div>
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

<style scoped>
.card {
  background: #fafafa;
  border: 1px solid #aab0be;
  border-radius: 16px;
  padding: 32px;
  position: relative;
  margin: 10px 0;
}
.name {
  font-size: 14px;
  line-height: 16px;
  color: #121418;
}
.button {
  margin: auto;
  border-radius: 16px;
  border: none;
}
.button.good {
  background: #5fdba7;
}
.button.ok {
  background: #0F60DA;
  color: #fff;
}
.button.solid {
  background: #F3AD63;
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
