import React, { PureComponent, useEffect, useRef, useState } from 'react';
import { LineChart, Line } from 'recharts';
import Chart from './Chart';


export default function MonthlyReport() {

  const [monthlyReport, setMonthlyReport] = useState(true)

const monthly = useRef()


const hideMonthly = ()=>{
  monthly.current.style.height = "0";

setTimeout(() => {
  // document.getElementById('containers').style.height = 0
}, 1000);
  // let elHeight = document.getElementById('containers').clientHeight
  // if(!monthlyReport){
    // document.getElementById('containers').clientHeight = 0
  // }
  
  // monthly.current.clientHeight = 0
  // console.log(monthly.current.clientHeight)
  // elHeight= 0
  // console.log(monthly.current.height);
  // setTimeout(() => {
  //   setMonthlyReport(false)
  // }, 1000);
}


  return (
          <div className="col-md-12">
            <div className={`card ${!monthlyReport && 'd-none'}`} ref={monthly} id='containers'>
              <div className="card-header">
                <h5 className="card-title">گزارش ماهیانه</h5>

                <div className="card-tools">
                <button className="btn shadow-none " type="button" data-bs-toggle="collapse" data-bs-target="#MonthlyReport" aria-expanded="true" aria-controls="MonthlyReport">
                    <i className="fa fa-minus"></i>
                  </button>
                  <div className="btn-group">
                    <button type="button" className="btn btn-tool dropdown-toggle" data-toggle="dropdown">
                      <i className="fa fa-wrench"></i>
                    </button>
                    <div className="dropdown-menu dropdown-menu-left" role="menu">
                      <a href="#" className="dropdown-item">منو اول</a>
                      <a href="#" className="dropdown-item">منو دوم</a>
                      <a href="#" className="dropdown-item">منو سوم</a>
                      <a className="dropdown-divider"></a>
                      <a href="#" className="dropdown-item">لینک</a>
                    </div>
                  </div>
                  <button type="button" className="btn btn-tool" data-widget="remove">
                    <i className="fa fa-times" onClick={hideMonthly}></i>
                  </button>
                </div>
              </div>
              {/* <!-- /.card-header --> */}
              <div class="collapse show" id="MonthlyReport">
              <div className="card-body" >
                <div className="row">
                  <div className="col-md-8">
                    <p className="text-center">
                      <strong>فروش 28 دی 1402</strong>
                    </p>

                    <div className="chart">
                      {/* <!-- Sales Chart Canvas --> */}
                      <Chart />
                      {/* <canvas id="acquisitions" height="180" style={{height: "180px"}}></canvas> */}
                    </div>
                    {/* <!-- /.chart-responsive --> */}
                  </div>
                  {/* <!-- /.col --> */}
                  <div className="col-md-4">
                    <p className="text-center">
                      <strong>میزان پیشرفت اهداف</strong>
                    </p>

                    <div className="progress-group">
                      محصولات اضافه شده به سبد خرید
                      <span className="float-left"><b>160</b>/200</span>
                      <div className="progress progress-sm">
                        <div className="progress-bar bg-primary" style={{width: "80%"}}></div>
                      </div>
                    </div>
                    {/* <!-- /.progress-group --> */}

                    <div className="progress-group">
                      خرید انجام شده
                      <span className="float-left"><b>310</b>/400</span>
                      <div className="progress progress-sm">
                        <div className="progress-bar bg-danger" style={{width: "75%"}}></div>
                      </div>
                    </div>

                    {/* <!-- /.progress-group --> */}
                    <div className="progress-group">
                      <span className="progress-text">بازدید صفحات ویژه</span>
                      <span className="float-left"><b>480</b>/800</span>
                      <div className="progress progress-sm">
                        <div className="progress-bar bg-success" style={{width: "60%"}}></div>
                      </div>
                    </div>

                    {/* <!-- /.progress-group --> */}
                    <div className="progress-group">
                      سوالات ارسالی
                      <span className="float-left"><b>250</b>/500</span>
                      <div className="progress progress-sm">
                        <div className="progress-bar bg-warning" style={{width: "50%"}}></div>
                      </div>
                    </div>
                    {/* <!-- /.progress-group --> */}
                  </div>
                  {/* <!-- /.col --> */}
                </div>
                {/* <!-- /.row --> */}
              </div>
              </div>
              
              {/* <!-- ./card-body --> */}
              <div className="card-footer">
                <div className="row">
                  <div className="col-sm-3 col-6">
                    <div className="description-block border-right">
                      <span className="description-percentage text-success"><i className="fa fa-caret-up"></i> 17%</span>
                      <h5 className="description-header">تومان 35,210.43</h5>
                      <span className="description-text">کل گردش حساب</span>
                    </div>
                    {/* <!-- /.description-block --> */}
                  </div>
                  {/* <!-- /.col --> */}
                  <div className="col-sm-3 col-6">
                    <div className="description-block border-right">
                      <span className="description-percentage text-warning"><i className="fa fa-caret-left"></i> 0%</span>
                      <h5 className="description-header">تومان 10,390.90</h5>
                      <span className="description-text">فروش کل</span>
                    </div>
                    {/* <!-- /.description-block --> */}
                  </div>
                  {/* <!-- /.col --> */}
                  <div className="col-sm-3 col-6">
                    <div className="description-block border-right">
                      <span className="description-percentage text-success"><i className="fa fa-caret-up"></i> 20%</span>
                      <h5 className="description-header">تومان 24,813.53</h5>
                      <span className="description-text">سود کل</span>
                    </div>
                    {/* <!-- /.description-block --> */}
                  </div>
                  {/* <!-- /.col --> */}
                  <div className="col-sm-3 col-6">
                    <div className="description-block">
                      <span className="description-percentage text-danger"><i className="fa fa-caret-down"></i> 18%</span>
                      <h5 className="description-header">1200</h5>
                      <span className="description-text">اهداف</span>
                    </div>
                    {/* <!-- /.description-block --> */}
                  </div>
                </div>
                {/* <!-- /.row --> */}
              </div>
              {/* <!-- /.card-footer --> */}
            </div>
            {/* <!-- /.card --> */}
          </div>

  )
}
