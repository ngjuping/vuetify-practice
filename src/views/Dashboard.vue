<template lang="">
  <div class="mt-4 ml-4">
    <h1 class="subheader grey--text">Dashboard</h1>
    <v-container class="my-5">
      <v-card v-for="project in projects" :key="project.title">
        <v-container>
          <v-row :class="`project ${project.status}`">
            <v-col cols="12" md="6">
              <div class="caption grey--text">Project title</div>
              <div>{{ project.title }}</div>
            </v-col>
            <v-col xs="2">
              <div class="caption grey--text">Person</div>
              <div>{{ project.person }}</div>
            </v-col>
            <v-col xs="2">
              <div class="caption grey--text">Due date</div>
              <div>{{ project.due }}</div>
            </v-col>
            <v-col xs="2">
              <div class="caption grey--text">Status</div>
              <div>{{ project.status }}</div>
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
</style>
