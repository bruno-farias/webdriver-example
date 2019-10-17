const assert = require('assert')

describe('pagina usuarios', () => {
  it('Deve abrir o browser na tela de usuarios e cadastrar nome, email, salvar e validar campos', () => {

      browser.url('http://localhost:8080/usuarios')

      const title =  browser.getTitle()
      const nomeEsperado = 'Test'
      const emailEsperado = 'teste@gmail.com'

      const nome = $('#nome')
      const email = $('#email')
      const salvar = $('#nome')

      nome.setValue(nomeEsperado)
      email.setValue(emailEsperado)
      salvar.click();

      assert.strictEqual(title, 'Usuarios')
      assert.strictEqual(nome.getValue(), nomeEsperado)
      assert.strictEqual(email.getValue(), emailEsperado)
  })
})