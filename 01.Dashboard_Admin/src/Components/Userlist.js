import React from 'react'

function Userlist() {
  return (
    <div class="col-md-6">
                {/* <!-- USERS LIST --> */}
                <div class="card">
                  <div class="card-header">
                    <h3 class="card-title">آخرین اعضا</h3>

                    <div class="card-tools">
                      <span class="badge badge-danger">8 پیام جدید</span>
                      <button type="button" class="btn btn-tool" data-widget="collapse"><i class="fa fa-minus"></i>
                      </button>
                      <button type="button" class="btn btn-tool" data-widget="remove"><i class="fa fa-times"></i>
                      </button>
                    </div>
                  </div>
                  {/* <!-- /.card-header --> */}
                  <div class="card-body p-0">
                    <ul class="users-list clearfix">
                      <li>
                        <img src="./img/user1-128x128.jpg" alt="User Image" />
                        <a class="users-list-name mt-2" href="#">حسام موسوی</a>
                        <span class="users-list-date">امروز</span>
                      </li>
                      <li>
                        <img src="./img/user8-128x128.jpg" alt="User Image" />
                        <a class="users-list-name mt-2" href="#">ایمان</a>
                        <span class="users-list-date">دیروز</span>
                      </li>
                      <li>
                        <img src="./img/user7-128x128.jpg" alt="User Image" />
                        <a class="users-list-name mt-2" href="#">فاطمه</a>
                        <span class="users-list-date">۱۷ اسفند</span>
                      </li>
                      <li>
                        <img src="./img/user6-128x128.jpg" alt="User Image" />
                        <a class="users-list-name mt-2" href="#">جان</a>
                        <span class="users-list-date">۱۴ اسفند</span>
                      </li>
                      <li>
                        <img src="./img/user2-160x160.jpg" alt="User Image" />
                        <a class="users-list-name mt-2" href="#">محمد</a>
                        <span class="users-list-date">۱۲ دی</span>
                      </li>
                      <li>
                        <img src="./img/user5-128x128.jpg" alt="User Image" />
                        <a class="users-list-name mt-2" href="#">سارا</a>
                        <span class="users-list-date">۱۲ دی</span>
                      </li>
                      <li>
                        <img src="./img/user4-128x128.jpg" alt="User Image" />
                        <a class="users-list-name mt-2" href="#">مریم</a>
                        <span class="users-list-date">۱۲ دی</span>
                      </li>
                      <li>
                        <img src="./img/user3-128x128.jpg" alt="User Image" />
                        <a class="users-list-name mt-2" href="#">نادیا</a>
                        <span class="users-list-date">۱۱ دی</span>
                      </li>
                    </ul>
                    {/* <!-- /.users-list --> */}
                  </div>
                  {/* <!-- /.card-body --> */}
                  <div class="card-footer text-center">
                    <a href="#">مشاهده همه کاربران</a>
                  </div>
                  {/* <!-- /.card-footer --> */}
                </div>
                {/* <!--/.card --> */}
              </div>
  )
}

export default Userlist