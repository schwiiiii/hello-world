<template>
	<div class="border-r h-full">
		<ul class="p-4 -m-1">
			<li v-for="nav in navList" :key="nav.name" class="m-1">
				<router-link
					class="px-4 py-1 bg-white text-black leading-none tracking-wide rounded-full uppercase text-xs hover:bg-gray-200 transition duration-150 ease-out"
					exact-active-class="bg-green-500 text-white hover:bg-green-600"
					:to="nav.path"
				>{{ nav.name }}</router-link>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
  data() {
    return {
      navList: [
        {
          name: "Home",
          path: "/"
        },
        {
          name: "About",
          path: "/about"
        }
      ]
    };
  }
};
</script>
