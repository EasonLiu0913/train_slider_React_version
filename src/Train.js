import React, { useState } from "react"
import "./Train.css"

const Train = () => {
  // 設定一個 nowPage 變數
  const [nowPage, setNowPage] = useState(1)

  // 點擊上一頁、下一頁按鈕事件
  function handlePageBtnClicked(e) {
    // 先拿到現在的頁數，做成一個新變數
    let currentPage = nowPage

    // 判斷按鈕是上一頁、還是下一頁
    e.currentTarget.className === "page-right-area"
      ? currentPage++
      : currentPage--

    // 如果超過頁數，就要回到正確範圍
    currentPage = currentPage < 1 ? 5 : currentPage
    currentPage = currentPage > 5 ? 1 : currentPage

    // 設定目前正確的頁數到 nowPage 變數之中
    setNowPage(currentPage)
  }

  // 點擊下方提示目前頁數的 li 事件
  function handleSliderDotsClicked(e) {
    // console.log("e", e.target)

    // 取得索引值
    const index = [...e.target.parentElement.children].indexOf(e.target)

    // 修改目前頁面
    setNowPage(index + 1)
  }

  return (
    <div className="wrap">
      <ul
        className="train"
        style={{ transform: `translateX(${nowPage * -800}px)` }}
      >
        <li>
          <img src="./images/slide5.jpg" alt="" />
        </li>
        <li>
          <img src="./images/slide1.jpg" alt="" />
        </li>
        <li>
          <img src="./images/slide2.jpg" alt="" />
        </li>
        <li>
          <img src="./images/slide3.jpg" alt="" />
        </li>
        <li>
          <img src="./images/slide4.jpg" alt="" />
        </li>
        <li>
          <img src="./images/slide5.jpg" alt="" />
        </li>
        <li>
          <img src="./images/slide1.jpg" alt="" />
        </li>
      </ul>

      <ul className="slider-dots">
        <li
          className={nowPage === 1 ? "active" : ""}
          onClick={(e) => {
            handleSliderDotsClicked(e)
          }}
        ></li>
        <li
          className={nowPage === 2 ? "active" : ""}
          onClick={(e) => {
            handleSliderDotsClicked(e)
          }}
        ></li>
        <li
          className={nowPage === 3 ? "active" : ""}
          onClick={(e) => {
            handleSliderDotsClicked(e)
          }}
        ></li>
        <li
          className={nowPage === 4 ? "active" : ""}
          onClick={(e) => {
            handleSliderDotsClicked(e)
          }}
        ></li>
        <li
          className={nowPage === 5 ? "active" : ""}
          onClick={(e) => {
            handleSliderDotsClicked(e)
          }}
        ></li>
      </ul>

      <div className="page-left-area" onClick={(e) => handlePageBtnClicked(e)}>
        <button className="btn prevBtn">
          <i className="fa-solid fa-chevron-left"></i>
        </button>
      </div>
      <div
        className="page-right-area"
        onClick={(e) => {
          handlePageBtnClicked(e)
        }}
      >
        <button className="btn nextBtn">
          <i className="fa-solid fa-chevron-right"></i>
        </button>
      </div>
    </div>
  )
}

export default Train
