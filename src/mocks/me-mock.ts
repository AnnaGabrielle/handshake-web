import { User } from '@/interfaces';

const meUser: User = {
  id: 4,
  firstName: 'Lucas',
  lastName: 'Ricarte',
  currentJob: 'Handshake office',
  photo: 'https://image.flaticon.com/icons/png/512/194/194279.png',
  interests: ['produto'],
  knowledges: ['produto'],
  skills: {
    hard: ['Comunicação', 'Trabalho em equipe'],
    soft: ['React', 'Vue', 'NestJS'],
  },
};

export default meUser;
