<template>
  <section v-if="destination" class="destination">
    <h2>{{ destination.name }}</h2>
    <div class="destination-details">
      <img :src="`/images/${destination.image}`" :alt="destination.name" />
      <p>{{ destination.description }}</p>
    </div>
  </section>

  <p v-else-if="loading">Loading data...</p>
  <p v-else>No destination found.</p>

  <section v-if="destination && destination.experiences" class="experiences">
    <h2>Top Experiences in {{ destination.name }}</h2>

    <div class="cards">
      <router-link
        v-for="experience in destination.experiences"
        :key="experience.slug"
        :to="{ name: 'experience.show', params: { experienceSlug: experience.slug } }"
      >
        <ExperienceCard :experience="experience" />
      </router-link>
    </div>
  </section>
</template>
  
<script lang="ts">
import { defineComponent, onMounted, ref, watch } from "vue";
import { useRoute } from "vue-router";
import Destination from "@/interfaces/Destination";
import ExperienceCard from "@/components/ExperienceCard.vue";

export default defineComponent({
  components: {
    ExperienceCard,
  },
  setup() {
    const route = useRoute();
    const destination = ref<Destination | null>(null);
    const loading = ref<boolean>(true);

    const initData = async () => {
      try {
        const response = await fetch(
          `http://localhost:3001/api/${route.params.slug}`
        );
        if (response.ok) {
          destination.value = await response.json();
        } else {
          throw new Error("Destination not found.");
        }
      } catch (error) {
        console.error(error);
        destination.value = null;
      } finally {
        loading.value = false;
      }
    };

    onMounted(() => {
      initData();

      watch(() => route.params, initData);
    });

    return { destination, loading };
  },
});
</script>
