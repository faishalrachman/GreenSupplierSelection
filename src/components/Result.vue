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
    <div class="row" style>
      <!-- Column -->
      <div class="col-md-12">
        <div class="card">
          <div class="card-block">
            <table
              class="table"
              style="text-align: center;overflow-x: scroll;display:block;width:100%"
            >
              <thead>
                <tr rowspan="2">
                  <th class="text-center" rowspan="2">Criteria/Sub Criteria</th>
                  <th
                    v-for="(data,index) in topic.criterias"
                    class="text-center"
                    v-bind:colspan="data.sub_criterias.length"
                    v-bind:key="index"
                  >{{data.symbol}}-{{data.criteria}}</th>
                </tr>
                <tr>
                  <th
                    v-for="(data,index) in loadSubCriteria()"
                    v-bind:key="index"
                    class="text-center"
                  >{{data.text}}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <input type="text" class="form-control" style="width:50px;">
                  </td>
                  <td
                    v-for="(data,index) in loadSubCriteria()"
                    v-bind:key="index"
                    class="text-center"
                  >{{data.fuzzy.ik}}</td>
                </tr>
                <tr>
                  <td>
                    <input type="text" class="form-control" style="width:50px;">
                  </td>
                  <td>
                    <input type="text" class="form-control" style="width:100px;">
                  </td>
                  <td>
                    <input type="text" class="form-control" style="width:100px;">
                  </td>
                  <td>
                    <input type="text" class="form-control" style="width:100px;">
                  </td>
                  <td>
                    <input type="text" class="form-control" style="width:100px;">
                  </td>
                  <td>
                    <input type="text" class="form-control" style="width:100px;">
                  </td>
                  <td>
                    <input type="text" class="form-control" style="width:100px;">
                  </td>
                </tr>
                <tr>
                  <td>
                    <input type="text" class="form-control" style="width:50px;">
                  </td>
                  <td>
                    <input type="text" class="form-control" style="width:100px;">
                  </td>
                  <td>
                    <input type="text" class="form-control" style="width:100px;">
                  </td>
                  <td>
                    <input type="text" class="form-control" style="width:100px;">
                  </td>
                  <td>
                    <input type="text" class="form-control" style="width:100px;">
                  </td>
                  <td>
                    <input type="text" class="form-control" style="width:100px;">
                  </td>
                  <td>
                    <input type="text" class="form-control" style="width:100px;">
                  </td>
                </tr>
                <tr>
                  <td>
                    <input type="text" class="form-control" style="width:50px;">
                  </td>
                  <td>
                    <input type="text" class="form-control" style="width:100px;">
                  </td>
                  <td>
                    <input type="text" class="form-control" style="width:100px;">
                  </td>
                  <td>
                    <input type="text" class="form-control" style="width:100px;">
                  </td>
                  <td>
                    <input type="text" class="form-control" style="width:100px;">
                  </td>
                  <td>
                    <input type="text" class="form-control" style="width:100px;">
                  </td>
                  <td>
                    <input type="text" class="form-control" style="width:100px;">
                  </td>
                </tr>
                <tr>
                  <td>
                    <input type="text" class="form-control" style="width:50px;">
                  </td>
                  <td>
                    <input type="text" class="form-control" style="width:100px;">
                  </td>
                  <td>
                    <input type="text" class="form-control" style="width:100px;">
                  </td>
                  <td>
                    <input type="text" class="form-control" style="width:100px;">
                  </td>
                  <td>
                    <input type="text" class="form-control" style="width:100px;">
                  </td>
                  <td>
                    <input type="text" class="form-control" style="width:100px;">
                  </td>
                  <td>
                    <input type="text" class="form-control" style="width:100px;">
                  </td>
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
import rumus from "../service/rumus";
import topic_model from "../service/topic";
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
      },
      result: []
    };
  },
  methods: {
    submit() {
      this.$session.set("topic", this.topic);
      console.log(this.topic);
      topic_model
        .setTopic(this.topic.topic_id, this.topic)
        .then(res =>
          this.$swal("Berhasil simpan", "Data berhasil tersimpan", "success")
        );
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
      console.log(b);
      if (this.topic.criterias[a].sub_criterias.length > 0) {
        console.log(this.topic.criterias[a].sub_criterias[b].sub_criteria);
        return this.topic.criterias[a].sub_criterias[b];
      } else {
        console.log(this.topic.criterias[a].criteria);
        return this.topic.criterias[a];
      }
    },
    loadSubCriteria() {
      var data = [];
      this.topic.criterias.forEach(criteria => {
        console.log(criteria)
        if (criteria.sub_criterias.length == 0) {
          data.push({
            length: 1,
            text: "",
            fuzzy: 0
          });
        } else {
          criteria.sub_criterias.forEach(sub_criteria => {
            data.push({
              length: 1,
              text: sub_criteria.symbol,
              fuzzy: 0
            })
          })
        }
      });
      return data;
    }
  },
  created() {
    console.log(this.topic.criterias[0].sub_criterias);
    var fuzzy = {
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
      ipy: [0, 1],
      system_area: 12312312312,
      common: 123123123,
      ik: 123123123
    };
    this.topic = this.$session.get("topic");
    this.topic.criterias.forEach(criteria => {
      if (criteria["sub_criterias"] == null) {
        criteria["sub_criterias"] = [];
      }
      if (criteria.sub_criterias.length == 0) {
        criteria["fuzzy"] = [];
        for (var i = 0; i < this.topic.alternatives.length; i++) {
          fuzzy.system_range_grade = rumus.aggregate_tfn(criteria.experts, i);
          fuzzy.design_range = criteria.design_range;
          fuzzy = rumus.intersection_point(fuzzy);
          criteria.fuzzy.push(fuzzy);
        }
      } else {
        criteria.sub_criterias.forEach(sub_criteria => {
          sub_criteria["fuzzy"] = [];
          for (var i = 0; i < this.topic.alternatives.length; i++) {
            fuzzy.system_range_grade = rumus.aggregate_tfn(
              sub_criteria.experts,
              i
            );
            fuzzy.design_range = sub_criteria.design_range;
            fuzzy = rumus.intersection_point(fuzzy);
            sub_criteria.fuzzy.push(fuzzy);
            topic_model.setTopic(this.topic.topic_id, this.topic);
          }
        });
      }
    });
  }
};
</script>