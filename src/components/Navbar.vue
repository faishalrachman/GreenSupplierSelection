<template>
    <aside class="left-sidebar">
            <!-- Sidebar scroll-->
            <div class="scroll-sidebar">
                <!-- Sidebar navigation-->
                <nav class="sidebar-nav">
                    <ul v-if="topic != null" id="sidebarnav">
                        <li class="text-center">
                            <button class="btn btn-primary" @click="logout">Back to Main Menu</button>
                        </li>

                        <li>
                            <!-- <a href="/" class="waves-effect"><i class="m-r-10" aria-hidden="true"></i>Dashboard</a> -->
                            <div class="m-t-10 alert alert-success text-center">Topic<br>{{topic.topic_name}}</div>
                        </li>
                        <li>
                            <a href="alternative" class="waves-effect"><i class="m-r-10" aria-hidden="true"></i>Alternative</a>
                        </li>
                        <li>
                            <a href="criteria" class="waves-effect"><i class="m-r-10" aria-hidden="true"></i>Criteria
                                and Sub-Criteria</a>
                        </li>
                        <li>
                            <a href="decision" class="waves-effect"><i class="m-r-10" aria-hidden="true"></i>Decision
                                Matrix</a>
                        </li>
                        <li>
                            <a href="figure" class="waves-effect"><i class="m-r-10" aria-hidden="true"></i>Figure</a>
                        </li>
                        <li>
                            <a href="result" class="waves-effect"><i class="m-r-10" aria-hidden="true"></i>Result</a>
                        </li>
                        <li>
                            <a href="evaluation" class="waves-effect"><i class="m-r-10" aria-hidden="true"></i>Evaluation</a>
                        </li>

                    </ul>
                    <ul v-if="topic == null" id="sidebarnav">
                        <li>
                            <a href="/" class="waves-effect"><i class="m-r-10" aria-hidden="true"></i>Dashboard</a>
                        </li>
                    </ul>
                </nav>
                <!-- End Sidebar navigation -->
            </div>
            <!-- End Sidebar scroll-->
        </aside>
</template>
<script>
import topic_model from '../service/topic'

export default {
    data(){
        return {
        }
    },
    methods:{
        logout(){
            this.$swal({
                title: "Are you sure?",
                text: "Apakah anda telah menyimpan data, data akan hilang apabila belum menekan tombol simpan",
                icon: "warning",
                buttons: true,
                dangerMode: true,
                })
                .then((willDelete) => {
                if (willDelete) {
                    this.$swal("Berhasil keluar", {
                    icon: "success",
                    });
                    this.$session.remove("topic")
                    this.$window.location.href = "../"
                } else {
                    this.$swal("Silahkan simpan data anda terlebih dahulu sebelum keluar");
                }
                });
        }
    },
    created(){
        this.topic = this.$session.get("topic"); 
    }
}
</script>