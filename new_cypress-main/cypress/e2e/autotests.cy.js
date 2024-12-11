describe('Проверка знаний', function () {

    it('Позитивный ТЕСТ-КЕЙС', function () {
         cy.visit('https://login.qa.studio/');
         cy.get('#mail').type('german@dolnikov.ru')
         cy.get('#pass').type('iLoveqastudio1')
         cy.get('#loginButton').click()
         cy.get('#messageHeader').contains('Авторизация прошла успешно')
         cy.get('#messageHeader').should('be.visible')
         cy.get('#exitMessageButton > .exitIcon').should('be.visible')
     })
     it('Негативный(ошибка валидации)ТЕСТ-КЕЙС', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('germandolnikov.ru') // нет @ в логине(ошибка валидации)
        cy.get('#pass').type('iLoveqastudio1')
        cy.get('#loginButton').click()
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации')
        cy.get('#messageHeader').should('be.visible')
        cy.get('#exitMessageButton > .exitIcon').should('be.visible')
    })
    it('Негативный(неверный пароль)ТЕСТ-КЕЙС', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('german@dolnikov.ru') 
        cy.get('#pass').type('iLoveqastudio') // не верный пароль
        cy.get('#loginButton').click()
        cy.get('#messageHeader').contains('Такого логина или пароля нет')
        cy.get('#messageHeader').should('be.visible')
        cy.get('#exitMessageButton > .exitIcon').should('be.visible')
    })
    it('Негативный(неверный логин)ТЕСТ-КЕЙС', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('grman@dolnikov.ru') // не верный логин
        cy.get('#pass').type('iLoveqastudio') 
        cy.get('#loginButton').click()
        cy.get('#messageHeader').contains('Такого логина или пароля нет')
        cy.get('#messageHeader').should('be.visible')
        cy.get('#exitMessageButton > .exitIcon').should('be.visible')
    })
    it('ТЕСТ-КЕЙС кнопки "забыли пароль?"', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#forgotEmailButton').click()
        cy.get('#mailForgot').type('german@dolnikov.ru')
        cy.get('#restoreEmailButton').click()
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail')
        cy.get('#messageHeader').should('be.visible')
        cy.get('#exitMessageButton > .exitIcon').should('be.visible')
    })
    it('негативный ТЕСТ-КЕЙС кнопки "забыли пароль?"', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#forgotEmailButton').click()
        cy.get('#mailForgot').type('germandolnikov.ru') // нет @ в логине(ошибка валидации)
        cy.get('#restoreEmailButton').click()
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации')
        cy.get('#messageHeader').should('be.visible')
        cy.get('#exitMessageButton > .exitIcon').should('be.visible')
    })
    it('Позитивный ТЕСТ-КЕЙС с заглавными буквами', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('GerMan@Dolnikov.ru')
        cy.get('#pass').type('iLoveqastudio1')
        cy.get('#loginButton').click()
        cy.get('#messageHeader').contains('Авторизация прошла успешно')
        cy.get('#messageHeader').should('be.visible')
        cy.get('#exitMessageButton > .exitIcon').should('be.visible')
    })
 }) 