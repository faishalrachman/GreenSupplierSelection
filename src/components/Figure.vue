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
            <!-- Simbol criteria -->
            <div class="col-md-12">
              <label class="col-md-2">Alternative</label>
              <select class="form-control w-25">
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="opel">Opel</option>
                <option value="audi">Audi</option>
              </select>
            </div>
            <!-- Simbol criteria -->
            <div class="col-md-12 m-t-30">
              <label class="col-md-2">Criteria / Sub-criteria</label>
              <select class="form-control w-25">
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="opel">Opel</option>
                <option value="audi">Audi</option>
              </select>
            </div>
            <!-- Simbol criteria -->
            <div class="col-md-12 m-t-30 m-l-10">
              <button class="btn btn-primary" onclick="showFigure()">Show Figure</button>
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
                      <th class="text-center">Symbol of Assement</th>
                      <th class="text-center" colspan="3">TFN (ax,bx,cx)</th>
                      <th class="text-center" colspan="3">TFN (ay,by,cy)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>H</td>
                      <td>5</td>
                      <td>7.5</td>
                      <td>10</td>
                      <td>0</td>
                      <td>1</td>
                      <td>0</td>
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
                      <th class="text-center" colspan="3">TFN (ax,bx,cx)</th>
                      <th class="text-center" colspan="3">TFN (ay,by,cy)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>ALAB</td>
                      <td>7</td>
                      <td>10</td>
                      <td>10</td>
                      <td>0</td>
                      <td>1</td>
                      <td>0</td>
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
                      <td>X</td>
                      <td>
                        <input type="text" class="form-control">
                      </td>
                    </tr>
                    <tr>
                      <td>Y</td>
                      <td>
                        <input type="text" class="form-control">
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
                        <input type="text" class="form-control">
                      </td>
                    </tr>
                    <tr>
                      <td>Common</td>
                      <td>
                        <input type="text" class="form-control">
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
                      <td>= log2 (System Area / Common Area)</td>
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
