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
    <div class="row judul" style>
      <!-- Column -->
      <div class="col-md-10 inijudul">
        <div class="card">
          <div class="card-block">
            <table
              class="table"
              style="text-align: center;overflow-x: scroll;display:block;width:100%"
            >
              <thead>
                <tr rowspan="2">
                  <th class="text-center" rowspan="2">Criteria/Sub Criteria</th>
                  <th class="text-center" colspan="3">C1</th>
                  <th class="text-center" colspan="1">C2</th>
                </tr>
                <tr>
                  <th class="text-center" colspan="3">C11</th>
                </tr>
                <tr rowspan="1">
                  <th class="text-center">Expert</th>
                  <th class="text-center">1</th>
                  <th class="text-center">2</th>
                  <th class="text-center">3</th>
                  <th class="text-center">1</th>
                </tr>
              </thead>
              <tbody>
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
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div class="col-md-3 inijudul">
        <div class="card">
          <div class="card-block">
            <label>Criteria / Sub-Criteria</label>
            <select class="form-control">
              <option>C1</option>
              <option>C2</option>
              <option>C3</option>
              <option>C4</option>
              <option>C5</option>
            </select>
            <table class="table m-t-30" style="text-align: center;">
              <thead>
                <tr>
                  <th class="text-center">Symbol of Assessment</th>
                  <th class="text-center">General Interpretation</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>VL</td>
                  <td>Presentase kemiripan warna 60%-70%</td>
                </tr>
                <tr>
                  <td>L</td>
                  <td>Presentase kemiripan warna 60%-70%</td>
                </tr>
                <tr>
                  <td>M</td>
                  <td>Presentase kemiripan warna 60%-70%</td>
                </tr>
                <tr>
                  <td>H</td>
                  <td>Presentase kemiripan warna 60%-70%</td>
                </tr>
                <tr>
                  <td>VH</td>
                  <td>Presentase kemiripan warna 60%-70%</td>
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
