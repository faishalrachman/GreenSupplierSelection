<template>
  <div class="container-fluid">
    <!-- ============================================================== -->
    <!-- Bread crumb and right sidebar toggle -->
    <!-- ============================================================== -->
    <div class="row page-titles">
      <div class="col-md-6 col-8 align-self-center">
        <h3 class="text-themecolor m-b-0 m-t-0">Figure</h3>
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <a href="javascript:void(0)">Home</a>
          </li>
          <li class="breadcrumb-item active">Figure</li>
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
      <div class="col-md-12">
        <div class="card">
          <div class="card-block">
            <div class="col-md-6">
              <label>Criteria</label>
              <select class="form-control" v-model="menu.selectedCriteria">
                <option
                  v-for="(data,index) in topic.criterias"
                  v-bind:key="index"
                  v-bind:value="index"
                >{{data.symbol}} - {{data.criteria}}</option>
              </select>
              <div v-if="topic.criterias[menu.selectedCriteria].sub_criterias.length > 0">
                <label class="m-t-30">Sub-Criteria</label>
                <select class="form-control">
                  <option
                    v-for="(data,index) in topic.criterias[menu.selectedCriteria].sub_criterias"
                    v-bind:key="index"
                    v-bind:value="index"
                  >{{data.symbol}} - {{data.sub_criteria}}</option>
                </select>
              </div>
              <div v-if="topic.alternatives.length > 0">
                <label class="m-t-30">Alternative</label>
                <select class="form-control"
                v-model="menu.selectedAlternative">
                  <option
                    v-for="(alternative, index) in topic.alternatives"
                    v-bind:value="index"
                    v-bind:key="index"
                  >{{alternative.symbol}} - {{alternative.alternative}}</option>
                </select>
              </div>
            </div>

            <!-- Simbol criteria -->
            <div class="col-md-12 m-t-30 m-l-10">
              <button class="btn btn-primary" @click="intersection_point()">Show Figure</button>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-12" id="myFigure" style="display:none">
        <div class="card">
          <div class="card-block">
            <div class="col-md-12 text-center">
              <div class="col-md-5 d-inline-flex">
                <table class="table" style="text-align: center;">
                  <thead>
                    <tr>
                      <th class="text-center" colspan="7">System Range Grade</th>
                    </tr>
                    <tr>
                      <th class="text-center" colspan="3">ATFN (ax,bx,cx)</th>
                      <th class="text-center" colspan="3">ATFN (ay,by,cy)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{{this.fuzzy.system_range_grade.atfn_x[0]}}</td>
                      <td>{{this.fuzzy.system_range_grade.atfn_x[1]}}</td>
                      <td>{{this.fuzzy.system_range_grade.atfn_x[2]}}</td>
                      <td>{{this.fuzzy.system_range_grade.atfn_y[0]}}</td>
                      <td>{{this.fuzzy.system_range_grade.atfn_y[1]}}</td>
                      <td>{{this.fuzzy.system_range_grade.atfn_y[2]}}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div class="col-md-5 d-inline-flex">
                <table class="table" style="text-align: center;">
                  <thead>
                    <tr>
                      <th class="text-center" colspan="7">Design Range</th>
                    </tr>
                    <tr>
                      <th class="text-center">Symbol of Assement</th>
                      <th class="text-center" colspan="3">TFN (px,qx,rx)</th>
                      <th class="text-center" colspan="3">TFN (py,qy,ry)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{{this.fuzzy.design_range.symbol}}</td>
                      <td>{{this.fuzzy.design_range.tfn_x[0]}}</td>
                      <td>{{this.fuzzy.design_range.tfn_x[1]}}</td>
                      <td>{{this.fuzzy.design_range.tfn_x[2]}}</td>
                      <td>{{this.fuzzy.design_range.tfn_y[0]}}</td>
                      <td>{{this.fuzzy.design_range.tfn_y[1]}}</td>
                      <td>{{this.fuzzy.design_range.tfn_y[2]}}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div class="col-md-12">
              <div class="col-md-4 d-inline-flex">
                <table class="table" style="text-align: center;">
                  <thead>
                    <tr>
                      <th class="text-center" colspan="2">Intersecting Point</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>IP-1</td>
                      <td>
                        <p>{{this.fuzzy.ip[0]}}</p>
                      </td>
                    </tr>
                    <tr>
                      <td>IP-2</td>
                      <td>
                        <p>{{this.fuzzy.ip[1]}}</p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div class="col-md-4 d-inline-flex">
                <table class="table" style="text-align: center;">
                  <thead>
                    <tr>
                      <th colspan="2" class="text-center">Areas</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>System Area</td>
                      <td>
                        <p>{{this.fuzzy.system_area}}</p>
                      </td>
                    </tr>
                    <tr>
                      <td>Common</td>
                      <td>
                        <p>{{this.fuzzy.common}}</p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div class="col-md-3 d-inline-flex">
                <table class="table" style="text-align: center;">
                  <thead>
                    <tr>
                      <th class="text-center">Information Content (IK)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>= {{this.fuzzy.ik}}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div class="col-md-12">
              <div id="myDiv"></div>
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
import rumus from "../service/rumus";
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
        selectedSubCriteria: 0,
        selectedAlternative: 0,
      },
      fuzzy: {
        system_range_grade: {
          atfn_x: [4, 4.5, 5],
          atfn_y: [0, 1, 0]
        },
        design_range: {
          symbol: "ALAB",
          tfn_x: [2.5, 10, 10],
          tfn_y: [0, 1, 0]
        },
        area: {
          x: [4, 4.107, 4.84, 5],
          y: [0, 0.214, 0.32, 0]
        },
        ip: [1, 2],
        ipy: [0,1],
        system_area: 12312312312,
        common: 123123123,
        ik: 123123123
      }
    };
  },
  methods: {
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
    intersection_point() {
      $("#myFigure").show();
      this.fuzzy.system_range_grade = rumus.aggregate_tfn(this.experts(),this.menu.selectedAlternative)
      this.fuzzy.design_range = this.dataCriteria().design_range
      console.log(this.fuzzy.system_range_grade)
      this.fuzzy = rumus.intersection_point(this.fuzzy);
      console.log(this.fuzzy)
      var trace1 = {
        x: this.fuzzy.system_range_grade.atfn_x,
        y: this.fuzzy.system_range_grade.atfn_y,
        type: "scatter",
        name: "System Range"
      };

      var trace2 = {
        x: this.fuzzy.design_range.tfn_x,
        y: this.fuzzy.design_range.tfn_y,
        type: "scatter",
        name: "Design Range"
      };
      
      var trace3 = {
        x: this.fuzzy.area.x,
        y: this.fuzzy.area.y,
        type: "scatter",
        fill: "tozeroy",
        name: "Common Area"
      };

      var traces = [trace1, trace2, trace3];

      Plotly.newPlot("myDiv", traces);
    }
  },
  created() {
    // console.log(this.topic.criterias[0].sub_criterias);
    this.topic = this.$session.get("topic");
    this.topic.criterias.forEach(element => {
      if (element["sub_criterias"] == null) {
        element["sub_criterias"] = [];
      }
    });
    this.intersection_point();
  }
};
</script>