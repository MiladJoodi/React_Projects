import React from 'react'

function QuickMenu() {
  return (
    <section className="content">
    <div className="container-fluid">
    {/* <!-- Info boxes --> */}
        <div className="row">
          <div className="col-12 col-sm-6 col-md-3">
            <div className="info-box">
              <span className="info-box-icon bg-info elevation-1"><i className="fa fa-gear"></i></span>

              <div className="info-box-content">
                <span className="info-box-text">ترافیک Cpu</span>
                <span className="info-box-number">
                  10
                  <small>%</small>
                </span>
              </div>
              {/* <!-- /.info-box-content --> */}
            </div>
            {/* <!-- /.info-box --> */}
          </div>
          {/* <!-- /.col --> */}
          <div className="col-12 col-sm-6 col-md-3">
            <div className="info-box mb-3">
              <span className="info-box-icon bg-danger elevation-1"><i className="fa fa-google-plus"></i></span>

              <div className="info-box-content">
                <span className="info-box-text">لایک‌ها</span>
                <span className="info-box-number">41,410</span>
              </div>
              {/* <!-- /.info-box-content --> */}
            </div>
            {/* <!-- /.info-box --> */}
          </div>
          {/* <!-- /.col --> */}

          <div className="col-12 col-sm-6 col-md-3">
            <div className="info-box mb-3">
              <span className="info-box-icon bg-success elevation-1"><i className="fa fa-shopping-cart"></i></span>

              <div className="info-box-content">
                <span className="info-box-text">فروش</span>
                <span className="info-box-number">760</span>
              </div>
              {/* <!-- /.info-box-content --> */}
            </div>
            {/* <!-- /.info-box --> */}
          </div>
          {/* <!-- /.col --> */}
          <div className="col-12 col-sm-6 col-md-3">
            <div className="info-box mb-3">
              <span className="info-box-icon bg-warning elevation-1"><i className="fa fa-users"></i></span>

              <div className="info-box-content">
                <span className="info-box-text">اعضای جدید</span>
                <span className="info-box-number">2,000</span>
              </div>
              {/* <!-- /.info-box-content --> */}
            </div>
            {/* <!-- /.info-box --> */}
          </div>
          {/* <!-- /.col --> */}
        </div>
        {/* <!-- /.row --> */}
        </div>
        </section>

  )
}

export default QuickMenu