/* eslint-disable no-shadow */
import { User } from '@/interfaces';
import { ActionTree, GetterTree, MutationTree } from 'vuex';
import meMock from '@/mocks/me-mock';

interface UserState {
  currentUser: User | null;
}

export const state: UserState = {
  currentUser: null,
};

export const actions: ActionTree<UserState, any> = {
  async GET_LOGGED_USER({ commit }) {
    commit('SET_LOGGED_USER', meMock);
  },
};

export const mutations: MutationTree<UserState> = {
  SET_LOGGED_USER(state, currentUser) {
    state.currentUser = currentUser;
  },
};

export const getters: GetterTree<UserState, any> = {
  currentUser(state): User | null {
    return state.currentUser;
  },
};
