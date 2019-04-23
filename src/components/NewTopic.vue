<template>
  <div class="container-fluid">
    <!-- ============================================================== -->
    <!-- Bread crumb and right sidebar toggle -->
    <!-- ============================================================== -->
    <div class="row page-titles">
      <div class="col-md-6 col-8 align-self-center">
        <h3 class="text-themecolor m-b-0 m-t-0">New Topic</h3>
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <a href="javascript:void(0)">Home</a>
          </li>
          <li class="breadcrumb-item">Dashboard</li>
          <li class="breadcrumb-item active">New Topic</li>
        </ol>
      </div>
    </div>
    <!-- ============================================================== -->
    <!-- End Bread crumb and right sidebar toggle -->
    <!-- ============================================================== -->
    <!-- ============================================================== -->
    <!-- Start Page Content -->
    <!-- ============================================================== -->
    <!-- Row -->
    <div class="row">
      <!-- Column -->
      <div class="col-sm-8">
        <div class="card">
          <div class="card-block">
            <div class="form-group">
              <label class="col-md-12">Topic Name</label>
              <div class="col-md-12">
                <input
                  type="text"
                  placeholder
                  class="form-control form-control-line"
                  v-model="topic.topic_name"
                >
              </div>
            </div>
            <div class="form-group">
              <label class="col-md-12">Topic Description</label>
              <div class="col-md-12">
                <textarea
                  name="Text1"
                  class="form-control"
                  style="min-width: 100%"
                  v-model="topic.topic_desc"
                ></textarea>
              </div>
            </div>
            <div class="form-group">
              <div class="col-md-12">
                <button class="btn btn-primary pull-right" @click="submit">Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- ============================================================== -->
    <!-- End PAge Content -->
    <!-- ============================================================== -->
  </div>
</template>

<script>
import topic_model from "../service/topic"

export default {
  data() {
    return {
      topic: {
        topic_name: "",
        topic_desc: "",
        alternatives: [{
          symbol: "",
          alternative: ""
        }],
        criterias: [
          {
            symbol: "",
            criteria: "",
            performance_indicator: "",
            measurement_method: "",
            sub_criterias : [
              
          {
            symbol: "",
            sub_criteria: "",
            performance_indicator: "",
            measurement_method: "",
            experts: [
              {
                description: "",
                weight: 0
              }
            ],
            system_range_grade: [
              {
                symbol: "",
                tfn_x: [0, 0, 0],
                tfn_y: [0, 0, 0],
                general_interpretation: "",
                evaluation: ""
              }
            ],
            design_range: {
              symbol: "",
              tfn_x: [0, 0, 0],
              tfn_y: [0, 0, 0],
              general_interpretation: "",
              evaluation: ""
            }
          }
            ],
            experts: [
              {
                description: "",
                weight: 0
              }
            ],
            system_range_grade: [
              {
                symbol: "",
                tfn_x: [0, 0, 0],
                tfn_y: [0, 0, 0],
                general_interpretation: "",
                evaluation: ""
              }
            ],
            design_range: {
              symbol: "",
              tfn_x: [0, 0, 0],
              tfn_y: [0, 0, 0],
              general_interpretation: "",
              evaluation: ""
            }
          },
        ]
      },
    };
  },
  methods: {
    submit() {
      topic_model.addTopic(this.topic).then(
        (res) => {
          this.$swal("Berhasil simpan","Data berhasil tersimpan", "success")
          this.$window.location.href = "../"
        }
      )
    }
  },
  created() {

  }
};
</script>