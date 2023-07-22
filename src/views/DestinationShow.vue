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
</template>
  
<script lang="ts">
import { defineComponent, onMounted, ref, watch } from "vue";
import { useRoute } from "vue-router";

interface Destination {
  name: string;
  image: string;
  description: string;
}

export default defineComponent({
  setup() {
    const route = useRoute();
    const destination = ref<Destination | null>(null);
    const loading = ref<boolean>(true);

    const initData = async () => {
      try {
        const response = await fetch(`http://localhost:3001/api/${route.params.slug}`);
        if (response.ok) {
          destination.value = await response.json();
        } else {
          throw new Error("Destination not found.");
        }
      } catch (error) {
        console.error(error);
      } finally {
        loading.value = false;
      }
    };

    onMounted(async () => {
      initData();
      watch(() => route.params, initData);
    });

    return { destination, loading };
  },
});
</script>
