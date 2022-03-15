<template>
  <div>
    <v-dialog
        v-model="dialog"
        width="500"
    >
      <template #activator="{on}">
        <v-btn
            class="success"
            text
            @click="dialog = !dialog"
            v-on="on"
        >
          Add new project
        </v-btn>
      </template>
      <v-card>
        <v-card-title class="headline grey lighten-2">
          Add a new Project
        </v-card-title>
        <v-card-text>
          <v-form
              ref="form"
              class="px-3 mt-3"
          >
            <v-text-field
                v-model="title"
                label="Title"
                prepend-icon="mdi-folder"
                :rules="inputRules"
            ></v-text-field>
            <v-textarea
                v-model="content"
                label="Information"
                prepend-icon="mdi-pencil-outline"
                :rules="inputRules"
            ></v-textarea>
            <v-menu max-width="290">
              <template #activator="{on}">
                <v-text-field
                    label="Due date"
                    :value="formattedDate"
                    prepend-icon="mdi-calendar-range"
                    v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker v-model="due"></v-date-picker>
            </v-menu>
            <v-spacer></v-spacer>
            <v-btn
                text
                class="success mt-3 mx-0"
                @click="submit"
            >
              Submit
            </v-btn>
          </v-form>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import moment from "moment";

export default {
	data() {
		return {
			dialog: false,
			title: "",
			content: "",
			due: null,
			inputRules: [(v) => v.length >= 3 || "Minimum length is 3 characters"],
		};
	},
	computed: {
		formattedDate() {
			if (!this.due) return;
			return moment(this.due).format("Do MMMM YYYY");
		},
	},
	methods: {
		submit() {
			if (this.$refs.form.validate()) {
				console.log(this.title, this.content);
			}
		},
	},
};
</script>

<style lang="scss" scoped>
</style>