<script>
import { projects } from '../database/projects'
import Project from './Project.vue'

export default {
  name: 'Projects',
  data() {
    return {
      projects: projects
    }
  },
  components: {
    Project
  }
}
</script>


<template>
  <div id="projects">
    <section>
      <h3 class="text-4xl font-semibold text-gray-700 pt-4 mb-4">Projects</h3>
      <div class="grid grid-cols-1 gap-8 mx-10 sm:grid-cols-3">
        <div v-for="project in projects" :key="project.name">
          <Project v-bind:project="project" />
        </div>
      </div>
    </section>
  </div>
</template>



<style scoped>

</style>