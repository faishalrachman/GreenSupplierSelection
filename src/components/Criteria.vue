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
      <div class="col-md-6 col-4 align-self-center">
        <button class="btn pull-right hidden-sm-down btn-success" @click="toggleBawah">
          <i id="toggleIcon" class="fa fa-arrow-right" style="font-size:15pt"></i>
        </button>
      </div>
    </div>
    <!-- ============================================================== -->
    <!-- End Bread crumb and right sidebar toggle -->
    <!-- ============================================================== -->
    <!-- ============================================================== -->
    <!-- Start Page Content -->
    <!-- ============================================================== -->
    <!-- Row -->
    <div class="row" id="atas" style>
      <!-- Column -->
      <div class="col-md-12">
        <div class="card">
          <div class="card-block">
            <!-- Number of criteria -->
            <div class="col-md-6">
              <div class="form-group">
                <label class="col-md-4">Number of Criteria</label>
                <label class="col-md-1 text-center">{{topic.criterias.length}}</label>
                <button class="btn btn-primary m-r-10 m-l-10" @click="removeCriteria">-</button>
                <button class="btn btn-primary" @click="addCriteria">+</button>
              </div>
            </div>

            <!-- Simbol criteria -->
            <div class="col-md-12 judul" v-if="topic.criterias.length > 0">
              <div class="col-md-6">
                <table class="table" style="text-align: center;vertical-align: top;">
                  <thead>
                    <tr>
                      <th class="text-center">Symbol</th>
                      <th class="text-center">Criteria</th>
                      <th class="text-center">Number of Sub-Criteria Each Criteria</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(data, index) in topic.criterias" v-bind:key="index">
                      <td>
                        <input type="text" class="form-control col-md-6" v-model="data.symbol">
                      </td>
                      <td>
                        <input
                          type="text"
                          style="min-width: 100%;"
                          class="form-control col-md-6"
                          v-model="data.criteria"
                        >
                      </td>
                      <td class="pull-right">
                        {{data.sub_criterias.length}}
                        <button
                          class="btn btn-primary m-r-10 m-l-10"
                          @click="removeSubCriteria(data)"
                        >-</button>
                        <button class="btn btn-primary" @click="addSubCriteria(data)">+</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div class="col-md-6">
                <!-- <h3 class="text-center">Sub Criteria</h3> -->
                <table
                  class="table"
                  style="text-align: center;"
                  v-for="(data,index) in topic.criterias"
                  v-bind:key="index"
                  v-if="data.sub_criterias.length > 0"
                >
                  <thead>
                    <tr>
                      <th class="text-center">Symbol</th>
                      <th class="text-center">Sub-Criteria</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="alert-success">
                      <td>{{data.symbol}}</td>
                      <td>{{data.criteria}}</td>
                    </tr>
                    <tr v-for="(subdata, subindex) in data.sub_criterias" v-bind:key="subindex">
                      <td>
                        <input type="text" class="form-control col-md-6" v-model="subdata.symbol">
                      </td>
                      <td>
                        <input
                          type="text"
                          style="min-width: 50%;"
                          class="form-control col-md-6"
                          v-model="subdata.sub_criteria"
                        >
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="row" id="bawah" style="display: none;">
      <div class="col-md-12">
        <div class="card">
          <div class="card-block judul">
            <div class="col-md-4 inijudul">
              <div class="form-group">
                <center>
                  <label class="col-md-4">Symbol Criteria</label>
                </center>

                <select
                  class="form-control m-t-30"
                  v-model="menu.selectedCriteria"
                >
                  <option
                    v-for="(data, index) in topic.criterias"
                    v-bind:key="index"
                    v-bind:value="index"
                  >{{data.symbol}} - {{data.criteria}}</option>
                </select>
              </div>
              <div class="form-group">
                <center>
                  <label class="col-md-4">Symbol Sub-Criteria</label>
                </center>

                <select
                  class="form-control m-t-30"
                  v-model="menu.selectedSubCriteria"
                >
                  <option
                    v-for="(data, index) in topic.criterias[menu.selectedCriteria].sub_criterias"
                    v-bind:key="index"
                    v-bind:value="index"
                  >{{data.symbol}} - {{data.sub_criteria}}</option>
                </select>

              </div>
              <div class="form-group">
                <label class="col-md-5 m-t-30" style="margin-left:30%">Performance Indicator</label>
                <br>
                <textarea
                  class="form-control"
                  name="indicator"
                  cols="20"
                  rows="5"
                  v-model="dataCriteria().performance_indicator"
                ></textarea>
                <label class="col-md-5 m-t-30" style="margin-left: 30%">Measurement Method</label>
                <br>
                <!-- measurement dengan sub criteria -->
                <textarea
                  class="form-control"
                  name="indicator"
                  cols="20"
                  rows="5"
                  v-model="dataCriteria().measurement_method"
                ></textarea>
                <br>
              </div>
              <!-- Expert tanpa sub criteria -->
              <div
                class="form-group">
                <label class="col-md-5 m-t-30">Number of Expert</label>
                <input
                  type="number"
                  class="col-md-2 form-control"
                  v-model="experts().length"
                >
                <button
                  class="btn btn-primary m-r-10 m-l-10"
                  @click="experts().splice(-1,1)"
                >-</button>
                <button class="btn btn-primary" @click="addExpert">+</button>
                <br>
                <div v-if="experts().length > 0">
                  <div
                    class="m-l-10"
                    v-for="(data2, index2) in experts()"
                    v-bind:key="index2"
                  >
                    <label class="m-t-10">Background of Expert {{index2+1}}</label>
                    <textarea
                      class="form-control"
                      name="indicator"
                      id
                      cols="30"
                      rows="5"
                      v-model="data2.description"
                    ></textarea>
                    <br>
                    <label class="col-md-5 m-t-10">Weight of Expert {{index2+1}}</label>
                    <input type="number" min="0" max="1" step="0.01" class="form-control col-md-3" v-model="data2.weight">
                  </div>
                  <br>
                </div>
              </div>
            </div>
            <div class="col-md-12 inijudul" v-if="topic.criterias.length > 0">
              <center>
                <label>System Range Grade</label>
              </center>

              <button class="btn btn-primary pull-right" @click="addSystemRange">
                <i class="fa fa-plus"></i>
              </button>
              <button class="btn btn-primary m-r-10 m-l-10 pull-right" @click="removeSystemRange">
                <i class="fa fa-minus"></i>
              </button>
              <table class="table" style="text-align: center;">
                <thead>
                  <tr>
                    <th class="text-center">Symbol of Assesment</th>
                    <th class="text-center" colspan="3">TFN (ax,bx,cx)</th>
                    <th class="text-center" colspan="3">TFN (ay,by,cy)</th>
                    <th class="text-center">General Interpretation</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="(data,index) in dataCriteria().system_range_grade"
                    v-bind:key="index"
                  >
                    <td>
                      <input type="text" style="width: 50px" v-model="data.symbol">
                    </td>
                    <td>
                      <input type="text" style="width: 50px" v-model="data.tfn_x[0]">
                    </td>
                    <td>
                      <input type="text" style="width: 50px" v-model="data.tfn_x[1]">
                    </td>
                    <td>
                      <input type="text" style="width: 50px" v-model="data.tfn_x[2]">
                    </td>
                    <td>
                      <input type="text" style="width: 50px" v-model="data.tfn_y[0]">
                    </td>
                    <td>
                      <input type="text" style="width: 50px" v-model="data.tfn_y[1]">
                    </td>
                    <td>
                      <input type="text" style="width: 50px" v-model="data.tfn_y[2]">
                    </td>
                    <td colspan="2">
                      <textarea
                        type="text"
                        style="width: 300px"
                        class="form-control"
                        v-model="data.general_interpretation"
                      ></textarea>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div>
                <center>
                  <label>Design Range</label>
                </center>
                <table class="table" style="text-align: center;">
                  <thead>
                    <tr>
                      <th class="text-center">Symbol of Assesment</th>
                      <th class="text-center" colspan="3">TFN (ax,bx,cx)</th>
                      <th class="text-center" colspan="3">TFN (ay,by,cy)</th>
                      <th class="text-center">General Interpretation</th>
                    </tr>
                  </thead>
                  <tbody>
                    <!-- dengan sub criteria -->
                    <tr>
                      <td>
                        <input
                          type="text"
                          style="width: 50px"
                          v-model="dataCriteria().design_range.symbol"
                        >
                      </td>
                      <td>
                        <input
                          type="text"
                          style="width: 50px"
                          v-model="dataCriteria().design_range.tfn_x[0]"
                        >
                      </td>
                      <td>
                        <input
                          type="text"
                          style="width: 50px"
                          v-model="dataCriteria().design_range.tfn_x[1]"
                        >
                      </td>
                      <td>
                        <input
                          type="text"
                          style="width: 50px"
                          v-model="dataCriteria().design_range.tfn_x[2]"
                        >
                      </td>
                      <td>
                        <input
                          type="text"
                          style="width: 50px"
                          v-model="dataCriteria().design_range.tfn_y[0]"
                        >
                      </td>
                      <td>
                        <input
                          type="text"
                          style="width: 50px"
                          v-model="dataCriteria().design_range.tfn_y[1]"
                        >
                      </td>
                      <td>
                        <input
                          type="text"
                          style="width: 50px"
                          v-model="dataCriteria().design_range.tfn_y[2]"
                        >
                      </td>
                      <td>
                        <textarea
                          type="text"
                          style="width: 300px"
                          class="form-control"
                          v-model="dataCriteria().design_range.general_interpretation"
                        ></textarea>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div>
                <center>
                  <label>Identification Evaluation Each Decision</label>
                </center>
                <table class="table" style="text-align: center;">
                  <thead>
                    <tr>
                      <th class="text-center">Symbol of Assesment</th>
                      <th class="text-center">Evaluation</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      v-for="(data,index) in dataCriteria().system_range_grade"
                      v-bind:key="index"
                    >
                      <td>{{data.symbol}}</td>
                      <td>
                        <textarea type="text" class="form-control" v-model="data.evaluation"></textarea>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
          <button @click="submit" class="btn btn-primary pull-right">Save</button>
    <!-- ============================================================== -->
    <!-- End PAge Content -->
    <!-- ============================================================== -->
  </div>
