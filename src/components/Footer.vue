<template>
	<footer :class="{ visible }">
		<div class="breadcrumbs">
			<div>
				<router-link to="/contact" class="crumb">Contact</router-link>
				<font-awesome-icon :icon="['far', 'circle']" class="splitter" />
				<a href="https://github.com/SevenTV" class="crumb">GitHub</a>
				<font-awesome-icon :icon="['far', 'circle']" class="splitter" />
				<router-link to="/privacy" class="crumb blue">Privacy Policy</router-link>
				<font-awesome-icon :icon="['far', 'circle']" class="splitter" />
				<router-link to="/tos" class="crumb blue">Terms of Service</router-link>
				<font-awesome-icon :icon="['far', 'circle']" class="splitter" />
				<router-link to="/dmca" class="crumb blue">DMCA</router-link>
			</div>
		</div>
	</footer>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import { computed } from "vue";

const route = useRoute();
const visible = computed(() => route.path === "/");
</script>

<style lang="scss" scoped>
@import "@scss/footer.scss";
</style>
