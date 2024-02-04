// 현재 탭 정보 리턴 함수
const getCurrentTab = async () => {
  let queryOptions = { active: true, lastFocusedWindow: true };
  let [tab] = await chrome.tabs.query(queryOptions);

  return tab;
};

// 주 탭의 DOM을 수정하는 함수
const handleDOM = async (e) => {
  // 탬 정보 가져오기
  let tab = await getCurrentTab();

  // 체크
  if (e.target.checked) {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      func: function () {
        document.getElementsByClassName(
          "lg:grid-cols-sidebar-content"
        )[0].style["grid-template-columns"] = "auto";
        document.getElementsByClassName("lg:-mt-16")[0].style.display = "none";
        document.getElementsByTagName("nav")[2].style.display = "none";
        document.querySelector("main.min-w-0.isolate").style.display = "grid";
      },
    });
  }
  // 체크 해제
  else {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      func: function () {
        document.getElementsByClassName(
          "lg:grid-cols-sidebar-content"
        )[0].style["grid-template-columns"] = "";
        document.getElementsByClassName("lg:-mt-16")[0].style.display = "";
        document.getElementsByTagName("nav")[2].style.display = "";
        document.querySelector("main.min-w-0.isolate").style.display = "";
      },
    });
  }
};

// 이벤트 핸들러를 등록합니다.
document.addEventListener("DOMContentLoaded", () => {
  // 버튼 클릭 시 주 탭의 DOM을 수정하는 함수 호출
  document.getElementById("toggleView").addEventListener("change", handleDOM);
});
