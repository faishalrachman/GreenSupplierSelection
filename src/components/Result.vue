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
            <button v-print="'#printTable'" class="btn btn-primary pull-left">Print</button>
            <table
            id="printTable"
              class="table"
              style="text-align: center;overflow-x: scroll;display:block;width:100%"
            >
              <thead>
                <tr>
                  <th class="text-center" v-bind:colspan="topic.alternatives.length+2">Alternative</th>
                </tr>
                <tr>
                  <th class="text-center">Criteria/Sub-Criteria</th>
                  <th
                    v-for="(data,index) in topic.alternatives"
                    v-bind:key="index"
                    class="text-center"
                  >{{data.symbol}}</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(data, index) in criterias" v-bind:key="index">
                  <td>{{data.symbol}}</td>
                  <td
                    v-for="(data2,index2) in data.fuzzy"
                    v-bind:key="index2"
                  >{{isNaN(data2.ik) ? "∞" : data2.ik.toFixed(3)}}</td>
                </tr>
                <tr>
                   <th class="text-center">Total</th>
                  <th class="text-center" v-for="(data,index) in sum" v-bind:key="index">{{isNaN(data) ? "∞" : data.toFixed(3)}}</th>
                </tr>
                <tr>
                  <th class="text-center">Ranking</th>
                  <th class="text-center" v-for="(data,index) in ranking" v-bind:key="index"><b>{{isNaN(data) ? "∞" : data.toFixed(0)}}</b></th>
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
      sum: [],
      ranking: [],
      nama: [],
      criterias: []
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
  },
  created() {
    console.log(this.topic.criterias[0].sub_criterias);
    this.topic = this.$session.get("topic");

    for (var i in this.topic.criterias) {
      var criteria = this.topic.criterias[i];
      if (criteria.sub_criterias.length > 0) {
        for (var j in criteria.sub_criterias) {
          var sub = criteria.sub_criterias[j];
          this.criterias.push(sub);
        }
      } else {
        this.criterias.push(criteria);
      }
    }
    
    for (var i = 0; i < this.topic.alternatives.length; i++) {
      this.sum.push(0);
      this.ranking.push(0);
    }

    for (var i in this.criterias) {
      var criteria = this.criterias[i];
      criteria['fuzzy'] = []
      for (var i = 0; i < this.topic.alternatives.length; i++) {
        var fuzzy = {
          system_range_grade: {
            atfn_x: [0, 0, 0],
            atfn_y: [0, 1, 0]
          },
          design_range: {
            symbol: "ALAB",
            tfn_x: [0, 0, 0],
            tfn_y: [0, 1, 0]
          },
          area: {
            x: [0, 0, 0, 0],
            y: [0, 0, 0, 0]
          },
          ip: [0, 0],
          ipy: [0, 0],
          system_area: 0,
          common: 0,
          ik: NaN
        }
          fuzzy.system_range_grade = rumus.aggregate_tfn(criteria.experts, i);
          fuzzy.design_range = criteria.design_range;
          fuzzy = rumus.intersection_point(fuzzy);
          criteria.fuzzy.push(fuzzy)
          this.sum[i] += fuzzy.ik
      }
    }
    var filtered = this.sum.slice(0)
    for (var i = 0; i<filtered.length;i++){
      if (isNaN(filtered[i])){
        filtered[i] = 99999999+i;
      }
    }

    var sorted = filtered.slice().sort(function(a,b){return a-b})
    this.ranking = filtered.slice().map(function(v){ return sorted.indexOf(v)+1 });
    

    // this.topic.criterias.forEach(criteria => {
    //   if (criteria["sub_criterias"] == null) {
    //     criteria["sub_criterias"] = [];
    //   }
    //   if (criteria.sub_criterias.length == 0) {
    //     criteria["fuzzy"] = [];
    //     for (var i = 0; i < this.topic.alternatives.length; i++) {
    //       fuzzy.system_range_grade = rumus.aggregate_tfn(criteria.experts, i);
    //       fuzzy.design_range = criteria.design_range;
    //       fuzzy = rumus.intersection_point(fuzzy);
    //       criteria.fuzzy.push(fuzzy);
    //     }
    //     this.nama.push(criteria.symbol)
    //     this.fuzzy.push(criteria.fuzzy)
    //   } else {
    //     criteria.sub_criterias.forEach(sub_criteria => {
    //       sub_criteria["fuzzy"] = [];
    //       for (var i = 0; i < this.topic.alternatives.length; i++) {
    //         fuzzy.system_range_grade = rumus.aggregate_tfn(
    //           sub_criteria.experts,
    //           i
    //         );
    //         fuzzy.design_range = sub_criteria.design_range;
    //         fuzzy = rumus.intersection_point(fuzzy);
    //         sub_criteria.fuzzy.push(fuzzy);
    //         topic_model.setTopic(this.topic.topic_id, this.topic);
    //       }
    //       this.nama.push(sub_criteria.symbol)
    //       this.fuzzy.push(sub_criteria.fuzzy)
    //     });
    //   }
    // });
  }
};
</script>