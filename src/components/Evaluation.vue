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
        <a href="newtopic.html" class="btn pull-right hidden-sm-down btn-success">
          <i class="fa fa-arrow-right" style="font-size:15pt"></i>
        </a>
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
            <div class="col-md-4">
              <label>Select Alternative</label>
                 <select class="form-control" v-model="menu.selectedAlternative">
                  <option>-</option>
                  <option v-for="(data,index) in topic.alternatives" v-bind:key="index" v-bind:value="index">{{data.symbol}}-{{data.alternative}}</option>
                </select>
                </div>
            <div class="col-md-12">
            <button v-print="'#printTable'" class="m-t-10 btn btn-primary pull-left">Print</button>
            <table id="printTable" class="table m-t-30" style="text-align: center;">
              <thead>
                <tr>
                  <th class="text-center">Criteria / Sub-Criteria</th>
                  <th class="text-center">Evaluation</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(criteria, index) in criterias" v-bind:key="index">
                  <td>
                    {{criteria.symbol}} - {{criteria.sub_criteria || criteria.criteria}}
                  </td>
                  <td>
                    {{criteria.experts[0].decision[menu.selectedAlternative].evaluation}}
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
      topic: {},
      evaluations: [],
      menu:{
        selectedAlternative: 0
      },
      criterias : []
    };
  },
  methods:{
    loadData(){

    }
  },
  created(){
    this.topic = this.$session.get("topic");
    for (var i in this.topic.criterias){
      var criteria = this.topic.criterias[i]
      if (criteria.sub_criterias.length > 0){
        for (var j in criteria.sub_criterias){
          var sub = criteria.sub_criterias[j]
          this.criterias.push(sub)
        }
      } else {
        this.criterias.push(criteria)
      }
    }
  }
}
</script>
