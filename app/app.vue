<script setup lang="ts">
const { data: expressData } = await useFetch("/api/express");
const { data: fastifyData } = await useFetch("/api/fastify");
const { data: honoData } = await useFetch("/api/hono");
</script>

<template>
  <div>
    <pre>{{ expressData }}</pre>
    <pre>{{ fastifyData }}</pre>
    <pre>{{ honoData }}</pre>
  </div>
</template>
