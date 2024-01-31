// 이벤트 핸들러를 등록합니다.
document.addEventListener('DOMContentLoaded', function() {
  // 버튼 클릭 시 주 탭의 DOM을 수정하는 함수 호출
  document.getElementById('toggleView').addEventListener('change', modifyTabDOM);
});

// 주 탭의 DOM을 수정하는 함수
function modifyTabDOM() {
  // 현재 활성화된 탭을 찾습니다.
  chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    if (this.checked) {
        // 주 탭에 스크립트를 주입하여 DOM을 수정합니다.
        chrome.scripting.executeScript(tabs[0].id, {
          code: `document.querySelector('.lg\\:-mt-16').style.display = 'none';
                    document.getElementsByTagName('nav')[2].style.display = 'none';
                    document.querySelector('main.min-w-0.isolate').style.display = 'grid';`,
        });
    } else {
        chrome.scripting.executeScript(tabs[0].id, {
          code: `document.querySelector('.lg\\:-mt-16').style.display = '';
                       document.getElementsByTagName('nav')[2].style.display = '';
                       document.querySelector('main.min-w-0.isolate').style.display = 'block';`,
        });
    }
   
  });
}

/**
 * // code: "1": Hide the sidebar
const sidebarLeft = document.querySelector('.lg\\:-mt-16'); 
if (sidebarLeft ) {
  sidebarLeft.style.display = 'none';
}
document.getElementsByTagName('nav')[2].style.display='none';

// main content bigger
const gridContainer = document.querySelector('main.min-w-0.isolate');
if (gridContainer) {
    gridContainer.style.display = 'grid';
    // gridContainer.style.gridTemplateColumns = '1fr';
}


// code: "2": show the sidebar
const sidebarLeft = document.querySelector('.lg\\:-mt-16'); 
if (sidebarLeft ) {
  sidebarLeft.style.display = '';
}
document.getElementsByTagName('nav')[2].style.display='';

// show the smaller
const gridContainer = document.querySelector('main.min-w-0.isolate');
if (gridContainer) {
    gridContainer.style.display = 'block';
    // gridContainer.style.gridTemplateColumns = '1fr';
}
 */
