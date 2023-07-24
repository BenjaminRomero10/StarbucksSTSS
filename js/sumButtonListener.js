$(".navOption").on("click", function(event) {
    event.preventDefault();

    if (tableListView) {
      $("table").html(
        "<thead>" +
          "<tr>" +
            "<th>ID</th>" +
            "<th>Nombre</th>" +
            "<th>Ultimo Pedido</th>" +
            "<th>Fecha</th>" +
            "<th>Stock</th>" +
            "<th>Unidad Medida</th>" +
          "</tr>" +
        "</thead>" +
        "<tbody>" +
        "</tbody>"
      );

      var accion = $(this).data("accion");
    
      // Enviar una petición AJAX al archivo php con los datos
      $.ajax({
        url: "../php/tableUpdate.php",
        method: "POST",
        data: {accion: accion},
        dataType: "text",
        success: function(data) {
          // Recibir la respuesta del servidor y actualizar la tabla
          $("table tbody").empty();
          $("table tbody").append(data);
        }
      });

      tableListView = false;

    } else {
      var accion = $(this).data("accion");
    
      // Enviar una petición AJAX al archivo php con los datos
      $.ajax({
        url: "../php/tableUpdate.php",
        method: "POST",
        data: {accion: accion},
        dataType: "text",
        success: function(data) {
          // Recibir la respuesta del servidor y actualizar la tabla
          $("table tbody").empty();
          $("table tbody").append(data);
        }
      });
    }
   
  });