/**
 * .bind() // fazer o apontamento a uma função, ex:
 *  function msg(e) {
 *    $('#msg').text('$(this).val()')/
 *  }
 *
 *  syntax mais legível:
 *  $(':text').keyup(msg).focus(msg).blur(msg);
 *
 *  syntax menos legível, porém menos codigo!
 *  $(':text').bind('keyup focus blur', msg);
 */

/**
 * .unbind()
 * podemos remover um evento de um elemento!
 * ex:
 * $(':text').unbind('keyup', msg); // assim desvinculamos o evento keyup.
 */

/**
 * .deletage()
 *
 * function msg(e) {
 *    $('#msg').text('$(this).val()')/
 *  }
 *  Por exemplo, temos o $(':text').bind('keyup focus blur', msg);
 *
 *  E criamos mais um input:
 *  $('fieldset').prepend('Outro: <input type="text" />')
 *
 *  E então nesse momento ele não tem as msm funções do $(':text')
 *
 *  Para a gente automatizar isso, utilziamos o delegate!:
 *  $('fieldset').delegate(':text', 'keyup', msg)
 */

/**
 * .trigger()
 * faz um ação automática. (forçar um disparo de uma função por ex.)
 *
 * $(':button').click(function (event, source, widthParam) {
 *  $('#img').append($(<img />)).attr('src', source).css("width", widthParam)
 * })
 *
 * $(':button').trigger('click', ["assets/teste.png", "90px"]);
 */