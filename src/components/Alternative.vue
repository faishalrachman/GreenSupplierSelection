<template>
  <div class="container-fluid">
    <!-- ============================================================== -->
    <!-- Bread crumb and right sidebar toggle -->
    <!-- ============================================================== -->
    <div class="row page-titles">
      <div class="col-md-6 col-8 align-self-center">
        <h3 class="text-themecolor m-b-0 m-t-0">Alternative</h3>
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <a href="javascript:void(0)">Home</a>
          </li>
          <li class="breadcrumb-item active">Alternative</li>
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
      <div class="col-sm-12">
        <div class="card">
          <div class="card-block">
            <div class="form-group">
              <label class="col-md-2">Number of Alternative</label>
              <label class="col-md-1 text-center">{{topic.alternatives.length}}</label>
              <button class="btn btn-primary m-r-10 m-l-10" @click="removeAlternatives">-</button>
              <button class="btn btn-primary" @click="addAlternatives">+</button>
              <div class="col-md-12"></div>
            </div>
            <div class="table-responsive">
              <table class="table">
                <thead>
                  <tr>
                    <th>Symbol</th>
                    <th>Alternative</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(data, key) in topic.alternatives" v-bind:key="key">
                    <td>
                      <input type="text" class="form-control col-md-6" v-model="data.symbol" >
                    </td>
                    <td>
                      <input type="text" class="form-control col-md-6" v-model="data.alternative" >
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          <button @click="submit" class="btn btn-primary pull-right">Save</button>
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
import topic_model from "../service/topic";
export default {
  data() {
    return {
      topic: {
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
    addAlternatives(){
      this.topic.alternatives.push({
        symbol: "",
        alternative:""
      });
      console.log(this.topic)
    },
    removeAlternatives(){
      this.topic.alternatives.splice(-1,1);
    }
  },
  created() {
    this.topic = this.$session.get("topic")
    if (this.topic.alternatives == null){
      this.topic.alternatives = []
    }
  }
};
</script>