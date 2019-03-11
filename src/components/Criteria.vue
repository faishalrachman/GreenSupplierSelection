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
            <div class="col-md-12 judul">
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
                  @change="changedCriteria"
                >
                  <option
                    v-for="(data, index) in topic.criterias"
                    v-bind:key="index"
                    v-bind:value="index"
                  >{{data.symbol}} - {{data.criteria}}</option>
                </select>
                <div
                  v-if="topic.criterias.length > 0 && topic.criterias[this.menu.selectedCriteria].sub_criterias.length > 0"
                >
                  <center>
                    <label class="col-md-6 m-t-30">Symbol Sub-Criteria</label>
                  </center>
                  <select class="form-control" v-model="menu.selectedSubCriteria">
                    <option
                      v-for="(data2, index2) in topic.criterias[menu.selectedCriteria].sub_criterias"
                      v-bind:value="index2"
                      v-bind:key="index2"
                    >{{data2.symbol}} - {{data2.sub_criteria}}</option>
                  </select>
                </div>
              </div>
              <div class="form-group">
                <label class="col-md-5 m-t-30" style="margin-left:30%">Performance Indicator</label>
                <br>
                <!-- PI tanpa sub criteria -->
                <textarea
                  v-if="topic.criterias[menu.selectedCriteria].sub_criterias.length == 0"
                  class="form-control"
                  name="indicator"
                  cols="20"
                  rows="5"
                  v-model="topic.criterias[menu.selectedCriteria].performance_indicator"
                ></textarea>
                <!-- PI dengan sub criteria -->
                <textarea
                  v-if="topic.criterias[menu.selectedCriteria].sub_criterias.length > 0"
                  class="form-control"
                  name="indicator"
                  cols="20"
                  rows="5"
                  v-model="topic.criterias[menu.selectedCriteria].sub_criterias[menu.selectedSubCriteria].performance_indicator"
                ></textarea>
                <label class="col-md-5 m-t-30" style="margin-left: 30%">Measurement Method</label>
                <br>
                <!-- measurement tanpa sub criteria -->
                <textarea
                  v-if="topic.criterias[menu.selectedCriteria].sub_criterias.length == 0"
                  class="form-control"
                  name="indicator"
                  cols="20"
                  rows="5"
                  v-model="topic.criterias[menu.selectedCriteria].measurement_method"
                ></textarea>
                <!-- measurement dengan sub criteria -->
                <textarea
                  v-if="topic.criterias[menu.selectedCriteria].sub_criterias.length > 0"
                  class="form-control"
                  name="indicator"
                  cols="20"
                  rows="5"
                  v-model="topic.criterias[menu.selectedCriteria].sub_criterias[menu.selectedSubCriteria].measurement_method"
                ></textarea>
                <br>
              </div>
              <!-- Expert tanpa sub criteria -->
              <div class="form-group" v-if="topic.criterias[menu.selectedCriteria].sub_criterias.length == 0">
                <label class="col-md-5 m-t-30">Number of Expert</label>
                <input
                  type="number"
                  class="col-md-2 form-control"
                  v-model="topic.criterias[menu.selectedCriteria].experts.length"
                >
                <button
                  class="btn btn-primary m-r-10 m-l-10"
                  @click="topic.criterias[menu.selectedCriteria].experts.splice(-1,1)"
                >-</button>
                <button class="btn btn-primary" @click="addExpertCriteria">+</button>
                <br>
                <div v-if="topic.criterias[menu.selectedCriteria].experts.length > 0">
                  <div
                    class="m-l-10"
                    v-for="(data2, index2) in topic.criterias[menu.selectedCriteria].experts"
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
                    <input type="number" class="form-control col-md-3" v-model="data2.weight">
                  </div>
                  <br>
                </div>
              </div>
              <!-- expert dengan sub criteria -->   
              <div class="form-group" v-if="topic.criterias[menu.selectedCriteria].sub_criterias.length > 0">
                <label class="col-md-5 m-t-30">Number of Expert</label>
                <input
                  type="number"
                  class="col-md-2 form-control"
                  v-model="topic.criterias[menu.selectedCriteria].sub_criterias[menu.selectedSubCriteria].experts.length"
                >
                <button
                  class="btn btn-primary m-r-10 m-l-10"
                  @click="topic.criterias[menu.selectedCriteria].sub_criterias[menu.selectedSubCriteria].experts.splice(-1,1)"
                >-</button>
                <button class="btn btn-primary" @click="addExpertSubCriteria">+</button>
                <br>
                <div v-if="topic.criterias[menu.selectedCriteria].sub_criterias[menu.selectedSubCriteria].experts.length > 0">
                  <div
                    class="m-l-10"
                    v-for="(data2, index2) in topic.criterias[menu.selectedCriteria].sub_criterias[menu.selectedSubCriteria].experts"
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
                    <input type="number" class="form-control col-md-3" v-model="data2.weight">
                  </div>
                  <br>
                </div>
              </div>
            </div>
            <div class="col-md-12 inijudul">
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
                  <tr v-if="topic.criterias[menu.selectedCriteria].sub_criterias.length == 0" v-for="(data,index) in topic.criterias[menu.selectedCriteria].system_range_grade" v-bind:key="index">
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
                      <input type="text" style="width: 50px"  v-model="data.tfn_x[2]">
                    </td>
                    <td>
                      <input type="text" style="width: 50px" v-model="data.tfn_y[0]">
                    </td>
                    <td>
                      <input type="text" style="width: 50px" v-model="data.tfn_y[1]">
                    </td>
                    <td>
                      <input type="text" style="width: 50px"  v-model="data.tfn_y[2]">
                    </td>
                    <td colspan="2">
                      <textarea type="text" style="width: 300px" class="form-control" v-model="data.general_interpretation"></textarea>
                    </td>
                  </tr>
                  <tr v-if="topic.criterias[menu.selectedCriteria].sub_criterias.length > 0" v-for="(data,index) in topic.criterias[menu.selectedCriteria].sub_criterias[menu.selectedSubCriteria].system_range_grade" v-bind:key="index">
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
                      <input type="text" style="width: 50px"  v-model="data.tfn_x[2]">
                    </td>
                    <td>
                      <input type="text" style="width: 50px" v-model="data.tfn_y[0]">
                    </td>
                    <td>
                      <input type="text" style="width: 50px" v-model="data.tfn_y[1]">
                    </td>
                    <td>
                      <input type="text" style="width: 50px"  v-model="data.tfn_y[2]">
                    </td>
                    <td colspan="2">
                      <textarea type="text" style="width: 300px" class="form-control" v-model="data.general_interpretation"></textarea>
                    </td>
                  </tr>
                </tbody>
              </table>
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
                  <tr v-if="topic.criterias[menu.selectedCriteria].sub_criterias.length == 0">
                    <td>
                      <input type="text" style="width: 50px" v-model="topic.criterias[menu.selectedCriteria].design_range.symbol">
                    </td>
                    <td>
                      <input type="text" style="width: 50px" v-model="topic.criterias[menu.selectedCriteria].design_range.tfn_x[0]">
                    </td>
                    <td>
                      <input type="text" style="width: 50px" v-model="topic.criterias[menu.selectedCriteria].design_range.tfn_x[1]">
                    </td>
                    <td>
                      <input type="text" style="width: 50px" v-model="topic.criterias[menu.selectedCriteria].design_range.tfn_x[2]">
                    </td>
                    <td>
                      <input type="text" style="width: 50px" v-model="topic.criterias[menu.selectedCriteria].design_range.tfn_y[0]">
                    </td>
                    <td>
                      <input type="text" style="width: 50px" v-model="topic.criterias[menu.selectedCriteria].design_range.tfn_y[1]">
                    </td>
                    <td>
                      <input type="text" style="width: 50px" v-model="topic.criterias[menu.selectedCriteria].design_range.tfn_y[2]">
                    </td>
                    <td>
                      <textarea type="text" style="width: 300px" class="form-control" v-model="topic.criterias[menu.selectedCriteria].design_range.general_interpretation"></textarea>
                    </td>
                  </tr>
                  <tr v-if="topic.criterias[menu.selectedCriteria].sub_criterias.length > 0">
                    <td>
                      <input type="text" style="width: 50px" v-model="topic.criterias[menu.selectedCriteria].sub_criterias[menu.selectedSubCriteria].design_range.symbol">
                    </td>
                    <td>
                      <input type="text" style="width: 50px" v-model="topic.criterias[menu.selectedCriteria].sub_criterias[menu.selectedSubCriteria].design_range.tfn_x[0]">
                    </td>
                    <td>
                      <input type="text" style="width: 50px" v-model="topic.criterias[menu.selectedCriteria].sub_criterias[menu.selectedSubCriteria].design_range.tfn_x[1]">
                    </td>
                    <td>
                      <input type="text" style="width: 50px" v-model="topic.criterias[menu.selectedCriteria].sub_criterias[menu.selectedSubCriteria].design_range.tfn_x[2]">
                    </td>
                    <td>
                      <input type="text" style="width: 50px" v-model="topic.criterias[menu.selectedCriteria].sub_criterias[menu.selectedSubCriteria].design_range.tfn_y[0]">
                    </td>
                    <td>
                      <input type="text" style="width: 50px" v-model="topic.criterias[menu.selectedCriteria].sub_criterias[menu.selectedSubCriteria].design_range.tfn_y[1]">
                    </td>
                    <td>
                      <input type="text" style="width: 50px" v-model="topic.criterias[menu.selectedCriteria].sub_criterias[menu.selectedSubCriteria].design_range.tfn_y[2]">
                    </td>
                    <td>
                      <textarea type="text" style="width: 300px" class="form-control" v-model="topic.criterias[menu.selectedCriteria].sub_criterias[menu.selectedSubCriteria].design_range.general_interpretation"></textarea>
                    </td>
                  </tr>
                </tbody>
              </table>
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
                  <tr v-if="topic.criterias[menu.selectedCriteria].sub_criterias.length == 0" v-for="(data,index) in topic.criterias[menu.selectedCriteria].system_range_grade" v-bind:key="index">
                    <td>{{data.symbol}}</td>
                    <td>
                      <textarea type="text" class="form-control" v-model="data.evaluation"></textarea>
                    </td>
                  </tr>
                  <tr v-if="topic.criterias[menu.selectedCriteria].sub_criterias.length > 0" v-for="(data,index) in topic.criterias[menu.selectedCriteria].sub_criterias[menu.selectedSubCriteria].system_range_grade" v-bind:key="index">
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
    <!-- ============================================================== -->
    <!-- End PAge Content -->
    <!-- ============================================================== -->
  </div>
</template>
<script>
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
      });
    },
    removeCriteria() {
      this.topic.criterias.splice(-1, 1);
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
      console.log(this.topic);
    },
    removeSystemRange() {},
    changedCriteria() {
      var selected = this.menu.selectedCriteria;
      var selectedSub = this.menu.selectedSubCriteria;
      var criteria = this.topic.criterias[selected];

      if (criteria.sub_criterias.length > 0) {
        this.performance = {
          performance_indicator:
            criteria.sub_criterias[selectedSub].performance_indicator,
          measurement_method:
            criteria.sub_criterias[selectedSub].measurement_method
        };
      }
    },
    addExpertCriteria() {
      var selected = this.menu.selectedCriteria;
      console.log("dipilih = " + selected);
      this.topic.criterias[selected].experts.push({
        description: "",
        weight: 0
      });
    },
    addExpertSubCriteria() {
      var selected = this.menu.selectedCriteria;
      var selected2 = this.menu.selectedSubCriteria;
      this.topic.criterias[selected].sub_criterias[selected2].experts.push({
        description: "",
        weight: 0
      });
    },
    removeExpertCriteria() {
      this.criterias[menu.selectedCriteria].experts.splice(-1, 1);
    }
  },
  created() {}
};
</script>
