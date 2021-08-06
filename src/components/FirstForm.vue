<template>
    <div class="page">
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

export default Vue.extend({
  props: {
    selectedHardSkills: {
      type: Array,
    },
    selectedSoftSkills: {
      type: Array,
    },
    selectedInterestedArea: {
      type: Array,
    },
    selectedKnownArea: {
      type: Array,
    },
  },
  computed: {},
  data() {
    return {
      hardSkills,
      softSkills,
      interestedArea,
      knownArea,
      softSkillsCurrent: this.selectedSoftSkills || [],
      hardSkillsCurrent: this.selectedHardSkills || [],
      interestedAreaCurrent: this.selectedInterestedArea || [],
      knownAreaCurrent: this.selectedKnownArea || [],
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
}
.form {
  margin-top: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
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
  width: 700px;
  margin-bottom: 50px;
}
</style>
