import React from "react";
// import WorldMap from "./WorldMap";
import MapChart from "./MapChart/MapChart";

function Reports() {
  return (

        <div class="card">
        <div class="card-header">
                <h3 class="card-title">بازدید هفته جاری</h3>

                <div class="card-tools">
                  <button type="button" class="btn btn-tool" data-widget="collapse">
                    <i class="fa fa-minus"></i>
                  </button>
                  <button type="button" class="btn btn-tool" data-widget="remove">
                    <i class="fa fa-times"></i>
                  </button>
                </div>
              </div>
              {/* <!-- /.card-header --> */}
              <div class="card-body p-0">
                <div class="d-md-flex">
                  <div class="p-1 flex-1" style={{overflow: "hidden"}}>
                    {/* <!-- Map will be created here --> */}
                    <MapChart />
                  </div>
                  <div class="card-pane-right bg-success  pt-2 pb-2 pl-4 pr-4">
                    <div class="description-block mb-4">
                      <div class="sparkbar pad" data-color="#fff"></div>
                      <h5 class="description-header mt-2">8390</h5>
                      <span class="description-text">بازدیدها</span>
                    </div>
                    {/* <!-- /.description-block --> */}
                    <div class="description-block mb-4">
                      <div class="sparkbar pad" data-color="#fff"></div>
                      <h5 class="description-header mt-2">30%</h5>
                      <span class="description-text">ارجاعات</span>
                    </div>
                    {/* <!-- /.description-block --> */}
                    <div class="description-block">
                      <div class="sparkbar pad" data-color="#fff"></div>
                      <h5 class="description-header mt-2">70%</h5>
                      <span class="description-text">یکتا</span>
                    </div>
                    {/* <!-- /.description-block --> */}
                  </div>
                </div>
              </div>
              {/* <!-- /.card-body --> */}
            </div>
  );
}

export default Reports;
