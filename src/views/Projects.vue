<template lang="">
  <div class="mt-4 ml-4">
    <h1 class="subheader grey--text">
      Projects
    </h1>

    <v-expansion-panels class="mt-5">
      <v-expansion-panel
          v-for="project in myProjects"
          :key="project.title"
      >
        <v-expansion-panel-header>
          {{ project.title }}
        </v-expansion-panel-header>
        
        <v-expansion-panel-content>
          <v-card flat>
            <v-card-text class="px-4 py=- grey-text">
              <div class="font-weight-bold">
                Due by {{ project.due }}
              </div>
              <div>{{ project.content }}</div>
            </v-card-text>
          </v-card>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>
<script>
export default {
	name: "ProjectsView",
	data() {
		return {
			projects: [
				{
					title: "Design a new website",
					person: "John",
					due: "March 2022",
					status: "ongoing",
					content:
						"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi assumenda cupiditate, reiciendis suscipit quod laudantium, architecto itaque, odio ab beatae sapiente fugit. Sed id deleniti autem? Facere, doloribus eaque dolore, quam fuga iusto voluptatem odio tenetur dignissimos reiciendis molestias maiores? Esse nesciunt cum sint ipsam autem molestiae porro quod tenetur veritatis ratione quasi libero vitae, voluptatibus, ad quibusdam. Quos dolorum labore fugiat deserunt totam dolor voluptatibus quidem veritatis distinctio quia accusamus maxime nesciunt unde officiis similique iusto earum ipsa, eveniet eligendi dolores. Sunt quibusdam adipisci, suscipit nisi repellendus consequatur odio totam ullam explicabo voluptates voluptatem doloremque, aperiam modi saepe nam!",
				},
				{
					title: "Code up the home page",
					person: "Doe",
					due: "September 2022",
					status: "complete",
					content:
						"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi assumenda cupiditate, reiciendis suscipit quod laudantium, architecto itaque, odio ab beatae sapiente fugit. Sed id deleniti autem? Facere, doloribus eaque dolore, quam fuga iusto voluptatem odio tenetur dignissimos reiciendis molestias maiores? Esse nesciunt cum sint ipsam autem molestiae porro quod tenetur veritatis ratione quasi libero vitae, voluptatibus, ad quibusdam. Quos dolorum labore fugiat deserunt totam dolor voluptatibus quidem veritatis distinctio quia accusamus maxime nesciunt unde officiis similique iusto earum ipsa, eveniet eligendi dolores. Sunt quibusdam adipisci, suscipit nisi repellendus consequatur odio totam ullam explicabo voluptates voluptatem doloremque, aperiam modi saepe nam!",
				},
				{
					title: "Design video thumbnails",
					person: "Chun Li",
					due: "October 2022",
					status: "overdue",
					content:
						"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi assumenda cupiditate, reiciendis suscipit quod laudantium, architecto itaque, odio ab beatae sapiente fugit. Sed id deleniti autem? Facere, doloribus eaque dolore, quam fuga iusto voluptatem odio tenetur dignissimos reiciendis molestias maiores? Esse nesciunt cum sint ipsam autem molestiae porro quod tenetur veritatis ratione quasi libero vitae, voluptatibus, ad quibusdam. Quos dolorum labore fugiat deserunt totam dolor voluptatibus quidem veritatis distinctio quia accusamus maxime nesciunt unde officiis similique iusto earum ipsa, eveniet eligendi dolores. Sunt quibusdam adipisci, suscipit nisi repellendus consequatur odio totam ullam explicabo voluptates voluptatem doloremque, aperiam modi saepe nam!",
				},
				{
					title: "Dicuss with clients",
					person: "The Net Ninja",
					due: "March 2022",
					status: "overdue",
					content:
						"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi assumenda cupiditate, reiciendis suscipit quod laudantium, architecto itaque, odio ab beatae sapiente fugit. Sed id deleniti autem? Facere, doloribus eaque dolore, quam fuga iusto voluptatem odio tenetur dignissimos reiciendis molestias maiores? Esse nesciunt cum sint ipsam autem molestiae porro quod tenetur veritatis ratione quasi libero vitae, voluptatibus, ad quibusdam. Quos dolorum labore fugiat deserunt totam dolor voluptatibus quidem veritatis distinctio quia accusamus maxime nesciunt unde officiis similique iusto earum ipsa, eveniet eligendi dolores. Sunt quibusdam adipisci, suscipit nisi repellendus consequatur odio totam ullam explicabo voluptates voluptatem doloremque, aperiam modi saepe nam!",
				},
			],
		};
	},
	computed: {
		myProjects() {
			return this.projects.filter((p) => {
				return p.person === "The Net Ninja";
			});
		},
	},
};
</script>
<style lang=""></style>
