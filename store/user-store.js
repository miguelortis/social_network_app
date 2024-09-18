import { create } from 'zustand'
import { persist, devtools } from 'zustand/middleware'
import axios from '../config/axios'

export const useUserStore = create(
  devtools(
    persist(
      (set, get) => {
        return {
          loadingUser: false,
          questions: [],
          currentQuestion: 0,

          fetchUsers: async (limit) => {
            const res = await axios.get(`/user/66c621079cc08c7e92bceb9f`)

            const json = await res.json()

            const questions = json
              .sort(() => Math.random() - 0.5)
              .slice(0, limit)
            set({ questions }, false, 'FETCH_QUESTIONS')
          },

          goNextQuestion: () => {
            const { currentQuestion, questions } = get()
            const nextQuestion = currentQuestion + 1

            if (nextQuestion < questions.length) {
              set({ currentQuestion: nextQuestion }, false, 'GO_NEXT_QUESTION')
            }
          },

          goPreviousQuestion: () => {
            const { currentQuestion } = get()
            const previousQuestion = currentQuestion - 1

            if (previousQuestion >= 0) {
              set(
                { currentQuestion: previousQuestion },
                false,
                'GO_PREVIOUS_QUESTION'
              )
            }
          },

          reset: () => {
            set({ currentQuestion: 0, questions: [] }, false, 'RESET')
          },
        }
      },
      {
        name: 'questions',
      }
    )
  )
)
