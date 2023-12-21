import React from 'react'

function InfoBox() {
  return (
    <React.Fragment>
        {/* // <!-- Info Boxes Style 2 --> */}
            <div class="info-box mb-3 bg-warning">
              <span class="info-box-icon"><i class="fa-regular fa-bookmark"></i></span>

              <div class="info-box-content">
                <span class="info-box-text">فهرست</span>
                <span class="info-box-number">5,200</span>
              </div>
              {/* <!-- /.info-box-content --> */}
            </div>
            {/* // <!-- /.info-box --> */}
            <div class="info-box mb-3 bg-success">
              <span class="info-box-icon"><i class="fa-regular fa-heart"></i></span>

              <div class="info-box-content">
                <span class="info-box-text">برگزیده‌ها</span>
                <span class="info-box-number">92,050</span>
              </div>
              {/* <!-- /.info-box-content --> */}
            </div>
            {/* // <!-- /.info-box --> */}
            <div class="info-box mb-3 bg-danger">
              <span class="info-box-icon"><i class="fa-regular fa-circle-down"></i></span>

              <div class="info-box-content">
                <span class="info-box-text">دانلود</span>
                <span class="info-box-number">114,381</span>
              </div>
              {/* <!-- /.info-box-content --> */}
            </div>
            {/* // <!-- /.info-box --> */}
            <div class="info-box mb-3 bg-info">
              <span class="info-box-icon"><i class="fa-regular fa-comment"></i></span>

              <div class="info-box-content">
                <span class="info-box-text">پیام مستقیم</span>
                <span class="info-box-number">163,921</span>
              </div>
              {/* <!-- /.info-box-content --> */}
            </div>
            {/* // <!-- /.info-box --> */}
    </React.Fragment>
  )
}

export default InfoBox