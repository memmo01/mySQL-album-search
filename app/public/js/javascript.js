for (i = 1949; i <= 2012; i++) {
    $("#startYear").append("<option>" + i + "</option");
    $("#endYear").append("<option>" + i + "</option");
}




$(".artist-submit").on("click", function() {
    var artistName = $(".artist").val().trim();

    sortInfo("artist", artistName)
})
$(".album-submit").on("click", function() {
    var albumName = $(".album").val().trim();

    sortInfo("album", albumName)
})

$(".year-submit").on("click", function() {
    var start = $("#startYear").val().trim();
    var end = $("#endYear").val().trim();

    sortInfo("year", start, end)
})
$(".rank-submit").on("click", function() {
    var position = $("#ranking").val();

    sortInfo("position", position)

})




function sortInfo(info, input, input2) {
    if (info === "year") {
        $.get("./api/" + info + "/" + input + "/" + input2).done(function(data) {
            displayInfo(data);
        });

    } else {
        $.get("./api/" + info + "/" + input).done(function(data) {
            displayInfo(data);

        })
    }

    function displayInfo(info) {
        $(".display").empty();
        var table = $("<table>");
        table.addClass("table")
        var row = "<tr><th>Ranking</th><th>artist</th><th>album</th><th>year</th><th>Albums sold</th></tr>";
        table.append(row);
        for (i = 0; i < info.length; i++) {
            var x = "<tr><td>" + info[i].position + "</td><td>" + info[i].artist + "</td><td>" + info[i].album + "</td><td>" + info[i].year + "</td><td>" + info[i].raw_total + "</td></tr>";
            table.append(x);
        }
        $(".display").append(table)
        console.log(info[0]);
    }

}