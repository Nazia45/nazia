

function publications(){
    document.getElementById('Print-Button').style.display='none';
    document.getElementById('intro').style.display='none';
    document.getElementById('about').style.display='none';
    document.getElementById('publications').style.display='block';
    document.getElementById('projects').style.display='none';
  }
  function projects(){
    document.getElementById('Print-Button').style.display='none';
    document.getElementById('intro').style.display='none';
    document.getElementById('about').style.display='none';
    document.getElementById('publications').style.display='none';
    document.getElementById('projects').style.display='block';
  }
  // function home(){
  //   document.getElementById('intro').style.display='block';
  //   document.getElementById('about').style.display='block';
  //   document.getElementById('publications').style.display='none';
  //   document.getElementById('projects').style.display='none';
  // }
  
    async function printAllPages() {
      // Now that all content is loaded, trigger the print dialog
      document.getElementById('Print-Button').style.display='none';
      document.getElementById('about').style.display='block';
      document.getElementById('publications').style.display='block';
      document.getElementById('projects').style.display='block';
      window.print();
      if(true){
        document.getElementById('publications').style.display='none';
        document.getElementById('projects').style.display='none';
        document.getElementById('Print-Button').style.display='block';
      }
      else{
        document.getElementById('publications').style.display='none';
        document.getElementById('projects').style.display='none';
        document.getElementById('Print-Button').style.display='block';
      }
    }
  
  
    //------------------ Publications.html--------------------
        // Toggle publication descriptions
        document.querySelectorAll('.see-more').forEach(item => {
          item.addEventListener('click', event => {
            const description = event.target.nextElementSibling;
            if (description.style.display === 'block') {
              description.style.display = 'none';
              event.target.innerText = 'See more';
            } else {
              description.style.display = 'block';
              event.target.innerText = 'See less';
            }
          });
        });