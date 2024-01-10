/**
* ---------------------------------------------------------------------------------
* | 팝업 |
* ---------------------------------------------------------------------------------
**/
document.addEventListener('DOMContentLoaded', () => {
    var toggleView = document.getElementById('toggleView');

    toggleView.addEventListener('change', function () {
        if (this.checked) {
            // When checked, hide the sidebar and make main content larger
            chrome.tabs.executeScript({
                code: `document.querySelector('.lg\\:-mt-16').style.display = 'none';
                       document.getElementsByTagName('nav')[2].style.display = 'none';
                       document.querySelector('main.min-w-0.isolate').style.display = 'grid';`
            });
        } else {
            // When not checked, show the sidebar and return main content to original size
            chrome.tabs.executeScript({
                code: `document.querySelector('.lg\\:-mt-16').style.display = '';
                       document.getElementsByTagName('nav')[2].style.display = '';
                       document.querySelector('main.min-w-0.isolate').style.display = 'block';`
            });
        }
    });
});


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
