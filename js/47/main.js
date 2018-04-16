	$(function(){
		$(".content div").first().show();
		$(".lfbar div").click(function(){
			contshow($(this).index());
			$(".lfbar div").removeClass("cur");
			$(this).addClass("cur");
			
		});
	});
	
	function contshow(ind){
		$(".content div").each(function(index,ele){
			if(index==ind){
				if($(this).is(':visible')){
					return;
				}
				else
				{
				$(".content div").hide();
				$(this).show();
				return;
				}
			}
		});
	}