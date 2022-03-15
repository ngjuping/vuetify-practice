<template>
  <nav>
    <v-app-bar
        text
        app
        :style="{ color: '#f0' }"
        class="grey-lighten-3"
    >
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title
          text
          class="text-uppercase grey--text"
      >
        Todo
      </v-toolbar-title>
      <v-spacer></v-spacer>

      <v-menu offset-y>
        <template #activator="{on}">
          <v-btn
              text
              color="grey"
              v-on="on"
          >
            <v-icon left>
              mdi-menu-down
            </v-icon>
            <span>Menu</span>
          </v-btn>
        </template>
        <v-list>
          <v-list-item
              v-for="link in links"
              :key="link.text"
              router
              :to="link.route"
          >
            <v-list-tile-title>{{ link.text }}</v-list-tile-title>
          </v-list-item>
        </v-list>
      </v-menu>

      <v-btn
          text
          color="grey"
      >
        <span>Sign out</span>
        <v-icon right>
          mdi-exit-to-app
        </v-icon>
      </v-btn>
    </v-app-bar>
    <v-navigation-drawer
        v-model="drawer"
        app
        class="primary"
    >
      <v-container>
        <v-row class="mt-5">
          <v-col
              cols="12"
              align="center"
          >
            <v-avatar
                size="100"
            >
              <img :src="`/avatar-1.png`">
            </v-avatar>
          </v-col>
          <v-col
              cols="12"
              align="center"
              justify="center"
          >
            <span class="white--text subheading mt-1">
              The Net Ninja
            </span>
          </v-col>
          <v-col align="center">
            <popup-dialog></popup-dialog>
          </v-col>
        </v-row>
      </v-container>
      <v-list>
        <v-list-item
            v-for="link in links"
            :key="link.text"
            router
            :to="link.route"
        >
          <v-list-item-action>
            <v-icon class="white--text">
              {{ link.icon }}
            </v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title class="white--text">
              {{ link.text }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-list> </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
import PopupDialog from "./PopupDialog.vue";
export default {
	components: { PopupDialog },
	data() {
		return {
			drawer: true,
			links: [
				{
					icon: "mdi-view-dashboard",
					text: "Dashboard",
					route: "/",
				},
				{ icon: "mdi-folder", text: "My projects", route: "/projects" },
				{ icon: "mdi-account", text: "Team", route: "/team" },
			],
		};
	},
	methods: {
		new() {
			console.log("die");
		},
	},
};
</script>

<style>
	.go {
		color: red;
		color: red;
	}
</style>
