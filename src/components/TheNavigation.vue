<template>
    <nav id="nav">
        <router-link id="logo" to="/">Travel App</router-link>
        <router-link
            v-for="destination in destinations"
            :key="destination.id"
            :to="{ name: 'destination.show', params: { id: destination.id, slug: destination.slug } }"
        >
            {{ destination.name }}
        </router-link>
    </nav>
</template>

<script lang="ts">

import { defineComponent, reactive } from 'vue'
import sourceData from '@/data.json'

export default defineComponent({
    name: "TheNavigation",
    setup() {
        const destinations = reactive(sourceData.destinations);

        return { destinations }
    },
})
</script>
