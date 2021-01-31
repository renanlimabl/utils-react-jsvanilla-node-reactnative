/**
 * Attributes
 */

/**
 * .addClass()
 * Adiciona uma classe ao seletor que tem este método ex $('.exemplo').addClass('classe')
 */

/**
 * .hasClass()
 * Verifica se o elemento possui uma classe.
 * Ex:
 * $('teste').hasClass('classe') : true || false
 */

/**
 * .removeClass()
 * Remove uma classe ou mais de uma classe de um elemento
 * Ex:
 * $('teste').removeClass('classe1 classe2')
 */

/**
 * .toogleClass()
 * Adiciona ou remove uma classe, adiciona se não existir, e remove se existir!
 * ex:
 * $('teste').toggleClass('classe')
 */

/**
 * .html()
 * Pega o valor do html de um elemento ou seta um valor de um elemento, trocando o valor atual do elemento.
 * ex:
 * get: $('teste').html();
 * set: $('teste').html('<h1>oi</h1>')
 */

/**
 * .attr()
 * Pega o valor do primeiro elemento achado pelo seletor ou adiciona um atributo a cada elemento achado.
 * get: $('.exemplo').attr('class')
 *
 * set: $('img').attr('src', 'img/teste.jpg')
 * set: $('img').attr({
 *  src: 'img/teste.png',
 *  alt: 'Teste'
 * })
 */

/**
 * removeAttr()
 * Remove um atributo para cada elemento selecionado.
 * ex:
 * $('img').removeAttr('src')
 */

/**
 * .prop() : Boolean
 * Pega a propriedade do 1º elemento ou seta uma propriedade para cada elemento.
 * $('exemplo').prop('checked') // true || false
 *
 * bem parecido com o .is()
 * $('exemplo').is(':checked') // true || false
 */

/**
 * removeProp()
 * Remove uma prop para o conjunto de elementos selecionados.
 * $('exemplo').removeProp('checked')
 */

/**
 * .val()
 * Pega o valor do primeiro elemento selecionado ou seta um valor para cada elemento selecionado.
 * Exemplo:
 * $('exemplo').val()
 * $('exemplo').val('text')
 * $('exemplo').val((index, value) => {
 *   return value.trim()
 * })
 */

