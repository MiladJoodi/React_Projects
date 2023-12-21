import React from 'react'

function LastestOrder() {
  return (
    <div class="card">
              <div class="card-header border-transparent">
                <h3 class="card-title">آخرین سفارشات</h3>

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
                <div class="table-responsive">
                  <table class="table m-0">
                    <thead>
                    <tr>
                      <th>ای دی محصول</th>
                      <th>محصول</th>
                      <th>وضعیت</th>
                      <th>محبوبیت</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                      <td><a href="pages/examples/invoice.html">OR۹۸۴۲</a></td>
                      <td>بازی ندای وظیفه ۱۰</td>
                      <td><span class="badge badge-success">ارسال شده</span></td>
                      <td>
                        <div class="sparkbar" data-color="#00a65a" data-height="20"><canvas width="34" height="20" style={{display :"inline-block", width: "34px", verticalAlign: "top", height: "20px"}}></canvas></div>
                      </td>
                    </tr>
                    <tr>
                      <td><a href="pages/examples/invoice.html">OR۱۸۴۸</a></td>
                      <td>تلویزیون هوشمند سامسونگ</td>
                      <td><span class="badge badge-warning">در حال پردازش</span></td>
                      <td>
                        <div class="sparkbar" data-color="#f39c12" data-height="20"><canvas width="34" height="20" style={{display :"inline-block", width: "34px", verticalAlign: "top", height: "20px"}}></canvas></div>
                      </td>
                    </tr>
                    <tr>
                      <td><a href="pages/examples/invoice.html">OR۷۴۲۹</a></td>
                      <td>آیفون X max</td>
                      <td><span class="badge badge-danger">تحویل داده شده</span></td>
                      <td>
                        <div class="sparkbar" data-color="#f56954" data-height="20"><canvas width="34" height="20" style={{display :"inline-block", width: "34px", verticalAlign: "top", height: "20px"}}></canvas></div>
                      </td>
                    </tr>
                    <tr>
                      <td><a href="pages/examples/invoice.html">OR۷۴۲۹</a></td>
                      <td>تلویزیون هوشمند سامسونگ</td>
                      <td><span class="badge badge-info">در انتظار</span></td>
                      <td>
                        <div class="sparkbar" data-color="#00c0ef" data-height="20"><canvas width="34" height="20" style={{display :"inline-block", width: "34px", verticalAlign: "top", height: "20px"}}></canvas></div>
                      </td>
                    </tr>
                    <tr>
                      <td><a href="pages/examples/invoice.html">OR۱۸۴۸</a></td>
                      <td>تلویزیون هوشمند سامسونگ</td>
                      <td><span class="badge badge-warning">در حال پردازش</span></td>
                      <td>
                        <div class="sparkbar" data-color="#f39c12" data-height="20"><canvas width="34" height="20" style={{display :"inline-block", width: "34px", verticalAlign: "top", height: "20px"}}></canvas></div>
                      </td>
                    </tr>
                    <tr>
                      <td><a href="pages/examples/invoice.html">OR۷۴۲۹</a></td>
                      <td>آیفون X max</td>
                      <td><span class="badge badge-danger">تحویل داده شده</span></td>
                      <td>
                        <div class="sparkbar" data-color="#f56954" data-height="20"><canvas width="34" height="20" style={{display :"inline-block", width: "34px", verticalAlign: "top", height: "20px"}}></canvas></div>
                      </td>
                    </tr>
                    <tr>
                      <td><a href="pages/examples/invoice.html">OR۹۸۴۲</a></td>
                      <td>بازی ندای وظیفه ۱۰</td>
                      <td><span class="badge badge-success">ارسال شده</span></td>
                      <td>
                        <div class="sparkbar" data-color="#00a65a" data-height="20"><canvas width="34" height="20" style={{display :"inline-block", width: "34px", verticalAlign: "top", height: "20px"}}></canvas></div>
                      </td>
                    </tr>
                    </tbody>
                  </table>
                </div>
                {/* <!-- /.table-responsive --> */}
              </div>
              {/* <!-- /.card-body --> */}
              <div class="card-footer clearfix">
                <a href="javascript:void(0)" class="btn btn-sm btn-info float-left">سفارش جدید</a>
                <a href="javascript:void(0)" class="btn btn-sm btn-secondary float-right">مشاهده همه سفار</a>
              </div>
              {/* <!-- /.card-footer --> */}
            </div>
  )
}

export default LastestOrder