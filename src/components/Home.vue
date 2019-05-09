<template>
  <div class="container-fluid">
    <div class="row page-titles">
      <div class="col-md-6 col-8 align-self-center">
        <h3 class="text-themecolor m-b-0 m-t-0">Dashboard</h3>
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <a href="javascript:void(0)">Home</a>
          </li>
          <li class="breadcrumb-item active">Dashboard</li>
        </ol>
      </div>
      <div class="col-md-6 col-4 align-self-center">
        <a href="new" class="btn pull-right hidden-sm-down btn-success">
          <i class="fa fa-plus" style="font-size:15pt">New Topic</i>
        </a>
      </div>
    </div>

    <div class="row">
      <div class="col-sm-3" v-for="(item, index) in topics" v-bind:key="index">
        <div class="card">
          <div class="card-block">
            <h4 class="card-title">{{index+1}} - {{item.topic_name}}</h4>
            <img
              src="https://cdn1-production-images-kly.akamaized.net/mOZUp43JdgTW79O38CXC1aCocBc=/640x360/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/1837441/original/048389900_1516342876-aswdFDEAGS.jpg"
              class="img-fluid"
            >
            <div class="text-right" style="margin-top: 10px">
              <button class="btn btn-primary" @click="moveTo(index)">Show Details</button>
              <button class="btn btn-success m-l-10" @click="duplicate(index)">Duplicate</button>
              <button class="btn btn-danger m-l-10" @click="deleteTopic(index)">Delete</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import topic_model from "../service/topic";
export default {
  data() {
    return {
      topics: []
    };
  },
  methods: {
    moveTo(index) {
      this.$session.set("topic", this.topics[index]);
      this.$window.location.href = "/alternative";
    },
    duplicate(index) {
      var topic = this.topics[index];
      // console.log(topic)
      topic_model.addTopic(topic).then(() => {
        this.$swal("Berhasil simpan", "Data berhasil tersimpan", "success");
        this.$router.go(0);
      });
    },
    deleteTopic(index){
      var topic = this.topics[index]
      this.$swal({
                title: "Are you sure?",
                text: "Apakah anda yakin akan menghapus "+topic.topic_name,
                icon: "warning",
                buttons: true,
                dangerMode: true,
                })
                .then((willDelete) => {
                if (willDelete) {
                  topic_model.deleteTopic(topic.topic_id).then(
                    ()=>{
                      this.$swal("Berhasil simpan", "Data berhasil tersimpan", "success");
                      this.$router.go(0)
                    }
                  )
                } else {
                    this.$swal("Silahkan simpan data anda terlebih dahulu sebelum keluar");
                }
                });
      console.log(topic.topic_id)
    }
  },
  created() {
    topic_model.getTopics().then(data => {
      this.topics = data;
      console.log(data);
    });
  }
};
</script>