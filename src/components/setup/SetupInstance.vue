<template>
  <q-btn color="primary-dark" icon="add" label="Add elasticsearch cluster" @click="dialog = true" />

  <q-dialog v-model="dialog" position="top" transition-show="scale" transition-hide="scale">
    <q-card style="width: 1000px;max-width: 1000px" class="q-mt-xl">
      <q-card-section class="flex justify-between">
        <h2 class="text-h5 q-my-none">Add cluster</h2>
        <q-btn v-close-popup icon="close" flat round dense />
      </q-card-section>

      <q-separator />

      <template v-if="buildConfig.hints.cors">
        <q-card-section>
          <h2 class="text-h6">
            {{ t('setup.configure.heading') }}
          </h2>
          <configure-help />
        </q-card-section>

        <q-separator />
      </template>

      <q-card-section>
        <h2 v-if="buildConfig.hints.cors" class="text-h6 q-mb-md">
          {{ t('setup.test_and_connect.heading') }}
        </h2>
        <add-cluster />
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script setup lang="ts">
  import AddCluster from './AddCluster.vue'
  import ConfigureHelp from './ConfigureHelp.vue'
  import { ref } from 'vue'
  import { useTranslation } from '../../composables/i18n.ts'
  import { buildConfig } from '../../buildConfig.ts'

  const dialog = ref(false)
  const t = useTranslation()
</script>