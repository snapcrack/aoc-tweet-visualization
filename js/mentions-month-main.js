function initMentionsMonth (mode, _container) {
    var container = '#' + _container + '_chart';
    var containerDomNode = document.getElementById(container.slice(1));
    var boundingRect = containerDomNode.getBoundingClientRect();
  
    var chart = Timeline()
      .currentMode(mode)
      .container(container)
      .svgWidth(boundingRect.width - 30)
      .mode('mentions')
      .svgHeight(400)
  
    // loading data from google sheets
    // loadSheet(sheetUrl)
<<<<<<< HEAD
    d3.csv('https://dl.dropboxusercontent.com/s/16g38eb5vapkox5/mention_df.csv?dl=1')
=======
    d3.csv('https://dl.dropboxusercontent.com/s/e7iq6wgfta3qrc3/mention_df_flattened.csv?dl=1')
>>>>>>> origin
      .then(response => {
        // var data = {
        //   mentions: response['mention_df'].elements
        // };
        var data = {
          mentions: response
        };
        containerDomNode.innerHTML = '';
        chart.data(data).render();
      }, (e) => {
        return alert("Error loading data!");
      })
      .catch((e) => {
        console.error(e)
        return alert("Something went wrong!");
      })
    window['chart_' + _container] = chart;
  }