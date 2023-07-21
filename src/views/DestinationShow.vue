<template>
    <section class="destination">
        <h2> {{ destination.name }} </h2>
        <div class="destination-details">
            <img :src="`/images/${destination.image}`" :alt="destination.name">
            <p>{{ destination.description }}</p>
        </div>
    </section>
</template>

<script lang="ts">

import { computed, defineComponent } from 'vue'
import sourceData from '@/data.json';
import { useRoute } from 'vue-router';

export default defineComponent({
    setup() {
        const route = useRoute();

        const destinationId = computed(() => Number(route.params.id));
        
        const destination = computed(() => {
            return sourceData.destinations.find(destination => destination.id === destinationId.value)
        })

        return { destination }
    }
})
</script>
