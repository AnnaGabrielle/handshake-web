<template>
    <div class="page">
      <button class="forward-btn" @click="saveFormOne()">
        <md-icon class="icon">arrow_forward_ios</md-icon>
      </button>
      <h3> Me conta um pouquinho sobre você? </h3>
      <div class="form">
      <div class="content-box">
        <h5> Áreas de interesse </h5>
        <div class="skills">
          <div
            v-for="skill in interestedArea"
            :key="skill"
            class="item"
            :class="{
            'item-selected': skillIsSelected(skill, interestedAreaCurrent),
          }"
            @click="selectSkill(skill, interestedAreaCurrent)">
            {{ skill }}
          </div>
        </div>
      </div>
      <div class="content-box">
        <h5> Áreas de conhecimento </h5>
        <div class="skills">
          <div
            v-for="skill in knownArea"
            :key="skill"
            class="item"
            :class="{
            'item-selected': skillIsSelected(skill, knownAreaCurrent),
          }"
            @click="selectSkill(skill, knownAreaCurrent)">
            {{ skill }}
          </div>
        </div>
      </div>
      <div class="content-box">
        <h5> Soft Skills </h5>
        <div class="skills">
          <div
            v-for="skill in softSkills"
            :key="skill"
            class="item"
            :class="{
            'item-selected': skillIsSelected(skill, softSkillsCurrent),
          }"
            @click="selectSkill(skill, softSkillsCurrent)">
            {{ skill }}
          </div>
        </div>
      </div>
      <div class="content-box">
        <h5> Hard Skills </h5>
        <div class="skills">
        <div
            v-for="skill in hardSkills"
            :key="skill"
            class="item"
            :class="{
            'item-selected': skillIsSelected(skill, hardSkillsCurrent),
          }"
            @click="selectSkill(skill, hardSkillsCurrent)">
          {{ skill }}
        </div>
        </div>
      </div>
      </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {
  hardSkills, softSkills, interestedArea, knownArea,
} from '@/mocks/skillsMock';
import meUser from '@/mocks/me-mock';

interface UserInfomation {
  selectedHardSkills: Array<string>;
  selectedSoftSkills: Array<string>;
  selectedInterestedArea: Array<string>;
  selectedKnownArea: Array<string>;
}

export default Vue.extend({
  props: {
    userInfo: {
      type: Object as Vue.PropType<UserInfomation>,
    },
    saveFirstForm: {
      type: Boolean,
      default: false,
    },
  },
  computed: {},
  data() {
    return {
      hardSkills,
      softSkills,
      interestedArea,
      knownArea,
      softSkillsCurrent: this.userInfo?.selectedSoftSkills || [],
      hardSkillsCurrent: this.userInfo?.selectedHardSkills || [],
      interestedAreaCurrent: this.userInfo?.selectedInterestedArea || [],
      knownAreaCurrent: this.userInfo?.selectedKnownArea || [],
      savedForm: this.saveFirstForm,
    };
  },
  methods: {
    selectSkill(skill: string, variable: any) {
      if (variable.includes(skill)) {
        (variable as string[]).splice(variable.indexOf(skill), 1);
      } else {
        (variable as string[]).push(skill);
      }
    },
    skillIsSelected(skill: string, variable: any) {
      return variable.includes(skill);
    },
    saveFormOne() {
      meUser.interests = this.interestedAreaCurrent;
      meUser.knowledges = this.knownAreaCurrent;
      meUser.skills.hard = this.hardSkillsCurrent;
      meUser.skills.soft = this.softSkillsCurrent;

      this.$emit('firstFormSaved');
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

.skills {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.item {
  width: 300px;
  height: 48px;
  border: solid 1px #999;
  border-radius: 20px;
  cursor: pointer;
  margin: 20px 20px 0 0;
  display: flex;
  align-items: center;
  justify-content: center;
  &-selected {
    border: none;
    background-color: #00E88F;
  }
}

.content-box {
  width: 90%;
  padding: 30px;
  margin-bottom: 50px;
  background: #fff;
  box-shadow: 0 0 11px 1px lightgray;
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
