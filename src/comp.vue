<template>
	<div>
		<button @click="selectFolder">
			Test
		</button>
	</div>
</template>

<script>
import { getFilePickerBuilder } from '@nextcloud/dialogs'

export default {
	methods: {
		async selectFolder() {

			const path = await getFilePickerBuilder('test')

			console.debug(path)
		},
	},
}
</script>
