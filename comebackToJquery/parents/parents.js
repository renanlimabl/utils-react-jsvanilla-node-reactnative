$('#filmes thead th').each(function (i, e) {
  $(this).click(function () {
    $('td').removeClass('teste')
    $(this)
      .parents('thead')
      .siblings('tbody')
      .children('tr').each(function () {
        $(this).children(`td:eq(${i})`).addClass('teste')
      })
  })
})