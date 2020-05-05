var margin = {top: 40, right :150, bottom: 60, left: 50},
        width = 800-margin.left-margin.right,
        height = 720-margin.top-margin.bottom;

var svg = d3.select("#chart")
    .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
    .append("g")
        .attr("transform","translate("+margin.left+","+margin.top+")");


var moviePromise = d3.csv("rotten.csv")
    var success = function(data)
    {
        console.log("Worked", data)
        var x = d3.scaleLinear()
    .domain([0, 600])
    .range([ 0, width ]);
  svg.append("g")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(x).ticks(3));

  
  svg.append("text")
      .attr("text-anchor", "end")
      .attr("x", width)
      .attr("y", height+50 )
      .text("Number of Reviews");

  
  var y = d3.scaleLinear()
    .domain([1920, 2020])
    .range([ height, 0]);
  svg.append("g")
    .call(d3.axisLeft(y)
             .tickFormat(d3.format("")));

  
  svg.append("text")
      .attr("text-anchor", "end")
      .attr("x", 0)
      .attr("y", -20 )
      .text("Year")
      .attr("text-anchor", "start")

  
  var z = d3.scaleSqrt()
    .domain([d3.min(data, function(d) { return d.Rating; }), 1])
    .range([2, 10]);
    

 
  var myColor = d3.scaleOrdinal()
    .domain(["Superhero", "Spy", "War", "Sci-Fi", "Thriller"])
    .range(d3.schemeSet1);


  

  
  var tooltip = d3.select("#chart")
    .append("div")
      .style("opacity", 0)
      .attr("class", "tooltip")
      .style("background-color", "black")
      .style("border-radius", "5px")
      .style("padding", "10px")
      .style("color", "white")

 
  var showTooltip = function(d) {
    tooltip
      .transition()
      .duration(200)
    tooltip
      .style("opacity", 1)
      .html("Rating: " + d.Rating*100+"%"+" "+d.Title)
      .style("left", (d3.mouse(this)[0]+30) + "px")
      .style("top", (d3.mouse(this)[1]+30) + "px")
  }
  var moveTooltip = function(d) {
    tooltip
      .style("left", (d3.mouse(this)[0]+30) + "px")
      .style("top", (d3.mouse(this)[1]+30) + "px")
  }
  var hideTooltip = function(d) {
    tooltip
      .transition()
      .duration(200)
      .style("opacity", 0)
  }


 

 
  var highlight = function(d){
   
    d3.selectAll(".bubbles").style("opacity", .05)
    
    d3.selectAll("."+d).style("opacity", 1)
  }

  
  var noHighlight = function(d){
    d3.selectAll(".bubbles").style("opacity", 1)
  }


  
  svg.append("g")
    .selectAll("dot")
    .data(data)
    .enter()
    .append("circle")
      .attr("class", function (d) { return "bubbles " + d.Genre })
      .attr("cx", function (d) { return x(d.Reviews); } )
      .attr("cy", function (d) { return y(d.Year); } )
      .attr("r", function (d) { return z(d.Rating); } )
      .style("fill", function (d) { return myColor(d.Genre); } )
    
    .on("mouseover", showTooltip )
    .on("mousemove", moveTooltip )
    .on("mouseleave", hideTooltip )
   


    

    // Add legend: circles
    var valuesToShow = [10000000, 100000000, 1000000000]
    var xCircle = 590
    var xLabel = 540
    
    // Add one dot in the legend for each name.
    var size = 20
    var allgroups = ["Superhero", "Spy", "War", "Sci-Fi", "Thriller"]
    svg.selectAll("myrect")
      .data(allgroups)
      .enter()
      .append("circle")
        .attr("cx", 590)
        .attr("cy", function(d,i){ return 10 + i*(size+5)})
        .attr("r", 7)
        .style("fill", function(d){ return myColor(d)})
        .on("mouseover", highlight)
        .on("mouseleave", noHighlight)

    // Add labels beside legend dots
    svg.selectAll("mylabels")
      .data(allgroups)
      .enter()
      .append("text")
        .attr("x", 590 + size*.8)
        .attr("y", function(d,i){ return i * (size + 5) + (size/2)}) 
        .style("fill", function(d){ return myColor(d)})
        .text(function(d){ return d})
        .attr("text-anchor", "left")
        .style("alignment-baseline", "middle")
        .on("mouseover", highlight)
        .on("mouseleave", noHighlight)
    }
    var fail = function(error)
        {
            console.log("Failed", error)
        }
    moviePromise.then(success, fail);
    
    
 
  