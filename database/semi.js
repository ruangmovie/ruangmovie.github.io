var data = [
    {
        "title": "Mang Kanor (2023)",
        "poster": "33d4847ffb7383cd124dc",
        "tahun": 2023,
        "link": "https://dood.yt/e/k578gshkj135",
        "kategori": "Filipina"
    },
        {
        "title": "Bela Luna (2023)",
        "poster": "7328313264c83bae1974a",
        "tahun": 2023,
        "link": "https://dood.yt/e/uzegvxskpesw",
        "kategori": "Filipina"
    },
    {
        "title": "Boso Dos (2023)",
        "poster": "960f688cb84d0e8c57fdf",
        "tahun": 2023,
        "link": "https://dood.yt/e/uy58k8p1bc7n",
        "kategori": "Filipina"
    },
    {
        "title": "Nightbird (2023)",
        "poster": "e8ad4e2a0e13e6813bfe5",
        "tahun": 2023,
        "link": "https://dood.yt/e/2ud03d65m4ra",
        "kategori": "Filipina"
    },
    {
        "title": "Tag-init (2023)",
        "poster": "21b5721c029e021a85cfa",
        "tahun": 2023,
        "link": "https://dood.yt/e/cazxm81lsy7a",
        "kategori": "Filipina"
    },
    {
        "title": "Panibugho (2023)",
        "poster": "0f4758641d926906f8041",
        "tahun": 2023,
        "link": "https://dood.yt/e/6j8ucnrvure7",
        "kategori": "Filipina"
    },
    {
        "title": "Lampas Langit (2022)",
        "poster": "5482e91fee47eed5027ea",
        "tahun": 2022,
        "link": "https://dood.re/e/a2xoua6obyrx",
        "kategori": "Semi"
    }
];

var videos = "",
	  kategories = "";
	  
for (var i = 0; i < data.length; i++) {
	var kategori = data[i].tahun,
		nama = data[i].title,
		link = data[i].limk,
		poster = data[i].poster;
	
	videos += "<div class='movie-card' data-kategori='" + kategori + "' data-nama='" + nama + "' data-streaming='" + link + "' data-poster='"+ poster +"'><a class='button-movie' data-bs-toggle='modal' data-bs-target='#player' data-obj='"+i+"'><div class='card' onclick='ads()'><img src='https://telegra.ph/file/"+ poster +".jpg' alt='" + nama + "' width='100%' style='aspect-ratio: 3/4;object-fit: cover;' class='card-img-top'><div class='card-body'><p class='card-title'><b>"+ nama +"</b></p></div></div></div>";
	
	if (kategories.indexOf("<option value='" + kategori + "'>" + kategori + "</option>") == -1) {
		kategories += "<option value='" + kategori + "'>" + kategori + "</option>";
	}
}

$("#list-movie").html(videos);
$(".filter-kategori").append(kategories);

var filtersObject = {};

$(".filter").on("change",function() {
	var filterName = $(this).data("filter"),
		filterVal = $(this).val();
	
	if (filterVal == "") {
		delete filtersObject[filterName];
	} else {
		filtersObject[filterName] = filterVal;
	}
	
	var filters = "";
	
	for (var key in filtersObject) {
	  	if (filtersObject.hasOwnProperty(key)) {
			filters += "[data-"+key+"='"+filtersObject[key]+"']";
	 	}
	}
	
	if (filters == "") {
		$(".movie-card").show();
	} else {
		$(".movie-card").hide();
		$(".movie-card").hide().filter(filters).show();
	}
});

$("#search-form").submit(function(e) {
	e.preventDefault();
	var query = $("#search-form input").val().toLowerCase();

	$(".movie-card").hide();
	window.scrollTo(0, 100);
	$(".movie-card").each(function() {
		var kategori = $(this).data("tahun").toLowerCase();

		if (kategori.indexOf(query) > -1) {
			$(this).show();
		}
	});
});

$(document).ready(function(){
  var list = $("#list-movie .movie-card");
  var numToShow = 30;
  var button = $("#movie-lainnya");
  var numInList = list.length;
  list.hide();
  if (numInList > numToShow) {
    button.show();
  }
  list.slice(0, numToShow).show();

  button.click(function(){
      var showing = list.filter(':visible').length;
      list.slice(showing - 1, showing + numToShow).fadeIn();
      var nowShowing = list.filter(':visible').length;
      if (nowShowing >= numInList) {
        button.hide();
      }
  });

});

var dataLength = data.length;
var thisElement = 0;

function innerContent(content){
  $(".inner-title-movie").html(data[content].title);
  $(".inner-poster-movie").attr("src",data[content].poster);
  $(".inner-link-streaming").attr("src",data[content].link);
  $(".inner-kategori-movie").html(data[content].kategori);
};

$(".button-movie").click(function(e){
  e.preventDefault();
  thisElement = $(this).attr("data-obj");
  innerContent(thisElement);
});