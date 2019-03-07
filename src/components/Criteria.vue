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
                        <input type="text" style="min-width: 100%;" class="form-control col-md-6" v-model="data.criteria">
                      </td>
                      <td class="pull-right">
                        {{data.sub_criterias.length}}
                        <button class="btn btn-primary m-r-10 m-l-10" @click="removeSubCriteria(data)">-</button>
                        <button class="btn btn-primary" @click="addSubCriteria(data)">+</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div class="col-md-6">
                <h3 class="text-center">Sub Criteria</h3>
                <table class="table" style="text-align: center;" v-for="(data,index) in topic.criterias" v-bind:key="index" v-if="data.sub_criterias.length > 0">
                  <thead>
                    <tr>
                      <th class="text-center">{{data.symbol}}</th>
                      <th class="text-center">{{data.criteria}}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(subdata, subindex) in data.sub_criterias" v-bind:key="subindex">
                      <td>
                        <input type="text" class="form-control col-md-6" v-model="subdata.symbol">
                      </td>
                      <td>
                        <input type="text" style="min-width: 50%;" class="form-control col-md-6" v-model="subdata.sub_criteria">
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

    <div class="row">
      <div class="col-md-12">
        <div class="card">
          <div class="card-block judul">
            <div class="col-md-4 inijudul">
              <div class="form-group">
                <center>
                  <label class="col-md-4">Symbol Criteria</label>
                </center>
                <select name="lel" class="form-control m-t-30">
                  <option value="lel">C1- Kualitas</option>
                </select>
                <!-- <label class="col-md-5 m-t-30" style="margin-left: 32%">Symbol Sub-Criteria</label> -->
                <center>
                  <label class="col-md-6 m-t-30">Symbol Sub-Criteria</label>
                </center>
                <select name="lel" class="form-control m-b-30">
                  <option value="lel">C11 - Tingkat kesesuaian warna</option>
                  <option value="lel">lel</option>
                  <option value="lel">lel</option>
                  <option value="lel">lel</option>
                </select>
                <label class="col-md-5" style="margin-left: 30%">Performance Indicator</label>
                <br>
                <textarea class="form-control" name="indicator" id cols="20" rows="5"></textarea>
                <label class="col-md-5 m-t-30" style="margin-left: 30%">Measurement Method</label>
                <br>
                <textarea class="form-control" name="indicator" id cols="20" rows="5"></textarea>
                <br>
                <label class="col-md-5 m-t-30">Number of Expert</label>
                <input type="number" class="col-md-6 form-control">
                <br>
                <label class="col-md-5 m-t-30">Background of Expert</label>
                <select name="lel" class="form-control col-md-6">
                  <option value="lel">1</option>
                  <option value="lel">2</option>
                  <option value="lel">3</option>
                  <option value="lel">4</option>
                </select>
                <textarea class="form-control m-t-30 m-b-10" name="indicator" id cols="30" rows="5"></textarea>
                <br>
                <label class="col-md-5 m-t-30">Weight of Expert</label>
                <select name="lel" class="form-control col-md-2">
                  <option value="lel">1</option>
                  <option value="lel">2</option>
                  <option value="lel">3</option>
                  <option value="lel">4</option>
                </select>
                <input type="number" class="form-control col-md-3">
                <br>
              </div>
            </div>
            <div class="col-md-12 inijudul">
              <center>
                <label>System Range Grade</label>
              </center>
              <button class="btn btn-success pull-right">
                <i class="fa fa-plus"></i>
              </button>
              <table class="table" style="text-align: center;">
                <thead>
                  <tr>
                    <th class="text-center">Symbol of Assement</th>
                    <th class="text-center" colspan="3">TFN (ax,bx,cx)</th>
                    <th class="text-center" colspan="3">TFN (ay,by,cy)</th>
                    <th class="text-center">General Interpretation</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <input type="text" style="width: 50px">
                    </td>
                    <td>
                      <input type="text" style="width: 50px">
                    </td>
                    <td>
                      <input type="text" style="width: 50px">
                    </td>
                    <td>
                      <input type="text" style="width: 50px">
                    </td>
                    <td>
                      <input type="text" style="width: 50px">
                    </td>
                    <td>
                      <input type="text" style="width: 50px">
                    </td>
                    <td>
                      <input type="text" style="width: 50px">
                    </td>
                    <td colspan="2">
                      <textarea type="text" style="width: 300px" class="form-control"></textarea>
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
                    <th class="text-center">Symbol of Assement</th>
                    <th class="text-center" colspan="3">TFN (ax,bx,cx)</th>
                    <th class="text-center" colspan="3">TFN (ay,by,cy)</th>
                    <th class="text-center">General Interpretation</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <input type="text" style="width: 50px">
                    </td>
                    <td>
                      <input type="text" style="width: 50px">
                    </td>
                    <td>
                      <input type="text" style="width: 50px">
                    </td>
                    <td>
                      <input type="text" style="width: 50px">
                    </td>
                    <td>
                      <input type="text" style="width: 50px">
                    </td>
                    <td>
                      <input type="text" style="width: 50px">
                    </td>
                    <td>
                      <input type="text" style="width: 50px">
                    </td>

                    <td>
                      <textarea type="text" style="width: 300px" class="form-control"></textarea>
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
                  <tr>
                    <td>SAMA KAYA ATAS</td>
                    <td>
                      <textarea type="text" class="form-control"></textarea>
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
        num_alternatives: 1,
        alternatives: [],
        num_criteria: 1,
        criterias: []
      }
    };
  },
  methods:{
    addCriteria(){
      this.topic.criterias.push({
        symbol: "",
        criteria: "",
        sub_criterias:[]
      })
    },
    removeCriteria(){
      this.topic.criterias.splice(-1,1)
    },
    addSubCriteria(data){
      data.sub_criterias.push({
        symbol: data.symbol,
        sub_criteria: ""
      })
    },
    removeSubCriteria(data){
      data.sub_criterias.splice(-1,1)
    }
  },
  created(){

  }
};
</script>
