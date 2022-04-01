<template>
  <div class="card">
    <img class="ribbon" src="../assets/ribbon.svg" alt="Ribbon" />
    <img class="profile-img" src="../assets/logo.png" alt="Profile Image" />
    <p class="name">Name</p>
    <button class="button">yoyo</button>
  </div>
</template>

<script>
export default {
  name: "ProfileCard",
  props: {
    msg: String,
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
  background-color: #C4C4C4;
;
}
</style>
