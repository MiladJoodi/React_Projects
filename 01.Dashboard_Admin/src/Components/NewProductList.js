import React from 'react'

function NewProductList() {
  return (
    // <!-- PRODUCT LIST -->
    <div class="card">
      <div class="card-header">
        <h3 class="card-title">محصولات تازه اضافه شده</h3>

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
        <ul class="products-list product-list-in-card pl-2 pr-2">
          <li class="item">
            <div class="product-img">
              <img src="./img/default-150x150.png" alt="Product Image" class="img-size-50" />
            </div>
            <div class="product-info">
              <a href="javascript:void(0)" class="product-title">تلویزیون سامسونگ
                <span class="badge badge-warning float-left">تومان 1800</span></a>
              <span class="product-description">
                سامسونگ ۳۲ اینچی، ال ای دی و سالم
              </span>
            </div>
          </li>
          {/* <!-- /.item --> */}
          <li class="item">
            <div class="product-img">
              <img src="./img/default-150x150.png" alt="Product Image" class="img-size-50" />
            </div>
            <div class="product-info">
              <a href="javascript:void(0)" class="product-title">دوچرخه
                <span class="badge badge-info float-left">تومان 700</span></a>
              <span class="product-description">
                 دوچرخه ۲۶، کاملا اسپورت و کوهستانی
              </span>
            </div>
          </li>
          {/* <!-- /.item --> */}
          <li class="item">
            <div class="product-img">
              <img src="./img/default-150x150.png" alt="Product Image" class="img-size-50" />
            </div>
            <div class="product-info">
              <a href="javascript:void(0)" class="product-title">
                ایکس‌ باکس <span class="badge badge-danger float-left">
                تومان 350
              </span>
              </a>
              <span class="product-description">
                کنسول ایکس باکس برای بازی های توپ و باحال
              </span>
            </div>
          </li>
          {/* <!-- /.item --> */}
          <li class="item">
            <div class="product-img">
              <img src="./img/default-150x150.png" alt="Product Image" class="img-size-50" />
            </div>
            <div class="product-info">
              <a href="javascript:void(0)" class="product-title">پلی استیشن 4
                <span class="badge badge-success float-left">$399</span></a>
              <span class="product-description">
                پلی استیشن ۴ با ۳۰۰ گیگ حافظه داخلی
              </span>
            </div>
          </li>
          {/* <!-- /.item --> */}
        </ul>
      </div>
      {/* <!-- /.card-body --> */}
      <div class="card-footer text-center">
        <a href="javascript:void(0)" class="uppercase">نمایش همه محصولات</a>
      </div>
      {/* <!-- /.card-footer --> */}
    </div>
  )
}

export default NewProductList