<template>
  <div class="mt-4 ml-4">
    <h1 class="subheader grey--text">
      Team
    </h1>

    <v-container class="my-5">
      <v-row>
        <v-col 
            v-for="person in team"
            :key="person.name"
            cols="12"
            xs="12"
            sm="6"
            md="4"
            lg="3"
        >
          <v-card
              
              class="text-center ma-3"
          >
            <v-responsive class="pt-4">
              <v-avatar
                  size="100"
                  class="grey lighten-2"
              >
                <img :src="person.avatar">
              </v-avatar>
            </v-responsive>
            <v-card-text>
              <div class="text-subtitle-1">
                {{ person.name }}
              </div>
              <div class="subheading grey--text">
                {{ person.role }}
              </div>
            </v-card-text>

            <v-card-actions>
              <v-btn
                  text
                  color="grey"
              >
                <v-icon
                    small
                    left
                >
                  mdi-message
                </v-icon>
                <span>message</span>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
export default {
	name: "TeamView",
	data() {
		return {
			team: [
				{
					name: "The Net Ninja",
					role: "Web developer",
					avatar: "/avatar-1.png",
				},
				{ name: "Ryu", role: "Graphic designer", avatar: "/avatar-2.png" },
				{ name: "Chun Li", role: "Web developer", avatar: "/avatar-3.png" },
				{
					name: "Gouken",
					role: "Social media maverick",
					avatar: "/avatar-4.png",
				},
				{ name: "Yoshi", role: "Sales guru", avatar: "/avatar-5.png" },
			],
		};
	},
};
</script>
<style lang=""></style>
