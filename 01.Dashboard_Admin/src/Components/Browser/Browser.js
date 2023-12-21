import React from 'react'
import BrowserChart from "../../Components/Browser/BrowserChart";

function Browser() {
  return (
    <div class="card">
              <div class="card-header">
                <h3 class="card-title">مرورگر‌ها</h3>

                <div class="card-tools">
                  <button type="button" class="btn btn-tool" data-widget="collapse"><i class="fa fa-minus"></i>
                  </button>
                  <button type="button" class="btn btn-tool" data-widget="remove"><i class="fa fa-times"></i>
                  </button>
                </div>
              </div>
              {/* <!-- /.card-header --> */}
              <div class="card-body">
                <div class="row">
                  <div class="col-md-8">
                    <div class="chart-responsive">
                      <BrowserChart />
                    </div>
                    {/* <!-- ./chart-responsive --> */}
                  </div>
                  {/* <!-- /.col --> */}
                  <div class="col-md-4">
                    <ul class="chart-legend clearfix">
                      <li><i class="fa-regular fa-circle text-danger "></i> Chrome</li>
                      <li><i class="fa-regular fa-circle text-success"></i> IE</li>
                      <li><i class="fa-regular fa-circle text-warning"></i> FireFox</li>
                      <li><i class="fa-regular fa-circle text-info"></i> Safari</li>
                      <li><i class="fa-regular fa-circle text-primary"></i> Opera</li>
                      <li><i class="fa-regular fa-circle text-secondary"></i> دیگر</li>
                    </ul>
                  </div>
                  {/* <!-- /.col --> */}
                </div>
                {/* <!-- /.row --> */}
              </div>
              {/* <!-- /.card-body --> */}
              <div class="card-footer bg-white p-0">
                <ul class="nav nav-pills flex-column">
                  <li class="nav-item">
                    <a href="#" class="nav-link">
                      ایران
                      <span class="float-left text-danger">
                        <i class="fa fa-arrow-down text-sm"></i>
                        12%</span>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a href="#" class="nav-link">
                      انگلیس
                      <span class="float-left text-success">
                        <i class="fa fa-arrow-up text-sm"></i> 4%
                      </span>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a href="#" class="nav-link">
                      چین
                      <span class="float-left text-warning">
                        <i class="fa fa-arrow-left text-sm"></i> 0%
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
              {/* <!-- /.footer --> */}
            </div>
            // <!-- /.card -->
  )
}

export default Browser