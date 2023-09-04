<script setup lang="ts">
import { FormKit } from '@formkit/vue'
import { ref } from 'vue'

const dialog = ref<HTMLDialogElement>()
const values = ref()
</script>

<template>
  <dialog class="dialog p-6 rounded-3xl" ref="dialog">
    <h1 class="font-bold text-2xl mb-2">Успешно!</h1>
    <p class="text-sm text-slate-600 mb-4">Данные формы:</p>
    <pre wrap>{{ values }}</pre>
  </dialog>

  <main class="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
    <div class="container mx-auto h-full flex items-center justify-center pb-14">
      <FormKit
        v-model="values"
        form-class="bg-white max-w-md w-full border-slate-700 p-10 border-2 rounded-3xl"
        type="form"
        @submit="dialog!.showModal()"
      >
        <h1 class="text-4xl font-bold mb-4">Авторизация</h1>
        <p class="text-sm text-slate-600">
          Чтобы продолжить, авторизируйтесь или
          <a href="https://github.com/Gercov" class="text-blue-400 underline">зарегистрируйтесь</a>
        </p>
        <hr class="my-5" />
        <FormKit
          type="text"
          name="email"
          label="Ваш e-mail"
          placeholder="sasamrfn@gmail.com"
          validation="required|email"
        />
        <FormKit
          type="password"
          name="password"
          label="Пароль"
          validation="required|length:6"
          placeholder="Ваш пароль"
        />
      </FormKit>
    </div>
  </main>
</template>

<style lang="scss" scoped>
.dialog {
  &::backdrop {
    background-color: rgba(0, 0, 0, 0.6);
    backdrop-filter: blur(10px);
  }
}
</style>