</template>
<script>
import topic_model from "../service/topic";
export default {
  data() {
    return {
      topic: {
        topic_id: 1,
        topic_name: "hihihahahahahaha",
        topic_desc: "bacot adit",
        alternatives: [],
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
        ]
      },
      menu: {
        selectedCriteria: 0,
        selectedSubCriteria: 0,
        selectedExperts: 0,
        atasbawah: true
      },
      performance: {
        performance_indicator: "",
        measurement_method: ""
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
      if (this.topic.criterias[a].sub_criterias.length > 0) {
        return this.topic.criterias[a].sub_criterias[b];
      } else {
        return this.topic.criterias[a];
      }
    },
    toggleBawah() {
      if (this.atasbawah) {
        $("#atas").show();
        $("#bawah").hide();
        $("#toggleIcon").removeClass("fa-arrow-left");
        $("#toggleIcon").addClass("fa-arrow-right");
        this.atasbawah = false;
      } else {
        this.atasbawah = true;
        $("#atas").hide();
        $("#bawah").show();
        $("#toggleIcon").removeClass("fa-arrow-right");
        $("#toggleIcon").addClass("fa-arrow-left");
      }
    },
    addCriteria() {
      this.topic.criterias.push({
        symbol: "",
        criteria: "",
        sub_criterias: [
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
      });
    },
    removeCriteria() {
      if (this.topic.criterias.length > 1)
        this.topic.criterias.splice(-1, 1);
      else this.$swal("Criteria tidak boleh kurang dari 1", {icon: "error"})
    },
    addSubCriteria(data) {
      data.sub_criterias.push({
        symbol: data.symbol,
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
      });
    },
    removeSubCriteria(data) {
      data.sub_criterias.splice(-1, 1);
    },
    addSystemRange() {
      this.dataCriteria().system_range_grade.push({
          symbol: "",
          tfn_x: [0, 0, 0],
          tfn_y: [0, 1, 0],
          general_interpretation: "",
          evaluation: ""
        });
    },
    removeSystemRange() {
      this.dataCriteria().system_range_grade.splice(-1,1)
    },
    addExpert() {
      var selected = this.menu.selectedCriteria;
      console.log(this.experts())
      this.experts().push({
        description: "",
        weight: 0
      });
    }
  },
  created() {
    this.topic = this.$session.get("topic")
    this.topic.criterias.forEach(
      (element) => {
        if (element['sub_criterias'] == null){
          element['sub_criterias'] = []
        }
      }
    )
  }
};
</script>
