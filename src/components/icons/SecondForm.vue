<template>
    <div class="page">
      <button class="forward-btn" @click="saveFormOne()">
        <md-icon class="icon">arrow_forward_ios</md-icon>
      </button>
      <h3> Me conta um pouquinho sobre você?</h3>
      <div class="form">
      <div class="content-box">
        <h5> Conte mais sobre você </h5>
        <div class="input-area">
          <textarea
            v-model="moreAboutUserEdited"
            class="input"
            type="text"
          />
        </div>
      </div>
      <div class="content-box">
        <h5> Cargo mais recente </h5>
        <div class="input-area">
          <textarea
            v-model="currentJobEdited"
            class="input"
            type="text"
          />
        </div>
      </div>
      <div class="content-box">
        <h5> Empresa mais recente </h5>
        <div class="input-area">
          <textarea
            v-model="currentCompanyEdited"
            class="input"
            type="text"
          />
        </div>
      </div>
      <div class="content-box">
        <h5> Formação Acadêmica </h5>
        <div class="input-area">
          <textarea
            v-model="academicBackgroundEdited"
            class="input"
            type="text"
          />
        </div>
      </div>
      <div class="content-box">
        <h5> Histórico profissional </h5>
        <div class="input-area">
          <textarea
            v-model="professionalBackgroundEdited"
            class="input"
            type="text"
          />
        </div>
      </div>
      </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';

interface UserInfomation {
  moreAboutUser: string;
  currentJob: string;
  currentCompany: string;
  academicBackground: string;
  professionalBackground: string;
}

export default Vue.extend({
  props: {
    userInfo: {
      type: Object as Vue.PropType<UserInfomation>,
    },
  },
  computed: {},
  data() {
    return {
      moreAboutUserEdited: '',
      currentJobEdited: '',
      currentCompanyEdited: '',
      academicBackgroundEdited: '',
      professionalBackgroundEdited: '',
    };
  },
  created() {
    this.moreAboutUserEdited = this.userInfo?.moreAboutUser || '';
    this.currentJobEdited = this.userInfo?.currentJob || '';
    this.currentCompanyEdited = this.userInfo?.currentCompany || '';
    this.academicBackgroundEdited = this.userInfo?.academicBackground || '';
    this.professionalBackgroundEdited = this.userInfo?.professionalBackground || '';
  },
  methods: {
    saveFormOne() {
      console.log('salvei');
      this.$emit('secondFormSaved');
    },
  },
});
</script>

<style lang="scss" scoped>
h3 {
font-size: 36px;
margin-bottom: 20px;
text-align: center;
}
h5 {
font-size: 24px;
margin-top: 20px;
text-align: center;
}

.page {
  padding-top: 120px;
  margin-right: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.form {
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}

textarea {
  height: 100px;
  box-shadow: 0 0 9px 1px lightgray;
  border-radius: 10px;
  margin-bottom: 10px;
  padding: 20px;
  outline: none;
  font-size: 24px;
  font-family: 'AprovaSans', sans-serif;
}
textarea:focus {
  border: 1px solid #666;
}

.forward-btn {
    position: fixed;
    top: 100px;
    right: 30px;
    background: white;
    border-radius: 50%;
    border: 1px solid black;
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;

    .icon {
      color: black;
    }
  }
</style>
