<template>
  <div class="container-fluid">
    <!-- ============================================================== -->
    <!-- Bread crumb and right sidebar toggle -->
    <!-- ============================================================== -->
    <div class="row page-titles">
      <div class="col-md-6 col-8 align-self-center">
        <h3 class="text-themecolor m-b-0 m-t-0">Criteria and Sub-Criteria</h3>
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <a href="javascript:void(0)">Home</a>
          </li>
          <li class="breadcrumb-item active">Criteria and Sub-Criteria</li>
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
    <div class="row judul" style>
      <!-- Column -->
      <div class="col-md-10 inijudul">
        <div class="card">
          <div class="card-block"style="text-align: center; overflow-x: scroll; display: block; width: 100%;">
            <div class="col-md-6" >
              <label>Criteria</label>
              <select class="form-control" v-model="menu.selectedCriteria" @change="changeDecision">
                <option
                  v-for="(data,index) in topic.criterias"
                  v-bind:key="index"
                  v-bind:value="index"
                >{{data.symbol}} - {{data.criteria}}</option>
              </select>
              <div v-if="topic.criterias[menu.selectedCriteria].sub_criterias.length > 0">
                <label class="m-t-30">Sub-Criteria</label>
                <select class="form-control" @change="changeDecision" v-model="menu.selectedSubCriteria">
                  <option
                    v-for="(data,index) in topic.criterias[menu.selectedCriteria].sub_criterias"
                    v-bind:key="index"
                    v-bind:value="index"
                  >{{data.symbol}} - {{data.sub_criteria}}</option>
                </select>
              </div>
            </div>
            <table class="table m-t-30" >
              <thead>
                <tr
                  rowspan="2"
                  v-if="topic.criterias[menu.selectedCriteria].sub_criterias.length == 0"
                >
                  <th class="text-center" rowspan="2">Criteria</th>
                  <th class="text-center">{{topic.criterias[menu.selectedCriteria].criteria}}</th>
                </tr>
                <tr
                  rowspan="2"
                  v-if="topic.criterias[menu.selectedCriteria].sub_criterias.length > 0"
                >
                  <th class="text-center" rowspan="2">Sub Criteria</th>
                  <th
                    class="text-center"
                  >{{dataCriteria().sub_criteria }}</th>
                </tr>
                <tr>
                  <th class="text-center" v-for="data in menu.subcriteria" v-bind:key="data" >{{data.symbol}}</th>
                </tr>
                <tr rowspan="1">
                  <th class="text-center">Alternative</th>
                  <th class="text-center" v-for="(data, index) in experts()" v-bind:key="index">Expert {{index+1}}<br>({{data.description}})</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(data,index_alter) in topic.alternatives" v-bind:key="index_alter">
                  <td class="text-center">{{data.alternative}} ({{data.symbol}})</td>
                  <td
                    class="text-center"
                    v-for="(data2,index_expert) in experts()"
                    v-bind:key="index_expert"
                  >
                    <select
                      type="text"
                      class="form-control"
                      style="width:100px;"
                      @change="pilihExpert(index_alter,index_expert,$event)"
                    >
                    <option>-</option>
                      <option
                        v-for="(data_grade,index_grade) in dataCriteria().system_range_grade"
                        v-bind:value="index_grade"
                        v-bind:key="index_grade"
                      >{{data_grade.symbol}}</option>
                    </select>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
                <button @click="submit" class="btn btn-primary pull-right">Save</button>
      </div>
      <div class="col-md-3 inijudul">
        <div class="card">
          <div class="card-block">
            <table class="table m-t-30" style="text-align: center;">
              <thead>
                <tr>
                  <th class="text-center">Symbol of Assessment</th>
                  <th class="text-center">General Interpretation</th>
                </tr>
              </thead>
              <tbody v-if="topic.criterias[menu.selectedCriteria].sub_criterias.length == 0">
                <tr
                  v-for="(data,index) in topic.criterias[menu.selectedCriteria].system_range_grade" v-bind:key="index"
                >
                  <td>{{data.symbol}}</td>
                  <td>{{data.general_interpretation}}</td>
                </tr>
              </tbody>
              <tbody v-if="topic.criterias[menu.selectedCriteria].sub_criterias.length > 0">
                <tr
                  v-for="(data,index) in topic.criterias[menu.selectedCriteria].sub_criterias[menu.selectedSubCriteria].system_range_grade" v-bind:key="index"
                >
                  <td>{{data.symbol}}</td>
                  <td>{{data.general_interpretation}}</td>
                </tr>
              </tbody>
            </table>
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
        topic_id: 1,
        topic_name: "hihihahahahahaha",
        topic_desc: "bacot adit",
        alternatives: [
          {
            symbol: "A1",
            alternative: "Menambah jumlah upil"
          },
          {
            symbol: "A2",
            alternative: "Mengurangi jumlah upil"
          }
        ],
        criterias: [
          {
            symbol: "C1",
            criteria: "Hahahaha",
            sub_criterias: [
              {
                symbol: "C11",
                sub_criteria: "Hehehe",
                performance_indicator: "",
                measurement_method: "",
                experts: [
                  {
                    description: "HEHE",
                    weight: 0
                  },
                  {
                    description: "HEHE",
                    weight: 0
                  },
                  {
                    description: "HEHE",
                    weight: 0
                  }
                ],
                system_range_grade: [
                  {
                    symbol: "AA",
                    tfn_x: [0, 0, 0],
                    tfn_y: [0, 0, 0],
                    general_interpretation: "",
                    evaluation: "DD"
                  },
                  {
                    symbol: "AA",
                    tfn_x: [0, 0, 0],
                    tfn_y: [0, 0, 0],
                    general_interpretation: "",
                    evaluation: "DD"
                  },
                  {
                    symbol: "AA",
                    tfn_x: [0, 0, 0],
                    tfn_y: [0, 0, 0],
                    general_interpretation: "",
                    evaluation: "AA"
                  },
                  {
                    symbol: "AA",
                    tfn_x: [0, 0, 0],
                    tfn_y: [0, 0, 0],
                    general_interpretation: "",
                    evaluation: "DD"
                  }
                ],
                design_range: {
                  symbol: "AAA",
                  tfn_x: [0, 0, 0],
                  tfn_y: [0, 0, 0],
                  general_interpretation: "DDD",
                  evaluation: ""
                }
              },
              {
                symbol: "C12",
                sub_criteria: "Hehehe",
                performance_indicator: "",
                measurement_method: "",
                experts: [
                  {
                    description: "HEHE",
                    weight: 0
                  },
                  {
                    description: "HEHE",
                    weight: 0
                  },
                  {
                    description: "HEHE",
                    weight: 0
                  }
                ],
                system_range_grade: [
                  {
                    symbol: "AA",
                    tfn_x: [0, 0, 0],
                    tfn_y: [0, 0, 0],
                    general_interpretation: "",
                    evaluation: "DD"
                  },
                  {
                    symbol: "AA",
                    tfn_x: [0, 0, 0],
                    tfn_y: [0, 0, 0],
                    general_interpretation: "",
                    evaluation: "DD"
                  },
                  {
                    symbol: "AA",
                    tfn_x: [0, 0, 0],
                    tfn_y: [0, 0, 0],
                    general_interpretation: "",
                    evaluation: "AA"
                  },
                  {
                    symbol: "AA",
                    tfn_x: [0, 0, 0],
                    tfn_y: [0, 0, 0],
                    general_interpretation: "",
                    evaluation: "DD"
                  }
                ],
                design_range: {
                  symbol: "AAA",
                  tfn_x: [0, 0, 0],
                  tfn_y: [0, 0, 0],
                  general_interpretation: "DDD",
                  evaluation: ""
                }
              }
            ],
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
          },
          {
            symbol: "C1",
            criteria: "Hahahaha",
            sub_criterias: [],
            performance_indicator: "",
            measurement_method: "",
            experts: [
              {
                description: "HEHE",
                weight: 0
              },
              {
                description: "HEHE",
                weight: 0
              },
              {
                description: "HEHE",
                weight: 0
              }
            ],
            system_range_grade: [
              {
                symbol: "AA",
                tfn_x: [0, 0, 0],
                tfn_y: [0, 0, 0],
                general_interpretation: "",
                evaluation: "DD"
              },
              {
                symbol: "AA",
                tfn_x: [0, 0, 0],
                tfn_y: [0, 0, 0],
                general_interpretation: "",
                evaluation: "DD"
              },
              {
                symbol: "AA",
                tfn_x: [0, 0, 0],
                tfn_y: [0, 0, 0],
                general_interpretation: "",
                evaluation: "AA"
              },
              {
                symbol: "AA",
                tfn_x: [0, 0, 0],
                tfn_y: [0, 0, 0],
                general_interpretation: "",
                evaluation: "DD"
              }
            ],
            design_range: {
              symbol: "AAA",
              tfn_x: [0, 0, 0],
              tfn_y: [0, 0, 0],
              general_interpretation: "DDD",
              evaluation: ""
            }
          },
          {
            symbol: "C1",
            criteria: "Hahahaha",
            sub_criterias: [
              {
                symbol: "C11",
                sub_criteria: "Hehehe",
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
                    symbol: "AA",
                    tfn_x: [0, 0, 0],
                    tfn_y: [0, 0, 0],
                    general_interpretation: "",
                    evaluation: "DD"
                  },
                  {
                    symbol: "AA",
                    tfn_x: [0, 0, 0],
                    tfn_y: [0, 0, 0],
                    general_interpretation: "",
                    evaluation: "DD"
                  },
                  {
                    symbol: "AA",
                    tfn_x: [0, 0, 0],
                    tfn_y: [0, 0, 0],
                    general_interpretation: "",
                    evaluation: "AA"
                  },
                  {
                    symbol: "AA",
                    tfn_x: [0, 0, 0],
                    tfn_y: [0, 0, 0],
                    general_interpretation: "",
                    evaluation: "DD"
                  }
                ],
                design_range: {
                  symbol: "AAA",
                  tfn_x: [0, 0, 0],
                  tfn_y: [0, 0, 0],
                  general_interpretation: "DDD",
                  evaluation: ""
                }
              }
            ],
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
                symbol: "AA",
                tfn_x: [0, 0, 0],
                tfn_y: [0, 0, 0],
                general_interpretation: "",
                evaluation: "DD"
              },
              {
                symbol: "AA",
                tfn_x: [0, 0, 0],
                tfn_y: [0, 0, 0],
                general_interpretation: "",
                evaluation: "DD"
              },
              {
                symbol: "AA",
                tfn_x: [0, 0, 0],
                tfn_y: [0, 0, 0],
                general_interpretation: "",
                evaluation: "AA"
              },
              {
                symbol: "AA",
                tfn_x: [0, 0, 0],
                tfn_y: [0, 0, 0],
                general_interpretation: "",
                evaluation: "DD"
              }
            ],
            design_range: {
              symbol: "AAA",
              tfn_x: [0, 0, 0],
              tfn_y: [0, 0, 0],
              general_interpretation: "DDD",
              evaluation: ""
            }
          }
        ]
      },
      menu: {
        selectedCriteria: 0,
        selectedSubCriteria: 0
      }
    };
  },
  methods: {
    submit() {
      this.$session.set("topic",this.topic)
      console.log(this.topic)
      topic_model.setTopic(this.topic.topic_id, this.topic).then(
        (res) => this.$swal("Berhasil simpan","Data berhasil tersimpan", "success")
      )
    },
    experts() {
      var a = this.menu.selectedCriteria;
      var b = this.menu.selectedSubCriteria;
      if (this.topic.criterias[a].sub_criterias.length > 0) {
        return this.topic.criterias[a].sub_criterias[b].experts;
      } else {
        return this.topic.criterias[a].experts;
      }
    },
    dataCriteria() {
      var a = this.menu.selectedCriteria;
      var b = this.menu.selectedSubCriteria;
      console.log(b)
      if (this.topic.criterias[a].sub_criterias.length > 0) {
        console.log(this.topic.criterias[a].sub_criterias[b].sub_criteria)
        return this.topic.criterias[a].sub_criterias[b];
      } else {
        console.log(this.topic.criterias[a].criteria)
        return this.topic.criterias[a];
      }
      
    },
    changeDecision() {
      var data = this.dataCriteria();
      data.experts.forEach(expert => {
        if (expert["decision"] == null) expert["decision"] = [];
        for (var i = 0; i < this.topic.alternatives.length; i++) {
          if (expert["decision"][i] == null)
            expert["decision"].push({
              tfn_x: [0, 0, 0],
              tfn_y: [0, 0, 0]
            });
        }
      });
      console.log(data.experts);
    },
    pilihExpert(index_alter, index_expert, event) {
      var experts = this.experts();
      experts[index_expert].decision[
        index_alter
      ] = this.dataCriteria().system_range_grade[event.target.value];
      console.log(experts[index_expert].decision[index_alter]);
    }
  },
  created() {
    console.log(this.topic.criterias[0].sub_criterias);
    this.topic = this.$session.get("topic")
    this.topic.criterias.forEach(
      (element) => {
        if (element['sub_criterias'] == null){
          element['sub_criterias'] = []
        }
      }
    )
    this.changeDecision();
  }
};
</script>