$(document).ready($.get("https://www.reddit.com/r/aww/.json")
	.done(function (responseBody) {
		for(var i=0; i<=10;i++) {
			var response =responseBody.data.children[i].data;
			var title = response.title;
			var author = response.author;
			var thumb = response.preview.images[0].resolutions[0].url;
			var site = "https://www.reddit.com" + response.permalink;

			var post = 
			`<div class="post">
			<img class="pull-left" src="${thumb}" width="80px" height="80px">

			<div class="pull-right assoc"></div>
			<div class="post-content pull-right">
				<a href="${site} "><h3>${title}<span class="author"></a> by ${author}</span></h3>
				<p></p>
			</div>
		</div>`;

		$("#posts").append(post);
		}
	}));