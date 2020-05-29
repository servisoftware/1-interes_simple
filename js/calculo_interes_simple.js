$(function(){
	$("#calcular").click(function(){
		//calculo de interes simple
		var capital = parseInt($("#capital").val());
		var interes = parseFloat($("#interes").val())/100;
		var tiempo  = parseInt($("#tiempo").val());
		var beneficio = capital * interes * tiempo ;
		var total   = capital + beneficio;
		$("#beneficio").val(beneficio);
		$("#total").val(total);

	})
});
