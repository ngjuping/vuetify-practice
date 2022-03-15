<template>
  <div class="mt-4 ml-4">
    <h1 class="subheader grey--text">
      Dashboard
    </h1>
    <v-container class="my-5">
      <v-row class="mb-3">
        <v-col>
          <v-tooltip top>
            <template #activator="{on}">
              <v-btn
                  small
                  text
                  color="grey"
                  class="mr-3"
                  @click="sortByProjectName"
                  v-on="on"
              >
                <v-icon
                    left
                    small
                >
                  mdi-folder
                </v-icon>

                <span class="caption text-lowercase">By project name</span>
              </v-btn>
              <v-btn
                  small
                  text
                  color="grey"
                  @click="sortByPerson"
              >
                <v-icon
                    left
                    small
                >
                  mdi-account
                </v-icon>

                <span class="caption text-lowercase">By person</span>
              </v-btn>
            </template>
            <span>Sort projects by name ascendingly</span>
          </v-tooltip>
        </v-col>
      </v-row>
      <v-card
          v-for="project in projects"
          :key="project.title"
      >
        <v-container>
          <v-row :class="`project ${project.status}`">
            <v-col
                cols="12"
                md="6"
            >
              <div class="caption grey--text">
                Project title
              </div>
              <div>{{ project.title }}</div>
            </v-col>
            <v-col xs="2">
              <div class="caption grey--text">
                Person
              </div>
              <div>{{ project.person }}</div>
            </v-col>
            <v-col xs="2">
              <div class="caption grey--text">
                Due date
              </div>
              <div>{{ project.due }}</div>
            </v-col>
            <v-col xs="2">
              <!-- <div class="caption grey--text">Status</div>
			<div>{{ project.status }}</div> -->
              <v-chip
                  small
                  :class="`${project.status} white--text caption my-2`"
              >
                {{ project.status }}
              </v-chip>
              <div></div>
            </v-col>
          </v-row>
          <v-row>
            <v-divider></v-divider>
          </v-row>
        </v-container>
      </v-card>
    </v-container>
  </div>
</template>
<script>
export default {
	name: "DashboardView",
	data() {
		return {
			projects: [
				{
					title: "Design a new website",
					person: "John",
					due: "March 2022",
					status: "ongoing",
				},
				{
					title: "Code up the home page",
					person: "Doe",
					due: "September 2022",
					status: "complete",
				},
				{
					title: "Design video thumbnails",
					person: "Chun Li",
					due: "October 2022",
					status: "overdue",
				},
			],
		};
	},
	methods: {
		sortByPerson() {
			this.projects = this.projects.sort((p1, p2) =>
				p1.person < p2.person ? -1 : 1
			);
		},
		sortByProjectName() {
			this.projects = this.projects.sort((p1, p2) =>
				p1.title < p2.title ? -1 : 1
			);
		},
	},
};
</script>
<style>
	.project.complete {
		border-left: 4px solid #3cd1c2;
	}

	.project.ongoing {
		border-left: 4px solid orange;
	}

	.project.overdue {
		border-left: 4px solid tomato;
	}

	.v-chip.complete {
		background: #3cd1c2 !important;
	}

	.v-chip.ongoing {
		background: #ffaa2c !important;
	}

	.v-chip.overdue {
		background: #f83e70 !important;
	}
</style>
