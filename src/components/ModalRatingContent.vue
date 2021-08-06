<template>
  <div>
    <p>
      Você indicaria minha coisa para um amigo?
    </p>

    <div class="rating">
      <div class="stars">
        <StarRating v-model="rate" :increment="0.5" :star-size="30" />
      </div>

      <md-field class="field">
        <label>Deixe um comentário (opcional)</label>
        <md-textarea md-autogrow maxlength="80" class="textarea" />
      </md-field>

      <button>Finalizar</button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import StarRating from 'vue-star-rating';
import { User } from '@/interfaces';

interface Data {
  rate: number;
}

export default Vue.extend({
  components: {
    StarRating,
  },
  computed: {
    currentUser(): User {
      return this.$store.getters.currentUser;
    },
  },
  data(): Data {
    return {
      rate: 0,
    };
  },
});
</script>

<style lang="scss" scoped>
p {
  margin-bottom: 16px;
  line-height: 37px;
}

.rating {
  display: flex;
  flex-direction: column;

  button {
    width: 155px;
    height: 30px;
    margin-right: 20px;
    border-radius: 26px;
    background: #65FF90;
    font-family: 'AprovaSans';
    font-size: 14px;
    font-weight: bold;
    align-self: flex-end;
    transition: all 180ms linear;

    &:hover {
      box-shadow: 0px 0px 5px 1px rgba(0,0,0,0.2);
    }
  }

  .stars {
    margin-top: -15px;
    margin-bottom: 10px;
  }

  .textarea {
    max-height: 80px;
  }
}
</style>
